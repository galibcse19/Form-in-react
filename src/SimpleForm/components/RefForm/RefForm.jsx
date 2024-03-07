import { useEffect, useRef } from "react";

 

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef= useRef(null);
    const passwordRef= useRef(null);

    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handelSubmit=(e)=>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <h3>Form - 3</h3>
            <form onSubmit={handelSubmit}>
                <input ref={nameRef} type="text" name="name" /> <br />
                <input ref={emailRef} defaultValue={'me@gmail.com'} type="email" name="email"  /> <br />
                <input ref={passwordRef} type="password" name="password" id="" /> <br />
                 
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;