"use client";

import "./globals.css";
import { NavBar } from "./components/NavBar";
import { UserContext } from "./context";
import { useCallback, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function RootLayout({ children }) {
  const [userState, setUserState] = useState({});

  const updateUserState = useCallback((s) => {
    setUserState({
      ...userState,
      ...s,
    });
  });

  useEffect(() => {
    if (typeof window === "undefined") return () => {};

    (async () => {
      const token = ((await cookieStore.get("token")) || { value: "unset" })
        .value;

      if (token === "unset")
        return updateUserState({
          token,
        });

      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        await cookieStore.delete("token");
        return updateUserState({
          token: "unset",
        });
      }

      updateUserState({
        token,
        name: decoded.given_name,
        picture: decoded.picture,
      });
    })();
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <UserContext value={{ ...userState, setUserState, updateUserState }}>
        <body className="select-none">
          <NavBar />
          <div className="pt-16 w-screen h-screen">{children}</div>
        </body>
      </UserContext>
    </html>
  );
}
