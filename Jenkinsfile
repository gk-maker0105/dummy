pipeline {
    agent any

    environment {
        IMAGE_NAME = 'myapp-image'
        CONTAINER_NAME = 'myapp'
    }

    stages {
        stage('Clone Repo') {
            steps {
                // Specify correct branch explicitly if needed
                git branch: 'main', url: 'https://github.com/gk-maker0105/dummy'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}", './JenkinsCI_CD/app')
                }
            }
        }

        stage('Stop Previous Container') {
            steps {
                script {
                    // Only stop & remove if container already running
                    def containerExists = sh(script: "docker ps -aqf name=${CONTAINER_NAME}", returnStdout: true).trim()
                    if (containerExists) {
                        sh "docker rm -f ${CONTAINER_NAME}"
                    }
                }
            }
        }

        stage('Run Container') {
            steps {
                sh "docker run -d -p 3000:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }
}
