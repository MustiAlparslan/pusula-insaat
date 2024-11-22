import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/mainlayout";
import ErrorPage from "../components/pages/Error";
import Home from "../components/pages/home";
import Contact from "../components/pages/contact";
import About from "../components/pages/about";
import References from "../components/pages/references";
import Ongoing from "../components/pages/ongoing";

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
        path: '/about',
        element: (
            <MainLayout>
                <About />
            </MainLayout>
        )

    },
    {
        path: '/references',
        element: (
            <MainLayout>
                <References />
            </MainLayout>
        )

    },
    {
        path: '/ongoing',
        element: (
            <MainLayout>
                <Ongoing />
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