import Cousin from "../Cousin/Cousin";

 

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className="flex">
                <Cousin name={'Imran'}></Cousin>
                <Cousin name={'Jubir'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;