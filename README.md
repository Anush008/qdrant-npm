<div align="center">
  <a href="https://www.npmjs.com/package/qdrantdb"><img src="https://avatars.githubusercontent.com/u/73504361?s=100"><h1> Qdrant-NPM </h1></a>
  <h4> NPM package to run a Qdrant DB instance for development without Docker. </h4>
</div>
<p align="center">
  <img src="https://img.shields.io/github/languages/code-size/Anush008/qdrant-npm" alt="GitHub code size in bytes">
  <img src="https://img.shields.io/github/commit-activity/w/Anush008/qdrant-npm" alt="GitHub commit activity">
  <a href="https://github.com/open-sauced/browser-extensions/issues">
    <img src="https://img.shields.io/github/issues/Anush008/qdrant-npm" alt="GitHub issues">
  </a>
</p>

![qdrant-npm](https://github.com/Anush008/qdrant-npm/assets/46051506/812907e6-0a34-4dfb-ba01-8f7420579083)


## Installation

To install qdrantdb globally, use npm:

```bash
npm i -g qdrantdb
```

## Usage

Once qdrantdb is installed, you can run the Qdrant DB instance by using the following command:

```bash
qdrant
```

Please note that depending on your system configuration, you may need to run this command with sudo privileges.

## Features

- Supports Linux, macOS, and Windows.
- Versions are in parity with the Qdrant binary release versions
- Automatically fetches the appropriate Qdrant DB binary for your platform and architecture.
- Sets up the necessary configuration files and dashboard.
- Cleans up unnecessary node_modules after installation.

## Installation Structure

After running qdrantdb, your installation directory will look like this:

```
bin/
├── config/
├── snapshot/
├── static/
├── storage/
├── qdrant/
├── .qdrant-initialized
install.js
runner.js
package.json
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions to qdrantdb are welcome! If you have any ideas, enhancements, or bug fixes, please open an issue or submit a pull request.

## Issues and Support

If you encounter any issues or need assistance with Qdrant, please open an issue on the [GitHub repository](https://github.com/qdrant/qdrant/issues) or reach out to the [community](https://github.com/qdrant/qdrant/discussions).
