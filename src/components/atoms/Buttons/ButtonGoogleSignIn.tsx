// import { googleLogout, useGoogleLogin } from "@react-oauth/google";
// import { useEffect, useState } from "react";
// // import { getUserInfo } from "../../../api/auth/googlePublic";
// import { useUser } from "../../../hooks/useUser";

// interface AccesToken {
//   access_token: string;
// }

// type Props = {
//   extraClasses?: string;
//   closeModal: () => void;
// };

// const ButtonGoogleSignIn = ({ extraClasses = "", closeModal, ...props }: Props) => {
//   const [accessToken, setAccessToken] = useState<AccesToken>();
//   const { handleLogin } = useUser();


//   const login = useGoogleLogin({
//     onSuccess: (codeResponse) => setAccessToken({access_token: codeResponse.access_token}),
//     onError: (error) => console.log("Login Failed:", error),
//   });

//   useEffect(() => {
//     if (accessToken) {
//       getUserInfo(accessToken.access_token)
//         .then((userInfo) => {
//           console.log(userInfo);
//           handleLogin(userInfo.email, userInfo.id);
//           googleLogout();
//           setAccessToken(undefined);
//           closeModal();
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [accessToken]);

//   return (
//     <button
//       onClick={() => login()}
//       type="button"
//       {...props}
//       className={` flex w-full items-center justify-center rounded-xl bg-[#4285F4] px-4 py-2 font-medium  text-white transition-all hover:bg-[#71a8ff] ${extraClasses}`}
//     >
//       <svg
//         className="mr-4 h-4 w-4"
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
//     </button>
//   );
// };

// export default ButtonGoogleSignIn;
