import React from "react";
import { Button } from "react-bootstrap";
import { EnterUniversity } from "@pages/EnterUniversity";
import { Register } from "@pages/Register";
import { Navbar } from "@navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/Home";

function App() {
    return (
        <>
            <h1>University Course Rating</h1>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route
                        path="/enterUniversity"
                        element={<EnterUniversity />}
                    />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <header className="App-header">
                    <div className="bg">
                        <h1>Rate My Course</h1>

                        <Button>Login</Button>
                    </div>
                </header>
            </BrowserRouter>
        </>
    );
}

export default App;
