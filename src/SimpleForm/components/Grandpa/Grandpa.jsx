import { createContext } from "react";
import Anty from "../Anty/Anty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Granfpa.css'
 
export const AssetContext =createContext('gold');

const Grandpa = () => {
    const asset = 'ring';
    return (
        // <div className="grandpa flex">
        //     <Dad></Dad>
        //     <Uncle></Uncle>
        //     <Anty></Anty>
        // </div>
        <div className="grandpa">
            <h2>Grandpa</h2>
            
            <AssetContext.Provider value="galib">
                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle></Uncle>
                    <Anty></Anty>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;