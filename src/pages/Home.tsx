import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Home: React.FC = () => {
    return (
        <div>
            <p>Hello world</p>
            <button onClick={() => {
                signOut(auth)
            }}>Click</button>
        </div>
    );
}


export default Home;