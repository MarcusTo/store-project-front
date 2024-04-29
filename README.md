
# Online Electronics Store

Welcome to your one-stop destination for premium electronic products and services.

## Table of Contents

1. [Overview and Features](#overview)
2. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)

## Overview and Features

- **Extensive Product Catalog:**
  - Apple devices, Apple accessories 
  - Android devices
  - Windows computers
  - Computer parts
  - Accessories for your electronic devices
  - Other computer related items

- **Service Offerings:**
  - Repairs
  - Maintenance

- **User-Friendly Interface:**
  - Intuitive navigation
  - Smooth checkout process

- **Product Reviews and Ratings:**
  - Customer feedback system

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm - Node Package Manager](https://www.npmjs.com/) 
- [MongoDB Compass](https://www.mongodb.com/products/tools/compass)
- [MongoDB Shell - mongosh](https://www.mongodb.com/docs/mongodb-shell/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/MarcusTo/store-project.git
    ```

2. Navigate to the project directory:

    ```bash
    cd store-project
    ```

3. Install dependencies in the project directory:

    ```bash
    npm install
    ```

    ```bash
    npm i mongoose
    ```

## Usage

1. Start MongoDB compass:
   - In MongoDB compass, start a new connection to your database. Enter the following URI:
   - Replace USERNAME, PASSWORD and SERVER with your server information.

    ```bash
    mongodb+srv://(USERNAME:PASSWORD)@(SERVER).hcbcpka.mongodb.net
    ```
    
2. Open mongosh console and enter the following connection string: 

    ```bash
    mongodb+srv://(USERNAME:PASSWORD)@(SERVER).hcbcpka.mongodb.net
    ```
    
3. Navigate to project server folder and start the development server:

     ```bash
    cd server
    ```
    
    ```bash
    npm start
    ```
    
4. Navigate to project folder and start the project:

     ```bash
    cd store-project
    ```
     
    ```bash
    npm run dev
    ```
     
5. Open your browser and visit `http://localhost:5173` to view the front-end of the website and `http://localhost:3000`for the back-end database of the website.
## ERD Diagram

[ERD Diagram](https://lucid.app/lucidchart/94fc75a8-376e-4b6c-a7e4-be09b4ad5262/edit?beaconFlowId=C1E2FAEE5B2DC0FF&page=0_0&invitationId=inv_906ba416-a3d9-43cf-a15e-069f24c32c5a#)


## License

This project is licensed under the [MIT License](LICENSE).

## Authors

Marcus Toman
[@](https://github.com/MarcusTo)

Rasmus Jalakas
[@](https://github.com/RasssJ)
