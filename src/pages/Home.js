import React from 'react'
import cake from '../images/10.png'
import one from '../images/2.jpg' 
import two from '../images/3.jpg'
import three from '../images/4.jpg'
import four from '../images/5.jpg'
import five from '../images/6.jpg'
import six from '../images/7.jpg'
import seven from '../images/8.jpg'
import eight from '../images/9.jpg'
import nine from '../images/11.jpg'
import ten from '../images/1.png'
import {SiCakephp} from 'react-icons/si'

const Home = () => {
  return (
    <div className='max-w-[1200px] mx-auto min-h-[calc(100vh-50px)] font-serif  bg-slate-100'>
        <header className='grid grid-cols-1 md:grid-cols-2 gap-y-10 bg-[#C6A19B] px-3'>
            <div className='flex flex-col justify-center items-center h-[50vh] md:h-[calc(55vh-50px)]'>
                <h1 className='text-2xl lg:text-3xl text-center tracking-wide text-[#FCF6CD] font-semibold'>Delicious Cakes and desserts</h1>
                <h3 className='text-2xl lg:text-3xl text-center tracking-wide text-[#FCF6CD]'>From Bakery with delivery</h3>
                <p className='text-md text-center tracking-wider leading-7 mt-3'>Sweet Bakery with the Best Cakes and Cookies for you</p>

                <button className='py-3 px-12  mt-6 rounded-full bg-[#4B3143] text-slate-50 drop-shadow-2xl'>Start Shop</button>
            </div>
            <div className='flex flex-col justify-center items-center h-[50vh] md:h-[calc(55vh-50px)]'>
                <img src={cake} alt="" className='w-full h-full object-cover drop-shadow-2xl' />
            </div>
        </header>

        <section className='w-full '>
            <h3 className='uppercase text-xl lg:text-2xl mt-16 text-center text-[#4B3143]'>Our catalog</h3>
            <div className='w-full md:w-[70%] mx-auto grid grid-cols-2 md:grid-cols-6 gap-3 place-items-center mt-4'>
                <h5 className='uppercase text-slate-500'>custom cakes</h5>
                <h5 className='uppercase text-slate-500'>cakes</h5>
                <h5 className='uppercase text-slate-500'>cheese cakes</h5>
                <h5 className='uppercase text-slate-500'>arabic cakes</h5>
                <h5 className='uppercase text-slate-500'>cupcakes</h5>
                <h5 className='uppercase text-slate-500'>cookies</h5>
            </div>

            <div className='w-full md:w-[70%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 place-items-center mt-4'>
                <div>
                    <img src={one} alt="" className='rounded-t-2xl' />
                    <p className='bg-[#4B3143] text-center py-2 rounded-b-2xl text-slate-50'>Cuppercino</p>
                </div>
                <div>
                    <img src={two} alt="" className='rounded-t-2xl' />
                    <p className='bg-[#4B3143] text-center py-2 rounded-b-2xl text-slate-50'>Cuppercino</p>
                </div>
                <div>
                    <img src={three} alt="" className='rounded-t-2xl' />
                    <p className='bg-[#4B3143] text-center py-2 rounded-b-2xl text-slate-50'>Cuppercino</p>
                </div>
                <div>
                    <img src={four} alt="" className='rounded-t-2xl' />
                    <p className='bg-[#4B3143] text-center py-2 rounded-b-2xl text-slate-50'>Cuppercino</p>
                </div>
            </div>
        </section>

        <section className='w-full md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 place-items-center mt-20'>
            <div className='px-3'>
                <h6 className='text-xl md:text-2xl text-left uppercase pb-2 text-[#4B3143]'>About us</h6>
                <p className='leading-7 text-slate-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolor velit !</p>
                <p className='leading-7 text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi consequatur nostrum, quam mollitia commodi dolor! Quisquam sunt soluta corporis dignissimos nulla minima eum earum delectus sapiente nobis reprehenderit modi, facere et assumenda non alias inventore voluptatum quam dicta provident!</p>
            </div>
            <div className=' grid grid-cols-2 md:grid-cols-1 gap-y-3 h-full w-full'>
                <img src={five} alt=""className='h-full' />
                <img src={six} alt=""className='h-full' />
            </div>
            <div className=' grid grid-cols-2 md:grid-cols-1 h-full w-full'>
                <img src={seven} alt="" className='h-full'/>
                <img src={eight} alt="" className='h-full'/>
            </div>
        </section>


        <section className='w-full md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center mt-28'>
            <div>
                <img src={nine} alt="" />
            </div>
            <div className='h-full w-full flex flex-col justify-center items-center bg-[#ECDCBE] py-10'>
                <p className='uppercase text-xl md:text-2xl tracking-widest font-bold leading-10 mb-3 text-[#4B3143]'>deals & offer</p>
                <p className='uppercase text-md leading-8 text-slate-600'>chocolate and vanilla cake</p>
                <p className='font-semibold text-xl text-slate-900 uppercase'>30% off!!</p>
                <button className='text-md uppercase mt-12 md:mt-4 border-2 border-slate-600 py-2 px-10 rounded-full bg-[#4B3143] text-slate-50'>shop now</button>
            </div>
        </section>

        <section className='w-full md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center mt-12'>
            <div className='py-10 px-3'>
                <h6 className='uppercase text-xl md:text-2xl font-semibold mb-3'>make an order</h6>
                <p>Please fill the contact information and will get back to you in few minutes</p>
                <input type="text" placeholder='Name' className='px-3 py-1 md:py-2 placeholder:text-slate-600 0 w-[80%] mt-4 border-2 border-[#bd2e7177]' />
                <input type="text" placeholder='Phone' className='px-3 py-1 md:py-2 placeholder:text-slate-600  w-[80%] mt-4 block border-2 border-[#bd2e7162]' />
                <button className='px-10 py-1 md:py-2  mt-8 md:mt-4 uppercase rounded-full text-slate-50 bg-[#BD2E70] text-md md:text-xl'>send</button>
            </div> 
            <div>
                <img src={ten} alt="" />
            </div>
        </section>

        <footer className='w-full  mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center mt-12 bg-[#C6A19B] py-16'>
            <div className='flex flex-col justify-center items-center'>
                <SiCakephp className='text-9xl'/>
            </div>
            <div className='px-3 '>
                <ul className=''>
                <ul>
                    <li className='font-bold text-xl'>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
                </ul>
            </div>
            <div className='px-3'>
            <ul>
                    <li className='font-bold text-xl'>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
        </footer>
    </div>
  )
}

export default Home 