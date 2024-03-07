 
 
import './App.css'
import Grandpa from './SimpleForm/components/Grandpa/Grandpa'
// import ReuseableForm from './SimpleForm/components/ReuseableForm/ReuseableForm'
// import RefForm from './SimpleForm/components/RefForm/RefForm'
// import SimpleForm from './SimpleForm/SimpleForm'
// import StatefulForm from './SimpleForm/components/StatefulForm/StatefulForm'

function App() {
 
  //  const handelSignUpSubmit=(data)=>{
  //        console.log(data);
  //   }
  //    const handelUpdateSubmit=(data)=>{
  //       console.log(data);
  //   }

  return (
    <>
       
      <h1>React: Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <ReuseableForm FormTitle={'Sign Up'} handelSubmit={handelSignUpSubmit}>
        <div>
          <h1>Sign Up </h1>
          <p>Sign up now.</p>
        </div>
      </ReuseableForm>
      <ReuseableForm FormTitle={'Profile Update'} handelSubmit={handelUpdateSubmit}  SubmitBtnText={'Update'}>
        <div>
          <h1>Update Profile</h1>
          <p>Update Profile Now.</p>
        </div>
      </ReuseableForm> */}
      <Grandpa></Grandpa>
       
    </>
  )
}

export default App
