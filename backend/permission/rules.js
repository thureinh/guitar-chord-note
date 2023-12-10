const { rule } = require('graphql-shield')

const isAuthenticated = rule()(async (_parent, _args, ctx) => {
    return Object.keys(ctx.user).length !== 0
})

module.exports = { isAuthenticated }