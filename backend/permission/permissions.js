const { shield } = require('graphql-shield')
const rules = require('./rules')

const permissions = shield({
    Query: {
        users: rules.isAuthenticated
    }
})

module.exports = permissions