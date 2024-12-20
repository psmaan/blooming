import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Components/Header';
import ThreeDVisual from './../Components/Service3D';
import arrow from './../assets/images/arrow.png';
import logo from './../assets/images/bloominglogo.png';
import instagram from './../assets/images/instagram.png';
import behance from './../assets/images/behance.png';
import dribbble from './../assets/images/dribbble.png';

const ServicesPage: React.FC = () => {
    const [isBrandingOpen, setIsBrandingOpen] = useState(false);
    const [isSeoOpen, setIsSeoOpen] = useState(false);
    const [isUxuiOpen, setIsUxuiOpen] = useState(false);
    const [isDevopsOpen, setIsDevopsOpen] = useState(false);
    const [isBackendOpen, setIsBackendOpen] = useState(false);
    const [isAIOpen, setIsAIOpen] = useState(false);
    const [isWebOpen, setIsWebOpen] = useState(false);

    // Click toggle functions for mobile screens and the arrow button
    const toggleBrandingAccordion = () => setIsBrandingOpen(!isBrandingOpen);
    const toggleSeoAccordion = () => setIsSeoOpen(!isSeoOpen);
    const toggleUxuiAccordion = () => setIsUxuiOpen(!isUxuiOpen);
    const toggleDevopsAccordion = () => setIsDevopsOpen(!isDevopsOpen);
    const toggleBackendAccordion = () => setIsBackendOpen(!isBackendOpen);
    const toggleAIAccordion = () => setIsAIOpen(!isAIOpen);
    const toggleWebAccordion = () => setIsWebOpen(!isWebOpen);

    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [projectFocus, setProjectFocus] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [project, setProject] = useState('');

    return (
        <div className='w-screen bg-black overflow-x-hidden relative'>
            <div className='w-full py-4 z-50 pr-8 dk:pr-0'>
                <Header />
            </div>
            <div className='w-full absolute flex justify-center -top-[250px] mbl:-top-[400px] md:-top-[400px] lg:-top-[360px] dk:-top-[400px] z-10 opacity-70 overflow-y-visible h-[1200px]'>
                <ThreeDVisual />
            </div>
            <h1 className='text-[64px] sm:text-8xl md:text-[120px] lg:text-[150px] relative dk:text-[190px] text-[#B2FF02] mt-[180px] md:mt-[180px] lg:mt-[190px] z-20 font-[recoleta] text-center w-full md:mb-[200px]'>Services.</h1>
            <div
                className='w-full px-[18px] mbl:px-[60px] lg:px-[10%] flex justify-between items-center md:items-start mt-24 py-12 pt-24 z-10 relative'>
                <h1 className='w-[350px] dk:w-[400px] text-[40px] mbl:text-[60px] xl:text-[70px] leading-none text-[#B2FF02] font-[recoleta]'>Branding.</h1>
                <div className='w-[550px] hidden lg:block'>
                    <h1 className='text-[#7a7a7a] text-[16px]'>Our Branding services define and develop a unique identity for your business, ensuring it stands out and resonates with your audience. Let us help you create a lasting impression.</h1>
                    <Link to='/branding'>
                        <div className='w-full flex items-center md:mt-12 mt-6'>
                            <h1 className='cursor-pointer text-[16px] md:text-[40px] font-[recoleta] text-white'>Learn More</h1>
                            <div className="h-[2px] w-[28px] md:w-[40px] ml-3 md:ml-8 rounded-full bg-[#b2ff02]"></div>
                        </div>
                    </Link>
                </div>
                <div onClick={toggleBrandingAccordion} className='cursor-pointer mr-[2px]'>
                    <img

                        alt="Toggle Arrow"
                        className={`w-[20px] mbl:w-[48px] transform transition-transform ${isBrandingOpen ? 'rotate-180' : ''}`}
                        src={arrow}
                    />
                </div>
            </div>
            <div className='w-full px-[18px] mbl:px-[60px] lg:px-[10%] lg:hidden'>
                <h1 className='text-[#7a7a7a] text-[16px]'>Our Branding services define and develop a unique identity for your business, ensuring it stands out and resonates with your audience. Let us help you create a lasting impression.</h1>
                <Link to='/branding'>
                    <div className="w-full flex items-center md:mt-12 mt-6 group">
                        <h1
                            className="cursor-pointer text-[16px] md:text-4xl font-[recoleta] text-white group-hover:translate-x-[10px] transition-transform duration-500 ease-in-out"
                        >
                            Learn More
                        </h1>
                        <div
                            className="h-[2px] w-[28px] md:w-[40px] ml-3 md:ml-8 rounded-full bg-[#b2ff02] group-hover:w-[60px] transition-all duration-500 ease-in-out"
                        ></div>
                    </div>

                </Link>
            </div>

            {/* Branding Accordion Content - Hidden until isBrandingOpen is true */}
            <div className={`w-full px-[18px] mbl:px-[60px] lg:px-[10%] flex flex-col sm:flex-row justify-between items-start py-8 md:py-0 accordion-content ${isBrandingOpen ? 'accordion-content-open md:py-16' : ''}`}>
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Strategy</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
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
                <div className='w-full flex justify-center my-8 sm:hidden'>
                    <div className='w-full h-[3px] bg-[#808080] rounded-full'>

                    </div>
                </div>
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Message</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white'>
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
                <div className='w-full flex justify-center my-8 sm:hidden'>
                    <div className='w-full h-[3px] bg-[#808080] rounded-full'>

                    </div>
                </div>
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Visual</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white'>
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


            <div className='w-full flex justify-center mb-[80px] sm:my-[150px]'>
                <div className='w-full mx-[18px] mbl:mx-[60px] lg:mx-[10%] h-[1px] bg-[#808080] rounded-full'></div>
            </div>

            {/* SEO Accordion Header */}
            <div className='w-full px-[18px] mbl:px-[60px] lg:px-[10%] flex justify-between items-center md:items-start py-12 pt-0 z-10 relative
            '                >
                <h1 className='w-[350px] dk:w-[400px] text-[40px] mbl:text-[60px] xl:text-[70px] leading-none text-[#B2FF02] font-[recoleta]'>SEO.</h1>
                <div className='w-[550px] hidden lg:block'>
                    <h1 className='text-[#7a7a7a] text-[16px]'>Boost your online visibility through content optimization, high-quality backlinks, and technical improvements, driving targeted traffic and higher search rankings.</h1>
                    <Link to='/seo'>
                        <div className="w-full flex items-center md:mt-12 mt-6 group">
                            <h1
                                className="cursor-pointer text-[16px] md:text-4xl font-[recoleta] text-white group-hover:translate-x-[10px] transition-transform duration-500 ease-in-out"
                            >
                                Learn More
                            </h1>
                            <div
                                className="h-[2px] w-[28px] md:w-[40px] ml-3 md:ml-8 rounded-full bg-[#b2ff02] group-hover:w-[60px] transition-all duration-500 ease-in-out"
                            ></div>
                        </div>

                    </Link>
                </div>
                <div onClick={toggleSeoAccordion} className='cursor-pointer mr-[2px]'>
                    <img
                        className={`w-[20px] mbl:w-[48px] transform transition-transformsor-pointer mr-[2px]' duration-300 ${isSeoOpen ? 'rotate-180' : 'rotate-0'}`}
                        src={arrow}
                        alt="Arrow"
                    />
                </div>
            </div>
            <div className='w-full px-[18px] mbl:px-[60px] lg:px-[10%] lg:hidden'>
                <h1 className='text-[#7a7a7a] text-[16px]'>Boost your online visibility through content optimization, high-quality backlinks, and technical improvements, driving targeted traffic and higher search rankings.</h1>
                <Link to='/seo'>
                    <div className='w-full flex items-center md:mt-12 mt-6'>
                        <h1 className='cursor-pointer text-[16px] md:text-4xl font-[recoleta] text-white'>Learn More</h1>
                        <div className="h-[2px] w-[28px] md:w-[40px] ml-3 md:ml-8 rounded-full bg-[#b2ff02]"></div>
                    </div>
                </Link>
            </div>

            {/* SEO Accordion Content - Hidden until isSeoOpen is true */}
            <div className={`w-full px-[18px] mbl:px-[60px] lg:px-[10%] flex flex-col sm:flex-row justify-between items-start py-8 md:py-0 accordion-content ${isSeoOpen ? 'accordion-content-open md:py-16' : ''}`}>
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Content</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
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
                <div className='w-full flex justify-center my-8 sm:hidden'>
                    <div className='w-full h-[3px] bg-[#808080] rounded-full'></div>
                </div>
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Link Building</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
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
                <div className='w-full flex justify-center my-8 sm:hidden'>
                    <div className='w-full h-[3px] bg-[#808080] rounded-full'></div>
                </div>
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Accessibility</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
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

            <div className='w-full flex justify-center mb-[80px] sm:my-[150px]'>
                <div className='w-full mx-[18px] mbl:mx-[60px] lg:mx-[10%] h-[1px] bg-[#808080] rounded-full'></div>
            </div>


            {/* UI/UX Accordion Header */}
            <div className='w-full px-[18px] mbl:px-[60px] lg:px-[10%] flex justify-between items-center md:items-start py-12 pt-0 z-10 relative
            '
            >
                <h1 className='w-[350px] dk:w-[400px] text-[40px] mbl:text-[60px] xl:text-[70px] leading-none text-[#B2FF02] font-[recoleta]'>UX/UI.</h1>
                <div className='w-[550px] hidden lg:block'>
                    <h1 className='text-[#7a7a7a] text-[16px]'>Focuses on creating intuitive, visually appealing interfaces with seamless user experiences, ensuring responsive design and fast, efficient performance across all devices.</h1>
                    <Link to='/uiux'>
                        <div className="w-full flex items-center md:mt-12 mt-6 group">
                            <h1
                                className="cursor-pointer text-[16px] md:text-4xl font-[recoleta] text-white group-hover:translate-x-[10px] transition-transform duration-500 ease-in-out"
                            >
                                Learn More
                            </h1>
                            <div
                                className="h-[2px] w-[28px] md:w-[40px] ml-3 md:ml-8 rounded-full bg-[#b2ff02] group-hover:w-[60px] transition-all duration-500 ease-in-out"
                            ></div>
                        </div>

                    </Link>
                </div>
                <div onClick={toggleUxuiAccordion} className='cursor-pointer mr-[2px]'>
                    <img
                        className={`w-[20px] mbl:w-[48px] transform transition-transformsor-pointer mr-[2px]' duration-300 ${isUxuiOpen ? 'rotate-180' : 'rotate-0'}`}
                        src={arrow}
                        alt="Arrow"
                    />
                </div>
            </div >
            <div className='w-full px-[18px] mbl:px-[60px] lg:px-[10%] lg:hidden'>
                <h1 className='text-[#7a7a7a] text-[16px]'>Focuses on creating intuitive, visually appealing interfaces with seamless user experiences, ensuring responsive design and fast, efficient performance across all devices.</h1>
                <Link to='/uiux'>
                    <div className='w-full flex items-center md:mt-12 mt-6'>
                        <h1 className='cursor-pointer text-[16px] md:text-4xl font-[recoleta] text-white'>Learn More</h1>
                        <div className="h-[2px] w-[28px] md:w-[40px] ml-3 md:ml-8 rounded-full bg-[#b2ff02]"></div>
                    </div>
                </Link>
            </div>

            {/* UI/UX Accordion Content */}
            <div className={`w-full px-[18px] mbl:px-[60px] lg:px-[10%] flex flex-col sm:flex-row justify-between items-start py-8 md:py-0 accordion-content ${isUxuiOpen ? 'accordion-content-open md:py-16' : ''}`}>
                {/* UX Section */}
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>UX</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>UX Audit</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>User Flows</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Prototyping</span></li>
                    </ul>
                </div>
                <div className='w-full flex justify-center my-8 sm:hidden'>
                    <div className='w-full h-[3px] bg-[#808080] rounded-full'></div>
                </div>
                {/* UI Section */}
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>UI</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Research</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Wireframes</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Design System</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Responsive</span></li>
                    </ul>
                </div>
                <div className='w-full flex justify-center my-8 sm:hidden'>
                    <div className='w-full h-[3px] bg-[#808080] rounded-full'></div>
                </div>
                {/* Apps Section */}
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Apps</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Web, mobile app</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Interactions</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Mobile First</span></li>
                    </ul>
                </div>
            </div>
            <div className='w-full flex justify-center mb-[80px] sm:my-[150px]'>
                <div className='w-full mx-[18px] mbl:mx-[60px] lg:mx-[10%] h-[1px] bg-[#808080] rounded-full'></div>
            </div>

            {/* DevOps Accordion Header */}
            <div className='w-full px-[18px] mbl:px-[60px] lg:px-[10%] flex justify-between items-center md:items-start py-12 pt-0 z-10 relative
            '
            >
                <h1 className='w-[350px] dk:w-[400px] text-[40px] mbl:text-[60px] xl:text-[70px] leading-none text-[#B2FF02] font-[recoleta]'>DevOps.</h1>
                <div className='w-[550px] hidden lg:block' >
                    <h1 className='text-[#7a7a7a] text-[16px]'>Speeds up delivery with automated CI/CD, efficient infrastructure management, and real-time monitoring, ensuring scalable, reliable, and optimized operations.</h1>
                    <Link to='/devops'>
                        <div className="w-full flex items-center md:mt-12 mt-6 group">
                            <h1
                                className="cursor-pointer text-[16px] md:text-4xl font-[recoleta] text-white group-hover:translate-x-[10px] transition-transform duration-500 ease-in-out"
                            >
                                Learn More
                            </h1>
                            <div
                                className="h-[2px] w-[28px] md:w-[40px] ml-3 md:ml-8 rounded-full bg-[#b2ff02] group-hover:w-[60px] transition-all duration-500 ease-in-out"
                            ></div>
                        </div>

                    </Link>
                </div >
                <div onClick={toggleDevopsAccordion} className='cursor-pointer mr-[2px]'>
                    <img
                        className={`w-[20px] mbl:w-[48px] transform transition-transformsor-pointer mr-[2px]' duration-300 ${isDevopsOpen ? 'rotate-180' : 'rotate-0'}`}
                        src={arrow}
                        alt="Arrow"
                    />
                </div>
            </div >
            <div className='w-full px-[18px] mbl:px-[60px] lg:px-[10%] lg:hidden'>
                <h1 className='text-[#7a7a7a] text-[16px]'>Speeds up delivery with automated CI/CD, efficient infrastructure management, and real-time monitoring, ensuring scalable, reliable, and optimized operations.</h1>
                <Link to='/devops'>
                    <div className='w-full flex items-center md:mt-12 mt-6'>
                        <h1 className='cursor-pointer text-[16px] md:text-4xl font-[recoleta] text-white'>Learn More</h1>
                        <div className="h-[2px] w-[28px] md:w-[40px] ml-3 md:ml-8 rounded-full bg-[#b2ff02]"></div>
                    </div>
                </Link>
            </div>

            {/* DevOps Accordion Content */}
            <div className={`w-full px-[18px] mbl:px-[60px] lg:px-[10%] flex flex-col sm:flex-row justify-between items-start py-8 md:py-0 accordion-content ${isDevopsOpen ? 'accordion-content-open md:py-16' : ''}`}>
                {/* CI/CD Section */}
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>CI/CD</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Jenkins</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>GitLab</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Travis</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Azure</span></li>
                    </ul>
                </div>
                <div className='w-full flex justify-center my-8 sm:hidden'>
                    <div className='w-full h-[3px] bg-[#808080] rounded-full'></div>
                </div>
                {/* Orchestration Section */}
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Orchestration</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Ansible</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Kubernetes</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Terraform</span></li>
                    </ul>
                </div>
                <div className='w-full flex justify-center my-8 sm:hidden'>
                    <div className='w-full h-[3px] bg-[#808080] rounded-full'></div>
                </div>
                {/* Cloud Section */}
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Cloud</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>AWS</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>GCP</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Azure</span></li>
                    </ul>
                </div>
            </div>
            <div className='w-full flex justify-center mb-[80px] sm:my-[150px]'>
                <div className='w-full mx-[18px] mbl:mx-[60px] lg:mx-[10%] h-[1px] bg-[#808080] rounded-full'></div>
            </div>


            {/* Backend Accordion Header */}
            <div className='w-full px-[18px] mbl:px-[60px] lg:px-[10%] flex justify-between items-center md:items-start py-12 pt-0 z-10 relative
            '
            >
                <h1 className='w-[350px] dk:w-[400px] text-[40px] mbl:text-[50px] xl:text-[60px] leading-none text-[#B2FF02] font-[recoleta]'>Backend Development.</h1>
                <div className='w-[550px] hidden lg:block' >
                    <h1 className='text-[#7a7a7a] text-[16px]'>Builds robust, scalable server-side applications, ensuring seamless data management and system performance. We handle the backend, so your front-end excels.</h1>
                    <Link to='/backend'>
                        <div className="w-full flex items-center md:mt-12 mt-6 group">
                            <h1
                                className="cursor-pointer text-[16px] md:text-4xl font-[recoleta] text-white group-hover:translate-x-[10px] transition-transform duration-500 ease-in-out"
                            >
                                Learn More
                            </h1>
                            <div
                                className="h-[2px] w-[28px] md:w-[40px] ml-3 md:ml-8 rounded-full bg-[#b2ff02] group-hover:w-[60px] transition-all duration-500 ease-in-out"
                            ></div>
                        </div>

                    </Link>
                </div >
                <div onClick={toggleBackendAccordion} className='cursor-pointer mr-[2px]'>
                    <img
                        className={`w-[20px] mbl:w-[48px] transform transition-transformsor-pointer mr-[2px]' duration-300 ${isBackendOpen ? 'rotate-180' : 'rotate-0'}`}
                        src={arrow}
                        alt="Arrow"
                    />
                </div>
            </div >
            <div className='w-full px-[18px] mbl:px-[60px] lg:px-[10%] lg:hidden'>
                <h1 className='text-[#7a7a7a] text-[16px]'>Builds robust, scalable server-side applications, ensuring seamless data management and system performance. We handle the backend, so your front-end excels.</h1>
                <Link to='/backend'>
                    <div className='w-full flex items-center md:mt-12 mt-6'>
                        <h1 className='cursor-pointer text-[16px] md:text-4xl font-[recoleta] text-white'>Learn More</h1>
                        <div className="h-[2px] w-[28px] md:w-[40px] ml-3 md:ml-8 rounded-full bg-[#b2ff02]"></div>
                    </div>
                </Link>
            </div>

            {/* Backend Content */}
            <div className={`w-full px-[18px] mbl:px-[60px] lg:px-[10%] flex flex-col sm:flex-row justify-between items-start py-8 md:py-0 accordion-content ${isBackendOpen ? 'accordion-content-open md:py-16' : ''}`}>
                {/* API Development */}
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>API Development</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>RESTful</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>GraphQL</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Swagger</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Apollo Server</span></li>
                    </ul>
                </div>
                <div className='w-full flex justify-center my-8 sm:hidden'>
                    <div className='w-full h-[3px] bg-[#808080] rounded-full'></div>
                </div>
                {/* Database */}
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Database</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>MySQL</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>MongoDB</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>PostgreSQL</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Redis</span></li>
                    </ul>
                </div>
                <div className='w-full flex justify-center my-8 sm:hidden'>
                    <div className='w-full h-[3px] bg-[#808080] rounded-full'></div>
                </div>
                {/* Architecture */}
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Architecture</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Microservices</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Serverless</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Event-Driven</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Distributed</span></li>
                    </ul>
                </div>
            </div>
            <div className='w-full flex justify-center mb-[80px] sm:my-[150px]'>
                <div className='w-full mx-[18px] mbl:mx-[60px] lg:mx-[10%] h-[1px] bg-[#808080] rounded-full'></div>
            </div>


            {/* AI Solutions Accordion Header */}
            <div className='w-full px-[18px] mbl:px-[60px] lg:px-[10%] flex justify-between items-center md:items-start py-12 pt-0 z-10 relative
            '
            >
                <h1 className='w-[350px] dk:w-[400px] text-[40px] mbl:text-[60px] xl:text-[70px] leading-none text-[#B2FF02] font-[recoleta]'>AI Solutions.</h1>
                <div className='w-[550px] hidden lg:block' >
                    <h1 className='text-[#7a7a7a] text-[16px]'>Delivers cutting-edge, intelligent systems tailored to your business needs. We harness the power of AI to automate processes, enhance decision-making, and drive innovation.</h1>
                    <Link to='/web3'>
                        <div className="w-full flex items-center md:mt-12 mt-6 group">
                            <h1
                                className="cursor-pointer text-[16px] md:text-4xl font-[recoleta] text-white group-hover:translate-x-[10px] transition-transform duration-500 ease-in-out"
                            >
                                Learn More
                            </h1>
                            <div
                                className="h-[2px] w-[28px] md:w-[40px] ml-3 md:ml-8 rounded-full bg-[#b2ff02] group-hover:w-[60px] transition-all duration-500 ease-in-out"
                            ></div>
                        </div>

                    </Link>
                </div >
                <div onClick={toggleAIAccordion} className='cursor-pointer mr-[2px]'>
                    <img className={`w-[20px] mbl:w-[48px] transform transition-transformsor-pointer mr-[2px]' duration-300 ${isAIOpen ? 'rotate-180' : 'rotate-0'}`} src={arrow} alt="Arrow" />
                </div>
            </div >
            <div className='w-full px-[18px] mbl:px-[60px] lg:px-[10%] lg:hidden'>
                <h1 className='text-[#7a7a7a] text-[16px]'>Delivers cutting-edge, intelligent systems tailored to your business needs. We harness the power of AI to automate processes, enhance decision-making, and drive innovation.</h1>
                <Link to='/web3'>
                    <div className='w-full flex items-center md:mt-12 mt-6'>
                        <h1 className='cursor-pointer text-[16px] md:text-4xl font-[recoleta] text-white'>Learn More</h1>
                        <div className="h-[2px] w-[28px] md:w-[40px] ml-3 md:ml-8 rounded-full bg-[#b2ff02]"></div>
                    </div>
                </Link>
            </div>

            {/* AI Solutions Accordion Content */}
            <div className={`w-full px-[18px] mbl:px-[60px] lg:px-[10%] flex flex-col sm:flex-row justify-between items-start py-8 md:py-0 accordion-content ${isAIOpen ? 'accordion-content-open md:py-16' : ''}`}>
                {/* Custom AI */}
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Custom AI</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Hugging Face</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>TensorFlow</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>OpenCV</span></li>
                    </ul>
                </div>
                <div className='w-full flex justify-center my-8 sm:hidden'>
                    <div className='w-full h-[3px] bg-[#808080] rounded-full'></div>
                </div>
                {/* Process Optimization */}
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Process Optimization</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>H20.ai</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>BluePrism</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>RapidMiner</span></li>
                    </ul>
                </div>
                <div className='w-full flex justify-center my-8 sm:hidden'>
                    <div className='w-full h-[3px] bg-[#808080] rounded-full'></div>
                </div>
                {/* AI Integration */}
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>AI Integration</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>MuleSoft</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>SnapLogic</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Boomi</span></li>
                    </ul>
                </div>
            </div>

            <div className='w-full flex justify-center mb-[80px] sm:my-[150px]'>
                <div className='w-full mx-[18px] mbl:mx-[60px] lg:mx-[10%] h-[1px] bg-[#808080] rounded-full'></div>
            </div>

            {/* Web3 Accordion Header */}
            <div className='w-full px-[18px] mbl:px-[60px] lg:px-[10%] flex justify-between items-center md:items-start py-12 pt-0 z-10 relative
            '
            >
                <h1 className='w-[350px] dk:w-[400px] text-[40px] mbl:text-[60px] xl:text-[70px] leading-none text-[#B2FF02] font-[recoleta]'>Web3.</h1>
                <div className='w-[550px] hidden lg:block' >
                    <h1 className='text-[#7a7a7a] text-[16px]'>Empowers decentralized applications, giving your users control of their data. We provide secure, blockchain-based solutions to build the next generation of the internet.</h1>
                    <Link to='/web3'>
                        <div className="w-full flex items-center md:mt-12 mt-6 group">
                            <h1
                                className="cursor-pointer text-[16px] md:text-4xl font-[recoleta] text-white group-hover:translate-x-[10px] transition-transform duration-500 ease-in-out"
                            >
                                Learn More
                            </h1>
                            <div
                                className="h-[2px] w-[28px] md:w-[40px] ml-3 md:ml-8 rounded-full bg-[#b2ff02] group-hover:w-[60px] transition-all duration-500 ease-in-out"
                            ></div>
                        </div>

                    </Link>
                </div >
                <div onClick={toggleWebAccordion} className='cursor-pointer mr-[2px]'>
                    <img className={`w-[20px] mbl:w-[48px] transform transition-transformsor-pointer mr-[2px]' duration-300 ${isWebOpen ? 'rotate-180' : 'rotate-0'}`} src={arrow} alt="Arrow" />
                </div>
            </div >
            <div className='w-full px-[18px] mbl:px-[60px] lg:px-[10%] lg:hidden'>
                <h1 className='text-[#7a7a7a] text-[16px]'>Empowers decentralized applications, giving your users control of their data. We provide secure, blockchain-based solutions to build the next generation of the internet.</h1>
                <Link to='/web3'>
                    <div className='w-full flex items-center md:mt-12 mt-6'>
                        <h1 className='cursor-pointer text-[16px] md:text-4xl font-[recoleta] text-white'>Learn More</h1>
                        <div className="h-[2px] w-[28px] md:w-[40px] ml-3 md:ml-8 rounded-full bg-[#b2ff02]"></div>
                    </div>
                </Link>
            </div>

            {/* Web3 Accordion Content */}
            <div className={`w-full px-[18px] mbl:px-[60px] lg:px-[10%] flex flex-col sm:flex-row justify-between items-start py-8 md:py-0 accordion-content ${isWebOpen ? 'accordion-content-open md:py-16' : ''}`}>
                {/* Blockchain */}
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Blockchain</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Ethereum</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Solana</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Polygon</span></li>
                    </ul>
                </div>
                <div className='w-full flex justify-center my-8 sm:hidden'>
                    <div className='w-full h-[3px] bg-[#808080] rounded-full'></div>
                </div>
                {/* Smart Contracts */}
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Smart Contracts</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Solidity</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Rust</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Vyper</span></li>
                    </ul>
                </div>
                <div className='w-full flex justify-center my-8 sm:hidden'>
                    <div className='w-full h-[3px] bg-[#808080] rounded-full'></div>
                </div>
                {/* Wallet Integration */}
                <div>
                    <h1 className='text-[25px] md:text-[40px] text-white z-50 font-[recoleta]'>Wallet Integration</h1>
                    <ul className='list-outside list-disc text-sm md:text-lg lg:text-xl  ml-5 mt-8 text-white text-[16px] md:text-[22px]'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Metamask</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Coinbase Wallet</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Trust Wallet</span></li>
                    </ul>
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
                            className="block w-full px-2 py-2 bg-transparent text-white border-b-[1px] border-[#5a8001] focus:outline-none focus:ring-0"
                            onFocus={() => setNameFocus(true)}
                            onBlur={() => setNameFocus(false)}
                        />
                        <span
                            className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#b2ff02] transform scale-x-0 origin-left transition-transform duration-300 ${nameFocus || name ? 'scale-x-100' : ''
                                }`}
                        ></span>
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
                            className="block w-full px-2 py-2 bg-transparent text-white border-b-[1px] border-[#5a8001] focus:outline-none focus:ring-0"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <span
                            className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#b2ff02] transform scale-x-0 origin-left transition-transform duration-300 ${emailFocus || email ? 'scale-x-100' : ''
                                }`}
                        ></span>
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
                            className="block w-full px-2 py-2 bg-transparent text-white border-b-[1px] border-[#5a8001] focus:outline-none focus:ring-0"
                            rows={10}
                            onFocus={() => setProjectFocus(true)}
                            onBlur={() => setProjectFocus(false)}
                        ></textarea>
                        <span
                            className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#b2ff02] transform scale-x-0 origin-left transition-transform duration-300 ${projectFocus || project ? 'scale-x-100' : ''
                                }`}
                        ></span>
                        <label
                            htmlFor="project"
                            className={`font-[recoleta] absolute left-2 top-2 transition-all duration-300 pointer-events-none text-white transform ${projectFocus || project ? 'translate-y-[-24px] text-sm' : 'text-xl'
                                }`}
                        >
                            Tell us about your project frankly :)
                        </label>
                    </div>


                    {/* Submit button */}
                    <div className="flex items-center mt-8 group">
                        <h1 className="font-[recoleta] text-[20px] text-white ml-auto group-hover:translate-x-[10px] transition-transform duration-500 ease-in-out">
                            Send
                        </h1>
                        <div
                            className="w-[40px] h-[2px] ml-[20px] bg-[#b2ff02] group-hover:w-[60px] transition-all duration-500 ease-in-out"
                        ></div>
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
        </div >
    );
};

export default ServicesPage;
