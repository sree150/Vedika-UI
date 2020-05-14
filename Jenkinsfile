node {
stage ('Prepare environment'){
 git 'https://github.com/sree150/Vedika-UI.git'
 }
 
 stage('install packages and build'){
  sh label: '', script: 'npm install'
 }

  stage('Build UI app'){
   sh label: '', script: 'ng build --prod'  
  }
  
  stage('deploy'){
   sh label: '', script: '''scp /var/lib/jenkins/workspace/angularnew/package-lock.json ubuntu@13.127.145.118:/home/ubuntu/sre
'''
  }
  
}


