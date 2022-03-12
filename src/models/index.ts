export {};
const db: any  = {};
db.customers = require("./customer.model");
db.lending = require("./lending.model");
module.exports = db;
