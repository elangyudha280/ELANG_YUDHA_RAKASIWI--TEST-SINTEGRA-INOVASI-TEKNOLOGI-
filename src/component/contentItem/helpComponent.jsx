

const HelpItem = ({textHelp})=>{
    return (
    <div className="card w-full h-full rounded-md bg-red-700 grid place-items-center px-2 capitalize transition-all duration-200 hover:translate-y-[-10px] ">
        <a href="#help" className="text-center text-sm text-white">{textHelp}</a>
    </div>
    )
}


const HelpComponent = ()=>{
    return (
       <section className="w-full border-2 mt-[30px]">
     <h2 className=" text-xl sm:text-2xl">Butuh bantuan? Cek informasi berikut!</h2>
      <div className="help-container relative w-full h-auto mt-5 grid auto-rows-[140px] max-[350px]:grid-cols-1 max-[500px]:grid-cols-2 min-[500px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 ">
        <HelpItem textHelp='info perjalanan saat PPKM'/>
        <HelpItem textHelp='refund pesawat'/>
        <HelpItem textHelp='reschedule'/>
        <HelpItem textHelp='refund hotel'/>
        <HelpItem textHelp='reschedule hotel'/>
        <HelpItem textHelp='pusat bantuan'/>
       </div>
       </section>
    )
}

export default HelpComponent;