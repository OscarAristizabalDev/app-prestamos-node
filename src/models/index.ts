export {};
const db: any  = {};
db.customers = require("./customer.model");
db.lending = require("./lending.model");
db.fee = require("./fee.model");
module.exports = db;
