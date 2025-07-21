pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/gk-maker0105/dummy'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('myapp-image', './app')
                }
            }
        }
        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name myapp myapp-image'
            }
        }
    }
}
