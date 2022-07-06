const core = require('@actions/core');
const {context} = require('@actions/github');

async function run() {
  try {
    core.debug(context);
    const blockedUsers = core.getInput('blocked_users');
    const {actor} = context || {};

    console.log(context)
    console.log(actor)

    const userIsBlocked = blockedUsers.split(',').map(user => user.trim()).some(user == actor);

    core.setOutput("result", userIsBlocked ? "true" : "false");
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
