# Docker
## Make a website inside the container

### Steps:

1. Go to the website called [Bootstrap Landing Page](https://startbootstrap.com/themes/landing-pages) and select the desired website with source code.
2. Now paste the source code to the local_directory that mapped to the container.
    
    <aside>
    🍉 `$ docker exec -it [container_name] bash` → To execute the container with bash shell interactive.
    
    </aside>
    
3. That’s all now refresh the host website you can see the web page that hosted.

This is the sample image that ran from [localhost:7000](http://localhost:7000)

![Grayscale - Start Bootstrap Theme - Google Chrome 26-05-2023 19_00_31](https://github.com/Karthikn-n/Docker/assets/102584859/2e72ec1e-fd17-473c-8b9f-049648244b0b)


- In URL box that you can see [localhost:7000](http://localhost:7000) running.
