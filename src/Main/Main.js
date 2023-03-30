import { Container } from "react-bootstrap";
import BankRates from "../BankRates/BankRates";
import Score from "../Score/Score";
import Tab from "../Tabs/Tab";
import './Main.css'
import MyChart from "../Chart/Chart";

import { useEffect } from "react";
import useRateFor from "../API/useRateFor";

const tabsData = [
    {
        name: "Банки",
        data: [
            {
                bank: 'Беларусбанк',
                currency: 'BYN',
                score: 600
            },
            {
                bank: 'Сбербанк',
                currency: 'BYN',
                score: 1300
            },
            {
                bank: 'Alfabank',
                currency: 'BYN',
                score: 0
            }
        ]
    },
    {
        name: "Криптовалюта",
        data: [
            {
                bank: 'Bitcoin',
                currency: 'BTC',
                usd: '',
                score: 1
            },
            {
                bank: 'Ethereum',
                currency: 'ETH',
                usd: '',
                score: 1
            },
            {
                bank: 'Polygon',
                currency: 'MATIC',
                usd: '',
                score: 1
            }
        ]
    }
]

function Main() {
    const {findCrypto, findCryptoPrice, loading} = useRateFor();

    useEffect(() => {
        tabsData.forEach(({data, name}) => {
            if (name === 'Криптовалюта') {
                data.forEach(item => {
                    findCrypto(item.bank)
                        .then((res) => findCryptoPrice(res.coins[0].id))
                        .then((res) => Object.values(res)[0].usd)
                        .then((res) => {
                            item.usd = res;
                        })
                })
            }
        })   
    }, [])
    
    return(      
        <Container>
            <div className="top__container">
                <Score tabsData={tabsData} loading={loading}/>
                <MyChart/>
            </div>
            <div className="bottom__container">
                <Tab tabsData={tabsData} loading={loading}/>
                <BankRates/>
            </div>
        </Container>
    );
}

export default Main;