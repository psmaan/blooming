import { useState } from 'react';

import Header from './../../Components/Header';
import ThreeDVisual from './Service3D';

import arrow from './../../assets/images/arrow.png';
import logo from './../../assets/images/bloominglogo.png';
import proj1 from './../../assets/images/proj1.png';
import proj2 from './../../assets/images/proj2.png';
import proj3 from './../../assets/images/proj3.png';
import proj4 from './../../assets/images/proj4.png';
import instagram from './../../assets/images/instagram.png';
import behance from './../../assets/images/behance.png';
import dribbble from './../../assets/images/dribbble.png';

const Web3: React.FC = () => {

    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [projectFocus, setProjectFocus] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [project, setProject] = useState('');


    return (
        <div className='w-screen bg-black overflow-hidden flex flex-col items-start'>
            <div className='w-full pr-[18px] md:p-8'>
                <Header />
            </div>
            <div className=' w-full flex overflow-hidden h-screen'>
                <div className='w-[30%] md:w-[50%] ml-auto overflow-hidden relative '>
                    <ThreeDVisual />
                </div>
                <div className='absolute pl-4 sm:pl-16 lg:pl-24 xl:pl-44 mt-20 flex flex-col items-start'>

                    <h1 className='font-[recoleta] text-[70px] mbl:text-[90px] sm:text-[120px] md:text-[150px] lg:text-[180px] xl:text-[220px] text-[#B2FF02]'>Web3.</h1>
                    <h1 className='font-[recoleta] text-[32px] mbl:text-[45px] lg:text-[52px] text-[#818180] md:w-[678px] mt-12'>Revolutionize your digital presence with secure, decentralized solutions that drive innovation.</h1>

                    <div className='flex items-center justify-start mt-20'>
                        <h1 className='font-[recoleta] text-[30px] mbl:text-[40px] text-white'>Infrastructure</h1>
                        <div className='h-[2px] w-[40px] bg-[#B2FF02] ml-[32px]'></div>
                    </div>
                    <div className='flex items-center justify-start mt-8'>
                        <h1 className='font-[recoleta] text-[30px] mbl:text-[40px] text-white'>Smart Contracts</h1>
                        <div className='h-[2px] w-[40px] bg-[#B2FF02] ml-[32px]'></div>
                    </div>
                    <div className='flex items-center justify-start mt-8'>
                        <h1 className='font-[recoleta] text-[30px] mbl:text-[40px] text-white'>dApps</h1>
                        <div className='h-[2px] w-[40px] bg-[#B2FF02] ml-[32px]'></div>
                    </div>
                </div>
            </div>

            {/*Slider for Infrastructure */}
            <div className="w-full mt-[240px] md:mt-[300px]  lg:mt-[500px] relative overflow-hidden">
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
                <div className="slider twenty">
                    <div className="slide-track">
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Infrastructure</span>
                        </div>
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Infrastructure</span>
                        </div>


                        {/* Repeat the slides to ensure infinite scrolling */}
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Infrastructure</span>
                        </div>
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Infrastructure</span>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
            </div>

            <div className='mt-24 md:mt-40 flex flex-col mx-auto w-full'>
                <div className='flex flex-col lg:flex-row items-start justify-between w-full px-[18px] lg:px-[12%]'>
                    <div className=''>
                        <ul className='w-[350px] lg:w-[250px] xl:w-[350px] list-outside list-disc text-white ml-4'>
                            <li className=' text-[#B2FF02] text-[18px]'>
                                <span className='text-white ml-1'>Setup & Maintenance</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[18px]'>
                                <span className='text-white ml-1'>Monitoring</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[18px]'>
                                <span className='text-white ml-1'>Data Storage</span>
                            </li>
                        </ul>
                    </div>
                    <div className='xl:w-[780px] text-white text-[16px] mt-12 lg:mt-0'>
                        Building a resilient Web3 foundation requires meticulous attention to detail and ongoing support. We design and implement robust systems that are built to last, ensuring everything runs smoothly from the ground up. Our approach prioritizes security and efficiency, making sure your infrastructure can handle the demands of decentralized environments. With a focus on long-term stability, we empower your operations to thrive in the digital frontier.
                    </div>
                </div>
            </div>
            <div className='w-full px-[18px] lg:px-[12%] mt-20 md:mt-40'>
                <div className='w-full h-[1px] bg-[#808080]'></div>
            </div>

            {/*Slider for Smart Contracts */}
            <div className="w-full mt-[120px] lg:mt-[200px] relative overflow-hidden">
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
                <div className="slider message-slider forty">
                    <div className="slide-track">
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Smart Contracts</span>
                        </div>
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Smart Contracts</span>
                        </div>

                        {/* Repeat slides for infinite scrolling */}
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Smart Contracts</span>
                        </div>
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Smart Contracts</span>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
            </div>

            <div className='mt-24 md:mt-40 flex flex-col mx-auto w-full'>
                <div className='flex flex-col lg:flex-row items-start justify-between w-full px-[18px] lg:px-[12%]'>
                    <div className=''>
                        <ul className='w-[350px] lg:w-[250px] xl:w-[350px] list-outside list-disc text-white ml-4'>
                            <li className=' text-[#B2FF02] text-[18px]'>
                                <span className='text-white ml-1'>Development</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[18px]'>
                                <span className='text-white ml-1'>Deployment</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[18px]'>
                                <span className='text-white ml-1'>Audit</span>
                            </li>
                        </ul>
                    </div>
                    <div className='xl:w-[780px] text-white text-[16px] mt-12 lg:mt-0'>
                        Creating secure and efficient smart contracts requires a blend of technical precision and strategic insight. We meticulously craft and fine-tune each contract, ensuring it functions flawlessly within your decentralized environment. After rigorous testing, we implement the contracts with a focus on reliability and security. Our process ensures that your agreements are not only robust and tamper-proof but also tailored to meet the specific needs of your digital operations.
                    </div>
                </div>
            </div>
            <div className='w-full px-[18px] lg:px-[12%] mt-20 md:mt-40'>
                <div className='w-full h-[1px] bg-[#808080]'></div>
            </div>

            {/*Slider for dApps */}
            <div className="w-full mt-[120px] lg:mt-[200px] relative overflow-hidden">
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
                <div className="slider twenty">
                    <div className="slide-track">
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">dApps</span>
                        </div>
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">dApps</span>
                        </div>

                        {/* Repeat slides for infinite scrolling */}
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">dApps</span>
                        </div>
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">dApps</span>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
            </div>

            <div className='mt-24 md:mt-40 flex flex-col mx-auto w-full'>
                <div className='flex flex-col lg:flex-row items-start justify-between w-full px-[18px] lg:px-[12%]'>
                    <div className=''>
                        <ul className='w-[350px] lg:w-[250px] xl:w-[350px] list-outside list-disc text-white ml-4'>
                            <li className=' text-[#B2FF02] text-[18px]'>
                                <span className='text-white ml-1'>Wallet Integration</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[18px]'>
                                <span className='text-white ml-1'>User Authentication</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[18px]'>
                                <span className='text-white ml-1'>Governance</span>
                            </li>
                        </ul>
                    </div>
                    <div className='xl:w-[780px] text-white text-[16px] mt-12 lg:mt-0'>
                        Developing decentralized applications requires a focus on seamless user interaction and secure protocols. We build intuitive interfaces that connect users effortlessly while ensuring that all transactions and interactions are secure. By integrating innovative governance models, we empower users to have a voice in the platform’s evolution. This holistic approach ensures that your application is not only functional but also fosters a strong, engaged community in the decentralized ecosystem.
                    </div>
                </div>
            </div>
            <div className='w-full px-[18px] lg:px-[12%] mt-20 md:mt-40'>
                <div className='w-full h-[1px] bg-[#808080]'></div>
            </div>


            <div className='flex flex-col items-center w-full'>
                <h1 className='text-[83px] text-[#B2FF02] font-[recoleta] mt-40 w-full text-center'>Latest Projects</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 px-8 lg:px-20 xl:px-40 mt-20'>
                    <div>
                        <div className='h-[400px] lg:h-[600px] w-full overflow-hidden flex justify-center items-center'>
                            <img className='h-full w-full object-cover' src={proj1} />
                        </div>
                        <h1 className=' mt-12 text-white font-[recoleta] text-[25px] text-center'>Vancouver Laptop</h1>
                        <h1 className='mt-2 text-[#808080] font-[recoleta] text-[16px] text-center'>UI/UX Design, Branding</h1>
                    </div>
                    <div>
                        <div className='h-[400px] lg:h-[600px] w-full overflow-hidden flex justify-center items-center'>
                            <img className='h-full w-full object-cover' src={proj2} />
                        </div>
                        <h1 className=' mt-12 text-white font-[recoleta] text-[25px] text-center'>Adorable Chocolate</h1>
                        <h1 className='mt-2 text-[#808080] font-[recoleta] text-[16px] text-center'>Branding, Packaging, UI/UX</h1>
                    </div>
                    <div>
                        <div className='h-[400px] lg:h-[600px] w-full overflow-hidden flex justify-center items-center'>
                            <img className='h-full w-full object-cover' src={proj3} />
                        </div>
                        <h1 className='mt-12 text-white font-[recoleta] text-[25px] text-center'>Quayqoffee</h1>
                        <h1 className='mt-2 text-[#808080] font-[recoleta] text-[16px] text-center'>UI/UX, Branding</h1>
                    </div>

                    <div>
                        <div className='h-[400px] lg:h-[600px] w-full overflow-hidden flex justify-center items-center'>
                            <img className='h-full w-full object-cover' src={proj4} />
                        </div>
                        <h1 className=' mt-12 text-white font-[recoleta] text-[25px] text-center'>UniBrain Caps</h1>
                        <h1 className='mt-2 text-[#808080] font-[recoleta] text-[16px] text-center'>Branding, Packaging</h1>
                    </div>
                </div>
                <div className='rounded-full border-[2px] border-white h-[120px] w-[120px] flex justify-center items-center mt-12 hover:bg-white hover:text-black text-white cursor-pointer duration-200'>
                    <h1 className='font-[recoleta] text-[24px]'>MORE</h1>
                </div>
            </div>
            <div className='w-full flex justify-center my-4 mt-20'>
                <div className='w-full mx-[120px] h-[3px] bg-[#808080] rounded-full'>

                </div>
            </div>
            <div className='w-full flex lg:justify-center items-start py-[150px] px-[16px] lg:px-[10%] flex-col lg:flex-row'>
                <div className='lg:w-[50%] w-full'>
                    <h1 className='leading-none text-[48px] sm:text-[70px] md:leading-[91px] md:text-[80px] xl:text-[90px] font-[recoleta] text-[#B2FF02]'>Tell us<br></br> your needs</h1>
                    <h1 className='text-[16px] xl:text-[22px] mt-8 text-white font-light'>Describe your project and leave us your contact<br /> info, we’ll get back to you within 24 hours.</h1>
                </div>
                <div className=" lg:w-[50%] w-full flex flex-col mt-20 lg:mt-0">
                    {/* Name input */}
                    <div className="relative mb-12">
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="block w-full px-2 py-2 bg-transparent text-white border-b-2 border-[#5a8001] focus:outline-none focus:ring-0 focus:border-[#b2ff02]"
                            onFocus={() => setNameFocus(true)}
                            onBlur={() => setNameFocus(false)}
                        />
                        <label
                            htmlFor="name"
                            className={`font-[recoleta] absolute left-2 top-2 transition-all duration-300 pointer-events-none text-white transform ${nameFocus || name ? 'translate-y-[-24px] text-sm' : 'text-xl'
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full px-2 py-2 bg-transparent text-white border-b-2 border-[#5a8001] focus:outline-none focus:ring-0 focus:border-[#b2ff02]"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <label
                            htmlFor="email"
                            className={`font-[recoleta] absolute left-2 top-2 transition-all duration-300 pointer-events-none text-white transform ${emailFocus || email ? 'translate-y-[-24px] text-sm' : 'text-xl'
                                }`}
                        >
                            What’s Your E-mail?
                        </label>
                    </div>

                    {/* Project description input */}
                    <div className="relative mb-12">
                        <textarea
                            id="project"
                            value={project}
                            onChange={(e) => setProject(e.target.value)}
                            className="block w-full px-2 py-2 bg-transparent text-white border-b-2 border-[#5a8001] focus:outline-none focus:ring-0 focus:border-[#b2ff02]"
                            rows={10}
                            onFocus={() => setProjectFocus(true)}
                            onBlur={() => setProjectFocus(false)}
                        ></textarea>
                        <label
                            htmlFor="project"
                            className={`font-[recoleta] absolute left-2 top-2 transition-all duration-300 pointer-events-none text-white transform ${projectFocus || project ? 'translate-y-[-24px] text-sm' : 'text-xl'
                                }`}
                        >
                            Tell us about your project frankly :)
                        </label>
                    </div>

                    {/* Submit button */}
                    <div className='flex items-center mt-8'>
                        <h1 className='font-[recoleta] text-[20px] text-white ml-auto '>Send</h1>
                        <div className='w-[40px] h-[2px] ml-[20px] bg-[#b2ff02]'>

                        </div>
                    </div>

                </div>
            </div>
            <div className='mb-8 w-full max-w-full px-4 lg:px-20'>
                <div className='w-full bg-[#b2ff02] h-[3px]'>

                </div>
            </div>
            <div className='py-20 w-full px-4 lg:px-20 flex flex-col md:flex-row justify-between'>
                <div className='w-[157px] md:w-[280px]'>
                    <img src={logo} className='mb-12 w-full' />
                </div>
                <div className='flex flex-row items-start mx-auto w-full'>
                    <div className='flex flex-col justify-around md:justify-center md:flex-row md:items-center w-[55%] md:w-full h-full'>
                        <div className='mr-8 lg:mr-16 xl:mr-28'>
                            <h1 className='text-[16px] lg:text-[18px] text-white'>Our work:</h1>
                            <h1 className='font-semibold text-[15px] lg:text-[18px] mt-6 leading-normal text-white'>[UX\UI]</h1>
                            <h1 className='font-semibold leading-normal text-[15px] lg:text-[18px text-white'>[PRINT DESIGN]</h1>
                        </div>
                        <div className='mt-[40px] md:mt-0'>
                            <h1 className='text-[15px] lg:text-[18px] text-white'>Vancouver / Canada</h1>
                            <h1 className='font-semibold text-[15px] lg:text-[18px mt-6 text-white underline hidden sm:block'>hello@bloomingdesign.ca</h1>
                            <h1 className='font-semibold text-[16px] lg:text-[18px mt-6 text-white underline sm:hidden'>hello@<br></br>bloomingdesign.ca</h1>
                            <h1 className='text-[16px] lg:text-[18px] text-white'>778-222-2122</h1>
                        </div>
                    </div>
                    <div className='md:hidden w-[45%] md:w-[0px]'>
                        <h1 className='text-white text-[20px]'>Let's be friends</h1>
                        <img className='h-[50px] w-[50px] my-4' src={dribbble} />
                        <img className='h-[50px] w-[50px] my-4' src={behance} />
                        <img className='h-[50px] w-[50px] my-4' src={instagram} />
                    </div>
                </div>

                <div className='w-full flex justify-center my-8 mt-20 md:hidden'>
                    <div className='bg-[#b2ff02] h-[1px] w-full'>

                    </div>
                </div>

                <div className='mt-8 md:mt-0 md:relative -left-4'>
                    <h1 className='text-white text-[16px] mb-4 font-light w-[150px]'>Tell us your needs</h1>
                    <h1 className='font-[recoleta] text-[#B2FF02] text-[40px] lg:text-[32px] flex items-center'>Contact <img className='ml-4 w-[25px] rotate-180' src={arrow}></img></h1>
                </div>
            </div>
        </div>

    )
}

export default Web3
