import React, { useEffect, useRef, useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login: React.FC = () => {

    const [seePass, setSeePass] = useState<boolean>(false);

    const p1 = useRef<HTMLParagraphElement>(null!);
    const p2 = useRef<HTMLParagraphElement>(null!);
    const passwordInput = useRef<HTMLInputElement>(null!);
    const emailInput = useRef<HTMLInputElement>(null!);

    const seePassword = () => {
        setSeePass(true);
       passwordInput.current.type = "text";
    }

    const hidePassword = () => {
        setSeePass(false);
        passwordInput.current.type = "password";
    }

    useEffect(() => {

        p2.current.addEventListener("click", () => {
            passwordInput.current.focus();
        });

        p1.current.addEventListener("click", () => {
            emailInput.current.focus();
        })

        const input = document.querySelectorAll<HTMLInputElement>("input");
        input.forEach((ele, index) => {
            ele.addEventListener("focus", () => {
                if (index === 0) {
                    if(p1.current.classList.contains("top-1")) {
                        p1.current.classList.replace("top-1", "-top-2");
                        p1.current.classList.add("text-xs");
                    }
                }

                if (index === 1) {
                    if(p2.current.classList.contains("top-1")) {
                        p2.current.classList.replace("top-1", "-top-2");
                        p2.current.classList.add("text-xs");
                    }
                }
            })

            ele.addEventListener("blur", () => {
                if(index === 0 && input[0].value == "" && p1.current.classList.contains("-top-2")) {
                    p1.current.classList.replace("-top-2", "top-1");
                    p1.current.classList.remove("text-xs");
                }

                if(index === 1 && input[1].value == "" && p2.current.classList.contains("-top-2")) {
                    p1.current.classList.replace("-top-2", "top-1");
                    p1.current.classList.remove("text-xs");
                }
            });
        })
    }, []);

    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const event = e.target as HTMLFormElement;

        const email = (event[0] as HTMLInputElement).value;
        const password = (event[1] as HTMLInputElement).value;

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch(e: unknown) {
            console.log((e as Error).message);
        }
        
    }

    return (
        <div className='flex justify-center items-center py-16'>
           <div className='bg-white w-[400px] h-[450px] shadow-2xl flex flex-col items-center rounded-2xl p-5'>
            <h2 className='text-2xl font-bold'>Login</h2>
            <p>Enter your details to sign in</p>
            <form className='w-full mt-4' onSubmit={handleLogin}>
                <div className='flex justify-between items-center pr-3 relative w-[85%] m-auto border border-gray rounded-md my-4'>
                    <input ref={emailInput} className='w-[90%] outline-none p-2' type="text" />
                    <p ref={p1} className='absolute top-1 text-gray-500 bg-white left-3'>Email</p>
                    <AiOutlineMail />
                </div>
                <div className='flex justify-between items-center pr-3 relative w-[85%] m-auto border border-gray rounded-md'>
                    <input type="password" className='w-[90%] outline-none p-2' ref={passwordInput} />
                    <p ref={p2} className='absolute top-1 text-gray-500 bg-white left-3'>Password</p>
                    { seePass ? <FiEyeOff className='cursor-pointer' onClick={hidePassword} />
                        : <IoEyeOutline className='cursor-pointer' onClick={seePassword} />
                    }
                </div>
                <div className='text-end pr-6 pt-3'>
                    <Link to="" className='text-sm text-orange-400 text-end'>Forgot password?</Link>
                </div>
                {/* {
                    err && <p className='text-center mt-2 text-red-600'>Something went wrong, try again.</p>
                } */}
                <div className='flex justify-center items-center my-6'>
                    <button className='bg-orange-400 text-white w-[200px] p-2 rounded-xl text-center'>Sign In</button>
                </div>

                <div className='text-center text-sm'>
                    <p>Don't have an account? <Link to="/register" className='text-orange-400'>Register</Link></p>
                </div>
            </form>
           </div>
        </div>
    );
}

export default Login;