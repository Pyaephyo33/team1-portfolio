import { Carousel } from 'flowbite-react'
import React from 'react'
import banner1 from '../assets/agile_team.jpg'
import banner2 from '../assets/banner2.png'

const Home = () => {
  return (
    <div className='bg-neutralSilver'>
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
            <Carousel className='w-full mx-auto'>
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Content Section */}
                    <div className="md:w-1/2 md:ps-16">
                        <h1 className="text-4xl font-semibold mb-4 text-neutralDGrey leading-snug uppercase">Collaborating is the <span className="text-brandPrimary">KEY</span>
                        </h1>
                        <p className="text-neutralGrey text-base mb-8">
                            Bringing ideas together to achieve project goals—where teamwork meets innovation.
                        </p>
                    </div>
                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img src={banner1} alt="Banner" className="w-full h-auto m-auto shadow-lg" />
                    </div>
                </div>

                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Content Section */}
                    <div className="md:w-1/2 md:ps-16">
                        <h1 className="text-4xl font-semibold mb-4 text-neutralDGrey leading-snug uppercase">UNITING <span className="text-brandPrimary">MINDS</span> MINDS, <span className="text-brandPrimary">ACHIEVING GOALS</span>
                        </h1>
                        <p className="text-neutralGrey text-base mb-8">
                            By combining our strengths, we turn challenges into opportunities.
                        </p>
                    </div>
                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img src={banner2} alt="Banner" className="w-3/4 m-auto h-auto shadow-lg" />
                    </div>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Home
