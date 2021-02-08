import axios from 'axios'

const getPrices = async () => {
  return axios.get("/prices")
  .then(response => {
    return response.data;
  })
  .catch(err => {
    console.log("Error fetching data from server", err);
  });
};

export { getPrices };