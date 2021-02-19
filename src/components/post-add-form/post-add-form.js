import React from 'react';
import './post-add-form.css';

const PostAddForm = () => {
    return (
        <form className="bottm-panel d-flex">
            <input
                type="text"
                placeholder="О чем Вы думаете сейчас"
                className="from-control new-opdt-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
            >Добавить</button>
        </form>
    )
}
export default PostAddForm;