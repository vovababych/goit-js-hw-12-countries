import refs from './refs';
import TemplateCountriesList from '../templates/TemplateCountriesList.hbs';
import TemplateCountry from '../templates/TemplateCountry.hbs';
import error from '../index'

const message = 'Too many matches found. Please enter a more specific query';
let markup;

function updateCountriesMarkup(countries) {
  if (countries.length === 1) {
      markup = TemplateCountry(countries);
      refs.countryDiscription.insertAdjacentHTML('beforeend', markup);
    return;
  }

  if (countries.length > 10) {
    error(message);
    return;
  }
  
  refs.listCountries.innerHTML = '';
  markup = TemplateCountriesList(countries);
  refs.listCountries.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
