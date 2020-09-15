import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friends = (props) => {
    const { name, id } = props.friends;

    const history = useHistory();

    const handleProfile = (friendId) => {
        const url = `/friend/${friendId}`
        history.push(url)
    }

    const friendStyle = { 
        border: '2px solid purple',
        borderRadius: '15px 0 15px 0',
        margin: '20px',
        padding: '20px'
    }
    return (
        <div style={friendStyle}>
            <h5>Name: {name}</h5>
            <p>Id: <Link to={`/friend/${id}`}>{id}</Link> </p>
            <button onClick={()=> handleProfile(id)} >Detail</button>
        </div>
    );
};

export default Friends;