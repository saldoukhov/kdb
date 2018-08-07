import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {enthusiasm} from './reducers';
import {StoreState} from './types';

import Hello from './containers/Hello/Hello';
import {Provider} from 'react-redux';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {About} from "./containers/About";
import {Topics} from "./containers/Topics";

// @ts-ignore
const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>
            <hr/>
            <Switch>
                <Route path="/">
                    <Provider store={store}>
                        <Hello/>
                    </Provider>
                </Route>
                {/*<Route path="/" component={Hello}/>*/}
                <Route path="/about" component={About}/>
                <Route path="/topics" component={Topics}/>
            </Switch></div>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
