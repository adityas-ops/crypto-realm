import React from "react";
import Banner from "../components/banner/Banner";
import CoinTable from "../components/CoinTable";

function HomePage() {
  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        <Banner />
      </div>

      <CoinTable />
    </>
  );
}

export default HomePage;
