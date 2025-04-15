import React, { useEffect } from "react";
import projectOverview from "../assets/project-overview.jpg";
import sprint2_3 from "../assets/datapreprocessing-eda-model.png";
import sprint4_5 from "../assets/development-sprint.png";
import sprint6 from "../assets/animated-product.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  
  return (
    <div id="about" className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl font-semibold mb-2">ABOUT</h2>
        <p className="text-gray-600">
          Our team collaborates in sprints, efficiently tackling project tasks
          to deliver innovative and impactful solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-10">
        {/* Sprint 1 */}
        <div className="text-justify px-4" data-aos="fade-right">
          <h3 className="text-base md:text-lg">
            In <b>first sprint</b>, we define project goals, analyze existing
            solutions, and outline requirements. Using Flask, React, MySQL, and
            machine learning models like XGBoost, we aim to build a robust
            property price prediction system.
          </h3>
        </div>
        <div className="flex justify-center" data-aos="fade-left">
          <img
            src={projectOverview}
            alt="Sprint1"
            className="w-full max-w-md shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Sprint 2 & 3 */}
        <div className="flex justify-center" data-aos="fade-right">
          <img
            src={sprint2_3}
            alt="Sprint2_3"
            className="w-full max-w-md shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="text-justify px-4" data-aos="fade-left">
          <h3 className="text-base md:text-lg">
            In <b>Sprint 2</b>, we collect data from open-source datasets and
            preprocess it using Python libraries and dependencies. In{" "}
            <b>Sprint 3</b>, we train and evaluate ML models like XGBoost and
            Linear Regression for optimal performance.
          </h3>
        </div>

        {/* Sprint 4 & 5 */}
        <div className="text-justify px-4" data-aos="fade-right">
          <h3 className="text-base md:text-lg">
            In <b>Sprint 4</b>, we focus on backend development with Flask,
            setting up the app, creating API endpoints, integrating the model,
            and connecting to the MySQL database. We also conduct API testing
            and performance optimization. In <b>Sprint 5</b>, we develop the
            frontend with React, creating a property price prediction form,
            visualizing predictions, and integrating the backend with React via
            API calls for dynamic data visualization.
          </h3>
        </div>
        <div className="flex justify-center" data-aos="fade-left">
          <img
            src={sprint4_5}
            alt="Sprint4_5"
            className="w-full max-w-md shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Final Product and Evaluation */}
        <div className="flex justify-center" data-aos="fade-right">
          <img
            src={sprint6}
            alt="Sprint6"
            className="w-full max-w-md shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="text-justify px-4" data-aos="fade-left">
          <h3 className="text-base md:text-lg">
            In <b>Sprint 6</b>, we focus on deploying the backend and frontend on cloud platforms like AWS, GCP, or Heroku for the backend, and Netlify or Vercel for the frontend. We also deploy the MySQL database to the cloud, finalize the project with thorough documentation, testing, and debugging, and outline future enhancements for the system.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
