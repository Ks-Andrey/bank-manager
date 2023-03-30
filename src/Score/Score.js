import useRateFor from "../API/useRateFor";
import Load from "../Load/Load";
import { useState, useEffect } from "react";

function Score({tabsData, loading}) {
    const [rate, setRate] = useState(0);

    const {getSumBy} = useRateFor();

    useEffect(() => {
        getSumBy('USD', 'BYN')
            .then((res) => setRate(res));
    }, [])

    const getSum = () => {
        let sum = 0;

        tabsData.forEach(({data, name}) => {
            data.forEach(({currency, score, usd}) => {
                if (currency === 'BYN') {
                    sum += score;
                 }else{
                    sum += (name === 'Криптовалюта' ? score * usd * rate : score * rate);
                }
            })
        })

        return sum
    }

    console.log(tabsData)

    return (
        <div className="score">
            <h2>{!loading ? getSum().toFixed(2) : <Load/>} BYN</h2>
        </div>
    );
    
}

export default Score;