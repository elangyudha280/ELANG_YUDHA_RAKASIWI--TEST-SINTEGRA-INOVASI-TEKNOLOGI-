
import react from 'react';

// import component navbar
import Navbar from './component/navbar.jsx'

function App() {


  return (
    <>
      <section className="main relative w-full h-[300vh] bg-slate-100 font-poppins">
       {/* component navbar */}
       <Navbar/>
      </section>
    </>
  );
}

export default App;
