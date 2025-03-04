import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from "aos"
import "aos/dist/aos.css";  

const Team = () => {
  // aos start
  useEffect(() => {
      AOS.init({
        duration: 1500,
        once: false,
      });
    }, [])
    // aos end
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    fetch("/src/data/teamData.json")
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.error("Error loading team data:", error));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedMember(null); // Close the modal when Esc is pressed
      }
    };

    // Attach the event listener when the modal is open
    if (selectedMember) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // Clean up the event listener when the modal is closed or unmounted
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const renderMemberCard = (member) => (
    <div
      key={member.id}
      className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-black cursor-pointer"
      onClick={() => openModal(member)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="h-24 w-24 mx-auto mb-4 rounded object-cover"
        data-aos="fade-up"
      />
      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className="text-gray-500 mb-4">{member.position}</p>
      <div className="flex justify-center gap-4 mt-4">
        <a
          href={member.github}
          className="text-gray-600 hover:text-black transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href={member.linkedin}
          className="text-gray-600 hover:text-red-500 transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );

  return (
    <div id="team" className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl font-semibold mb-2">TEAM</h2>
        <p className="text-gray-600">
          We are a dynamic team of five professionals united by passion and purpose.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {teamMembers.slice(0, 3).map(renderMemberCard)}
      </div>
      <div className="grid gap-6 lg:grid-cols-2 sm:grid-cols-1 mt-6">
        {teamMembers.slice(3).map(renderMemberCard)}
      </div>

      {/* Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal} // Close the modal if the background is clicked
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent click propagation to the background
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={closeModal}
            >
              ✖
            </button>
            <h3 className="text-xl font-semibold text-center">{selectedMember.name}</h3>
            <p className="text-gray-500 text-center">{selectedMember.position}</p>
            <p className="text-gray-700 mt-4 text-left">{selectedMember.bio}</p>
            {/* CV Button */}
            {/* <div className="flex justify-left mt-4">
              <a
                href={selectedMember.cv} // Link to the CV file
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security enhancement
                className="bg-black text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300 hover:bg-white hover:text-black hover:shadow-black"
              >
                View CV
              </a>
            </div> */}
            <div className="flex justify-center gap-4 mt-6">
              <a
                href={selectedMember.github}
                className="text-gray-600 hover:text-black transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={selectedMember.linkedin}
                className="text-gray-600 hover:text-red-500 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
