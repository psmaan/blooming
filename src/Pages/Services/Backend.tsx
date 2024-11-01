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

const Backend: React.FC = () => {

    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [projectFocus, setProjectFocus] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [project, setProject] = useState('');


    return (
        <div className='w-screen bg-black overflow-hidden flex flex-col items-start'>
            <div className='w-full pr-4 md:p-8'>
                <Header />
            </div>
            <div className=' w-full flex overflow-hidden'>
                <div className='w-[30%] md:w-[50%] ml-auto overflow-hidden relative '>
                    <ThreeDVisual />
                </div>
                <div className='absolute pl-4 sm:pl-16 lg:pl-24 xl:pl-36 mt-20 flex flex-col items-start'>

                    <h1 className='font-[recoleta] text-[45px] mbl:text-[60px] sm:text-[80px] md:text-[100px] lg:text-[160px] xl:text-[200px] text-[#B2FF02]'>Backend Development.</h1>
                    <h1 className='font-[recoleta] text-[32px] mbl:text-[45px] lg:text-[52px] text-[#818180] md:w-[678px]'>Develop resilient, high-performance backend systems that scale with your business and fuel growth</h1>

                    <div className='flex items-center justify-start mt-20'>
                        <h1 className='font-[recoleta] text-[40px] text-white'>API Development</h1>
                        <div className='h-[2px] w-[40px] bg-[#B2FF02] ml-[36px]'></div>
                    </div>
                    <div className='flex items-center justify-start mt-8'>
                        <h1 className='font-[recoleta] text-[40px] text-white'>Database</h1>
                        <div className='h-[2px] w-[40px] bg-[#B2FF02] ml-[36px]'></div>
                    </div>
                    <div className='flex items-center justify-start mt-8'>
                        <h1 className='font-[recoleta] text-[40px] text-white'>Architecture</h1>
                        <div className='h-[2px] w-[40px] bg-[#B2FF02] ml-[36px]'></div>
                    </div>
                </div>
            </div>

            {/*Slider for API Development */}
            <div className="w-full mt-[240px] md:mt-[300px]  lg:mt-[500px] relative overflow-hidden">
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <span className="text-[30px] sm:text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">API Development</span>
                        </div>
                        <div className="slide">
                            <span className="text-[30px] sm:text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">API Development</span>
                        </div>


                        {/* Repeat the slides to ensure infinite scrolling */}
                        <div className="slide">
                            <span className="text-[30px] sm:text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">API Development</span>
                        </div>
                        <div className="slide">
                            <span className="text-[30px] sm:text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">API Development</span>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
            </div>

            <div className='mt-40 flex flex-col mx-auto w-full'>
                <div className='flex flex-col lg:flex-row items-start justify-between w-full px-12 lg:px-24 '>
                    <div className=''>
                        <ul className='w-[350px] list-outside list-disc  ml-2 text-white'>
                            <li className=' text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>RESTful</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>GraphQL</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Swagger</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Apollo Server</span>
                            </li>
                        </ul>
                    </div>
                    <div className='xl:w-[780px] text-white text-[22px] mt-20 lg:mt-0'>
                        Creating seamless connections between your systems requires a thoughtful approach to API design. We focus on developing interfaces that are intuitive, scalable, and efficient, enabling smooth communication across various platforms. The process begins with understanding your unique requirements, allowing us to tailor solutions that integrate effortlessly into your existing architecture. By prioritizing performance and adaptability, we ensure that the APIs we build not only meet today’s needs but are also prepared to grow with your business, providing a reliable foundation for future innovation.
                    </div>
                </div>
            </div>
            <div className='w-full md:px-32 mt-20 md:mt-40'>
                <div className='w-full h-[1px] bg-[#808080]'>

                </div>
            </div>

            {/*Slider for Database */}
            <div className="w-full mt-[120px] lg:mt-[200px] relative overflow-hidden">
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
                <div className="slider message-slider">
                    <div className="slide-track">
                        <div className="slide">
                            <span className="text-[30px] sm:text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Database</span>
                        </div>
                        <div className="slide">
                            <span className="text-[30px] sm:text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Database</span>
                        </div>

                        {/* Repeat slides for infinite scrolling */}
                        <div className="slide">
                            <span className="text-[30px] sm:text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Database</span>
                        </div>
                        <div className="slide">
                            <span className="text-[30px] sm:text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Database</span>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
            </div>

            <div className='mt-40 flex flex-col mx-auto w-full'>
                <div className='flex flex-col lg:flex-row items-start justify-between w-full px-12 lg:px-24'>
                    <div className=''>
                        <ul className='w-[350px] list-outside list-disc ml-2 text-white'>
                            <li className='text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>MySQL</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>MongoDB</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>PostgreSQL</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Redis</span>
                            </li>
                        </ul>
                    </div>
                    <div className='xl:w-[780px] text-white text-[22px] mt-20 lg:mt-0'>
                        Designing a database architecture that powers your applications requires precision and adaptability. Our process begins with a deep dive into your data requirements, ensuring we select and configure the right solutions to manage your information efficiently. We focus on creating systems that are both robust and flexible, capable of handling complex queries while maintaining speed and reliability. By optimizing storage and retrieval processes, we ensure your data is always accessible and secure, providing a solid foundation for your applications to perform at their best.
                    </div>
                </div>
            </div>
            <div className='w-full md:px-32 mt-20 md:mt-40'>
                <div className='w-full h-[1px] bg-[#808080]'></div>
            </div>

            {/*Slider for Architecture */}
            <div className="w-full mt-[120px] lg:mt-[200px] relative overflow-hidden">
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <span className="text-[30px] sm:text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Architecture</span>
                        </div>
                        <div className="slide">
                            <span className="text-[30px] sm:text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Architecture</span>
                        </div>

                        {/* Repeat slides for infinite scrolling */}
                        <div className="slide">
                            <span className="text-[30px] sm:text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Architecture</span>
                        </div>
                        <div className="slide">
                            <span className="text-[30px] sm:text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Architecture</span>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
            </div>

            <div className='mt-40 flex flex-col mx-auto w-full'>
                <div className='flex flex-col lg:flex-row items-start justify-between w-full px-12 lg:px-24'>
                    <div className=''>
                        <ul className='w-[350px] list-outside list-disc ml-2 text-white'>
                            <li className='text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Microservices</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Serverless</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Event Driven</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Distributed</span>
                            </li>
                        </ul>
                    </div>
                    <div className='xl:w-[780px] text-white text-[22px] mt-20 lg:mt-0'>
                        Crafting a resilient backend structure involves reimagining how components interact to achieve seamless scalability and efficiency. By breaking down complex systems into manageable, independent parts, we ensure that your infrastructure can grow and adapt without compromising performance. This modular approach allows for continuous deployment and rapid innovation, all while maintaining stability and reliability.
                        Our strategy emphasizes the fluidity and responsiveness of your applications. We design architectures that can handle varying workloads with ease, ensuring your services remain agile and responsive. This forward-thinking design prepares your system to meet the demands of tomorrow, delivering performance and flexibility at every turn.
                    </div>
                </div>
            </div>
            <div className='w-full md:px-32 mt-20 md:mt-40'>
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
            <div className='w-full flex items-start py-[150px] px-[50px] xl:px-[120px] flex-col lg:flex-row'>
                <div className='lg:w-[50%] w-full mt-12'>
                    <h1 className='text-[60px] sm:text-[75px] md:text-[90px] font-[recoleta] text-[#B2FF02]'>Tell us<br></br> your needs</h1>
                    <h1 className='text-[24px] mt-8 text-white font-light'>Describe your project and leave us your contact info, we’ll get back to you within 24 hours.</h1>
                </div>
                <div className="lg:w-[50%] w-full ml-auto flex flex-col mt-20 lg:mt-0">
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
                    <h1 className='font-[recoleta] text-[38px] text-white ml-auto mt-8'>Send</h1>
                </div>
            </div>
            <div className='my-8 w-full max-w-full px-12'>
                <div className='w-full bg-[#b2ff02] h-[3px]'>

                </div>
            </div>
            <div className='py-20 w-full px-4 lg:px-12 flex flex-col md:flex-row justify-between'>
                <div className='w-1/3'>
                    <img src={logo} className='mb-12 sm w-full' />
                </div>
                <div className='flex flex-row justify-between md:ml-[30px]'>
                    <div className='flex flex-col md:flex-row md:items-center md:w-full'>
                        <div className='mr-8'>
                            <h1 className='text-[15px] lg:text-[18px] text-white'>Our work:</h1>
                            <h1 className='text-[15px] lg:text-[18px mt-6 text-white'>[UX\UI]</h1>
                            <h1 className='text-[15px] lg:text-[18px text-white'>[PRINT DESIGN]</h1>
                        </div>
                        <div>
                            <h1 className='text-[15px] lg:text-[18px text-white'>Vancouver / Canada</h1>
                            <h1 className='text-[15px] lg:text-[18px mt-6 text-white underline hidden sm:block'>hello@bloomingdesign.ca</h1>
                            <h1 className='text-[15px] lg:text-[18px mt-6 text-white underline sm:hidden'>hello@<br></br>bloomingdesign.ca</h1>
                            <h1 className='text-[15px] lg:text-[18px text-white'>778-222-2122</h1>
                        </div>
                    </div>
                    <div className='md:hidden md:w-[1px]'>
                        <h1 className='text-white text-[20px]'>Let's be friends</h1>
                        <img className='h-[50px] w-[50px] my-4' src={dribbble} />
                        <img className='h-[50px] w-[50px] my-4' src={behance} />
                        <img className='h-[50px] w-[50px] my-4' src={instagram} />
                    </div>
                </div>
                <div className='mt-8 '>

                    <h1 className='text-white mb-8'>Tell us your needs</h1>
                    <h1 className='font-[recoleta] text-[#B2FF02] text-4xl lg:text-6xl flex items-center'>Contact <img className='h-12 rotate-180' src={arrow}></img></h1>
                </div>
            </div>
        </div>

    )
}

export default Backend
