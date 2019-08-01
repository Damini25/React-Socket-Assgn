import React from 'react';

class RowComponent extends React.Component {
    render() {
        console.log('opp',this.props);
        return (
            <tr>
                <td>{this.props.stock.askPrice}</td>
                <td>{this.props.stock.askVolume}</td>
                <td>{this.props.stock.bidPrice}</td>
                <td>{this.props.stock.bidVolume}</td>
            </tr>
        );
    }
}

export default RowComponent;