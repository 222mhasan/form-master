import { useCallback, useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({asset}) => {

    const giftItem = useContext(AssetContext);

    return (
        <div>
            <h2>Special</h2>
            <p>Gift : {asset}</p>
            <p>Also has : {giftItem}</p>
        </div>
    );
};

export default Special;