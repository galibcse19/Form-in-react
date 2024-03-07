 

const ReuseableForm = ({FormTitle,SubmitBtnText='Submit',handelSubmit,children}) => {
   const LocalSubmit=(e)=>{
    e.preventDefault();
    const data ={
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
    handelSubmit(data);
   }
    return (
        <div>
            <h3>Form - Reuseable</h3>
            <h2>{FormTitle}</h2>
            {children}
            <form onSubmit={LocalSubmit}>
                <input type="text" name="name" /> <br />
                <input type="email" name="email"  /> <br />
                <input type="password" name="password" id="" /> <br />
                 
                <input type="submit" value={SubmitBtnText} />
            </form>
        </div>
    );
};

export default ReuseableForm;