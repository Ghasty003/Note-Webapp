import { useContext, useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Card from "../components/Card";
import NoteContext from "../context/NoteContext";

const Home: React.FC = () => {

    const navigate = useNavigate();

    const { notes } = useContext(NoteContext);

    const [noteEmpty, setNoteEmpty] = useState<boolean>(true);

    useEffect(() => {
        if (notes.length > 0) {
            setNoteEmpty(false);
        }
    }, [notes]);

    return (
        <div className="p-10">
            <div className="flex w-full justify-between md:justify-around px-5 md:px-20 mb-12">
                <button onClick={() => navigate("/new")}
                 className="bg-primary rounded-md p-3 shadow-lg text-white font-bold">Add new note</button>
                <button className="bg-primary rounded-md p-3 shadow-lg text-white font-bold" onClick={() => {
                    signOut(auth)
                }}>Logout</button>
            </div>

            {
                noteEmpty ? <h2 className="text-center font-bold text-xl md:text-2xl">Add new Note. Your note is presently empty.</h2>

                : <div className="flex justify-center items-center flex-col w-full">
                    {
                        notes.map((note: any) => (
                            <Card key={note.content} title={note.title} content={note.content} />
                        ))
                    }
                </div>
            }
        </div>
    );
}


export default Home;