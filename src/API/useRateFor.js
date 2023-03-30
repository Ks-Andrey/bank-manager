import useHttp from "../hooks/useHttp";
import { __apiUrl as api } from "./apiURL";

function useRateFor() {
    const {loading, error, fetchData} = useHttp();
    
    const getSumBy = async (currency, buyCyrrency) => {
        const response = await fetchData(api.alfabank)
        return response.rates.filter(({sellIso, buyIso}) => currency === sellIso && buyCyrrency === buyIso)[0].sellRate;
    }

    const getAllRates = async (currency) => {
        const response = await fetchData(api.alfabank);
        return response.rates.filter(({buyIso}) => currency === buyIso)
    }

    const findCrypto = async (crypto) => {
        const response = await fetchData(`${api.coingecko}/search?query=${crypto}`)
        return response;
    }

    const findCryptoPrice = async (cryptoId) => {
        const response = await fetchData(`${api.coingecko}/simple/price?ids=${cryptoId}&vs_currencies=usd`)
        return response;
    }

    return {loading, error, getSumBy, getAllRates, findCrypto, findCryptoPrice}
}

export default useRateFor;