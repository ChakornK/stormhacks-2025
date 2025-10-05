"use client";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useCallback, useContext } from "react";
import { UserContext } from "../context";
import { useRouter } from "next/navigation";

export default function Login() {
  const { updateUserState } = useContext(UserContext);
  const router = useRouter();

  const handleSuccess = useCallback(async (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    await cookieStore.set("token", credentialResponse.credential);
    updateUserState({
      token: credentialResponse.credential,
      name: decoded.given_name,
      picture: decoded.picture,
    });
    router.push("/app/dashboard");
  });

  const handleError = useCallback(() => {
    console.log("Login Failed");
  });

  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-sky-50 to-white h-full">
      <div className="bg-white shadow-xl p-10 border border-gray-200 rounded-2xl w-[90%] max-w-md text-center">
        <h1 className="bg-clip-text bg-gradient-to-b from-sky-400 to-sky-600 mb-6 font-bold text-transparent text-4xl">
          Welcome!
        </h1>
        <p className="mb-8 text-gray-500">Sign in to continue to Mastermath</p>

        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        >
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleError}
              theme="outline"
              size="large"
              shape="pill"
              width="280"
            />
          </div>
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}
