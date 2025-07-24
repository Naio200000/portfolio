import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CV from '../views/CV.jsx' 
import Portfolio from '../views/Portfolio.jsx' 
import About from '../views/About.jsx';
import Blog from '../views/Blog.jsx';
import Contacts from '../views/Contacts.jsx';
import Rechingona from '../views/portfolio/Rechingona.jsx'
import Tokio from '../views/portfolio/Tokio.jsx'
import KomeiUX from '../views/portfolio/KomeiUX.jsx'
import TiendaKomei from '../views/portfolio/TiendaKomei.jsx';
import GamingRoom from '../views/portfolio/GamingRoom.jsx';
import NotFound from '../views/NotFound.jsx';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/rechingona" element={<Rechingona />} />
            <Route path="/portfolio/tokio" element={<Tokio />} />
            <Route path="/portfolio/komeijuku" element={<KomeiUX />} />
            <Route path="/portfolio/tiendakomei" element={<TiendaKomei />} />
            <Route path="/portfolio/gamingroom" element={<GamingRoom />} />
            {/* <Route path="/blog" element={<Blog />} />
            <Route path="/contacts" element={<Contacts />} /> */}
            <Route path="/" element={<CV />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;