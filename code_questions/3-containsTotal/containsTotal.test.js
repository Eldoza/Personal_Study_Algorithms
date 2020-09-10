const { containsTotal } = require('./index')
const assert = require('assert')

assert.equal(containsTotal([1,2,3], 3), true, '1 + 2 should equal 3')