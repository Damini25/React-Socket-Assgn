import React from 'react';
import StockRow from './rows';
import './table.css';

class TableComponent extends React.Component {
    render() {
     console.log('table', this.props);
       const rows = this.props.stock.map((elem) => {
            return (
                <StockRow stock={elem}></StockRow>
            );
        });

        return (<div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Volume
                    </th>
                        <th>
                            Price
                    </th>
                        <th>
                            Price
                    </th>
                        <th>
                            Volume
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>);
    }
}

export default TableComponent;