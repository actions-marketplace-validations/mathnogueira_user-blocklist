const core = require('@actions/core');
const isBlocked = require('./is-blocked');

isBlocked(core);
