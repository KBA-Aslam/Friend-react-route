import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();

    const [friend, setFriend] = useState({});

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])

    return (
        <div>
            <h4>Friend Detail {friendId}</h4>
            <h3>{ friend.name } </h3>
            <p>Email: {friend.email} </p>
            <p>Phone: {friend.phone}</p>
            <p>Web: {friend.website}</p>
        </div>
    );
};

export default FriendDetail;