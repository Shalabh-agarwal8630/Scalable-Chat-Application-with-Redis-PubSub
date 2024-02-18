# Scalable Chat Application with Redis PubSub in TurboRepo

This project is a scalable chat application built using Redis PubSub architecture on Aiven cloud, organized with TurboRepo. The TurboRepo structure enhances project organization and scalability. Below are instructions on setting up and running the project.

## Getting Started

To use this example, run the following command to initialize TurboRepo:

```sh
npx create-turbo@latest
```

## Project Structure

This TurboRepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is written in 100% [TypeScript](https://www.typescriptlang.org/).

## Project Setup

### 1. Clone the Repository

Clone the TurboRepo repository:

```sh
git clone [repo-url]
```

### 2. NodeJS Socket Server Setup

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
- Verify that messages sent by one client are received in real time by all other connected clients.

## Conclusion

Congratulations! You have successfully built a scalable chat application using Redis PubSub architecture on Aiven cloud, organized with TurboRepo. This application can handle high traffic and provide real-time communication capabilities to users

## Useful Links

Learn more about the power of TurboRepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
