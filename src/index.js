import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import CreateTournament from './components/CreateTournament/CreateTournament';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <CreateTournament />
    </Provider>
    ,
    document.getElementById('root'));

