import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import AllChats from './pages/chats';
import OneChat from './pages/oneChat';



const Routing = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<AllChats/>} />
                <Route path="/home" element={<AllChats/>} />
                <Route path="/oneChat" element={<OneChat/>} />
            </Routes>
        </HashRouter>
    )
}

export default Routing;
