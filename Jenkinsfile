def dockerRun(String cmd) {
  // Always pass in CODECOV_TOKEN even if it's not set...
  // Just to keep things simple here and not iterate over
  // a bunch of env vars.
  return '''docker run \
    --rm \
    -i \
    -e CODECOV_TOKEN \
    -v $(pwd):/usr/src/app \
    --workdir=/usr/src/app \
    docker.gameofloans.com/node:9.4.0 \
      ''' + cmd
}

builderNode {
  checkout scm
  stage("install dependencies") {
    sh(dockerRun("yarn install"))
  }
  stage("lint") {
    // TODO: lint report that can be archived?
    if (sh(script: dockerRun("yarn lint"), returnStatus: true) != 0) {
      currentBuild.result = "UNSTABLE"
    }
  }
  stage("test") {
    // TODO: get junit results instead of checking exit status
    if (sh(script: dockerRun("yarn test-ci"), returnStatus: true) != 0) {
      currentBuild.result = "UNSTABLE"
    }
    step([$class: 'CloverPublisher', cloverReportDir: 'coverage/'])
  }

  stage("report coverage") {
    withCredentials([
        stringCredentials(id: "react-native-cross-platform-text_codecov.io", variable: "CODECOV_TOKEN")
      ]) {
        sh(dockerRun("yarn codecov"))
      }
  }

  stage("compile") {
    sh(dockerRun("yarn compile"))
  }

  if (env.BRANCH_NAME == "master" || env.BRANCH_NAME =~ /^v(\d)([\d\.])*$/) {
    stage("publish") {
      withCredentials([
        usernameCredentials(id: "lendup-jenkins_npmjs.com_api-token", prefix: "NPM", pwSuffix: "TOKEN"),
        usernameCredentials(id: "lendup-jenkins_npmjs.com", prefix: "NPM"),
        stringCredentials(id: "lendup-jenkins_npmjs.com_mfa-secret", variable: "MFA_SECRET")
      ]) {
        sh '''
          docker run \
            --rm \
            -i \
            -e MFA_SECRET \
            -e NPM_USERNAME \
            -e NPM_PASSWORD \
            -e NPM_TOKEN \
            -e NPM_EMAIL="$NPM_USERNAME@lendup.com" \
            -v $(pwd):/usr/src/app \
            docker.gameofloans.com/nodejs/publisher
        '''
      }
    }
  }
}
