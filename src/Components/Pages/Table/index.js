import React from 'react';
import StyledTable from "./style";

const Table = (props) => {
    return (
      <>
        <StyledTable/>
        <table>
          <tr>
            <td>Город</td>
            <td>Температура</td>
            <td>Страна</td>
          </tr>
          <tr>
            <td>{props.data.city}</td>
            <td>{props.data.temp}</td>
            <td>{props.data.country}</td>
          </tr>
        </table>
      </>
    );
};

export default Table;