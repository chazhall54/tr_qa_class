# Continous Integration and Continous Deployment

![alt text](../imgs/Jenkins.jpg "dev team")


## Setup your Automation Server with AWS and Jenkins

Start up an EC2 instance, ssh into it and switch to the root user.

Install Java

``` bash
sudo yum -y install java-1.8*
```

Install wget
``` bash
sudo yum install wget
```

Install Jenkins
``` bash
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo # downloads the repo

sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key # imports the repo's public key

sudo yum install jenkins # installs jenkins
```

Start the Jenkins service
``` bash
sudo systemctl start jenkins.service
sudo systemctl status jenkins.service
```

Get the inital Jenkins password
``` bash
cat /var/lib/jenkins/secrets/initialAdminPassword # should return a long string
```

Update AWS and login to Jenkins
- Add 8080 as an inbound rule for the EC2 instance
- Go to the public IP:8080, enter the password, install the plugins and set credentials

---

## Reporting