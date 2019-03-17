module.exports = {
  release: {
    verifyConditions: {
      path: 'semantic-release-docker',
      registryUrl: 'docker.io',
    },
    publish: {
      path: 'semantic-release-docker',
      name: 'codfish/swagger',
    },
  },
};
