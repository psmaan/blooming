import Header from './../Components/Header'
import ThreeDVisual from './../Components/Service3D'

import arrow from './../assets/images/arrow.png'


const ServicesPage = () => {



    return (
        <div className='w-screen bg-black'>
            <div className='w-full py-8'>
                <Header></Header>
            </div>
            <div className='w-full absolute flex justify-center bg-red-200 -top-[340px]'>
                <ThreeDVisual></ThreeDVisual>
            </div>
            <h1 className='text-[200px] text-[#B2FF02] mt-[180px] z-50 font-[recoleta] text-center w-full'>Services.</h1>

            <div className='w-full px-[120px] flex justify-between items-start mt-20 py-12'>
                <h1 className='text-6xl text-[#B2FF02] z-50 font-[recoleta] text-center'>Branding.</h1>
                <div className='w-[550px]'>
                    <h1 className='text-[#7a7a7a]'>Our Branding services define and develop a unique identity for your business, ensuring it stands out and resonates with your audience. Let us help you create a lasting impression</h1>
                    <h1 className='text-4xl font-[recoleta] mt-12 text-white'>Learn More</h1>
                </div>
                <div>
                    <img className='w-20' src={arrow} />
                </div>
            </div>
            <div className='w-full px-[120px] flex justify-between items-start py-8'>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta] text-center'>Strategy</h1>
                    <ul className='list-outside list-disc ml-8 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Competitive Analysis</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Brand Archetypes</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Positioning</span></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta] text-center'>Message</h1>
                    <ul className='list-outside list-disc ml-8 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Tone of Voice</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Key Messages</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Tagline</span></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-4xl text-white z-50 font-[recoleta] text-center'>Visual</h1>
                    <ul className='list-outside list-disc ml-8 mt-8 text-white'>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Brand Book Analysis</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Style Guides</span></li>
                        <li className='mt-2 text-[#B2FF02]'><span className='text-white ml-1'>Packaging</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
