function FeedPost() {
    return (
        <div className="border-1 border-borderbox bg-white w-250 rounded-3xl gap-4 flex flex-col p-5">
            <div className="grid grid-cols-12">
                <img className="rounded-full w-15 h-15 object-cover border-borderbox hover:cursor-pointer" src="./marcus.png"/>
                <div className="flex flex-col justify-center">
                    <div className="font-bold">Marcus R.</div>
                    <div className="text-xs text-neutral-500">45m ago</div>
                </div>
            </div>
            <div className="text-logo text-md font-bold hover:cursor-pointer">Laurel Hill Sand Courts</div>
            <div>Yo! Pull up at 3PM today I’ve got a full team of 6 ready to go! We’ll be running games at Laurel Hill Sand Courts, best spot for some fun in the sun 🏖️🏐 Don’t be shy, come through and vibe with us! 😎🔥</div>
            <div className="flex justify-center items-center mx-10 h-125">
                <img src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4npT8ul4NgCjwy_mm8ILsgvjQJL12afJiBCVcnz1d6koGSE4phvQ0N5bnxROI4XhhfR3NYUrly8rPcwCSrEqLWWZpGGN8REFm_64CqSs-oEsAz33J9KvpJTt18gqpOh1f_1EqES-=s680-w680-h510-rw" alt="Post"
                className="object-cover w-full h-full border border-borderbox rounded-2xl hover:cursor-pointer" />
            </div>
            <div className="border-1 border-borderbox mx-10 mt-4"></div>
            <div className="flex flex-row justify-center items-center gap-50">
                <button className="hover:bg-hover rounded-2xl px-5 p-2 font-medium flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" className="w-7" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.2699 16.265L20.9754 12.1852C21.1516 11.1662 20.368 10.2342 19.335 10.2342H14.1539C13.6404 10.2342 13.2494 9.77328 13.3325 9.26598L13.9952 5.22142C14.1028 4.56435 14.0721 3.892 13.9049 3.24752C13.7664 2.71364 13.3545 2.28495 12.8128 2.11093L12.6678 2.06435C12.3404 1.95918 11.9831 1.98365 11.6744 2.13239C11.3347 2.29611 11.0861 2.59473 10.994 2.94989L10.5183 4.78374C10.3669 5.36723 10.1465 5.93045 9.86218 6.46262C9.44683 7.24017 8.80465 7.86246 8.13711 8.43769L6.69838 9.67749C6.29272 10.0271 6.07968 10.5506 6.12584 11.0844L6.93801 20.4771C7.0125 21.3386 7.7328 22 8.59658 22H13.2452C16.7265 22 19.6975 19.5744 20.2699 16.265Z" fill="#2C428C"></path> <path fillRule="evenodd" clipRule="evenodd" d="M2.96767 9.48508C3.36893 9.46777 3.71261 9.76963 3.74721 10.1698L4.71881 21.4063C4.78122 22.1281 4.21268 22.7502 3.48671 22.7502C2.80289 22.7502 2.25 22.1954 2.25 21.5129V10.2344C2.25 9.83275 2.5664 9.5024 2.96767 9.48508Z" fill="#2C428C"></path> </g></svg>
                    Like
                </button>
                <button className="hover:bg-hover rounded-2xl px-5 p-2 font-medium flex items-center gap-3">
                    <svg viewBox="0 0 32 32" version="1.1" className="w-7" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>comment 3</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-207.000000, -257.000000)" fill="#2C428C"> <path d="M231,273 C229.896,273 229,272.104 229,271 C229,269.896 229.896,269 231,269 C232.104,269 233,269.896 233,271 C233,272.104 232.104,273 231,273 L231,273 Z M223,273 C221.896,273 221,272.104 221,271 C221,269.896 221.896,269 223,269 C224.104,269 225,269.896 225,271 C225,272.104 224.104,273 223,273 L223,273 Z M215,273 C213.896,273 213,272.104 213,271 C213,269.896 213.896,269 215,269 C216.104,269 217,269.896 217,271 C217,272.104 216.104,273 215,273 L215,273 Z M223,257 C214.164,257 207,263.269 207,271 C207,275.419 209.345,279.354 213,281.919 L213,289 L220.009,284.747 C220.979,284.907 221.977,285 223,285 C231.836,285 239,278.732 239,271 C239,263.269 231.836,257 223,257 L223,257 Z" id="comment-3" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                    Comment
                </button>
                <button className="hover:bg-hover rounded-2xl px-5 p-2 font-medium flex items-center gap-3">
                    <svg className="fill-logo w-8" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path className="st0" d="M512,230.431L283.498,44.621v94.807C60.776,141.244-21.842,307.324,4.826,467.379 c48.696-99.493,149.915-138.677,278.672-143.14v92.003L512,230.431z"></path> </g> </g></svg>
                    Share
                </button>
            </div>
        </div>
    );
}

export default FeedPost;