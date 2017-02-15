import React from 'react';
import {render} from 'react-dom';

class Search extends React.Component {
  
  render () {
    return (
        <div className="row"> 
            <div className="col-md-6 offset-md-2">
              <input type="text" className="form-control" placeholder="Ticker symbol..." />
            </div>
            
            <div className="col-md-4">
              <button type="button" className="btn btn-primary btn-primary">Search</button>
            </div>
        </div>
    );
  }
}

render(<Search/>, document.getElementById('search'));