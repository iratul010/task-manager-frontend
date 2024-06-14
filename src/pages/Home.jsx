 
import Testimonials from "../components/Testimonials";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <div>
        <div className="h-[calc(100vh-70px)] w-full flex flex-col ">
      <Hero />
      
    </div>
      <Testimonials/>
    </div>
  
  );
};

export default Home;
