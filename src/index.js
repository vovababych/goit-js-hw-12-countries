import './styles.css';
import error from './js/pnotify'
import refs from './js/refs'
import fetchCountries from './js/fetchCountries';
import updateCountriesMarkup from './js/updateCountriesMarkup';
import debounce from 'lodash.debounce';
export default error;
let input;


refs.inputRef.addEventListener('input', debounce(debauncedInputCallback, 500));

refs.listCountries.addEventListener('click', (event) => {
  if (event.target.nodeName === 'LI') {
    input = event.target.children[1].textContent;
  } else { input = event.target.parentNode.children[1].textContent };

    refs.countryDiscription.innerHTML = '';
  fetchCountries(input)
    .then(country => {
      if (country.length === 1) {
        updateCountriesMarkup(country)
      }
      })
    .catch(err => console.log('Ошибка в debauncedInputCallback', err));
  });


function debauncedInputCallback(event) {
  refs.listCountries.innerHTML = '';
  refs.countryDiscription.innerHTML = '';
  input = event.target.value.trim();
  if (!input) return;
  
  fetchCountries(input)
    .then(countries => {
      if (countries.message) {
        error(countries.message)
        return;
      }

      updateCountriesMarkup(countries)
      })
    .catch(err => console.log('Ошибка в debauncedInputCallback', err));
}


