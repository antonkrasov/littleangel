import React from 'react';
import './App.css';

import SimpleMap from './components/SimpleMap'

function App() {
  return (
    <div className="root-app-container">

      <SimpleMap />

      <div className="root-app-maps-overlay">
        <div className="container h-100">

          <div className="row align-items-end h-100">

            <div className="col-md-4 offset-md-4 mb-2">

              <div className="buttons-wrapper">
                <button className="btn btn-primary btn-block btn-success">I can help</button>
                <button className="btn btn-primary btn-block btn-warning">I need help</button>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
