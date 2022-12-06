
// import component container item
import IconContainerItem from './jumbotronItem/iconContainerItem'

// component jumbotron
const Jumbotron = ()=>{
    return(
       <section className="jumbotron px-2 py-[100px] relative w-full  border-2 border-slate-900 bg-[url('./travel.jpg')] bg-cover bg-no-repeat bg-center">
        
         <div className="container-jumbotron max-w-4xl border-2 p-2 mx-auto">
             {/* component input search */}
            <h2 className="title-jumbotron text-lg  w-max py-2 px-4 rounded-md mx-auto bg-white/70 backdrop-sm text-red-600 font-bold">
                Otewe yuk !
            </h2>
            <div className="input-group grid grid-cols-[auto_1fr] auto-rows-auto overflow-hidden max-w-sm mx-auto mt-3 rounded-full h-[40px]  bg-white">
                <div className="icon-search w-[45px] h-full  grid place-items-center">
                <i className="fa-solid fa-magnifying-glass text-md"></i>
                </div>
                <input type="text" name="" id="" placeholder='Search...' className="w-full h-full focus:outline-none   active:border-0 active:outline-0 border-0 outline-0 pr-5 text-sm" />
            </div>
           {/* component icon travel */}
           <IconContainerItem />
         </div>
         
         
       </section>
    )
}

export default Jumbotron;