import Special from "../Special/Special";

 

const MySelf = ({asset}) => {
    return (
        <div>
            <p>MySelf</p>
            <section className="flex">
                <Special asset={asset}></Special>
            </section>
            
        </div>
    );
};

export default MySelf;