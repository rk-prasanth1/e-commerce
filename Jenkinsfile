pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('DockerHub-ID')
        registry = "prasanthrk/e-comm-frontend"
        registrycredentials = 'DockerHUB-ID'
        dockerimage = ''

    }

    stages {
        stage ('docker image build') {
            steps {
                sh 'cd frontend && sudo docker build -t prasanthrk/e-comm-frontend .'
            }
        }

        stage ('docker login') {
            steps {
                 sh 'echo $DOCKERHUB_CREDENTIALS_PSW | sudo docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage ('docker image push to docker hub') {
            steps {
                sh 'sudo docker push prasanthrk/e-comm-frontend'
            }
        }

        stage ('remove old image') {
            steps {
                sh 'sudo docker image rm prasanthrk/e-comm-frontend'
            }
        }

        stage ('deploy the container') {
            steps {
                sh 'sudo docker container run -dt --name e-com-fe -p 80:80 prasanthrk/e-comm-frontend '
            }
        }

    }
}
