import React, { useState } from "react";
import ThemeToggle from "../components/ThemeToggle"
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import nike from '../assets/imgs/nike.jpg';
import logo from '../assets/icons/logo.png';


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
    const [passwordError, setPasswordError] = useState<string>('')

    const handle_validation = (e : React.ChangeEvent<HTMLInputElement>) => {
        const validation = e.target.value;
        setConfirmPassword(validation);

        if (validation === '') {
            setPasswordError(''); 
        } else if (password !== validation) {
            setPasswordError('The passwords do not match.');
        } else {
            
            setPasswordError(''); 
        }
    }
    
   
    const handlePasswordChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

       
        if (confirmPassword.length > 0) {
            if (newPassword !== confirmPassword) {
                setPasswordError('The passwords do not match.');
            } else {
                setPasswordError(''); 
            }
        }
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!username || !fullName || !email || !birthday || !gender || !password) {
            setPasswordError(passwordError || 'Please complete all fields.');
            return;
        }
        if (password !== confirmPassword) {
            setPasswordError('The passwords do not match.');
            return;
        }
    };

    return (
        <div className="w-full bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Left image panel (hidden on mobile) */}
                <div className="h-[80vh] hidden md:block relative rounded-3xl overflow-hidden shadow-xl bg-white/10">
                    <img
                        src={nike}
                        alt="Sport is you"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-4 left-6">
                        <p className="text-xl md:text-2xl font-bold italic text-black drop-shadow">Sport is you.</p>
                    </div>
                </div>

                {/* Right form card */}
                <div className="h-screen sm:h-[80vh] relative rounded-3xl bg-white dark:bg-gray-800 shadow-gray-500/30 shadow-2xl p-4 sm:p-6 md:p-8 overflow-y-auto">
                    <div className="absolute right-4 top-4">
                        <ThemeToggle />
                    </div>
                    <form className="space-y-6 max-w-md mx-auto" onSubmit={handleSubmit}>
                        <div className="flex justify-center">
                            <img src={logo} alt="RIWI SportsLine Logo" className="h-20 w-auto" />
                        </div>
                        <h1 className="font-bold italic text-3xl tracking-wide">REGISTER</h1>

                        <FloatLabel>
                            <InputText className="w-full p-inputtext-sm" 
                            id="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} />
                            <label htmlFor="username">Username</label>
                        </FloatLabel>

                        <FloatLabel>
                            <InputText className="w-full p-inputtext-sm" id="fullname" value={fullName} onChange={(e) => setfullName(e.target.value)} />
                            <label htmlFor="fullname">Fullname</label>
                        </FloatLabel>

                        <FloatLabel>
                            <Calendar
                                inputId="birthday"
                                className="w-full p-inputtext-sm"
                                value={birthday}
                                onChange={(e) => setBirthday(e.value as Date | null)}
                                dateFormat="yy-mm-dd"
                                showIcon
                                placeholder="YYYY-MM-DD"
                            />
                            <label htmlFor="birthday">Birthdate</label>
                        </FloatLabel>

                        <FloatLabel>
                            <InputText className="w-full p-inputtext-sm" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </FloatLabel>

                        <FloatLabel>
                            <Dropdown
                                inputId="gender"
                                className="w-full p-inputtext-sm"
                                value={gender}
                                onChange={(e) => setgender(e.value as string)}
                                options={genderOptions}
                                optionLabel="name"
                                optionValue="value"
                                placeholder="Select a Gender"
                            />
                            <label htmlFor="gender">Gender</label>
                        </FloatLabel>

                        <FloatLabel>
                            <Password
                                inputId="password"
                                inputClassName="!w-full !block p-inputtext-sm"
                                className="!w-full !block p-inputtext-sm"
                                value={password}
                                onChange={handlePasswordChange}
                                toggleMask
                                feedback={false}
                                placeholder="Password"
                            />
                            <label htmlFor="password">Password</label>
                        </FloatLabel>

                        <FloatLabel>
                            <Password
                                inputId="confirmPassword"
                                inputClassName="!w-full !block p-inputtext-sm"
                                className="!w-full !block p-inputtext-sm"
                                value={confirmPassword}
                                onChange={handle_validation}
                                toggleMask
                                feedback={false}
                                placeholder="Confirm Password"
                            />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </FloatLabel>

                        {passwordError && (
                            <p className="text-sm text-red-500 -mt-4">{passwordError}</p>
                        )}

                        <div className="pt-2">
                            <Button
                                label="Create Account"
                                className="w-full"
                                severity="warning"
                                type="submit"
                                disabled={password !== confirmPassword || password.length === 0}
                            />
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                            Do you have an account yet?{' '}
                            <Link to="/Login" className="text-blue-600 dark:text-blue-400 hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
