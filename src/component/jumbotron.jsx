
// import component title jumbotron
import TitleJumbotron from './jumbotronItem/titleJumbotron'

// import component input search  jumbotron
import InputSearchJumbotron from './jumbotronItem/inputSearch'


// import component container item
import IconContainerItem from './jumbotronItem/iconContainerItem'

// import component sub title jumbotron
import SubTitleJumbotron from './jumbotronItem/subTitleJumbotron'

// import component sub icon jumbotron
import SubIconJumbotron from './jumbotronItem/subIconJumbotron'





// component jumbotron
const Jumbotron = ()=>{
    return(
       <section className="jumbotron px-2 pt-[100px] pb-5 relative w-full  bg-[url('./travel.jpg')] bg-cover bg-no-repeat bg-center">
         <div className="container-jumbotron max-w-4xl  p-2 mx-auto">
             {/* component title section */}
             <TitleJumbotron/>

             {/* component input search */}
            <InputSearchJumbotron/>

           {/* component icon travel */}
           <IconContainerItem />

           {/* component Sub title section */}
           <SubTitleJumbotron/>

           {/* component sub icon jumbotron */}
           <SubIconJumbotron/>
         </div>
         
         
       </section>
    )
}

export default Jumbotron;