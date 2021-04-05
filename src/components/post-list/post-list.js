import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const elements = posts.map((item) => {
        if(item instanceof Object && item.constructor !== Array && isEmpty(item)) {
            const {id, ...itemProps} = item;
            return (
                // eslint-disable-next-line react/jsx-key
                <ListGroupItem key={id}>
                    <PostListItem
                        // You can write as here or shorter as below
                        // label={item.label}
                        // important={item.important}
                        {...itemProps}

                        onDelete={() => onDelete(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleLiked={() => onToggleLiked(id)}
                    />
                </ListGroupItem>
            )
        }
    });

    function isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;