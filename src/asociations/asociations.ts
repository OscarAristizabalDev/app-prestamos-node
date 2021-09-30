const entities = {
    lending: require('../models/lending.model'),
    customer: require('../models/customer.model'),
    quote: require('../models/quota.model')
}
// Relacion muchos a muchos entre lending y customer
entities.lending.belongsToMany(entities.customer, {as: 'customer', through: 'customer_lending'});
entities.customer.belongsToMany(entities.lending, {as: 'lending', through: 'customer_lending'});

// relacion de uno a mucho entre lending y quote
entities.lending.hasMany(entities.quote, { foreingKey: "LendingId" });
entities.quote.belongsTo(entities.lending, { foreingKey: "LendingId" })

module.exports = entities;