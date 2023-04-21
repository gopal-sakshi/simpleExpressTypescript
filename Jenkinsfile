pipeline {
    agent any
    stage('Cloning Git') {
        steps {
            git 'https://github.com/gopal-sakshi/simpleExpressTypescript'
        }
    }
        
    stage('Install dependencies') {
        steps {
            sh 'npm install'
        }
    }
     
    stage('Test') {
        steps {
            sh 'npm test'
        }
    }     
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}