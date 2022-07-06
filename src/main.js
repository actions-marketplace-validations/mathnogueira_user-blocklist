const core = require('@actions/core');
const {context} = require('@actions/github');

async function run() {
  try {
    core.debug(context);
    const blockedUsers = core.getInput('blocked_users');
    const {actor} = context || {};

    const blockedUsersList = blockedUsers.split(',').map(user => user.trim());
    const userIsBlocked = blockedUsersList.contains(actor)

    core.setOutput('result', userIsBlocked ? "true" : "false");
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
