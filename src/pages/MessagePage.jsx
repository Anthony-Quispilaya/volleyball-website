import ContactCard from "../components/ContactCard";
import ContactList from "../components/ContactList";
import MessageActions from "../components/MessageActions";
import contacts from "../data/contacts.json";
import conversations from "../data/conversations.json";
import { useState } from "react";

export function MessagePage() {
    const [selectedContactId, setSelectedContactId] = useState(null);
    const contact = contacts.find(contact => contact.id === selectedContactId);

    return (
        <div className="flex flex-col w-300">
            <div className="flex row-auto border rounded-xl border-borderbox">
                <div className="w-100 p-4">
                    <h1 className="text-xl font-bold mb-5">Messages</h1>
                    <ContactList onContactClick={setSelectedContactId}/>
                </div>
                <div className="border-1 border-borderbox"></div>
                <div className="w-200 space-y-4 p-4">
                    <div className="flex justify-center items-center pb-4 border-b border-borderbox">
                        {contact ?
                        (
                            <div className="flex gap-5 w-full text-xl font-bold items-center">
                                <img
                                    className="rounded-full w-15 h-15 object-cover border-borderbox hover:cursor-pointer"
                                    alt={contact.name}
                                    src={contact.avatar}  
                                />
                                <h2>{contact.name}</h2>
                            </div>
                        ) : 
                            (
                                <h2 className="font-bold text-xl">Select a contact to view messages</h2>
                            )
                    }
                        

                        {contact && (
                            <div className="w-full flex justify-end items-center">
                                <MessageActions/> 
                            </div>
                        )}
                    </div>


                    <div className="ContactSelected">
                        {selectedContactId ?
                        (
                            conversations[selectedContactId]?.map((msg, index) => (
                                <div key={index } className="mb-2">
                                    {msg.from === "me" ?
                                    "Me":
                                    contacts[selectedContactId -1].name}:{msg.text}
                                </div>
                            ))
                        ) : (null)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessagePage;