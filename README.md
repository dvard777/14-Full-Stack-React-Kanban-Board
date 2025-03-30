# 14 Full-Stack React: Kanban Board

Live Site https://one4-full-stack-react-kanban-board.onrender.com  

This project is a full-stack Kanban board application built with React, Express, and PostgreSQL. It includes user authentication using JSON Web Tokens (JWT), allowing users to securely log in, view, and manage work tasks on a Kanban board.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)


## Features

- **User Authentication:** Secure login using JWT.
- **Protected Routes:** Access to Kanban board data only after authentication.
- **Kanban Board:** Manage tasks/tickets with create, read, update, and delete (CRUD) functionality.
- **Full-Stack Architecture:** React client and Express/Sequelize server with a PostgreSQL database.

## Technologies

- **Client:** React, Vite
- **Server:** Node.js, Express, Sequelize, JWT, bcrypt
- **Database:** PostgreSQL

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v14+ recommended)
- [PostgreSQL](https://www.postgresql.org/)
- Git

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd 14-Full-Stack-React-Kanban-Board
2. Set Up the Server
Navigate to the server directory:

bash
Copy
cd Develop/server
Install dependencies:

bash
Copy
npm install
Create a .env file in the Develop/server folder with the following variables:

env
Copy
DB_NAME=kanban_db
DB_USER=dvard777
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=your_long_random_secret_here
PORT=3001
Create the database:

Open your PostgreSQL shell or a GUI client and run:

sql
Copy
CREATE DATABASE kanban_db;
If you have a schema file (located at server/db/schema.sql), adjust it (remove DROP/CREATE DATABASE commands) and run:

bash
Copy
psql -U dvard777 -d kanban_db -f ./db/schema.sql
Start the server:

bash
Copy
npm run dev
The server should be running on http://localhost:3001.

3. Set Up the Client
Open a new terminal and navigate to the client directory:

bash
Copy
cd Develop/client
Install dependencies:

bash
Copy
npm install
Start the client:

bash
Copy
npm run dev
Your React app should now be running on a URL provided by Vite (typically http://localhost:3000).


