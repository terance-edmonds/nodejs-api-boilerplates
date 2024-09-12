# NodeJs + Express + Typescript + MongoDB

## Project Overview

This project is a boilerplate for building a API using Node.js, Express, MongoDB, and TypeScript. It provides a structured foundation for developing scalable and maintainable server-side applications.

## Features

-   **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
-   **Express**: Fast, unopinionated, minimalist web framework for Node.js.
-   **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
-   **MongoDB**: NoSQL database for modern applications.

## Prerequisites

-   Node.js (v14.x or later)
-   npm (v6.x or later) or yarn (v1.x or later)
-   MongoDB (v4.x or later)

## Getting Started

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/terance-edmonds/nodejs-api-boilerplates
    cd nodejs-api-boilerplates
    ```

2. Install dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=8080 # Optional, defaults to 8080 if not set
    ```

4. Start MongoDB server:

    Ensure MongoDB is running on your local machine or provide a connection string to a remote MongoDB server.

### Running the Application

1. Start the development server:

    ```sh
    npm run dev
    # or
    yarn dev
    ```

### Building the Application

To build the application for production, run:

```sh
npm run build
# or
yarn build
```
