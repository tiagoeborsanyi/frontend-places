import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'pamela', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KEzKL7hovYwKuB1RRKMk1Nm86NFH3XtFOstdqxvsy4nKhZfsrQ&s', 
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;