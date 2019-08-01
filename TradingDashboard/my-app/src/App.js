import React from 'react';
import './App.css';
import StockTable from './table';

class App extends React.Component {
  state = {
    stockData: []
  }
  ws = new WebSocket('ws://localhost:8080/');
  componentDidMount() {
    this.ws.onopen = (data) => {
      // on connecting, do nothing but log it to the console
      console.log('connection opened',data);
    }
  
    this.ws.onmessage = (evt) => {
       this.addToStockData(JSON.parse(evt.data))
    }

    this.ws.onclose = () => {
      console.log('Disconnected')
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket('ws://localhost:8080/'),
      })
    }
  }

  addToStockData = (res) => {
    console.log('stockres', res);
    if (res['side'] === 'Ask') {
      this.setState({
        stockData: this.state.stockData.concat({
          askPrice: res['price'],
          askVolume: res['volume'],
          bidPrice: '',
          bidVolume: ''
        })
      });
    } else {
      this.setState({
        stockData: this.state.stockData.concat({
          askPrice: '',
          askVolume: '',
          bidPrice: res['price'],
          bidVolume: res['volume']
        })
      });
    }

  }

  render() {
    return (
      <div>
        <StockTable stock={this.state.stockData}>
        </StockTable>
      </div>
    );
  }
}

export default App;