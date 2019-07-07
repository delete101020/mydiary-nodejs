var express = require('express');
var router = express.Router();
var routeLabel = require('route-label');
var namedRoute = routeLabel(router);

const stringHelper = require('./string');
const compareHelper = require('./compare');

module.exports = {
  fromStringToNumberArray(string) {
    const numbers = string.split(',').map(Number);
    const numberArray = [];
    numbers.forEach(number => numberArray.push(number));
    return numberArray;
  },

  fromStringToArray(string) {
    return string.split(',');
  },

  fromStringToJSONArray(string) {
    let str = '[' + string + ']';
    let jsonArray = JSON.parse(str);
    return jsonArray;
  },

  fromRouteTableToRouteArray(routeTable) {
    routeTable = JSON.stringify(routeTable);
    routeTable = stringHelper.removeFirstAndLast(routeTable);
    routeTable = stringHelper.removeQuotationAndBracket(routeTable);
    routeTable = this.fromStringToArray(routeTable);
    let routeArray = [];
    routeTable.forEach(route => {
      let name = route.slice(0, route.indexOf(':'));
      let path = route.slice(route.indexOf(':') + 1);
      routeArray.push({ 'name': name, 'path': path });
    })
    return routeArray;
  },

  fromNameToPath(name) {

  },

  fromPathToName(path){
    let routeArray = this.fromRouteTableToRouteArray(namedRoute.getRouteTable());
    let name = '';
    routeArray.forEach(route => {
      if(compareHelper.pathAndApiPath(path, route.path)) {
        name = route.name;
      }
    });
    return name;
  }
}