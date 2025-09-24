
import React, { useState } from 'react';
import './Login.css'
import ThemeToggle from '../components/ThemeToggle';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import shoesImg from "../assets/imgs/ZapatosNaranjas.jpg"

function Login() {
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [username, setUsername] = useState<string | null>(null)
  const [password, setPassword] = useState<string | undefined>(undefined)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: call your auth API here
    console.log('submit', form);
  }

  return (
    <main className="min-h-screen bg-neutralLight/70 flex items-center justify-center p-4">
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card */}
        <div className="dark:bg-gray-700 bg-white shadow-xl rounded-2xl dark:shadow-gray-800 p-8 md:p-10">
          <div className="flex flex-col justify-between h-full min-h-[500px]"> {/* <- Aquí está el control en Y */}
            {/* Logo */}
            <div className="mb-6 flex items-center justify-center md:justify-start">
              <span className="text-primary font-bold tracking-wide text-xl">SPORTSLINE</span>
              <span className="mx-2 text-neutralDark/40">|</span>
              <span className="dark:text-stone-100 text-neutralDark/70 text-sm">by Riwi</span>
            </div>

            {/* Título + Toggle */}
            <div className="flex justify-between items-center">
              <h1 className="text-6xl italic font-extrabold text-neutralDark">Login</h1>
              <ThemeToggle />
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid w-full grid-cols-1 space-y-7">
                <FloatLabel>
                  <InputText className="w-full p-inputtext-sm" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <label htmlFor="username">Username</label>
                </FloatLabel>
                <FloatLabel>
                  <InputText type="password" className="w-full p-inputtext-sm mt-7" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label htmlFor="password0">Password</label>
                </FloatLabel>

                <Button className="w-full" label="Sign in" severity="warning" />
              </div>
            </form>

            {/* Footer */}
            <p className="mt-6 text-center text-neutralDark">
              Don’t have an account yet?{' '}
              <a href="/register" className="font-semibold text-primary hover:underline text-blue-600">
                Register
              </a>
            </p>
          </div>
        </div>


        {/* Banner derecha (debajo en mobile) */}
        <div className="rounded-lg overflow-hidden bg-neutralDark/90 shadow-card hidden sm:block">
          <div className="h-40 md:h-full w-full">
            <img
              src={shoesImg}
              alt="Running shoe background"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="p-4 md:p-6 bg-neutralDark">
            <p className="text-white text-2xl md:text-3xl font-semibold">
              Comfort. Speed. Power.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}



export default Login