
// component icon item 
const IconItem =({icon,textIcon}) => {
    return (
        <div className="icon-travel w-[auto] h-[auto] ">
          <div className="icon w-full rounded-full mx-auto w-[50px] h-[50px] bg-white/70 grid place-items-center cursor-pointer transition-all duration-200 hover:bg-white/100 text-lg ">
          <i className={icon}></i>
          </div>
          <p className="text-center text-sm text-white mt-1 font-semibold capitalize">{textIcon}</p>
        </div>
    )
}


// COMPONENT JUMBOTRON ITEM (CONTAINER ICON)
const IconContainerItem = ()=>{
    return(
      <section className="container-icon  mx-auto max-w-md mt-7 flex justify-center gap-2 items-center  flex-wrap">
            <IconItem icon='fa-solid fa-plane-departure text-md text-red-500' textIcon='pesawat'/>
            <IconItem icon="fa-solid fa-hotel text-red-500" textIcon='hotel' />
            <IconItem icon="fa-solid fa-train-subway text-red-500" textIcon='kereta api' />
            <IconItem icon="fa-solid fa-ship text-red-500" textIcon='pelni' />
            <IconItem icon="fa-solid fa-car text-red-500" textIcon='sewa mobil' />
            <IconItem icon="fa-solid fa-truck text-red-500" textIcon='kargo' />
      </section>
    )
}

export default IconContainerItem;