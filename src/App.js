import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";
import { Home } from './pages/Home';
import { CommingSoon } from './pages/CommingSoon';
import { Navigator, Footer } from '../src/components/Elements';
import { ListApp } from './global/Icons';
import './scss/style.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { navs: ['Home', 'Browse', 'Comming Soon'] };
    }

    render() {
        const { navs } = this.state;
        return (
            <>
                <Router>
                    < Navigator navs={navs} />
                    < BodyPage navs={navs} />
                </Router>
                <Footer />
            </>
        );
    }
}
export default App;

class BodyPage extends Component {

    render() {
        const { navs } = this.props;
        return (
            <Routes>
                {navs.map((name, index) => {
                    const _path = removeSpace(name);
                    const _page = getPage(name);
                    return <Route exact path={`/${_path}`} element={_page} key={index} />
                })}

                {ListApp.map((app, i) => {
                    const { Page, Path } = app;
                    return <Route exact path={`/${Path}`} element={Page} />
                })}
            </Routes>
        );
    }
}

export function removeSpace(source, replace) {
    source = source.toString().trim().toLowerCase();
    if (source === 'home') return '';
    replace = replace ? replace.toString() : '-';
    return source.replaceAll('  ', replace).replaceAll(' ', replace);
}
export function getPage(name) {
    if (name === 'Home') return <Home />
    return <CommingSoon />
}
