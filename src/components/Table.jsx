import Table from "react-bootstrap/Table";

function StockTable() {
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StockTable;
