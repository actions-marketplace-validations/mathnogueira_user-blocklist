const {context} = require('@actions/github');

function isBlocked(core) {
    core.debug('context', context);
    const {actor} = context || {};
    if (!actor) {
        core.setFailed(`Actor couldn't be extracted from event context`);
        return
    }

    const blockedUsers = core.getInput('blocked_users');
    core.debug('blocked_users', blockedUsers);
    if (blockedUsers.trim().length === 0) {
        core.setFailed(`blocked_users was not specified`)
        return
    }

    const userIsBlocked = blockedUsers.split(',').map(user => user.trim()).some(user == actor);
    core.debug('user is blocked', userIsBlocked);
    core.setOutput('result', userIsBlocked)
}

module.exports = isBlocked;
