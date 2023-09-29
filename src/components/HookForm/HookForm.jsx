import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('mehedi');
    const emailState = useInputState('222mhasan@gmail.com')

    const handleSubmit = e => {
        console.log(emailState.value);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="text-center">
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" placeholder=" Enter your text " className="border-2" /> */}
                <br />
                <input {...emailState} type="email" name="email" placeholder=" Enter your email " className="border-2" />
                <br />
                <input type="password" placeholder="Enter your password" name="password" />
                <br />
                <input className="bg-amber-700 text-white px-4 py-2 rounded-lg mt-4" type="submit" id="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;