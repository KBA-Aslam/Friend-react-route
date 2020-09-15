import React, { useState, useEffect } from 'react';
import Friends from '../Friends/Friends';

const Home = () => {

    const [friends, setFriends] = useState([]);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data))
    }, [])
  
    return (
        <div>
            <p>Friends: {friends.length}</p>
            {
                friends.map(friends => <Friends friends={friends}></Friends>)
            }
        </div>
    );
};

export default Home;