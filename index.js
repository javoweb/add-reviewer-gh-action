const core = require('@actions/core')
const github = require('@actions/github')

function run() {
    try {
      const reviewers = core.getInput("reviewers");
      const fullReviewers = reviewers.split(", ");
      const token = process.env["GITHUB_TOKEN"] || core.getInput("token");
      const octokit = new github.getOctokit(token);
      const context = github.context;
      const actor = context.actor;
      const prReviewers = fullReviewers.filter((value) => value != actor);
  
      if (context.payload.pull_request == null) {
        core.setFailed("No pull request found.");
        return;
      }
  
      const pullRequestNumber = context.payload.pull_request.number;
      octokit.pulls.requestReviewers({
        ...context.repo,
        pull_number: pullRequestNumber,
        reviewers: prReviewers,
      });
    } catch (error) {
      core.setFailed(error.message);
    }
  }
  
  run();