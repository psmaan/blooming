import { useState } from 'react';
import Header from './../Components/Header';
import ThreeDVisual from './../Components/Service3D';
import arrow from './../assets/images/arrow.png';
import logo from './../assets/images/bloominglogo.png';

const ServicesPage = () => {
    // State to control accordion open/close state
    const [isBrandingOpen, setIsBrandingOpen] = useState(false);
    const [isSeoOpen, setIsSeoOpen] = useState(false);
    const [isUxuiOpen, setIsUxuiOpen] = useState(false);
    const [isDevopsOpen, setIsDevopsOpen] = useState(false);
    const [isBackendOpen, setIsBackendOpen] = useState(false);
    const [isAIOpen, setIsAIOpen] = useState(false);
    const [isWebOpen, setIsWebOpen] = useState(false);


    // Toggle function to handle accordion state for Branding
    const toggleBrandingAccordion = () => {
        setIsBrandingOpen(!isBrandingOpen);
    };

    // Toggle function to handle accordion state for SEO
    const toggleSeoAccordion = () => {
        setIsSeoOpen(!isSeoOpen);
    };

    // Toggle function to handle accordion state for UX/UI
    const toggleUxuiAccordion = () => {
        setIsUxuiOpen(!isUxuiOpen);
    };

    // Toggle function to handle accordion state for DevOps
    const toggleDevopsAccordion = () => {
        setIsDevopsOpen(!isDevopsOpen);
    };

    // Toggle function to handle accordion state for Backend
    const toggleBackendAccordion = () => {
        setIsBackendOpen(!isBackendOpen);
    };

    // Toggle function to handle accordion state for AI Solutions
    const toggleAIAccordion = () => {
        setIsAIOpen(!isAIOpen);
    };

    // Toggle function to handle accordion state for Web Development
    const toggleWebAccordion = () => {
        setIsWebOpen(!isWebOpen);
    };

    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [projectFocus, setProjectFocus] = useState(false);

    return (
        <div className='w-screen bg-black'>
            <div className='w-full py-8'>
                <Header />
            </div>
            <div className='w-full absolute flex justify-center -top-[340px]'>
                <ThreeDVisual />
            </div>
            <h1 className='text-[200px] text-[#B2FF02] mt-[180px] z-50 font-[recoleta] text-center w-full'>Services.</h1>

            {/* Branding Accordion Header */}
            <div className='w-full px-[120px] flex justify-between items-start mt-20 py-12'>
                <h1 className='text-6xl text-[#B2FF02] z-50 font-[recoleta]'>Branding.</h1>
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
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>Strategy</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
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
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>Message</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
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
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>Visual</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
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
                <div className='w-full mx-[120px] h-[3px] bg-[#808080] rounded-full'>

                </div>
            </div>

            {/* SEO Accordion Header */}
            <div className='w-full px-[120px] flex justify-between items-start mt-20 py-12'>
                <h1 className='text-6xl text-[#B2FF02] z-50 font-[recoleta]'>SEO.</h1>
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
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>Content</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
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
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>Link Building</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
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
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>Accessibility</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
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
            <div className='w-full flex justify-center my-4'>
                <div className='w-full mx-[120px] h-[3px] bg-[#808080] rounded-full'>

                </div>
            </div>
            {/* UIUX Accordion Header */}
            <div className='w-full px-[120px] flex justify-between items-start mt-20 py-12'>
                <h1 className='text-6xl text-[#B2FF02] z-50 font-[recoleta]'>UX/UI.</h1>
                <div className='w-[550px]'>
                    <h1 className='text-[#7a7a7a]'>Focuses on creating intuitive, visually appealing interfaces with seamless user experiences, ensuring responsive design and fast, efficient performance across all devices.</h1>
                    <h1 className='text-4xl font-[recoleta] mt-12 text-white'>Learn More</h1>
                </div>
                <div onClick={toggleUxuiAccordion} className='cursor-pointer'>
                    <img
                        className={`w-20 transform transition-transform duration-300 ${isSeoOpen ? 'rotate-180' : 'rotate-0'}`}
                        src={arrow}
                        alt="Arrow"
                    />
                </div>
            </div>
            {/* UIUX Accordion Content - Hidden until isSeoOpen is true */}
            <div className={`w-full px-[120px] flex justify-between items-start py-8 accordion-content ${isUxuiOpen ? 'accordion-content-open' : ''}`}>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>UX</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>UX Audit</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>User Flows</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Prototyping</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>UI</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Research</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Wireframes</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Design System</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Responsive</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>Apps</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Web, mobile app</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Interactions</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Mobile First</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full flex justify-center my-4'>
                <div className='w-full mx-[120px] h-[3px] bg-[#808080] rounded-full'>

                </div>
            </div>
            {/* DevOps Accordion Header */}
            <div className='w-full px-[120px] flex justify-between items-start mt-20 py-12'>
                <h1 className='text-6xl text-[#B2FF02] z-50 font-[recoleta]'>DevOps.</h1>
                <div className='w-[550px]'>
                    <h1 className='text-[#7a7a7a]'>Speeds up delivery with automated CI/CD, efficient infrastructure management, and real-time monitoring, ensuring scalable, reliable, and optimized operations.</h1>
                    <h1 className='text-4xl font-[recoleta] mt-12 text-white'>Learn More</h1>
                </div>
                <div onClick={toggleDevopsAccordion} className='cursor-pointer'>
                    <img
                        className={`w-20 transform transition-transform duration-300 ${isDevopsOpen ? 'rotate-180' : 'rotate-0'}`}
                        src={arrow}
                        alt="Arrow"
                    />
                </div>
            </div>
            {/* DevOps Accordion Content - Hidden until isSeoOpen is true */}
            <div className={`w-full px-[120px] flex justify-between items-start py-8 accordion-content ${isDevopsOpen ? 'accordion-content-open' : ''}`}>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>CI/CD</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Jenkins</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>GitLab</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Travis</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Azure</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>Orchestration</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Ansible</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Kubernetes</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Terraform</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>Monitoring</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Collection</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Aggregation</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Incident Response</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Analysis</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full flex justify-center my-4'>
                <div className='w-full mx-[120px] h-[3px] bg-[#808080] rounded-full'>

                </div>
            </div>
            {/* Backend Accordion Header */}
            <div className='w-full px-[120px] flex justify-between items-start mt-20 py-12'>
                <h1 className='text-6xl text-[#B2FF02] z-50 font-[recoleta]'>Backend Development.</h1>
                <div className='w-[550px]'>
                    <h1 className='text-[#7a7a7a]'>Builds robust, scalable server-side applications, ensuring seamless data management and system performance. We handle the backend, so your front-end excels.</h1>
                    <h1 className='text-4xl font-[recoleta] mt-12 text-white'>Learn More</h1>
                </div>
                <div onClick={toggleBackendAccordion} className='cursor-pointer'>
                    <img
                        className={`w-20 transform transition-transform duration-300 ${isBackendOpen ? 'rotate-180' : 'rotate-0'}`}
                        src={arrow}
                        alt="Arrow"
                    />
                </div>
            </div>
            {/* Backend Content - Hidden until isSeoOpen is true */}
            <div className={`w-full px-[120px] flex justify-between items-start py-8 accordion-content ${isBackendOpen ? 'accordion-content-open' : ''}`}>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>API Development</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>RESTful</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>GraphQL</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Swagger</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Apollo Server</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>Database</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>MySQL</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>MongoDB</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>PostgreSQL</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Redis</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>Architecture</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Microservices</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Serverless</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Event-Driven</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Distributed</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full flex justify-center my-4'>
                <div className='w-full mx-[120px] h-[3px] bg-[#808080] rounded-full'>

                </div>
            </div>
            {/* AI Solutions Accordion Header */}
            <div className='w-full px-[120px] flex justify-between items-start mt-20 py-12'>
                <h1 className='text-6xl text-[#B2FF02] z-50 font-[recoleta]'>AI Solutions.</h1>
                <div className='w-[550px]'>
                    <h1 className='text-[#7a7a7a]'>Delivers cutting-edge, intelligent systems tailored to your business needs. We harness the power of AI to automate processes, enhance decision-making, and drive innovation.</h1>
                    <h1 className='text-4xl font-[recoleta] mt-12 text-white'>Learn More</h1>
                </div>
                <div onClick={toggleAIAccordion} className='cursor-pointer'>
                    <img
                        className={`w-20 transform transition-transform duration-300 ${isAIOpen ? 'rotate-180' : 'rotate-0'}`}
                        src={arrow}
                        alt="Arrow"
                    />
                </div>
            </div>
            {/* AI Solutions Accordion Content - Hidden until isSeoOpen is true */}
            <div className={`w-full px-[120px] flex justify-between items-start py-8 accordion-content ${isAIOpen ? 'accordion-content-open' : ''}`}>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>Custom AI</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Hugging Face</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>TensorFlow</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>OpenCV</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>Process Optimization</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>H20.ai</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>BluePrism</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>RapidMiner</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta]  '>AI Integration</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>MuleSoft</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>SnapLogic</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Boomi</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full flex justify-center my-4'>
                <div className='w-full mx-[120px] h-[3px] bg-[#808080] rounded-full'>

                </div>
            </div>
            {/* Web3 Accordion Header */}
            <div className='w-full px-[120px] flex justify-between items-start mt-20 py-12'>
                <h1 className='text-6xl text-[#B2FF02] z-50 font-[recoleta]'>UX/UI.</h1>
                <div className='w-[550px]'>
                    <h1 className='text-[#7a7a7a]'>Creates decentralized, blockchain-powered applications that empower your business. We focus on security, transparency, and innovation, bringing you into the future of the internet.</h1>
                    <h1 className='text-4xl font-[recoleta] mt-12 text-white'>Learn More</h1>
                </div>
                <div onClick={toggleWebAccordion} className='cursor-pointer'>
                    <img
                        className={`w-20 transform transition-transform duration-300 ${isWebOpen ? 'rotate-180' : 'rotate-0'}`}
                        src={arrow}
                        alt="Arrow"
                    />
                </div>
            </div>
            {/* Web3 Accordion Content - Hidden until isSeoOpen is true */}
            <div className={`w-full px-[120px] flex justify-between items-start py-8 accordion-content ${isWebOpen ? 'accordion-content-open' : ''}`}>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta]'>Infrastructure</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Setup & Maintenance</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Monitoring</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Data Storage</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta]'>Smart Contracts</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Development</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Deployment</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Audit</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta]'>dApps</h1>
                    <ul className='list-outside list-disc  ml-2 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Wallet Integration</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>User Authentication</span>
                        </li>
                        <li className='mt-2 text-[#B2FF02]'>
                            <span className='text-white ml-1'>Governance</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full flex justify-center my-4'>
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
            <div className='my-12 w-full max-w-full px-12'>
                <div className='w-full bg-[#b2ff02] h-[3px]'>

                </div>
            </div>
            <div className='py-12 w-full px-12 flex justify-between'>
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
    );
};

export default ServicesPage;
