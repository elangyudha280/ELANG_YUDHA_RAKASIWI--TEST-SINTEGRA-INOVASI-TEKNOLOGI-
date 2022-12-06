


const InputSearchJumbotron =()=>{
    return (
        <div className="input-group grid grid-cols-[auto_1fr] auto-rows-auto overflow-hidden max-w-sm mx-auto mt-5 rounded-full h-[40px]  bg-white">
                <div className="icon-search w-[45px] h-full  grid place-items-center">
                <i className="fa-solid fa-magnifying-glass text-md"></i>
                </div>
                <input type="text" name="" id="" placeholder='Search...' className="w-full h-full focus:outline-none   active:border-0 active:outline-0 border-0 outline-0 pr-5 text-sm" />
        </div>
    )
}

export default InputSearchJumbotron;