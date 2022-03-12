const entities = {
    lending: require('../models/lending.model'),
    customer: require('../models/customer.model'),
    fee: require('../models/fee.model'),
    payment: require('../models/payment.model')
}
// Relacion muchos a muchos entre lending y customer
entities.lending.belongsToMany(entities.customer, {as: 'customer', through: 'customer_lendings'});
entities.customer.belongsToMany(entities.lending, {as: 'lending', through: 'customer_lendings'});

// relacion de uno a mucho entre lending y quote
entities.lending.hasMany(entities.fee, { foreingKey: "LendingId" });
entities.fee.belongsTo(entities.lending, { foreingKey: "LendingId" });

// relacion mucho a muchos entre quote y payment
entities.fee.belongsToMany(entities.payment, {as: 'payment', through: 'fee_payments'});
entities.payment.belongsToMany(entities.fee, {as: 'fee', through: 'fee_payments'})

module.exports = entities;