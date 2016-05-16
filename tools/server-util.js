/* eslint-disable */
var api = {};
api.configureEntry = function (entryPrefixes, entry) {
  if(entryPrefixes){
    var result = entryPrefixes.slice(0);
    if(Array.isArray(entry)) {
      result = result.concat(entry);
    }
    if(typeof entry === 'string') {
      result.push(entry);
    }
    return result;
  }
  return entry;
}
module.exports = api;
