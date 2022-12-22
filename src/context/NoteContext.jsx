import { doc, onSnapshot } from "firebase/firestore";
import React, { createContext, useEffect, useContext, useState } from "react";
import { db } from "../../firebase";
import AuthContext from "./AuthContext";

const NoteContext = createContext();

export function NoteContextProvider({ children }) {

    const { currentUser } = useContext(AuthContext);

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const getNotes = () => {
            const unsub = onSnapshot(doc(db, "usersNote", currentUser.uid), snapshot => {
                setNotes(snapshot.data()?.notes);
            })

            return () => {
                unsub();
            }
       }

       currentUser?.uid && getNotes();
    }, [currentUser?.uid]);

    return (
        <NoteContext.Provider value={{ notes }}>
            { children }
        </NoteContext.Provider>
    )
}


export default NoteContext;