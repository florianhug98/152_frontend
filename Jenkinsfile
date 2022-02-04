pipeline {
  agent {
    docker { image 'trion/ng-cli-e2e' }
  }
  
  stages {
    stage('init') {
      steps {
        sh 'npm -v'
        sh 'node -v'
      }
    }
    
    stage('install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('prettier') {
        steps {
            sh 'npm run prettier'
        }
    }

    stage('test') {
        steps {
            sh 'npm run test-no-watch'
        }
    }
  }
}
