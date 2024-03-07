import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

 

const Cousin = ({name}) => {

    const gift =useContext(AssetContext);
    return (
        <div>
            <p>Cousin</p>
            <p>{name}</p>
            {gift}

        </div>
    );
};

export default Cousin;