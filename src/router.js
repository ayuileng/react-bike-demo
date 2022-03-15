import React, { Component } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Admin from './admin'
import NotFound from './pages/404'
import Home from './pages/home'
import Login from './pages/login'
import Buttons from './pages/ui/buttons'
import Loadings from './pages/ui/loading'
import Messages from './pages/ui/messages'
import Modals from './pages/ui/modal'

export default class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Admin />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/admin' element={<Admin />} >
                        <Route path='' element={<Home />} />
                        <Route path='ui/buttons' element={<Buttons />} />
                        <Route path='ui/modals' element={<Modals />} />
                        <Route path='ui/loadings' element={<Loadings />} />
                        <Route path='ui/messages' element={<Messages />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>

                </Routes>
            </HashRouter>
        )
    }
}
