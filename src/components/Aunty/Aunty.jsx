import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {

    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={"Shapla"}></Cousin>
                <Cousin name={"Nodi"}></Cousin>
            </section>
            <p>Money : {money}</p>
            <button className="bg-slate-500 px-4 py-2 rounded-lg text-white hover:bg-slate-300 hover:text-black" onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;