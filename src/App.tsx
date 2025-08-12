import PageLayout from "./pages/layouts/page-layout";
import HomePage from "./pages/home-page";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signUp-page";
import OtpVerificationPage from "./pages/otpVerification-page";
import ForgotPassword from "./pages/forgot-password-page";
import ResetPassword from "./pages/reset-password";
import TracksPage from "./pages/tracks-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <SignUpPage /> },
        { path: "otp-verification", element: <OtpVerificationPage /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "tracks", element: <TracksPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
