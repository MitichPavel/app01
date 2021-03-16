import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './post-list.css';

const PostList = ({posts}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            // eslint-disable-next-line react/jsx-key
            <ListGroupItem key={id}>
                <PostListItem
                    // You can write as here or shorter as below
                    // label={item.label}
                    // important={item.important}
                    {...itemProps}
                />
            </ListGroupItem>
        )
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;