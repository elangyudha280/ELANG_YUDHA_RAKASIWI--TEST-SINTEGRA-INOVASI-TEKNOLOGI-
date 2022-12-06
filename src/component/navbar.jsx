import {useRef} from 'react';


// component navbar
const Navbar = ()=>{

    // useRef untuk element nav item di mobile
    const hamburger = useRef(null)

    // useRef untuk element nav item di mobile
    const navItem = useRef(null)

    // event toggle navbar hamburger
   const hamToggle = (e)=>{
    // tambah class ke icon bar navbar jika ada
        hamburger.current.classList.toggle('bg-hamburger')

            if(navItem.current.classList.contains('opacity-0')){
                setTimeout(()=>{
                    navItem.current.classList.remove('opacity-0')
                },100)
                navItem.current.classList.remove('hidden')            
            }else{
                setTimeout(() => {
                navItem.current.classList.add('hidden')
                }, 100);
                navItem.current.classList.add('opacity-0')
            }
   }


    return (
             <nav className="navbar w-full fixed p-3 bg-red-500 z-[10] ">
            <section className="nav-container  mx-auto relative  max-w-4xl flex flex-col sm:flex-row ">
             <a href="#nav" className="title-nav text-3xl text-white font-bold no-underline s">Neutral</a>
             <div className="nav-item text-white text-sm flex hidden items-center justify-center flex-col  gap-y-[13px]  px-3 py-5 absolute w-full -bottom-[230px] rounded-md bg-red-500 opacity-0 transition-all duration-200  sm:bg-transparent sm:relative  sm:justify-end  sm:grow sm:bottom-0 sm:flex-row sm:gap-x-4 sm:p-0 sm:rounded-none sm:flex sm:opacity-100 "
             ref={navItem}
             >
                 <a href="#nav" className="text-inherit no-underline"> Elite Rewards</a>
                 <a href="#nav" className="text-inherit no-underline">Cek Order</a>
                 <a href="#nav" className="text-inherit no-underline px-4 py-2 w-full sm:w-[auto] transition-all duration-200 text-center hover:bg-red-700 rounded-[5px]">Masuk</a>
                 <button className="px-4 py-2 bg-red-700 rounded-[5px] w-full sm:w-[auto]">Daftar</button>
             </div>
             <button className="hamburger grid place-items-center absolute right-0 top-0 w-[40px] rounded-full text-white  transition-all duration-200  hover:bg-hamburger active:scale-90  h-full sm:hidden "
             onClick={hamToggle}
             ref={hamburger}
             >
              <i className="icon-nav fa-solid fa-bars text-lg"></i>
             </button> 
            </section> 
        </nav>
    ) 
}

export default Navbar;