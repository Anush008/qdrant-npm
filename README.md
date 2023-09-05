# qdrant-npm

qdrantdb-npm is a Node.js helper package that allows you to easily set up and run a Qdrant DB instance for development without Docker. This package streamlines the installation and configuration process, making it convenient to get started with Qdrant DB.

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