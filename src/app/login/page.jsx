'use client'
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
export default function login(){

      const handleSuccess = (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse.credential);
    console.log("Decoded token:", decoded);
    // You can now store the user info or send it to your backend
  };

  const handleError = () => {
    console.log("Login Failed");
  };


  return(
    <>
     <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <GoogleLogin
        onSuccess={(credentialResponse)=> {
          var credentialResponseDecoded = jwtDecode(credentialResponse.credential);

        const accountId = decoded.sub;
        console.log("Decoded token:", decoded);
        console.log("Google account id (sub):", accountId);
        }}
        onError={()=> {
          console.log("Login Failed");
        }
      }
      />

      </GoogleOAuthProvider>
      </>
    


  );
}