# npm API Documentation

This is the API documentation for [https://api-docs.npmjs.com/](https://api-docs.npmjs.com/).

[This repository](https://github.com/npm/api-documentation) contains the OpenAPI YAML specifications for our API documentation site, and the GitHub Actions workflows that generate the site itself.

## Quick Start

Ready to contribute to the npm API documentation? Here's how to get started:

1. **Install dependencies**: `npm install`
2. **Update the documentation** - it's OpenAPI YAML format - in the `api/` directory:
   - Main OpenAPI spec: [`api/base.yaml`](api/base.yaml)
   - Registry-specific endpoints: [`api/registry.npmjs.com/`](api/registry.npmjs.com/)
3. **Test your changes**: `npm run build` (generates `index.html` and `openapi.yaml`)
4. **Review your changes**: Inspect the generated `html/index.html` file in your browser or check the `openapi.yaml` file for your changes
5. **Fix any issues**: `npm run lintfix:yaml` for YAML formatting
6. **Submit your PR**: Commit your changes and open a pull request at https://github.com/npm/api-documentation

Do you want to know more? Check out our [contributing guide](CONTRIBUTING.md).

## License

The npm API documentation in the content is licensed under a [CC-BY 4.0 license](LICENSE-CC-BY).

All other code in this repository is licensed under a [MIT license](LICENSE).

When using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).
