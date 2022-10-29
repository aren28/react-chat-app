import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import Login from './Login/Login';
import App from './Components/App';
const root = createRoot(document.getElementById('FreeChat'));
root.render(
    <Login/>
);


