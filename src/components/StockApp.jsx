import axios from "axios";
import React, { useEffect, useState } from "react";
// import Table from "react-bootstrap/Table";
import StockTable from "./Table";

export default function StockApp() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/data/stock.json")
      .then((response) => {
        // console.log(response);
        setStockData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>
        <b>Stock</b>
      </h1>
      <StockTable data={stockData}></StockTable>
    </div>
  );
}
