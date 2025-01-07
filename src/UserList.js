import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]); 


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users') 
            .then(response => {
                setListOfUsers(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error); // Handle errors
            });
    }, []); 

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {listOfUsers.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;

