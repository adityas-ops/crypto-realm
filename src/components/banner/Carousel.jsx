import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import { numberWithCommas } from "../CoinTable";
import carousel from "react-grid-carousel";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          textDecoration: "none",
          color: "white",
          padding: "30px",
          margin: "20px",
        }}
        to={`/coins/${coin.id}`}
      >
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 5 }}
        />
        <span
          style={{
            fontSize: 12,
            fontWeight: 500,
            width: "100%",
          }}
        >
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 12, fontWeight: 500 }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(1))}
        </span>
      </Link>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <carousel
        style={{
          display: "flex",
        }}
        cols={4}
        rows={1}
        showDots
        autoplay={1500}
        loop={true}
      >
        {items.map((item, index) => {
          return <carousel.Item key={index}>{item}</carousel.Item>;
        })}
      </carousel>
    </div>
  );
};

export default Carousel;
