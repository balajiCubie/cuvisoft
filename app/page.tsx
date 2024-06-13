import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
   <div>
    <Navbar/>
     <Button className="bg-red-500 rounded-full px-4 py-2 text-white">click me</Button>
   </div>
  );
}
