import React from 'react';
import { Link } from 'react-router-dom';


const logout = ({setToken}) => {
    return <Link className='main-link' to='/' onClick={() => setToken('')}>logout</Link>
}

export default logout;
