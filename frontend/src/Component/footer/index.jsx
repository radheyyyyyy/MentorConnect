import React from 'react'
import FooterContac from '../footerContact'

const Footer = () => {
    return (
        <div className='bg-[#53aefd] p-10 pt-5'>
            <div className='flex w-full gap-16' >
                <div className='w-full basis-full md:basis-3/5'>
                    <div>
                        <a href="/" className='logo'>GuideME</a>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='flex gap-10  mt-2'  >
                        <FooterContac header={"Program"} first="first" second="second" />
                        <FooterContac header={"Header"} first="first" second="second" />
                        <FooterContac header={"Header"} first="first" second="second" />
                    </div>
                </div>
                <div className=' flex justify-center flex-col items-start w-full  basis-full md:basis-2/5  '>
                    <p className='text-white font-bold'>Email us</p>
                    <div className='flex gap-2'>
                        <input type="text" className='border-2 border-r-2 pl-2 rounded' placeholder='Enter you email...' />
                        <button className='bg-[#0368ff] text-white p-1 px-2 rounded'>Subscribe</button>
                    </div>
                    <div className='flex gap-2 mt-2'>
                        <a href="">
                            <img src="assets/fb.svg" alt="" className='w-10' />
                        </a>
                        <a href="">
                            <img src="assets/whatsapp.svg" alt="" className='w-10' />
                        </a>
                        <a href="">
                            <img src="assets/insta.svg" alt="insta" className='w-10' />
                        </a>
                        <a href="">
                            <img src="assets/linkedin.svg" alt="insta" className='w-10' />
                        </a>
                    </div>
                    <p className='text-white font-bold'>Mobile: +9989898987</p>
                    <p className='text-white font-bold'>Email:email@gmail.com </p>
                </div>

            </div>
            <hr className='my-1' />
            <div className='text-center text-white text-sm mt-2'>
                2024 Guideme.com
            </div>
        </div>
    )
}

export default Footer