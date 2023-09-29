

import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log('sign up data', data);
  // }

  // const handleProfileUpdateSubmit = data => {
  //   console.log('Profile Submit', data);
  // }

  return (
    <>

      <h1 className='text-2xl text-center mb-10'>Form Master</h1>
      <Grandpa></Grandpa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        formTitle={"Sign Up"}
        SubmitBtnText={"Sign Up"}
        handleSubmit={handleSignUpSubmit}>
          <div>
            <h2>Sign Up</h2>
            <p>Please Sign Up right now.!</p>
          </div>
        </ReusableForm>
        <ReusableForm
          formTitle={"Profile Update"}
          SubmitBtnText={"Profile Update"}
          handleSubmit={handleProfileUpdateSubmit}>
            <div>
              <h2>Update Profile</h2>
              <p>Please Update Profile right now.!</p>
            </div>
        </ReusableForm> */}

    </>
  )
}

export default App
