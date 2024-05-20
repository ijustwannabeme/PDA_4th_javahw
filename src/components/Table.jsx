import React from "react";
import Table from "react-bootstrap/Table";

function StockTable({ data }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>날짜</th>
          <th>종가</th>
          <th>시가</th>
          <th>고가</th>
          <th>저가</th>
          <th>거래대금</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.tradePrice}</td>
            <td>{item.openingPrice}</td>
            <td>{item.highPrice}</td>
            <td>{item.lowPrice}</td>
            <td>{item.candleAccTradePrice}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default StockTable;
