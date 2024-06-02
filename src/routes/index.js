// import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import AuthLayout from "../layouts/auth";
import SignInPage from "../pages/auth/SignIn";
import SignUpPage from "../pages/auth/SignUp";
import ForgotPasswordPage from "../pages/auth/ForgotPassword";
import ResetPasswordPage from "../pages/auth/ResetPassword";
import VerifyPasswordPage from "../pages/auth/VerifyPassword";
// import LoadingScreen from "../components/LoadingScreen";

// const Loadable = (Component) => (props) => {
//   return (
//     <Suspense fallback={<LoadingScreen />}>
//       <Component {...props} />
//     </Suspense>
//   );
// };

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <SignInPage />,
        },
        {
          path: "register",
          element: <SignUpPage />,
        },
        { path: "forgot-password", element: <ForgotPasswordPage /> },
        { path: "reset-password", element: <ResetPasswordPage /> },
        { path: "verify", element: <VerifyPasswordPage /> },
      ],
    },
    // {
    //   path: "/",
    //   element: <DashboardLayout />,
    //   children: [
    //     { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
    //     { path: "app", element: <GeneralApp /> },

    //     { path: "404", element: <Page404 /> },
    //     { path: "*", element: <Navigate to="/404" replace /> },
    //   ],
    // },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// const GeneralApp = Loadable(
//   lazy(() => import("../pages/dashboard/GeneralApp"))
// );
// const Page404 = Loadable(lazy(() => import("../pages/Page404")));

// const VerifyPage = Loadable(lazy(() => import("../pages/auth/Verify")));
