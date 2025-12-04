import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Home from './routes/Home.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Nav from "./components/nav.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Nav/>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)