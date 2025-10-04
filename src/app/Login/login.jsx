import { GoogleLogin } from "@react-oauth/google";
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
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>


  );
}