# Bunlar Backend

[![Build](https://img.shields.io/github/actions/workflow/status/ilkeozi/bunlar-backend/build-test.yml?branch=main&event=push&label=Build)](https://github.com/ilkeozi/bunlar-backend/actions)
[![Unit Tests](https://img.shields.io/github/actions/workflow/status/ilkeozi/bunlar-backend/build-test.yml?branch=main&event=push&label=Unit%20Tests)](https://github.com/ilkeozi/bunlar-backend/actions)
[![E2E Tests](https://img.shields.io/github/actions/workflow/status/ilkeozi/bunlar-backend/e2e-tests.yml?branch=main&label=E2E%20Tests)](https://github.com/ilkeozi/bunlar-backend/actions/workflows/e2e-tests.yml)

[](https://github.com/ilkeozi/bunlar-backend/issues)

This repository contains the **backend** for the **Bunlar** project, a platform for structured, constructive online debates. The backend is built using **NestJS** and deployed on **AWS Lambda** using the **Serverless Framework**.

## Prerequisites

Before you can run the project, ensure you have the following installed:

- Node.js (version 16.x.x or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [Serverless Framework](https://www.serverless.com/) (Globally installed):

  `npm install -g serverless`

## Installation

1.  Clone the repository:

        `git clone https://github.com/ilkeozi/bunlar-backend.git`
        `cd bunlar-backend`

2.  Install the dependencies:

    `npm install`

## Running the Project Locally

### 1. Compile the NestJS Project

Before running the project, compile the TypeScript code into JavaScript:

`npm run build`

### 2. Set Up Environment Variables

You’ll need to set up your environment variables by creating a `.env` file in the root directory. Example:

`MONGO_URI=mongodb://localhost:27017/bunlar-dev
JWT_SECRET=your-secret-key`

### 3. Run the Project with Serverless Offline

You can emulate the AWS Lambda environment locally using the **serverless-offline** plugin. To run the project locally:

`npm run offline`

The API will be available at `http://localhost:3000`.

### 4. Running in Development Mode with Hot-Reloading

Alternatively, you can run the NestJS server in development mode with hot-reloading:

`npm run start:dev`

This will run the backend without the AWS Lambda simulation but with hot-reloading enabled for rapid development.

## Scripts

Here are some of the key scripts available in the project:

- **Build**: Compile the project:

  `npm run build`

- **Start Development**: Run the NestJS project in development mode:

  `npm run start:dev`

- **Run Offline**: Simulate the Lambda environment locally:

  `npm run offline`

- **Lint**: Run the linter:

  `npm run lint`

- **Test**: Run unit tests:
  `npm run test`

## Testing

The project uses **Jest** for testing. To run the tests:

`npm run test`

For watching tests during development:

`npm run test:watch`

## Deployment

This project uses the **Serverless Framework** to deploy to AWS Lambda. To deploy the project, run:

`sls deploy`

Make sure you have AWS credentials configured in your environment.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  **Fork the repository**.
2.  **Create a new branch** (`git checkout -b feature/your-feature`).
3.  **Commit your changes** (`git commit -m 'Add some feature'`).
4.  **Push to the branch** (`git push origin feature/your-feature`).
5.  **Open a Pull Request**.

Please ensure that your code follows the existing style and includes tests. We also ask that all contributions adhere to the Code of Conduct.

### Code of Conduct

To create a welcoming environment for all contributors, we encourage all participants to read and adhere to our Code of Conduct.

## License

This project is licensed under the **GNU General Public License v3.0**. You can freely use, modify, and distribute this software under the terms of this license.

For more details, see the LICENSE file.
