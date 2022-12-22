import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Card from "../components/Card";

const Home: React.FC = () => {
    return (
        <div>
            <Card />
            <button onClick={() => {
                signOut(auth)
            }}>Click</button>
        </div>
    );
}


export default Home;