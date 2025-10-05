'use client'
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="bg-white shadow-xl border border-gray-200 rounded-2xl p-10 w-[90%] max-w-md text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-b from-sky-400 to-sky-600 bg-clip-text text-transparent mb-6">
          Welcome!
        </h1>
        <p className="text-gray-500 mb-8">Sign in to continue to Math Helper</p>

        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
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
