import React from 'react';
import './App.css';
import 'bootswatch/dist/lux/bootstrap.css'
import Sidebar from './componentes/sidebar/index';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Curriculum from './screens/curriculum/index';
import Projects from './screens/projects/index';
import Varieties from './screens/varieties/index';
import Home from './screens/home/index';

export default class App extends React.Component{

    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Sidebar>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/my-resume" element={<Curriculum />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/varieties" element={<Varieties />} />
                        <Route path="/*" element={<Home />} />
                    </Routes>
                </Sidebar>
            </BrowserRouter>
        );
    }
}
