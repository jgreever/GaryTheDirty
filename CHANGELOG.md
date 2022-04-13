[//]: # ( Path: CHANGELOG.md )
[//]: # ( About: Changelog )

# Changelog
All changes to the project are recorded in this file.

## [Unreleased]
- Kick a user
- Ban/Unban a user
- Create/Edit/Delete a role
- Create/Edit/Delete a channel

## [1.0.3] - 2022-03-13
### Migration to GitHub
- Migrated the code to a public GitHub repository
- Setup GitHub Actions workflow

## [1.0.2] - 2022-03-12
### Minor Changes
- Created .gitlab-ci.yml for CI/CD integration
- Changed running method from `node index.js` to `npm run start`
- Methods to check for and use `$TOKEN` variable via .env or command line input
- Removed: the ability to play audio from YouTube video in voice channel (being reworked)

## [1.0.1] - 2022-01-25
### Documentation
- Updated CHANGELOG.md
- Updated README.md
- Added CONTRIBUTING.md 
- Added CODE_OF_CONDUCT.md

## [1.0.0] - 2022-01-25
### Initial Change Log entry from `git log`
- Updated README.md and updated .gitignore for .vscode directory.
- Updated README.md to reflect proper path to LICENSE.md.
- Changed Created date to Last Edited in index.js.
- Moved from Gitea to GitLab-CE. Cleaned up code in IntelliJ.
- Added some requires for voice/compression/linting. Changed how TOKEN is pulled.
- Updated index.js file to show example usage for running index.js via nodejs.
- Updated README.md to reflect command changes.
- Updated package.json with author info and issue/repo/email/etc.
- Updated commands in index.js for online member count to just total member count on the server.
- Updated some syntax, changed some output to the console and in Discord.
- Updated some code, added a few commands. Added a GNUv3 license to the project.
- Initial commit