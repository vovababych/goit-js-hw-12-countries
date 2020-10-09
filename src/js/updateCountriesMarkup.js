import refs from './refs';
import countriesTpl from '../templates/listCountries.hbs';
import countryTpl from '../templates/countryTpl.hbs';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

let markup;

function updateCountriesMarkup(countries) {
  if (countries.length >= 2 & countries.length <= 10) {
    markup = countriesTpl(countries);
  refs.listCountries.insertAdjacentHTML('beforeend', markup);
  }

  if (countries.length >= 10) {
    error({
      text: 'Please enter a more specific query!',
      hide: true,
      delay: 2000,
      width: '280px',
    });

  }

  if (countries.length === 1) {
       markup = countryTpl(countries);
    refs.countryDiscription.insertAdjacentHTML('beforeend', markup);
    return;
  }
}

export default updateCountriesMarkup;
