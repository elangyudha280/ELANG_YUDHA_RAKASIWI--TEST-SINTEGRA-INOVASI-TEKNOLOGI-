
import react from 'react';

// import component navbar
import Navbar from './component/navbar'

// import component section jumbotron
import Jumbotron from './component/jumbotron'


// import component content 
import Content from './component/content'

function App() {


  return (
    <>
      <section className="main relative w-full h-[300vh] bg-slate-100 font-poppins">
       {/* component navbar */}
       <Navbar/>
       {/* component jumbotron */}
       <Jumbotron/>
       {/* component content */}
       <Content/>
      </section>
    </>
  );
}

export default App;
