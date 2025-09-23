import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle"
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from "primereact/inputtext";


function Register() {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    return (
        <div className="grid p-4 place-items-center w-full h-screen">
            <div className="items-center p-4 bg-blue-300 rounded shadow shadow-xl w-96 h-96">
                <div className="justify-self-end">
                    <ThemeToggle />
                </div>
                <div className="container-form p-5 flex flex-row">
                    <form className="space-y-7 grid grid-cols-1 w-full">
                        <FloatLabel>
                            <InputText className="w-full" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <label htmlFor="username">Username</label>
                        </FloatLabel>
                        <FloatLabel>
                            <InputText className="w-full" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </FloatLabel>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register