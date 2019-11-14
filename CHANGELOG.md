# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

## [0.3.0](https://github.com/JustinByrne/BitBot/releases/tag/0.3.0) - 2019-11-

### Added

- A `!help` command to show a list of all available commands. [#4](https://github.com/JustinByrne/BitBot/issues/4)
- Added the command to `!fart` for the help command.
- A start command to npm.
- ESLint to dev dependencies.
- Created a eslint config file

### Fixed

- Updated the `!fart` command description. [#5](https://github.com/JustinByrne/BitBot/issues/5)
- Added `long` const to `bot.js` to fix `'long' is not defined` error.

## [0.2.0](https://github.com/JustinByrne/BitBot/releases/tag/0.2.0) - 2019-11-12

### Added

- Installed `long` using `npm`.
- Added a function to find the default channel.
- Added the ability to welcome users when they go online.

## [0.1.0](https://github.com/JustinByrne/BitBot/releases/tag/0.1.0) - 2019-11-11

### Added

- A `commands` directory to keep all the commands.
- A `fart.js` file with the code to execute for the `!fart` command.
- Added the ability to read all `.js` files from the `commands` directory.
- Added the ability for commands to be run dynamically.

### Changed

- Changed the `bot` directory to `src`.
- Changed `CHANGELOG.md` formatting to comply with MD.
- Changed `recievedMessage` to `message` to shrink code.
- Prevented the bot to replying to other bots.

## [0.0.1](https://github.com/JustinByrne/BitBot/releases/tag/0.0.1) - 2019-11-07

### Added

- Created bot and added a single `!fart` command.
- README with relavant link to install.
- MIT LICENSE.
- CHANGELOG to document all changes.
