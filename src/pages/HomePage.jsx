// HomePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';

function HomePage() {
    return (
        <div>
            <Header/>
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 min-h-screen p-8 flex flex-col items-center"></div>
        </div>
        
    )
}

export default HomePage
