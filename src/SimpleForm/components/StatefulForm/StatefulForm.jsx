import { useState } from "react";

const StatefulForm = () => {

    const [name,setName]=useState('galib');
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [error,setError]=useState('');

    const handelChangeName=(e)=>{
        setName(e.target.value);
    }

    const handelChangeEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handelChangePassword=(e)=>{
        setPassword(e.target.value);
    }
    const handelSubmit = (e)=>{
        e.preventDefault();
        if(password.length<6){
            setError('Password is less tha 6 ');
        }
        else{
            setError('');
            console.log(name,email,password);
        }
    }
    return (
        <div>
            <h3>Form - 2</h3>
            <form onSubmit={handelSubmit}>
                <input onChange={handelChangeName} value={name}  type="text" name="name" /> <br />
                <input onChange={handelChangeEmail} type="email" name="email"  /> <br />
                <input onChange={handelChangePassword} type="password" name="password" id="" required /> <br />
                 
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;