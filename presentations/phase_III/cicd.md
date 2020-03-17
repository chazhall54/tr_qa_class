# Continous Integration and Continous Deployment

![alt text](../imgs/Jenkins.jpg "dev team")


## Setup your Jenkins Server with AWS, Docker, Jenkins

Start up an EC2 instance, ssh into it and switch to the root user.

Add the Docker repo 

``` bash
dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
```

List Docker CE packages
``` bash
dnf list docker-ce
```

Install Docker
``` bash
dnf install docker-ce --nobest -y
```

Start the docker service
``` bash
systemctl start docker
systemctl enable docker
docker version # checks the version
docker run hello-world # test docker is working 
docker images 
docker ps -a
```

Install Jenkins
``` bash
docker run -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts
# Copy the password from the log
# Add 8080 as an inbound rule for the EC2 instance
# Go to the public IP:8080, enter the password, install the plugins and set credentials
```

---

## Reporting