const entities = {
    lending: require('../models/lending.model'),
    customer: require('../models/customer.model')
}

entities.lending.belongsToMany(entities.customer, {as: 'customer', through: 'customer_lending'});
entities.customer.belongsToMany(entities.lending, {as: 'lending', through: 'customer_lending'});

module.exports = entities;