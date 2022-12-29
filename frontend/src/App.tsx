import HomePage from "@/routes/HomePage";
import LoginPage from "@/routes/SignupPage";
import ErrorPage from "@/routes/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Client-side router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "signup",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
