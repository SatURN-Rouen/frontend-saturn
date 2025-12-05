import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Home from './routes/Home.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Nav from "./components/Nav.tsx";
import Scenarios from "./routes/Scenarios.tsx";
import Chat from "./routes/Chat.tsx";
import Scenario from "./routes/Scenario.tsx";
import Soon from "./routes/Soon.tsx";
import {Login} from "./routes/Login.tsx";
import EditScenario from './routes/EditScenario.tsx';
import Transition from "./routes/Transition.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/chat"} element={<Chat/>}/>
                <Route path={"/contact"} element={<Soon/>}/>
                <Route path={"/admin"} element={<Soon/>}/>
                <Route path={"/test"} element={<Transition/>}/>
                <Route path={"/scenarios/:id"} element={<Scenario/>}/>
                <Route path={"/:profile"} element={<Scenarios/>}/>
                <Route path={"/login"} element={<Login/>}/>
                
                <Route path={"/edit-scenario"} element={<EditScenario/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)