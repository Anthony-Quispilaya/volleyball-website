function ContactCard({name, lastmsg, avatar, date}) {
    return (
        <div className="p-2 rounded-xl hover:bg-hover hover:cursor-pointer">
            <div className="grid grid-cols-6">
                <img className="rounded-full w-15 h-15 object-cover border-borderbox hover:cursor-pointer" alt={name} src={avatar}/>
                <div className="flex flex-col justify-center w-full pl-2 col-span-5">
                    <div className="font-bold">{name}</div>
                    <div className="text-xs text-neutral-500">{lastmsg}</div>
                    <div className='text-xs flex justify-end text-neutral-500'>{date}</div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;