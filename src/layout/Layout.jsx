import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AppRouter from '../routes/AppRouter';
const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <AppRouter />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
