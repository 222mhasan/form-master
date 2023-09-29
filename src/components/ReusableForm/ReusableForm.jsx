/* eslint-disable react/prop-types */

const ReusableForm = ({ formTitle, handleSubmit,  SubmitBtnText = 'Submit', children }) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data ={
            name : e.target.name.value,
            email : e.target.email.value,
            password : e.target.password.value
        }
        handleSubmit(data);
    }

    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit} className="text-center bg-slate-400 w-80 mx-auto p-4 rounded-xl">
                <input type="text" name="name" placeholder=" Enter your text " className="border-2" />
                <br />
                <input type="email" name="email" placeholder=" Enter your email " className="border-2" />
                <br />
                <input type="password" placeholder="Enter your password" name="password" required />
                <br />
                <input className="bg-amber-700 text-white px-4 py-2 rounded-lg mt-4" type="submit"  value={SubmitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;