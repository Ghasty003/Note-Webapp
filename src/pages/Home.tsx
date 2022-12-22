import { useContext, useEffect } from "react";
import { signOut } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Card from "../components/Card";
import AuthContext from "../context/AuthContext";
import NoteContext from "../context/NoteContext";

const Home: React.FC = () => {

    const navigate = useNavigate();

    const { notes } = useContext(NoteContext);
   console.log(notes)

    return (
        <div className="p-10">
            <div className="flex w-full justify-around px-20 mb-12">
                <button onClick={() => navigate("/new")}
                 className="bg-primary rounded-md p-3 shadow-lg text-white font-bold">Add new note</button>
                <button className="bg-primary rounded-md p-3 shadow-lg text-white font-bold" onClick={() => {
                    signOut(auth)
                }}>Logout</button>
            </div>
            {
                notes.map((note: any) => (
                    <Card key={note.title} title={note.title} content={note.content} />
                ))
            }
        </div>
    );
}


export default Home;