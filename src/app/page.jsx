import { FluentEmoji } from "./components/FluentEmoji";

export default function Home() {

const router = useRouter();

  return (
    <main className="flex justify-center items-center gap-8 bg-gradient-to-b from-transparent to-sky-100 w-screen h-screen">
      {/* Title text */}
      <div>
        {/* Placeholder name */}
        <h2 className="text-2xl">Welcome to</h2>
        <h1 className="bg-clip-text bg-gradient-to-b from-sky-400 to-sky-500 font-bold text-transparent text-6xl">Math helper</h1>
        <p className="text-neutral-600 text-lg">Lorem ipsum</p>
      </div>

      {/* Welcome icon */}
      <div>
        <FluentEmoji emoji="👋" size="6rem" />
      </div>
    </main>
  );
}
