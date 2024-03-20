const moment = require('moment');
const validator = require('validator');
const pluralize = require('pluralize');

// Validation utility
export const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Date formatting utility
export const formatDate = (date, format = "yyyy-mm-dd") => {
  const d = new Date(date);
  const map = {
    mm: ('0' + (d.getMonth() + 1)).slice(-2),
    dd: ('0' + d.getDate()).slice(-2),
    yyyy: d.getFullYear(),
  };
  return format.replace(/yyyy|mm|dd/gi, matched => map[matched]);
};

// Slugification utility
export const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .trim();                        // Trim - from start and end
};


module.exports = {
  moment,
  validator,
  slugify,
  pluralize,
};
