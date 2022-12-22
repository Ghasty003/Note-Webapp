import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import AuthContext from "../context/AuthContext";

const AddNote: React.FC = () => {

    const { currentUser } = useContext(AuthContext);

    const [err, setErr] = useState(false);
    const [save, setSave] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const event = e.target as HTMLFormElement;
        const title = (event[0] as HTMLInputElement).value;
        const content = (event[1] as HTMLInputElement).value;

        if (title === "" || content === "") {
            setErr(true);
            return;
        }

        setErr(false);
        setSave(true);

        await updateDoc(doc(db, "usersNote", currentUser.uid), {
            notes: arrayUnion({
                title,
                content
            })
        });

        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit} className="bg-primary h-fit p-10 sm:p-10 w-[320px] sm:w-[500px] absolute left-[50%] translate-x-[-50%] top-[20%]
            rounded-2xl shadow-xl">
            <div className="flex flex-col gap-2">
                <label className="text-xl" htmlFor="title">Title: </label>
                <input className="sm:w-[300px] rounded-xl outline-none px-3 py-1" type="text" id="title" />
            </div>

            <div className="flex flex-col gap-2 my-10">
                <label className="text-xl" htmlFor="content">Content: </label>
                <textarea className="sm:w-[300px] rounded-xl outline-none px-3 py-5" id="content" />
            </div>

            {
                err && <p className='text-center mb-14 mt-2 text-red-600'>Title or Content can't be empty.</p>
            }

            {
                save ? <button className="absolute right-12 bg-blue-300 p-2 bottom-4 rounded-lg drop-shadow-2xl" disabled>
                            Saving...
                        </button>
                    : <button className="absolute right-12 bg-blue-500 p-2 bottom-4 rounded-lg drop-shadow-2xl">Save</button>
                
            }
        </form>
    )
}


export default AddNote;