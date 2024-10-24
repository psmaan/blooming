import React, { useState } from 'react';
import Header from './../Components/Header';
import ThreeDVisual from './../Components/Service3D';
import arrow from './../assets/images/arrow.png';

const ServicesPage = () => {
    // State to control accordion open/close state
    const [isBrandingOpen, setIsBrandingOpen] = useState(false);
    const [isSeoOpen, setIsSeoOpen] = useState(false);

    // Toggle function to handle accordion state for Branding
    const toggleBrandingAccordion = () => {
        setIsBrandingOpen(!isBrandingOpen);
    };

    // Toggle function to handle accordion state for SEO
    const toggleSeoAccordion = () => {
        setIsSeoOpen(!isSeoOpen);
    };

    return (
        <div className='w-screen bg-black'>
            <div className='w-full py-8'>
                <Header />
            </div>
            <div className='w-full absolute flex justify-center bg-red-200 -top-[340px]'>
                <ThreeDVisual />
            </div>
            <h1 className='text-[200px] text-[#B2FF02] mt-[180px] z-50 font-[recoleta] text-center w-full'>Services.</h1>

            {/* Branding Accordion Header */}
            <div className='w-full px-[120px] flex justify-between items-start mt-20 py-12'>
                <h1 className='text-6xl text-[#B2FF02] z-50 font-[recoleta] text-center'>Branding.</h1>
                <div className='w-[550px]'>
                    <h1 className='text-[#7a7a7a]'>Our Branding services define and develop a unique identity for your business, ensuring it stands out and resonates with your audience. Let us help you create a lasting impression.</h1>
                    <h1 className='text-4xl font-[recoleta] mt-12 text-white'>Learn More</h1>
                </div>
                <div onClick={toggleBrandingAccordion} className='cursor-pointer'>
                    <img
                        className={`w-20 transform transition-transform duration-300 ${isBrandingOpen ? 'rotate-180' : 'rotate-0'}`}
                        src={arrow}
                        alt="Arrow"
                    />
                </div>
            </div>

            {/* Branding Accordion Content - Hidden until isBrandingOpen is true */}
            <div className={`w-full px-[120px] flex justify-between items-start py-8 accordion-content ${isBrandingOpen ? 'accordion-content-open' : ''}`}>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta] text-center'>Strategy</h1>
                    <ul className='list-outside list-disc ml-8 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Competitive Analysis</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Brand Archetypes</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Positioning</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta] text-center'>Message</h1>
                    <ul className='list-outside list-disc ml-8 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Tone of Voice</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Key Messages</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Tagline</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta] text-center'>Visual</h1>
                    <ul className='list-outside list-disc ml-8 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Brand Book Analysis</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Style Guides</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Packaging</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='w-full flex justify-center my-4'>
                <div className='w-[80%] h-[3px] bg-[#808080] rounded-full'>

                </div>
            </div>

            {/* SEO Accordion Header */}
            <div className='w-full px-[120px] flex justify-between items-start mt-20 py-12'>
                <h1 className='text-6xl text-[#B2FF02] z-50 font-[recoleta] text-center'>SEO.</h1>
                <div className='w-[550px]'>
                    <h1 className='text-[#7a7a7a]'>Boost your online visibility through content optimization, high-quality backlinks, and technical improvements, driving targeted traffic and higher search rankings.</h1>
                    <h1 className='text-4xl font-[recoleta] mt-12 text-white'>Learn More</h1>
                </div>
                <div onClick={toggleSeoAccordion} className='cursor-pointer'>
                    <img
                        className={`w-20 transform transition-transform duration-300 ${isSeoOpen ? 'rotate-180' : 'rotate-0'}`}
                        src={arrow}
                        alt="Arrow"
                    />
                </div>
            </div>




            {/* SEO Accordion Content - Hidden until isSeoOpen is true */}
            <div className={`w-full px-[120px] flex justify-between items-start py-8 accordion-content ${isSeoOpen ? 'accordion-content-open' : ''}`}>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta] text-center'>Content</h1>
                    <ul className='list-outside list-disc ml-8 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Keyword Research</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Structuring</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Audits</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta] text-center'>Link Building</h1>
                    <ul className='list-outside list-disc ml-8 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Guest Blogging</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Competitor Analysis</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Social Media Outreach</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta] text-center'>Accessibility</h1>
                    <ul className='list-outside list-disc ml-8 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Cache Management</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Image Optimization</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Speed Optimization</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Error Monitoring</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
