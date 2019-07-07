module.exports = {
  pathAndApiPath(path, apiPath) {
    var path = path.split('/');
    var apiPath = apiPath.split('/');

    if(path.length == apiPath.length) {
      for(i = 0 ; i < path.length ; i++) {
        if (path[i].localeCompare(apiPath[i]) === 0) {
          continue;
        } else if(isNaN(path[i]) === false && apiPath[i].startsWith(':')) {
          continue;
        } else {
          return false;
        }
      }
      return true;
    }
    return false;
  }
}