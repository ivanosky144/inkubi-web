import 'tailwindcss/tailwind.css';
import { AiOutlineMail } from "react-icons/ai";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { BsPersonFill } from 'react-icons/bs';

export default function Register() {

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = {
      email,
      password
    }
    router.push('/login');
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-purple shadow-xl rounded-lg h-[75vh] w-[25vw]">
        <img src="/assets/baby-incubator.png" alt="" />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center h-[75vh] w-[25vw] justify-center">
        <h1 className="font-bold mb-10 text-slate-500 text-4xl text-dark_purple">Create your first account</h1>
        <form className="space-y-4 w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
            <div className="flex items-center gap-2 p-3 bg-white_purple text-xl rounded-md">
              <BsPersonFill />
              <input
                type="username"
                id="username"
                className="w-full rounded-md p-3 bg-white_purple font-semibold outline-none text-xl"
                placeholder="Type your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 p-3 bg-white_purple text-xl rounded-md">
              <AiOutlineMail />
              <input
                type="email"
                id="email"
                className="w-full rounded-md p-3 bg-white_purple font-semibold outline-none text-xl"
                placeholder="Type your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 p-3 bg-white_purple text-xl rounded-md">
              <FaUnlockKeyhole />
              <input
                type="password"
                id="password"
                className="w-full rounded-md p-3 bg-white_purple font-semibold outline-none text-xl"
                placeholder="Type your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white rounded-2xl py-4 mt-10 bg-dark_purple font-bold hover:scale-105 flex justify-center"
          >
            REGISTER
          </button>
          <div className="flex justify-between">
            <span className='text-dark_purple font-semibold cursor-pointer'>Want to verify ?</span>
            <span className='text-dark_purple font-semibold cursor-pointer' onClick={() => router.push('/login')}>Already have an account ?</span>
          </div>
        </form>
      </div>
    </div>
  )
}
