module.exports = {
  rootRepo: {
    add: {
      '.github/workflows/ci.yml': 'ci-yml.hbs',
      '.github/workflows/publish.yml': 'publish-yml.hbs',
      '.github/CODEOWNERS': false,
      '.github/ISSUE_TEMPLATE/bug.yml': false,
      '.commitlintrc.js': false,
      '.github/settings.yml': false,
      '.github/dependabot.yml': 'dependabot-yml.hbs',
      '.github/workflows/ci-release.yml': false,
      '.github/workflows/release-integration.yml': false,
      '.github/workflows/release.yml': false,
    },
  },
  rootModule: {
    add: {
      'package.json': { file: 'package-json.hbs', overwrite: false },
      '.eslintrc.js': false,
      'CODE_OF_CONDUCT.md': false,
      'CONTRIBUTING.md': 'contributing-md.hbs',
    },
  },
  workspaceRepo: {
    add: {},
  },
  workspaceModule: {
    add: {},
  },
  ciVersions: 'latest',
  latestCiVersion: 22,
  macCI: false,
  updateNpm: false,
  windowsCI: false,
  lockfile: true,
  // these need to be allowed since they need to installed explicitly since
  // the repo uses legacy-peer-deps to avoid gatsby errors
  allowedPackages: [],
  requiredPackages: {
    devDependencies: [],
  },
  allowPaths: ['/api/'],
}
