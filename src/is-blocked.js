const {context} = require('@actions/github');

function isBlocked(core) {
    const {actor} = context || {};
    if (!actor) {
        core.setFailed(`Actor couldn't be extracted from event context`);
        return
    }

    const blockedUsers = core.getInput('blocked_users');
    if (blockedUsers.trim().length === 0) {
        core.setFailed(`blocked_users was not specified`)
        return
    }

    const userIsBlocked = blockedUsers.split(',').map(user => user.trim()).some(user == actor);
    core.setOutput('result', userIsBlocked)
}

module.exports = isBlocked;
