
// component icon item 
const IconItem =({icon,textIcon}) => {
    return (
        <div className="icon-travel w-[auto] h-[auto] ">
          <div className="icon w-full rounded-full mx-auto w-[50px] h-[50px] bg-white/70 grid place-items-center cursor-pointer transition-all duration-200 hover:bg-white/100 text-lg">
          <i className={icon}></i>
          </div>
          <p className="text-center text-sm text-white mt-1">{textIcon}</p>
        </div>
    )
}


// COMPONENT JUMBOTRON ITEM (CONTAINER ICON)
const IconContainerItem = ()=>{
    return(
      <section className="container-icon border-2 mx-auto max-w-md mt-5 flex justify-center gap-2 items-center  flex-wrap">
            <IconItem icon='fa-solid fa-plane-departure text-md text-red-500' textIcon='Pesawat'/>
            <IconItem icon="fa-solid fa-hotel text-red-500" textIcon='Hotel' />
            <IconItem icon="fa-solid fa-train-subway text-red-500" textIcon='Kereta Api' />
            <IconItem icon="fa-solid fa-ship text-red-500" textIcon='Pelni' />
            <IconItem icon="fa-solid fa-car text-red-500" textIcon='Sewa Mobil' />
            <IconItem icon="fa-solid fa-truck text-red-500" textIcon='Kargo' />
      </section>
    )
}

export default IconContainerItem;