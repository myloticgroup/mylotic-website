import FAQ from "../components/Training/FAQ/FAQ";
import Hero from "../components/Training/Hero/Hero";
import Process from "../components/Training/Process/Process";
import Programs from "../components/Training/Programs/Programs";
import Testimonials from "../components/Training/Testimonials/Testimonials";



export default function Training() {
  return (
    <main>
      <Hero/>
      <Programs/>
      <Process/>
       <Testimonials/>
       <FAQ/>
    </main>
   
  );
}