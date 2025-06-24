function MessageActions() {
    return (
        <div className="actions">
            <div className="flex justify-end items-center gap-2">
                {/*Voice Call Action*/}
                <button className="p-2 rounded-full hover:bg-btn-hover">
                    <svg className="w-6"viewBox="0 0 24 24" id="meteor-icon-kit__solid-phone" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M7.45708 16.5368C11.3361 20.4151 14.2636 22.2371 16.4427 23.0169C18.6722 23.8148 20.0767 23.5057 20.811 23.2582C21.2306 23.1167 21.5577 22.8313 21.7899 22.583C22.0347 22.3211 22.2539 22.013 22.4432 21.7107C22.8224 21.1051 23.1458 20.4189 23.3651 19.9135C23.7798 18.9575 23.3784 17.8994 22.5402 17.3965L18.499 14.9717C17.6889 14.4857 16.6519 14.6133 15.9839 15.2814L15.2301 16.0351C14.4557 15.6459 12.9391 14.7391 11.0947 12.8952C9.25078 11.0508 8.34403 9.53418 7.95479 8.75983L8.70855 8.00607C9.3766 7.33802 9.50426 6.30104 9.01818 5.49091L6.59345 1.44969C6.09057 0.61155 5.03239 0.210149 4.07645 0.624868C3.57103 0.84414 2.88486 1.16751 2.27925 1.54675C1.97693 1.73607 1.66882 1.95522 1.40695 2.20003C1.15862 2.43217 0.873222 2.75929 0.73177 3.17891C0.484235 3.91324 0.175153 5.31767 0.973014 7.54726C1.7528 9.72634 3.57481 12.6538 7.45307 16.5328L7.45708 16.5368Z" fill="#2C428C"></path></g></svg>
                </button>
                {/*Video Call Action*/}
                <button className="p-2 rounded-full hover:bg-btn-hover">
                    <svg className="w-6" viewBox="0 -4 24 24" id="meteor-icon-kit__solid-video" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 3.61257L22.6838 2.05132C23.3313 1.83547 24 2.31744 24 3V13C24 13.6826 23.3313 14.1645 22.6838 13.9487L18 12.3874V13C18 14.6569 16.6569 16 15 16H3C1.34315 16 0 14.6569 0 13V3C0 1.34315 1.34315 0 3 0H15C16.6569 0 18 1.34315 18 3V3.61257z" fill="#2C428C"></path></g></svg>
                </button>
                {/*More Actions*/}
                <button className="p-2 rounded-full hover:bg-btn-hover">
                    <svg className="w-6" viewBox="0 -7 20 20" id="meteor-icon-kit__solid-ellipsis-h" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5.5C1.11929 5.5 0 4.3807 0 3C0 1.6193 1.11929 0.5 2.5 0.5C3.88071 0.5 5 1.6193 5 3C5 4.3807 3.88071 5.5 2.5 5.5zM17.5 5.5C16.1193 5.5 15 4.3807 15 3C15 1.6193 16.1193 0.5 17.5 0.5C18.8807 0.5 20 1.6193 20 3C20 4.3807 18.8807 5.5 17.5 5.5zM10 5.5C8.6193 5.5 7.5 4.3807 7.5 3C7.5 1.6193 8.6193 0.5 10 0.5C11.3807 0.5 12.5 1.6193 12.5 3C12.5 4.3807 11.3807 5.5 10 5.5z" fill="#2C428C"></path></g></svg>
                </button>
            </div>  
        </div>
    )
}

export default MessageActions;