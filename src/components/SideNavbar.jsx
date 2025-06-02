function SideNavbar() {
    return (
        <nav>
        <div class="h-211.5 bg-white border border-borderbox pt-10 pb-10">
            <div class="flex flex-col px-6 h-full">
            <a href="#" class="hover:bg-hover rounded-2xl p-3 font-medium text-lg">Home</a>
            <a href="#" class="bg-activebutton hover:bg-hover rounded-2xl p-3 font-medium text-lg">Community</a>
            <a href="#" class="hover:bg-hover rounded-2xl p-3 font-medium text-lg">Messages</a>
            <div class="flex-grow" />
            <a href="#" class="hover:bg-hover rounded-2xl p-3 font-medium text-lg">Settings</a>
            </div>
        </div>
        </nav>
    );
}

export default SideNavbar;