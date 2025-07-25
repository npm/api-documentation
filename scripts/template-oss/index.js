module.exports = {
  rootRepo: {
    add: {
      ".github/workflows/ci.yml": "ci-yml.hbs",
      ".github/workflows/publish.yml": false,
      ".github/CODEOWNERS": false,
      ".github/ISSUE_TEMPLATE/bug.yml": false,
      ".commitlintrc.js": false,
      ".github/settings.yml": false,
      ".github/dependabot.yml": "dependabot-yml.hbs",
    },
  },
  rootModule: {
    add: {
      "package.json": { file: "package-json.hbs", overwrite: false },
      ".eslintrc.js": false,
      "CODE_OF_CONDUCT.md": false,
      "CONTRIBUTING.md": false,
    },
  },
  workspaceRepo: {
    add: {},
  },
  workspaceModule: {
    add: {},
  },
  ciVersions: "latest",
  latestCiVersion: 22,
  macCI: false,
  windowsCI: false,
  lockfile: true,
  // these need to be allowed since they need to installed explicitly since
  // the repo uses legacy-peer-deps to avoid gatsby errors
  allowedPackages: [],
  requiredPackages: {
    devDependencies: [],
  },
  allowPaths: [],
};
