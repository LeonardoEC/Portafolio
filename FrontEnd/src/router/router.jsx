import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import WebDevelopment from "../pages/web_development/WebDevelopment";
import VideoGameDevelopment from "../pages/video_game_development/VideoGameDevelopment";

// import Carousel from "../components/carousel/Carousel";
// import Welcome from "../components/home/welcome/Welcome";
import Intro from "../components/home/intro/Intro";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/abaout_us',
                element: <AboutUs />
            },
            {
                path: '/web_development',
                element: <WebDevelopment />
            },
            {
                path: '/video_game_Development',
                element: <VideoGameDevelopment />
            },
            {
                path: '/test',
                element: <Intro />
            }
        ]
    }
])

export default router