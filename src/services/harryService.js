const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const fetchHarry = fetch(ENDPOINT).then(response=> response.json());

export { fetchHarry }




