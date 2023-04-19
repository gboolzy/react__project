import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/pages/login/LoginForm";
import RegisterForm from "./components/pages/register/RegisterFrom";
import RootLayout from "./components/pages/login/Root";
import ErrorPage from "./components/pages/ErrorPage";
import ForgotPassword from "./components/pages/register/ForgotPassword";
import Dashboard from "./components/pages/dashboard/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "", element: <LoginForm /> },
      { path: "signup", element: <RegisterForm /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
