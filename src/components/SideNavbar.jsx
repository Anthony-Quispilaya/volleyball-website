import {Link} from 'react-router-dom';
function SideNavbar() {
    return (
        <nav>
        <div className="h-211.5 bg-white border border-borderbox pt-10 pb-10">
            <div className="flex flex-col px-6 h-full">
            <Link to="/home" className="hover:bg-hover rounded-2xl p-3 font-medium text-lg">Home</Link>
            <Link to="/community" className="hover:bg-hover rounded-2xl p-3 font-medium text-lg">Community</Link>
            <Link to="/messages" className="hover:bg-hover rounded-2xl p-3 font-medium text-lg">Messages</Link>
            <div className="flex-grow" />
            <a href="#" className="hover:bg-hover rounded-2xl p-3 font-medium text-lg">Settings</a>
            </div>
        </div>
        </nav>
    );
}

export default SideNavbar;