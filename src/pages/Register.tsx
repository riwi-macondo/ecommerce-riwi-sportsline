import { useState } from "react";
import ThemeToggle from "../components/ThemeToggle"
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState<string>('');
    const [fullName, setfullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [birthday, setBirthday] = useState<Date | null>(null);
    const [gender, setgender] = useState<string | null>(null);
    const genderOptions = [
        { name: 'Male', value: 'male' },
        { name: 'Female', value: 'female' },
        { name: 'Other', value: 'other' }
    ];
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    return (
        <div className="grid p-4 place-items-center">
            <div className="items-center p-4 dark:bg-gray-800 bg-gray-200 rounded-xl shadow-gray-500 shadow-xl">
                <div className="justify-self-end">
                    <ThemeToggle />
                </div>
                <div className="container-form p-5 flex flex-row">
                    <form className="space-y-7 grid grid-cols-1 w-full">
                        <div className="flex justify-center">
                            <img src="/src/assets/icons/logo.png" alt="RIWI SportsLine Logo" className="h-16 w-auto" />
                        </div>
                        <h1 className="font-bold italic text-3xl">REGISTER</h1>
                        <FloatLabel>
                            <InputText className="w-full p-inputtext-sm" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <label htmlFor="username">Username</label>
                        </FloatLabel>
                        <FloatLabel>
                            <InputText className="w-full p-inputtext-sm" id="fullname" value={fullName} onChange={(e) => setfullName(e.target.value)} />
                            <label htmlFor="fullname">Full Name</label>
                        </FloatLabel>
                        <FloatLabel>
                            <Calendar className="w-full p-inputtext-sm" value={birthday} onChange={(e) => setBirthday(e.value as Date | null)} dateFormat="yy/mm/dd" showIcon/>
                            <label htmlFor="birthday">Birthday-date</label>
                        </FloatLabel>
                        <FloatLabel>
                            <InputText className="w-full p-inputtext-sm" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </FloatLabel>
                        <FloatLabel>
                            <Dropdown className="w-full p-inputtext-sm" value={gender} onChange={(e) => setgender(e.value as null)} options={genderOptions} optionLabel="name" placeholder="Select a Gender"/>
                            <label htmlFor="gender">Gender</label>
                        </FloatLabel>
                        <FloatLabel>
                            <Password className="w-full p-inputtext-sm" value={password} onChange={(e) => setPassword(e.target.value)} toggleMask placeholder="Password"/>
                            <label htmlFor="password">Password</label>
                        </FloatLabel>
                        <FloatLabel>
                            <Password className="w-full p-inputtext-sm" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} toggleMask placeholder="Confirm Password"/>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </FloatLabel>
                        <div className="grid grid-cols-1 place-items-center space-y-4">
                            <Button label="Create Account" className="w-full sm:w-96" severity="warning" />
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Do you have an account yet?{' '}
                                <Link to="/Login" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;