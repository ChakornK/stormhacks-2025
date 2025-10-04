'use client'
import { FluentEmoji } from "./components/FluentEmoji";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { GoogleOAuthProvider } from "@react-oauth/google";
export default function Home() {

const router = useRouter();

  return (
    <GoogleOAuthProvider clientId="380605322503-dm6qi8gculgbji1u5u0rhuhg7gcfls5b.apps.googleusercontent.com">
    <main className="flex justify-center items-center gap-8 bg-gradient-to-b from-transparent to-sky-100 w-screen h-screen">
      {/* Title text */}
      <div>
        {/* Placeholder name */}
        <h2 className="text-2xl">Welcome to</h2>
        <h1 className="bg-clip-text bg-gradient-to-b from-sky-400 to-sky-500 font-bold text-transparent text-6xl">Math helper</h1>
        <p className="text-neutral-600 text-lg">Lorem ipsum</p>
      </div>

       <button type="button" onClick={() => router.push('/login')}>
     Login
    </button>

      {/* Welcome icon */}
      <div>
        <FluentEmoji emoji="👋" size="6rem" />
      </div>
    </main>
    </GoogleOAuthProvider>
  );
}
