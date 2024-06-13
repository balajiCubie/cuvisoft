import { FaSearch } from "react-icons/fa";
const SecondaryNavbar = () => {
    return (
    <div className="items-center space-x-4 hidden sm:flex mt-2 text-center">
         <a href="#" className="text-gray-300 hover:text-blue-600 ml-8 pr-4">Products</a>
          <a href="#" className="text-gray-300 hover:text-blue-600 pr-2">Solutions</a>
          <a href="#" className="text-gray-300 hover:text-blue-600 pr-2">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-blue-600 pr-2">Documentation</a>
          <a href="#" className="text-gray-300 hover:text-blue-600 pr-2">Learn</a>
          <a href="#" className="text-gray-300 hover:text-blue-600 pr-2">Partner Network</a>
          <a href="#" className="text-gray-300 hover:text-blue-600 pr-2">CuviSoft Marketplace</a>
          <a href="#" className="text-gray-300 hover:text-blue-600 pr-2">Customer Enablement</a>
          <a href="#" className="text-gray-300 hover:text-blue-600 pr-2">Events</a>
          <a href="#" className="text-gray-300 hover:text-blue-600 pr-2">Explore More</a>
          <a href="#" className="text-gray-300 hover:text-blue-600 pr-2"><FaSearch/></a>

    </div>
    );
}

export default SecondaryNavbar;
