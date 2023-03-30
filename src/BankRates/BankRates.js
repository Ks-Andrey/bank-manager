import useRateFor from "../API/useRateFor";
import { useState, useEffect, useCallback } from "react";
import { Table } from "react-bootstrap";
import Load from "../Load/Load";

function BankRates() {
    const [rates, setRates] = useState([]);

    const {loading, error, getAllRates} = useRateFor();

    useEffect(() => {
        getAllRates('BYN')
            .then(res => setRates(res))
    }, [])

    const data = rates.map(({sellRate, sellIso, buyRate}, i) => {
        return (
            <tr key={i}>
                <td>{sellIso}</td>
                <td>{sellRate}</td>
                <td>{buyRate}</td>
            </tr>
        );
    })

    return(
        <div className="table__container">
            {loading ? <Load /> : <Table className="w-100">
                <thead>
                    <tr>
                        <td>Валюта</td>
                        <td>Продажа</td>
                        <td>Покупка</td>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </Table>
            }
        </div>
    );
}

export default BankRates;