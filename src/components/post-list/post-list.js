import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            // eslint-disable-next-line react/jsx-key
            <li key={id} className='list-group-item'>
                <PostListItem
                    // You can write as here or shorter as below
                    // label={item.label}
                    // important={item.important}
                    {...itemProps}
                />
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;