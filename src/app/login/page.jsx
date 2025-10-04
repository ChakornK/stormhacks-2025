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
     <GoogleOAuthProvider clientId="380605322503-dm6qi8gculgbji1u5u0rhuhg7gcfls5b.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialResponse)=> {
          var credentialResponseDecoded = jwtDecode(credentialResponse.credential);
          console.log(credentialResponseDecoded)
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