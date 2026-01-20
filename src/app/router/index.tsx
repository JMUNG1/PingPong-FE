import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Auth/Login";
import SignupPage from "@/pages/Auth/Signup";
import { PATH } from "./path";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: PATH.home, element: <HomePage /> },
      { path: PATH.login, element: <LoginPage /> },
      { path: PATH.signup, element: <SignupPage /> },
    ],
  },
]);
