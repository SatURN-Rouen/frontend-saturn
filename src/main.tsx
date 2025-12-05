import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Home from './routes/Home.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Nav from "./components/Nav.tsx";
import Scenarios from "./routes/Scenarios.tsx";
import Chat from "./routes/Chat.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/chat"} element={<Chat/>}/>
                <Route path={"/:profile"} element={<Scenarios/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)