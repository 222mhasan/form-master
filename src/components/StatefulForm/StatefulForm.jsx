import { useState } from "react";

const StatefulForm = () => {

    const [name, setName] = useState('name');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');



    const handleSubmit = e => {
        e.preventDefault();
        if(password.length <= 6 ){
            setError('set atleast 6 character password')
        }
        else{
            setError('');
            console.log(email, password, name);
        }
        

    }


    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="text-center">
                <input
                    onChange={handleNameChange} value={name}
                    type="text" name="name" placeholder=" Enter your text " className="border-2" />
                <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name="email" placeholder=" Enter your email " className="border-2" />
                <br />
                <input
                    onChange={handlePasswordChange}
                    type="password" placeholder="Enter your password" name="password" required />
                <br />
                <input className="bg-amber-700 text-white px-4 py-2 rounded-lg mt-4" type="submit" id="submit" value="Submit" />

                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;