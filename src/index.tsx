import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {enthusiasm} from './reducers';
import {StoreState} from './types';

import Hello from './containers/Hello';
import {Provider} from 'react-redux';

// @ts-ignore
const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
