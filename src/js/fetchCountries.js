function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => res.json())
    .catch(err=>console.log('Ошибка в fetchCountries', err));
}

export default fetchCountries;
