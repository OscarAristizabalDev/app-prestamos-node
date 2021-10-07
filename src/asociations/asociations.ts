const entities = {
    lending: require('../models/lending.model'),
    customer: require('../models/customer.model'),
    quote: require('../models/quota.model'),
    payment: require('../models/payment.model')
}
// Relacion muchos a muchos entre lending y customer
entities.lending.belongsToMany(entities.customer, {as: 'customer', through: 'customer_lending'});
entities.customer.belongsToMany(entities.lending, {as: 'lending', through: 'customer_lending'});

// relacion de uno a mucho entre lending y quote
entities.lending.hasMany(entities.quote, { foreingKey: "LendingId" });
entities.quote.belongsTo(entities.lending, { foreingKey: "LendingId" });

// relacion mucho a muchos entre quote y payment
entities.quote.belongsToMany(entities.payment, {as: 'payment', through: 'quote_payment'});
entities.payment.belongsToMany(entities.quote, {as: 'quote', through: 'quote_payment'})

module.exports = entities;