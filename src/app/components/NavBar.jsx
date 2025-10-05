import { PrimaryButton, SecondaryButton } from "./Button";

// TODO: dynamically determine this
const isLoggedIn = true;

export const NavBar = () => {
  return (
    <nav className="top-0 sticky flex justify-between items-center bg-white border-gray-200 border-b-2 h-16">
      {/* Nav links */}
      <div className="flex items-center gap-2 p-4">
        <h1 className="bg-clip-text bg-gradient-to-b from-sky-400 to-sky-500 font-bold text-transparent text-3xl">Math helper</h1>
      </div>

      {/* User */}
      <div className="flex items-center mr-2">
        {isLoggedIn ? (
          <button className="flex items-center gap-2 hover:bg-neutral-100 p-2 rounded-lg">
            <p>Username</p>
            <div className="border-2 border-gray-200 rounded-full overflow-clip">
              <svg width="32" height="32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="128" height="128" fill="white" />
                <path d="M7 128C7 104.804 25.804 86 49 86H79C102.196 86 121 104.804 121 128H7Z" fill="#D9D9D9" />
                <circle cx="64" cy="48" r="27" fill="#D9D9D9" />
              </svg>
            </div>
          </button>
        ) : (
          <PrimaryButton>Log in</PrimaryButton>
        )}
      </div>
    </nav>
  );
};
