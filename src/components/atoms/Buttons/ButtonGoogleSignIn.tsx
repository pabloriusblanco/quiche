import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  access_token: string;
}

interface Profile {
  picture: string;
  name: string;
  email: string;
}

const ButtonGoogleSignIn = ({ extraClasses = "", ...props }) => {
  const [user, setUser] = useState<User>();
  const [profile, setProfile] = useState<Profile>();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(undefined);
  };

  return (
    // <div>
    //   {profile ? (
    //     <div>
    //       <img src={profile.picture} alt="user image" />
    //       <h3>User Logged in</h3>
    //       <p>Name: {profile.name}</p>
    //       <p>Email Address: {profile.email}</p>
    //       <br />
    //       <br />
    //       <button onClick={logOut}>Log out</button>
    //     </div>
    //   ) : (
    //     <Button
    //       onClick={() => login()}
    //       type="button"
    //       {...props}
    //       extraClasses={`flex items-center justify-center w-full bg-[#4285F4] text-white ${extraClasses}`}
    //     >
    //       <svg
    //         className="mr-1 h-4 w-4"
    //         aria-hidden="true"
    //         focusable="false"
    //         data-prefix="fab"
    //         data-icon="google"
    //         role="img"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 488 512"
    //       >
    //         <path
    //           fill="currentColor"
    //           d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
    //         ></path>
    //       </svg>
    //       Iniciar Sesión con Google
    //     </Button>
    //   )}
    // </div>
    <button
      onClick={() => login()}
      type="button"
      {...props}
      className={` flex w-full items-center justify-center rounded-xl bg-[#4285F4] px-4 py-2 font-medium text-white text-white transition-all hover:bg-[#71a8ff] ${extraClasses}`}
    >
      <svg
        className="mr-4 h-4 w-4"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="google"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 488 512"
      >
        <path
          fill="currentColor"
          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
        ></path>
      </svg>
      Iniciar Sesión con Google
    </button>
  );
};

export default ButtonGoogleSignIn;
