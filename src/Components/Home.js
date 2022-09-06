import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({username, token}) => {
    return (<div id="welcome">
        {
            token ? <p className="title">Stranger Things</p> : <p className="title"> Welcome to Stranger Things</p>
        }
        {
            token ? <div className="welcome-message">Welcome! You are logged in as {username}!</div> : ''
        }
        {
            token ? <Link className="profile-link" to="/profile">View Profile</Link> : ''
        }
        <div className='image'>
            <img className="home-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Stranger_Things_logo.png/640px-Stranger_Things_logo.png" alt="Stranger Things Logo"></img>
        </div>
    </div>
    )
}

export default Home;