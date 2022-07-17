import React from 'react';

const Register = () => {
    return (
        <div>

            <h1>Please Register</h1>

            <form >
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Password' />
                <br /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;