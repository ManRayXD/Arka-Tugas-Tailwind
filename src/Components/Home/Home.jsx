import './Home.css'
import { CiSearch } from "react-icons/ci";
import Galon from './Galon.png'
import { FaSearch } from "react-icons/fa";

function Home() {
    return (
      <>
      <div className='h-screen w-screen bg bg-gradient-to-r from-sky-600 from-10% to-sky-300'>
        <nav>
          <div className="flex justify-between gap-2 pl-28 pr-28 pt-4 ">
              <div className="p-2 rounded-lg">
                <a href="#" className='text-white font-bold'>Galon Kosong</a>
                <a href="#" className="mr-4 ml-14 text-white font-semibold">Home</a>
                <a href="#" className="mr-4 text-white font-semibold">Studio</a>
                <a href="#" className="mr-4 text-white font-semibold">Works</a>
                <a href="#" className="mr-4 text-white font-semibold">Contact</a>
              </div>
              <div className="p-2 rounded-lg flex justify-center">
              </div>
              <div className='flex '>
                <button className='mr-5 text-white'><FaSearch /></button>
                <button className="p-3 rounded-md bg-sky-500 text-white font-bold text-[10px]">Buy Now</button>
              </div>
            </div>
        </nav>

      <div className='w-[100%]   '>
        <div className='w-96 mt-48 ml-48 '>
          <h1 className='text-[50px] font-bold text-white '>Fresh. Clear. Natural.
          </h1>
          <p className='text-slate-300 font-bold'> ＞﹏＜ What we Do</p>
          <p className='text-slate-100'>We want to give customers the best empty gallons, from a sure source and a favorite for everyone</p>
          <button className='h-8 rounded-[5px] mt-4 text-white font-bold text-[10px] p-2 bg-sky-500'>Learn More</button>
          <div className='h-[550px] w-[550px] ml-[630px] mt-[-350px] melayang'>
          <img src={Galon} alt="Galon" /> 
          </div>
        
        </div>


      </div>
      </div>
      
      
      </>
    )
  }
  
  export default Home