node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {

        def customImage = docker.build("jaydeep36/hello-nodejs")

        /* Push the container to the custom Registry */
        customImage.push("latest")
    }
}