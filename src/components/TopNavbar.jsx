function TopNavbar() {
    return (
        <nav>
            <div className="w-full h-16 bg-white drop-shadow-xs/10 flex items-center justify-between px-4">
                <div className="flex text-2xl font-bold text-blue-800">
                    <img src="./openset.jpg" className=" flex-1 items-center h-13"/>
                    <h1 className="flex items-center justify-between ml-5">OpenSet</h1>
                </div>
                <div className="flex w-64 p-2 rounded-3xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-200">
                    <input type="text" placeholder="Search..." className="outline-0 flex-1"/>
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 stroke-gray-400"xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-700 hover:bg-gray-100 p-2 rounded">Notifications</a>
                    <a href="#" className="hover:text-blue-700 hover:bg-gray-100 p-2 rounded">Messages</a>
                    <a href="#" className="hover:text-blue-700 hover:bg-gray-100 p-2 rounded">Account</a>
                </div>
            </div>
        </nav>
    );
}

export default TopNavbar;