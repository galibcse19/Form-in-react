 

const SimpleForm = () => {
    const handelSubmit=e=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.number.value);
        console.log('Success');
    }
    return (
        <div>
            <h3>Form - 1</h3>
            <form onSubmit={handelSubmit}>
                <input type="text" name="name" /> <br />
                <input type="email" name="email"  /> <br />
                <input type="number" name="number" id="" /> <br />
                 
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;