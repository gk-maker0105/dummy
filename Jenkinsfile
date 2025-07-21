pipeline {
    agent any

    environment {
        IMAGE_NAME = 'myapp-image'
        CONTAINER_NAME = 'myapp'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/gk-maker0105/dummy'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp-image ./JenkinsCI_CD/app'
            }
        }

        stage('Stop Previous Container') {
            steps {
                script {
                    def exists = sh(script: "docker ps -aqf name=${CONTAINER_NAME}", returnStdout: true).trim()
                    if (exists) {
                        sh "docker rm -f ${CONTAINER_NAME}"
                    }
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
