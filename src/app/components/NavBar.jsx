"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { PrimaryButton } from "./Button";
import { LogoutSquare01Icon, UserIcon } from "@hugeicons/core-free-icons/index";
import { useContext, useState } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/navigation";

export const NavBar = () => {
  const { token } = useContext(UserContext);
  const router = useRouter();

  return (
    <nav className="top-0 fixed flex justify-between items-center bg-white border-gray-200 border-b-2 w-screen h-16">
      {/* Nav links */}
      <div className="flex items-center gap-2 p-4">
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => {
            if (token && token !== "unset") {
              router.push("/app/dashboard");
            } else {
              router.push("/");
            }
          }}
        >
          <h1 className="bg-clip-text bg-gradient-to-b from-sky-400 to-sky-500 font-bold text-transparent text-3xl">
            Math helper
          </h1>
        </button>
      </div>

      {/* User */}
      <div className="relative flex items-center mr-1">
        {token && token !== "unset" ? (
          <LoggedInUser />
        ) : (
          <PrimaryButton onClick={() => router.push("/login")}>
            Log in
          </PrimaryButton>
        )}
      </div>
    </nav>
  );
};

const LoggedInUser = () => {
  const { name, picture, setUserState, updateUserState } =
    useContext(UserContext);
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <button
        className={`${
          showMenu ? "bg-neutral-100" : ""
        } flex items-center gap-2 hover:bg-neutral-100 px-4 py-2 rounded-lg`}
        onClick={() => setShowMenu(true)}
      >
        <p>{name || "Username"}</p>
        <div className="border-2 border-gray-200 rounded-full overflow-clip">
          {picture ? (
            <img
              width="32"
              height="32"
              draggable="false"
              src={picture}
              onError={() =>
                updateUserState({
                  picture: null,
                })
              }
            />
          ) : (
            <svg
              width="32"
              height="32"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="128" height="128" fill="white" />
              <path
                d="M7 128C7 104.804 25.804 86 49 86H79C102.196 86 121 104.804 121 128H7Z"
                fill="#D9D9D9"
              />
              <circle cx="64" cy="48" r="27" fill="#D9D9D9" />
            </svg>
          )}
        </div>
      </button>

      {showMenu && (
        <>
          <div
            className="top-0 right-0 bottom-0 left-0 fixed"
            onClick={() => {
              setShowMenu(false);
            }}
          ></div>
          <div className="top-14 right-0 absolute flex *:flex flex-col items-stretch *:items-center *:gap-1 bg-white shadow-lg *:m-1 *:px-2 *:py-1 border-2 border-gray-200 rounded-xl *:rounded-lg min-w-40">
            <button
              className="hover:bg-sky-400 border-gray-100 border-b hover:text-white"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <HugeiconsIcon icon={UserIcon} size={16} />
              Profile
            </button>
            <button
              className="hover:bg-red-500 text- hover:text-white"
              onClick={async () => {
                await cookieStore.delete("token");
                setUserState({ token: "unset" });
                setShowMenu(false);
                router.push("/");
              }}
            >
              <HugeiconsIcon icon={LogoutSquare01Icon} size={16} />
              Logout
            </button>
          </div>
        </>
      )}
    </>
  );
};
