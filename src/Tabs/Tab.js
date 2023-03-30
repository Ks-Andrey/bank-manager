import Load from "../Load/Load";
import { useMemo, useState } from "react";

function Tab({tabsData, loading}) {
    const [tab, setTab] = useState(0);

    const onChangeTab = (e) => {
        setTab(e.target.getAttribute('data-open'))
    }

    const renderData = (index) => {
        return(
            <ul>
                {
                    tabsData[index].data.map(({bank, score, currency, usd}, i) => <li key={i}>{bank}  <span>{score} {currency} {index === 1 ? `(${(usd * score).toFixed(2)} USD)` : null} </span></li>)
                }
            </ul>
        );
    };
    
    const tabButtons = useMemo(() => {
        return tabsData.map(({name}, i) => {
            return <button className="btn" key={i} onClick={onChangeTab} data-open={i}>{name}</button>
        })
    }, [tabsData])

    return (
        <div className="tabs__container">
            <div className="tabs__btns">
                {tabButtons}
            </div>
            <div className="tabs-data__container">
                {loading ? <Load /> : renderData(tab)}
            </div>
        </div>
    );
}

export default Tab;