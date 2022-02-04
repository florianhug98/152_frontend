pipeline {
  agent {
    docker { image 'trion/ng-cli' }
  }
  
  stages {
    stage('init') {
      steps {
        sh 'node -v'
      }
    }
  }
}
