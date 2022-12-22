import { signOut } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Card from "../components/Card";

const Home: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="p-10">
            <div className="flex w-full justify-around px-20 mb-12">
                <button onClick={() => navigate("/new")}
                 className="bg-primary rounded-md p-3 shadow-lg text-white font-bold">Add new note</button>
                <button className="bg-primary rounded-md p-3 shadow-lg text-white font-bold" onClick={() => {
                    signOut(auth)
                }}>Logout</button>
            </div>
            <Card />
        </div>
    );
}


export default Home;