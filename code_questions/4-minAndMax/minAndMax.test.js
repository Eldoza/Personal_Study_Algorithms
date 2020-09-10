const { minAndMax } = require('./index')
const assert = require('assert')

assert.deepEqual(minAndMax([1,1,3], 3), { min: { 3: 1 }, max: { 1: 2 }}, 'should return the expected totals')