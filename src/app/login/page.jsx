"use client";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Decoded token:", decoded);
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-sky-50 to-white h-full">
      <div className="bg-white shadow-xl p-10 border border-gray-200 rounded-2xl w-[90%] max-w-md text-center">
        <h1 className="bg-clip-text bg-gradient-to-b from-sky-400 to-sky-600 mb-6 font-bold text-transparent text-4xl">
          Welcome!
        </h1>
        <p className="mb-8 text-gray-500">Sign in to continue to Math Helper</p>

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
