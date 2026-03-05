import { Outlet } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";

import './defaultlayout.css'

export default function DefaultLayout() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    )
}