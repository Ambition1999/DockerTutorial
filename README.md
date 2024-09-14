# Docker Tutorial: Node.js Course Service & Website

This repository contains a tutorial project for containerizing a **Node.js course service** API and a static **website** using **Docker**. The tutorial covers how to use Docker for both the backend (Node.js) and the frontend (static HTML), demonstrating the benefits of Dockerizing services for simplified deployment and management.

## Features

- **Node.js Course Service**: A basic API to manage courses.
- **Static Website**: A simple front-end website.
- **Dockerized**: Both services are containerized using Docker.
- **Docker Compose**: Simplifies running the entire stack in one command.

## Prerequisites

Ensure that you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started) (>= 20.x)
- [Docker Compose](https://docs.docker.com/compose/install/) (optional)

## Project Structure

```bash
.
├── course-service            # Backend: Node.js API service
│   ├── Dockerfile            # Dockerfile for the Node.js service
│   ├── index.js              # Main server file for the course service
│   ├── package-lock.json     # Lockfile for dependencies
│   ├── package.json          # Node.js project metadata
│   └── .dockerignore         # Files to ignore in the Node.js Docker image
├── website                   # Frontend: Static website
│   ├── index.html            # Main HTML file for the website
├── docker-compose.yml        # Docker Compose file to manage the services
└── README.md                 # Documentation for the project
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/docker-tutorial.git
cd docker-tutorial
```

### 2. Running with Docker Compose

Docker Compose is used to manage the services (Node.js course service and the static website).

```bash
docker-compose up --build
```

- This command will:
  - Build the Docker images for the Node.js course service and the static website.
  - Start the services.

### 3. Accessing the Application

- **Course Service (Backend)**: Node.js API is running on `http://localhost:4000`
- **Website (Frontend)**: Static website is accessible at `http://localhost:8080`

### 4. Stopping the Application

To stop the application and remove the containers:

```bash
docker-compose down
```

## Backend: Node.js Course Service

The **course-service** is a simple API built using **Node.js**. It provides basic endpoints for managing course data.

### Dockerfile for Node.js

The `course-service/Dockerfile` contains instructions for containerizing the backend service.

```dockerfile
# Dockerfile for Node.js Course Service
FROM node:14

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 4000
CMD ["node", "index.js"]
```

### Local Development (Without Docker)

If you prefer to run the backend locally without Docker:

```bash
cd course-service
npm install
npm start
```

The Node.js API will be running on `http://localhost:4000`.

## Frontend: Static Website

The **website** folder contains a basic HTML file. In this example, we’re using **nginx** to serve the static website from a Docker container.

### docker-compose.yml

The `docker-compose.yml` file defines how Docker should run both the course service and the static website.

```yaml
version: '3'

services:
  course-service:
    build: ./course-service
    ports:
      - "4000:4000"
  
  website:
    image: nginx:alpine
    volumes:
      - ./website:/usr/share/nginx/html
    ports:
      - "8080:80"
```

### Local Development (Without Docker)

To serve the static website without Docker, you can simply open the `index.html` file in your browser, or you can use a local server (like `http-server`):

```bash
cd website
npx http-server .
```

The website will be available at `http://localhost:8080`.

## Docker Compose Commands

- `docker-compose up`: Build and start the containers.
- `docker-compose down`: Stop and remove containers, networks, and volumes.
- `docker-compose up --build`: Rebuild the images before starting containers.

## Conclusion

This tutorial demonstrates how to use Docker to containerize both a **Node.js API** and a **static website**. Docker allows you to streamline the deployment process and create isolated, reproducible environments for your applications.

Feel free to explore and extend this project as needed!

## License

This project is licensed under the MIT License.