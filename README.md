# Scalable Chat Application with Redis PubSub

## Introduction
Welcome to our scalable chat application built using Redis PubSub architecture on Aiven cloud. This project demonstrates how to create a real-time chat application that can handle high traffic and scale effectively using Redis. The project utilizes the TurboRepo structure for enhanced organization.

## Scalable Architecture
Our application utilizes Redis PubSub architecture to enable real-time communication between clients and the server. Redis acts as a message broker, facilitating seamless communication between clients connected to the web sockets.

## Project Setup
### 1. Cloning the Repository
Clone the repository from the following URL: [GitHub Repo URL](link-to-your-repo)

### 2. TurboRepo Project Setup
Ensure you have TurboRepo installed on your local machine. Follow the steps outlined in the tutorial to set up the TurboRepo structure for enhanced project organization.

### 3. NodeJS Socket Server Setup
Follow the steps outlined in the provided tutorial to set up the NodeJS socket server. This server will handle incoming connections from clients and manage real-time communication.

## Building Full Stack Chat Application
### 1. Client-Side Setup
- Create the necessary HTML, CSS, and JavaScript files for the client-side interface.
- Implement the functionality to send and receive messages using web sockets.

### 2. Server-Side Setup
- Set up routes and controllers to handle incoming socket connections.
- Implement logic to manage Redis PubSub events for real-time message broadcasting.

## Setting up Redis on Aiven
### 1. Sign up for Aiven
Create an account on Aiven.io and navigate to the Redis service dashboard.

### 2. Create a Redis Service
Create a new Redis service instance on Aiven, choosing the appropriate configuration based on your application's requirements.

### 3. Obtain Connection Details
Retrieve the connection details (host, port, username, password) provided by Aiven for connecting to your Redis service.

## Connecting with Redis Pub-Sub
- Use the obtained connection details to establish a connection with the Redis service from your NodeJS server.
- Subscribe to Redis PubSub channels to listen for incoming messages and broadcast them to connected clients.

## Testing our Scalable Chat Application
- Run the NodeJS server and open multiple client instances to simulate concurrent users.
- Verify that messages sent by one client are received in real-time by all other connected clients.

## Conclusion
Congratulations! You have successfully built a scalable chat application using Redis PubSub architecture on Aiven cloud, organized with TurboRepo. This application can handle high traffic and provide real-time communication capabilities to users.

