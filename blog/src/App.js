import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
//  引入全局样式
import { GlobalStyled } from './style.js';
import { Iconfont } from './statics/iconfont/iconfont.js';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <GlobalStyled />
            <Iconfont />
            <Router>
                <Header />
                <Route path='/' exact component={Home}></Route>
                {/* 要求传递一个 id */}
                <Route path='/detail/:id' exact component={Detail}></Route>
                <Route path='/login/' exact component={Login}></Route>
            </Router>
        </Provider>
    );
}

export default App;