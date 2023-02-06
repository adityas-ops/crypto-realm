import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { SingleCoin } from '../config/api'
import { LinearProgress, Typography } from '@mui/material';
import {numberWithCommas} from '../components/CoinTable'
import { CryptoState } from '../CryptoContext'
import CoinInfo from '../components/CoinInfo'
function CoinPage() {
    const { id } = useParams();
    const [coin, setCoin] = useState()
    const { currency, symbol } = CryptoState();
    const fetchCoin = async() => {
        const { data } = await axios.get(SingleCoin(id,currency));

        setCoin(data);
        console.log(data)
    };

    useEffect(() => {
        fetchCoin();

    });






    if (!coin) return <LinearProgress style = {
        { backgroundColor: "#4fc3f7" }
    }
    />;

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 25,

            }}>
            <div style={{
                width: "30%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 25,
                borderRight: "2px solid grey",
                
            }}>
             <img src ={ coin?.image.large }
        alt ={ coin?.name}
        height = "200"
        style = {
            { marginBottom: 20 }
        }
        />
        <Typography variant="h3"
                    style={{
                        fontWeight: "bold",
            marginBottom: 20,
            fontFamily: "Montserrat",
                    }}>{coin?.name}
                </Typography>
                <Typography variant="subtitle1"
                   >
                    {coin?.description.en.split(". ")[0]}.
                </Typography>
                <div style={{
                    alignSelf: "start",
            padding: 25,
            paddingTop: 10,
            width: "100%",
                }} >
                    <span style={
                        { display: "flex" }
                    } >
                        <Typography variant="h5"
                           style={{
                            fontWeight: "bold",
            marginBottom: 20,
            fontFamily: "Montserrat",
                           }} >
                            Rank:
                        </Typography> &nbsp; &nbsp;
                        <Typography variant="h5"
                            style={{
                                fontFamily: "Montserrat",
                            }}>
                            {numberWithCommas(coin?.market_cap_rank)}
                        </Typography>
                    </span>

                    <span style={{ display: "flex" }}>
                        <Typography variant="h5"
                           style={{
                            fontWeight: "bold",
            marginBottom: 20,
            fontFamily: "Montserrat",
                           }}>
                            Current Price:
                        </Typography> &nbsp; &nbsp;
                        <Typography variant="h5"
                            style={{
                                fontFamily: "Montserrat",
                            }}>
                            {symbol} {" "} {
                                numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])
                            }
                        </Typography>
                    </span >
                    <span style={
                        { display: "flex" }
                    }>
                        <Typography variant="h5"
                          style={{
                            fontWeight: "bold",
            marginBottom: 20,
            fontFamily: "Montserrat",
                          }}>
                            Market Cap:
                        </Typography> &nbsp; &nbsp;
                        <Typography variant="h5"
                            style={{
                                fontFamily: "Montserrat",
                            }
                            } >
                            {symbol} {" "}
                            {
                                numberWithCommas(
                                    coin?.market_data.market_cap[currency.toLowerCase()]
                                        .toString()
                                        .slice(0, -6)
                                )
                            }
                            M
                        </Typography>
                    </span>
                </div>

            </div>
            {/* <CoinInfo coin={coin} /> */}
            </div>
        </>
    )
}

export default CoinPage;