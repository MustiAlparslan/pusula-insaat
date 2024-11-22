import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/mainlayout";
import ErrorPage from "../components/pages/Error";
import Home from "../components/pages/home";
import Contact from "../components/pages/contact";

const routes = [
    {
        path: "/",
        element: (
            <MainLayout>
                <Home />
            </MainLayout>
        ),
    },
    {
        path: '/contact',
        element: (
            <MainLayout>
                <Contact />
            </MainLayout>
        )

    },

    {
        path: "/not-found",
        element: <ErrorPage />,
    },
    {
        path: "*",
        element: <Navigate to="/not-found" />,
    },
];

export default routes;