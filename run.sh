# Build the Docker image for the current folder 
# and tag it with `dockerized-react`
docker build . -t dockerized-image-floward-case-study

# Check the image was created
docker images | grep dockerized-image-floward-case-study

# Run the image in detached mode 
# and map port 3000 inside the container with 3000 on current host
docker run -p 3000:3000 -d --name floward-case-study-container dockerized-image-floward-case-study 