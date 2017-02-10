import React from 'react';
import {render} from 'react-dom';
import getTickerInfoAsJson from './services/tickerNumbers.js'

class TickerStats extends React.Component {
  
  render () {
    return ( 
      <div>
        <p>Symbol {console.log(getTickerInfoAsJson("ATVI"))}</p>
      </div>
    )
  }
}

render(<TickerStats/>, document.getElementById('stats'));