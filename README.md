# Automated Salary Payment API

The Automated Salary Payment API is a simple yet powerful solution that automates salary payments to users based on their contracts. Users can register, and contracts will be created and assigned to them according to their contract terms and durations. Access it live at [ASP](https://automated-salary-payment.onrender.com)

## Table of Contents

- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Features](#features)
- [Documentation](#documentation)
- [Contributing](#contributing)

## Getting Started

To set up and run the API, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/mjavason/automated-salary-payment-api.git

   ```

2. Navigate to the project directory:

   ```shell
   cd automated-salary-payment-api
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

4. Create a `.env` file in the root directory and set up the necessary environment variables (see the sample `.env` file below).

5. Build the TypeScript code:

   ```shell
   npm run build
   ```

6. Start the server:

   ```shell
   npm start
   ```

The API will be accessible at `http://localhost:5000` by default.

## Environment Variables

Before running the API, make sure to set up the following environment variables in your `.env` file:

```env
ACCESS_TOKEN_SECRET=your-access-token-secret
APP_NAME=YourApp
JWT_SECRET=your-jwt-secret
MONGODB_URL=your-mongodb-url
MONGO_DB_NAME=your-mongodb-database-name
REFRESH_TOKEN_SECRET=your-refresh-token-secret
USERNAME=user@mail.com
SITE_LINK=your-app-website-link
MAIL_ADDRESS=your-mail-address@mail.com
MAIL_PASSWORD=your-mail-password
```

## Features

- **Automated Salary Payments**: Users receive their salaries automatically based on their contract terms.

- **Contract Assignment**: Contracts are created and assigned to users during registration.

- **Flexible Contracts**: Contracts can have customizable earnings and payment intervals.

- **Status Management**: Contracts can be active, terminated, suspended, or have other custom statuses.

## Documentation

For detailed documentation on using the Automated Salary Payment API and its endpoints, refer to the [API Documentation](https://documenter.getpostman.com/view/29278179/2s9YJaYimq).

## Contributing

Contributions to the Automated Salary Payment API are welcome! To contribute:

1. Fork the project on GitHub.

2. Create a new branch for your changes.

3. Make your improvements or additions.

4. Test your changes thoroughly.

5. Create a pull request with a clear description of your changes.

Contributions that enhance functionality, performance, and user experience are highly appreciated.
