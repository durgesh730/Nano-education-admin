pipeline {
  agent any
    
  stages {
     
    stage('Install') {
      steps {
        sh 'npm install --force'
      }
    }  
            
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }  
    
    stage('Deploy') {
      steps {
        sh 'chmod +x run.sh'
        sh 'bash run.sh 3001'
        sh 'bash run.sh 3002'
        sh 'bash run.sh 3003'
        sh 'bash run.sh 3004'
        sh 'bash run.sh 3005'
      }
    }
  }
}
