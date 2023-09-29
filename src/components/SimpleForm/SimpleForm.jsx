

const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('Button clicked');
    }

    return (
        <div >
            <form onSubmit={handleSubmit} className="text-center">
                <input type="text" name="name" placeholder=" Enter your text " className="border-2" />
                <br />
                <input type="email" name="email" placeholder=" Enter your email " className="border-2" />
                <br />
                <input type="password" placeholder="Enter your password" name="password" />
                <br />
                <input className="bg-amber-700 text-white px-4 py-2 rounded-lg mt-4" type="submit" id="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;