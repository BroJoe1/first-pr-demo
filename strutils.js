function capitalize(str) {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}

module.exports = { capitalize, truncate };
