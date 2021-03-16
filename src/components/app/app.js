import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
//
// import style from './app.module.css';
// The file of CSS styles must inclunig ".module.css" in name!!!
// Use ==> className={style.className} for adding syles from object style.
//
const App = () => {

    const data = [
        {label: 'Going to learn React', important: true, id: 'mjss'},
        {label: 'This is so good!', important: false, id: 'jdjd'},
        {label: 'I need a break...', important: false, id: 'poqw'}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div> 
    )
}

export default App;