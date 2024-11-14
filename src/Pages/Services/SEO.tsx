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

const SEO: React.FC = () => {

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
            <div className=' w-full flex overflow-hidden h-screen'>
                <div className='w-[30%] md:w-[50%] ml-auto overflow-hidden relative '>
                    <ThreeDVisual />
                </div>
                <div className='absolute pl-4 sm:pl-16 lg:pl-24 xl:pl-44 mt-20 flex flex-col items-start'>

                    <h1 className='font-[recoleta] text-[70px] mbl:text-[90px] sm:text-[120px] md:text-[150px] lg:text-[180px] xl:text-[220px] text-[#B2FF02]'>SEO.</h1>
                    <h1 className='font-[recoleta] text-[32px] mbl:text-[45px] lg:text-[52px] text-[#818180] md:w-[678px]'>Amplify your digital footprint with strategies that drive visibility, traffic, and sustainable growth.</h1>

                    <div className='flex items-center justify-start mt-20'>
                        <h1 className='font-[recoleta] text-[40px] text-white'>Content</h1>
                        <div className='h-[2px] w-[40px] bg-[#B2FF02] ml-[36px]'></div>
                    </div>
                    <div className='flex items-center justify-start mt-8'>
                        <h1 className='font-[recoleta] text-[40px] text-white'>Link Building</h1>
                        <div className='h-[2px] w-[40px] bg-[#B2FF02] ml-[36px]'></div>
                    </div>
                    <div className='flex items-center justify-start mt-8'>
                        <h1 className='font-[recoleta] text-[40px] text-white'>Accessibility</h1>
                        <div className='h-[2px] w-[40px] bg-[#B2FF02] ml-[36px]'></div>
                    </div>
                </div>
            </div>

            {/*Slider for Content */}
            <div className="w-full mt-[240px] md:mt-[300px]  lg:mt-[500px] relative overflow-hidden">
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
                <div className="slider twenty">
                    <div className="slide-track">
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Content</span>
                        </div>
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Content</span>
                        </div>


                        {/* Repeat the slides to ensure infinite scrolling */}
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Content</span>
                        </div>
                        <div className="slide">
                            <span className="text-[40px] sm:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Content</span>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
            </div>

            <div className='mt-40 flex flex-col mx-auto w-full'>
                <div className='flex flex-col lg:flex-row items-start justify-between w-full px-12 lg:px-[12%]'>
                    <div className=''>
                        <ul className='w-[350px] lg:w-[250px] xl:w-[350px] list-outside list-disc text-white ml-6'>
                            <li className=' text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Key Word Research</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Structuring</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Audits</span>
                            </li>
                        </ul>
                    </div>
                    <div className='xl:w-[780px] text-white text-[22px] mt-20 lg:mt-0'>
                        Crafting compelling content that ranks requires a strategic approach tailored to your audience. We start by analyzing trends and patterns to understand what resonates most, then meticulously organize the content for maximum impact. Continuous refinement and evaluation ensure that every piece not only attracts attention but also drives meaningful engagement. This dynamic process keeps your content relevant and powerful, boosting visibility in a competitive digital landscape.
                    </div>
                </div>
            </div>
            <div className='w-full px-12 lg:px-[12%] mt-20 md:mt-40'>
                <div className='w-full h-[1px] bg-[#808080]'></div>
            </div>

            {/*Slider for Link Building */}
            <div className="w-full mt-[120px] lg:mt-[200px] relative overflow-hidden">
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
                <div className="slider message-slider twenty">
                    <div className="slide-track">
                        <div className="slide">
                            <span className="text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Link Building</span>
                        </div>
                        <div className="slide">
                            <span className="text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Link Building</span>
                        </div>

                        {/* Repeat slides for infinite scrolling */}
                        <div className="slide">
                            <span className="text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Link Building</span>
                        </div>
                        <div className="slide">
                            <span className="text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Link Building</span>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
            </div>

            <div className='mt-40 flex flex-col mx-auto w-full'>
                <div className='flex flex-col lg:flex-row items-start justify-between w-full px-12 lg:px-[12%]'>
                    <div className=''>
                        <ul className='w-[350px] lg:w-[250px] xl:w-[350px] list-outside list-disc text-white ml-6'>
                            <li className='text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Guest Blogging</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Competitor</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Analysis Social</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Media Outreach</span>
                            </li>
                        </ul>
                    </div>
                    <div className='xl:w-[780px] text-white text-[22px] mt-20 lg:mt-0'>
                        Building a strong online presence involves strategic partnerships and targeted outreach. We identify the best opportunities to enhance your site’s authority, leveraging connections and content that suit with your audience. By carefully analyzing your market landscape, we uncover gaps and capitalize on them, driving quality traffic to your site. This focused approach not only boosts your rankings but also strengthens your brand's credibility across the web.
                    </div>
                </div>
            </div>
            <div className='w-full px-12 lg:px-[12%] mt-20 md:mt-40'>
                <div className='w-full h-[1px] bg-[#808080]'></div>
            </div>

            {/*Slider for Accessibility */}
            <div className="w-full mt-[120px] lg:mt-[200px] relative overflow-hidden">
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
                <div className="slider twenty">
                    <div className="slide-track">
                        <div className="slide">
                            <span className="text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Accessibility</span>
                        </div>
                        <div className="slide">
                            <span className="text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Accessibility</span>
                        </div>

                        {/* Repeat slides for infinite scrolling */}
                        <div className="slide">
                            <span className="text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Accessibility</span>
                        </div>
                        <div className="slide">
                            <span className="text-[40px] lg:text-[80px] text-[#B2FF02] font-[recoleta] mx-8">Accessibility</span>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-[#B2ff02]"></div>
            </div>

            <div className='mt-40 flex flex-col mx-auto w-full'>
                <div className='flex flex-col lg:flex-row items-start justify-between w-full px-12 lg:px-[12%]'>
                    <div className=''>
                        <ul className='w-[350px] lg:w-[250px] xl:w-[350px] list-outside list-disc text-white ml-6'>
                            <li className='text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Cache Management</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Image Optimization</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Error Monitoring</span>
                            </li>
                            <li className='mt-2 text-[#B2FF02] text-[30px]'>
                                <span className='text-white ml-1'>Speed Optimization</span>
                            </li>
                        </ul>
                    </div>
                    <div className='xl:w-[780px] text-white text-[22px] mt-20 lg:mt-0'>
                        Enhancing website accessibility is about creating a seamless, user-friendly experience that meets both user expectations and technical standards. Our process involves fine-tuning various elements to ensure your site loads quickly, runs smoothly, and remains error-free. By optimizing each component, we make your website more efficient and accessible to all users, which not only improves performance but also boosts search engine visibility and overall user satisfaction.
                    </div>
                </div>
            </div>
            <div className='w-full px-12 lg:px-[12%] mt-20 md:mt-40'>
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
                <div className='lg:w-[50%] w-full'>
                    <h1 className='leading-[60px] text-[55px] sm:leading-[75px] sm:text-[70px] md:leading-[91px] md:text-[85px] font-[recoleta] text-[#B2FF02]'>Tell us<br></br> your needs</h1>
                    <h1 className='text-[24px] mt-8 text-white font-light'>Describe your project and leave us your contact<br /> info, we’ll get back to you within 24 hours.</h1>
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
                <div className='w-[291px]'>
                    <img src={logo} className='mb-12 sm w-full' />
                </div>
                <div className='flex flex-row justify-between mx-auto w-1/2'>
                    <div className='flex flex-col justify-around md:flex-row md:items-center md:w-full'>
                        <div className=''>
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
                <div className='mt-8'>

                    <h1 className='text-white mb-4'>Tell us your needs</h1>
                    <h1 className='font-[recoleta] text-[#B2FF02] text-[38px] lg:text-[38px] flex items-center'>Contact <img className='h-12 rotate-180' src={arrow}></img></h1>
                </div>
            </div>
        </div>

    )
}

export default SEO
