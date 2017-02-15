import React from 'react';
import {render} from 'react-dom';
import getTickerInfoAsJson from './services/tickerNumbers.js'

class TickerStats extends React.Component {
  
  tickerCallBack(result) {
    console.log(result)
  }
  
  render () {
    return ( 
      <div>
        <p>Symbol { getTickerInfoAsJson("ATVI", this.tickerCallBack) }</p>
      </div>
    )
  }
}

render(<TickerStats/>, document.getElementById('stats'));