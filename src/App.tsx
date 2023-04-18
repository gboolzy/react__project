import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterFrom";
const router = createBrowserRouter([
  { path: "/", element: <LoginForm /> },
  { path: "/signup", element: <RegisterForm /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
