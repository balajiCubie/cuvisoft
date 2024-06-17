
import BodyCard from "@/components/bodycard/BodyCard";
import CuvisoftHero from "@/components/bodycard/CuvisoftHero";
import SecBodyCard from "@/components/bodycard/SecBodyCard";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";



export default function Home() {
  return (
   <div>

    <Navbar/>
    <CuvisoftHero/>
    <BodyCard/>
    <SecBodyCard/>
    <Footer/>
   </div>
  );
}
