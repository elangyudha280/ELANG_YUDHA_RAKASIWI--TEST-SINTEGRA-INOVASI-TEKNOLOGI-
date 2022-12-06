

// import help component
import HelpComponent from './contentItem/helpComponent'


const Content =()=>{
    return (
        <section className="content mx-auto relative  max-w-4xl border-2 px-2  mt-8">
             <h2 className="capitalize text-xl sm:text-3xl">jaminan harga <span className="font-bold">termurah!</span></h2>
             
             {/* help component */}
             <HelpComponent/>   
        </section>
    )
}

export default Content;