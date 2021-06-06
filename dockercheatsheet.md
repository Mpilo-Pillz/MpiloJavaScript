## DOCKER COMMANDS

Docker CheatSheet
docker version
docker run hello-world
docker run <image_name> comand
docker ps
docker ps —all (see a list of all docker containers that ever existed)

Docker run busybox echo hi there
Docker run busybox ls

CREATING CONTAINERS
docker create hello-world
// container id gets generated

docker start -a imageID
-a watches for output coming from the container and print it out on the terminal

RESTARTING STOPPED CONTAINERS
docker start -a imageID

DELETE CONTAINERS
docker system prune

GET LOGS FROM CONTAINER
docker logs imageID

STOP CONTAINER
docker stop <containerID >// gives the process a chance to clean up before shutting down
docker kill <containerID> // a Ford stop no clean up

Docker ps to get the imageID
Docker stop/kill

RUN INSIDE THE CONTAINER
docker exec -it imgID redis-cli (-it flag lets you to communicate (send test) with the container) (think of it as insert text)

OPEN TERMINAL IN CONTEXT OF RUNNING CONTAINER
docker exec -it imgID sh (hit ctrl + D to get out)
