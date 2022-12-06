

const SubIcon = ({icon,textIcon})=>{
  return (
    <div className="icon-travel w-[auto] h-[auto] ">
          <div className="icon w-full rounded-full mx-auto w-[50px] h-[50px] bg-white/70 grid place-items-center cursor-pointer transition-all duration-200 hover:bg-white/100 text-lg  ">
          <i className={icon}></i>
          </div>
          <p className="text-center text-sm text-white mt-1 font-semibold capitalize">{textIcon}</p>
      </div>
  )
}


const SubIconJumbotron = ()=>{
    return (
      <section className="container-icon  mx-auto max-w-md mt-7 flex justify-center gap-2 items-center  flex-wrap">
        <SubIcon icon="fa-solid fa-plane-departure text-md text-red-500" textIcon='pesawat' />
        <SubIcon icon="fa-solid fa-building text-md text-red-500" textIcon='land arragement' />
        <SubIcon icon="fa-solid fa-credit-card text-md text-red-500" textIcon='paylater' />
        <SubIcon icon="fa-solid fa-passport text-md text-red-500" textIcon='visa' />

        </section>      
    )
}

export default SubIconJumbotron;