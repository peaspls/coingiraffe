import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useInterval } from './Hooks';

async function getPrices() {
  return axios.get("/prices")
  .then(response => {
    return response.data;
  })
  .catch(err => {
    console.log("Error fetching data from server", err);
  });
}

function App() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getPrices();
      setPrices(result);
    })();    
  }, []);

  useInterval(() => {
    (async () => {
      const result = await getPrices();
      setPrices(result);
    })();
  }, 10000);

  return (
    <React.Fragment>
      <h1>Cointickr</h1>
      <table>
        <tbody>
          {prices.map(p => (
            <tr key={p.currency}>
              <td>
                <img className="logo" src={p.logo_url} alt="Asset logo" />
              </td>
              <td>
                <div>{p.currency}-EUR</div>
                <div>{p.name}</div>
              </td>
              <td>
                <div>€{p.price}</div>
                <div>{p['1d'].price_change_pct}</div>                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default App;