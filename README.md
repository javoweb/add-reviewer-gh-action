# add-reviewer-gh-action
Adds Reviewer to pull request excluding requester (avoid self-assign review)
Heavily based on the @AveryCameronUofR 's repository [https://github.com/AveryCameronUofR/add-reviewer-gh-action](https://github.com/AveryCameronUofR/add-reviewer-gh-action)

## Usage
```
- name: Add Pull Request Reviewer
      uses: javoweb/add-reviewer-gh-action@v1
      with: 
        reviewers: "javoweb"
        token: ${{ secrets.GITHUB_TOKEN }}
 ```
 
### Action Inputs

| Name | Description | Default |
| --- | --- | --- |
| `token` | `GITHUB_TOKEN` or a `repo` scoped [PAT](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line). | `GITHUB_TOKEN` |
| `reviewers` | The email or user name of the reviewer(s) to add. If more than one use a comma separated list. | none |

### Action Outputs
None

### Action Result
Fails workflow when invalid reviewer added, this may be the result of an incorrect name or email.