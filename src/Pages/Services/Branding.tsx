import { useState } from 'react';

import Header from './../../Components/Header';
import ThreeDVisual from './Service3D';

import arrow from './../../assets/images/arrow.png';
import logo from './../../assets/images/bloominglogo.png';
import proj1 from './../../assets/images/proj1.png';
import proj2 from './../../assets/images/proj2.png';
import proj3 from './../../assets/images/proj3.png';
import proj4 from './../../assets/images/proj4.png';

const Branding: React.FC = () => {

    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [projectFocus, setProjectFocus] = useState(false);


    return (
        <div className='w-screen bg-black overflow-hidden flex flex-col items-start'>
            <div className='w-full p-8'>
                <Header />
            </div>
            <div className=' w-full flex overflow-hidden'>
                <div className='w-[60%] ml-auto overflow-hidden'>
                    <ThreeDVisual />
                </div>
                <div className='absolute pl-40 mt-20 flex flex-col items-start'>
                    <h1 className='font-[recoleta] text-[220px] text-[#B2FF02]'>Branding.</h1>
                    <h1 className='font-[recoleta] text-[52px] text-[#818180] w-[678px]'>Shape your story into a compelling brand that stands out and creates lasting impact.</h1>

                    <div className='flex items-center justify-start mt-20'>
                        <h1 className='font-[recoleta] text-[40px] text-white'>Strategy</h1>
                        <div className='h-[2px] w-[40px] bg-[#B2FF02] ml-[36px]'></div>
                    </div>
                    <div className='flex items-center justify-start mt-8'>
                        <h1 className='font-[recoleta] text-[40px] text-white'>Message</h1>
                        <div className='h-[2px] w-[40px] bg-[#B2FF02] ml-[36px]'></div>
                    </div>
                    <div className='flex items-center justify-start mt-8'>
                        <h1 className='font-[recoleta] text-[40px] text-white'>Visual</h1>
                        <div className='h-[2px] w-[40px] bg-[#B2FF02] ml-[36px]'></div>
                    </div>
                </div>

            </div>

            {/*Slider for Strategy */}
            <div className="w-full mt-[500px] relative overflow-hidden">
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <span className="text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Strategy</span>
                        </div>
                        <div className="slide">
                            <span className="text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Strategy</span>
                        </div>


                        {/* Repeat the slides to ensure infinite scrolling */}
                        <div className="slide">
                            <span className="text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Strategy</span>
                        </div>
                        <div className="slide">
                            <span className="text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Strategy</span>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
            </div>

            <div className='mt-40 flex flex-col mx-auto'>
                <div className='flex items-start'>
                    <div className='mr-40'>
                        <ul className='list-outside list-disc  ml-2 text-white'>
                            <li className=' text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Competitive Analysis</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Brand Archetypes</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Positioning</span>
                            </li>
                        </ul>
                    </div>
                    <div className='w-[814px] text-white text-[22px]'>
                        We specialize in crafting a distinct and memorable identity for your brand, ensuring it stands out in a competitive market. Our approach begins with a deep understanding of your industry and audience, allowing us to develop a unique brand persona that resonates on all levels. We then focus on strategically placing your brand in the minds of your target customers, creating a powerful and lasting connection that drives loyalty and recognition. By positioning your brand effectively, we help you establish a strong market presence that leads to long-term success.
                    </div>
                </div>
                <div className='w-full h-[1px] bg-[#808080] mt-40'>

                </div>

            </div>


            {/*Slider for Message */}
            <div className="w-full mt-60 relative overflow-hidden">
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
                <div className="slider message-slider">
                    <div className="slide-track">
                        <div className="slide">
                            <span className="text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Message</span>
                        </div>
                        <div className="slide">
                            <span className="text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Message</span>
                        </div>


                        {/* Repeat the slides to ensure infinite scrolling */}
                        <div className="slide">
                            <span className="text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Message</span>
                        </div>
                        <div className="slide">
                            <span className="text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Message</span>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
            </div>

            <div className='mt-40 flex flex-col mx-auto'>
                <div className='flex items-start'>
                    <div className='mr-40'>
                        <ul className='list-outside list-disc  ml-2 text-white'>
                            <li className=' text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Tone of Voice</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Key Messages</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Tagline</span>
                            </li>
                        </ul>
                    </div>
                    <div className='w-[814px] text-white text-[22px]'>
                        Transform your brand’s essence into a powerful narrative that captures hearts and minds. By crafting a unique voice, we make sure your brand speaks with authenticity and purpose, creating a connection that resonates deeply with your audience. Each word is a brushstroke in your brand’s story, carefully chosen to convey your identity and values in a way that’s both memorable and impactful. Our creative approach ensures your brand’s message isn’t just heard—it’s felt, sparking engagement and forging lasting relationships.
                    </div>
                </div>
                <div className='w-full h-[1px] bg-[#808080] mt-40'>

                </div>

            </div>

            <div className="w-full mt-60 relative overflow-hidden">
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <span className="text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Visual</span>
                        </div>
                        <div className="slide">
                            <span className="text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Visual</span>
                        </div>


                        {/* Repeat the slides to ensure infinite scrolling */}
                        <div className="slide">
                            <span className="text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Visual</span>
                        </div>
                        <div className="slide">
                            <span className="text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Visual</span>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
            </div>

            <div className='mt-40 flex flex-col mx-auto'>
                <div className='flex items-start'>
                    <div className='mr-40'>
                        <ul className='list-outside list-disc  ml-2 text-white'>
                            <li className=' text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Brandbok</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Style Guides</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Packaging</span>
                            </li>
                        </ul>
                    </div>
                    <div className='w-[814px] text-white text-[22px]'>
                        Breathe life into your brand through striking visual design that captivates and communicates. Every element is meticulously crafted to reflect your brand’s identity, ensuring a cohesive look that’s instantly recognizable. From the big picture to the smallest detail, we create visuals that tell your brand’s story in a way that resonates with your audience. Our creative approach turns your brand into a visual experience, making a lasting impression that stands out in any market.
                    </div>
                </div>
                <div className='w-full h-[1px] bg-[#808080] mt-40'>

                </div>

            </div>

            <div className='flex flex-col items-center w-full'>
                <h1 className='text-[83px] text-[#B2FF02] font-[recoleta] mt-40'>Latest Projects</h1>
                <div className='grid grid-cols-2 grid-rows-2 gap-20 px-40 mt-20'>
                    <div>
                        <div className='h-[600px] w-full overflow-hidden flex justify-center items-center'>
                            <img className='h-full' src={proj1} />
                        </div>
                        <h1 className=' mt-12 text-white font-[recoleta] text-[25px] text-center'>Vancouver Laptop</h1>
                        <h1 className='mt-2 text-[#808080] font-[recoleta] text-[16px] text-center'>UI/UX Design, Branding</h1>
                    </div>
                    <div>
                        <div className='h-[600px] w-full overflow-hidden flex justify-center items-center'>
                            <img className='h-full' src={proj2} />
                        </div>
                        <h1 className=' mt-12 text-white font-[recoleta] text-[25px] text-center'>Adorable Chocolate</h1>
                        <h1 className='mt-2 text-[#808080] font-[recoleta] text-[16px] text-center'>Branding, Packaging, UI/UX</h1>
                    </div>
                    <div>
                        <div className='h-[600px] w-full overflow-hidden flex justify-center items-center'>
                            <img className='h-full' src={proj3} />
                        </div>
                        <h1 className=' mt-12 text-white font-[recoleta] text-[25px] text-center'>Quayqoffee</h1>
                        <h1 className='mt-2 text-[#808080] font-[recoleta] text-[16px] text-center'>UI/UX, Branding</h1>
                    </div>
                    <div>
                        <div className='h-[600px] w-full overflow-hidden flex justify-center items-center'>
                            <img className='h-full' src={proj4} />
                        </div>
                        <h1 className=' mt-12 text-white font-[recoleta] text-[25px] text-center'>UniBrain Caps</h1>
                        <h1 className='mt-2 text-[#808080] font-[recoleta] text-[16px] text-center'>Branding, Packaging</h1>
                    </div>
                </div>
                <div className='rounded-full border-[2px] border-white h-[120px] w-[120px] flex justify-center items-center mt-12'>
                    <h1 className='text-white font-[recoleta] text-[24px]'>MORE</h1>
                </div>
            </div>
            <div className='w-full flex justify-center my-4 mt-20'>
                <div className='w-full mx-[120px] h-[3px] bg-[#808080] rounded-full'>

                </div>
            </div>
            <div className='w-full flex items-start py-[150px] px-[120px]'>
                <div className='w-[40%] mt-12'>
                    <h1 className='text-[90px] font-[recoleta] text-[#B2FF02]'>Tell us<br></br> your needs</h1>
                    <h1 className='text-[24px] mt-8 text-white font-light'>Describe your project and leave us your contact info, we’ll get back to you within 24 hours.</h1>
                </div>
                <div className="w-[50%] ml-auto flex flex-col">
                    {/* Name input */}
                    <div className="relative mb-12">
                        <input
                            type="text"
                            id="name"
                            className=" block w-full px-2 py-2 bg-transparent text-white border-b-2 border-[#5a8001] focus:outline-none focus:ring-0 focus:border-[#b2ff02]"
                            onFocus={() => setNameFocus(true)}
                            onBlur={(e) => setNameFocus(e.target.value !== "")}
                        />
                        <label
                            htmlFor="name"
                            className={`font-[recoleta] absolute left-2 top-2 transition-all duration-300 pointer-events-none text-white ${nameFocus ? '-top-6 text-sm text-white' : 'text-xl'
                                }`}
                        >
                            What’s Your Name?
                        </label>
                    </div>

                    {/* Email input */}
                    <div className="relative mb-12">
                        <input
                            type="email"
                            id="email"
                            className="block w-full px-2 py-2 bg-transparent text-white border-b-2 border-[#5a8001] focus:outline-none focus:ring-0 focus:border-[#b2ff02]"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={(e) => setEmailFocus(e.target.value !== "")}
                        />
                        <label
                            htmlFor="email"
                            className={`font-[recoleta] absolute left-2 top-2 transition-all duration-300 pointer-events-none text-white ${emailFocus ? '-top-6 text-sm text-white' : 'text-xl'
                                }`}
                        >
                            What’s Your E-mail?
                        </label>
                    </div>

                    {/* Project description input */}
                    <div className="relative mb-12">
                        <textarea
                            id="project"
                            className="block w-full px-2 py-2 bg-transparent text-white border-b-2 border-[#5a8001] focus:outline-none focus:ring-0 focus:border-[#b2ff02]"
                            rows={10}
                            onFocus={() => setProjectFocus(true)}
                            onBlur={(e) => setProjectFocus(e.target.value !== "")}
                        ></textarea>
                        <label
                            htmlFor="project"
                            className={`font-[recoleta] absolute left-2 top-2 transition-all duration-300 pointer-events-none text-white ${projectFocus ? '-top-6 text-sm text-white' : 'text-xl'
                                }`}
                        >
                            Tell us about your project frankly :)
                        </label>
                    </div>

                    {/* Submit button */}
                    <h1 className='font-[recoleta] text-[38px] text-white ml-auto mt-8'>Send</h1>
                </div>
            </div>
            <div className='my-20 w-full max-w-full px-12'>
                <div className='w-full bg-[#b2ff02] h-[3px]'>

                </div>
            </div>
            <div className='py-20 w-full px-12 flex justify-between'>
                <img src={logo} className='w-1/4' />
                <div>
                    <h1 className='text-[18px] text-white'>Our work:</h1>
                    <h1 className='text-[18px] mt-6 text-white'>[UX\UI]</h1>
                    <h1 className='text-[18px] text-white'>[PRINT DESIGN]</h1>
                </div>
                <div>
                    <h1 className='text-[18px] text-white'>Vancouver / Canada</h1>
                    <h1 className='text-[18px] mt-6 text-white underline'>hello@bloomingdesign.ca</h1>
                    <h1 className='text-[18px] text-white'>778-222-2122</h1>
                </div>
                <div>
                    <h1>Tell us your needs</h1>
                    <h1 className='font-[recoleta] text-[#B2FF02] text-6xl flex items-center'>Contact <img className='h-12 rotate-180' src={arrow}></img></h1>
                </div>
            </div>
        </div>

    )
}

export default Branding
