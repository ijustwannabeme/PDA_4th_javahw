import axios from "axios";
import React, { useEffect, useState } from "react";
// import Table from "react-bootstrap/Table";
import StockTable from "./Table";

export default function StockApp() {
  return (
    <div>
      <h1>Stock</h1>
      <StockTable></StockTable>
    </div>
  );
}
