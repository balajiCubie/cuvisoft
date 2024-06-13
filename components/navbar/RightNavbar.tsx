const RightNavbar = () => {
    return ( <div>
        <div className="flex items-center space-x-4 text-sm">
          <a href="#" className="text-gray-300  hover:text-blue-600 pr-2">About CuviSoft</a>
          <a href="#" className="text-gray-300  hover:text-blue-600 pr-2">Contact Us</a>
          <a href="#" className="text-gray-300 hover:text-blue-600 pr-2">Support</a>
          <a href="#" className="text-gray-300 hover:text-blue-600 pr-2">My Account</a>
          <a href="#" className="text-gray-300 hover:text-blue-600 pr-2">Sign In</a>
          <a href="#" className="bg-blue-500 text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-blue-600 ">Create an CuviSoft Account</a>
        </div>
    </div> );
}

export default RightNavbar;
