import './styles.css';
import refs from './js/refs'
import fetchCountries from './js/fetchCountries';
import updateCountriesMarkup from './js/updateCountriesMarkup';
import debounce from 'lodash.debounce';



const debauncedInputCallback = debounce(event => {
  refs.listCountries.innerHTML = '';
  refs.countryDiscription.innerHTML = '';
  const input = event.target.value;
  if (!input) return;
  fetchCountries(input).then(updateCountriesMarkup);
}, 500);

refs.inputRef.addEventListener('input', debauncedInputCallback);


