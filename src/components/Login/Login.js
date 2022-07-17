import React from 'react';
import UseFirebase from '../../Hooks/UseFirebase';

const Login = () => {
    const { signInWithGoogle } = UseFirebase();
    return (
        <div>

            <h1>Please Login</h1>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form >
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value="Log In" />
            </form>
        </div>
    );
};

export default Login;