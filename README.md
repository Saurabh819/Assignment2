**Node.js Assignment**
This project is a Node.js assignment that involves creating a RESTful API to handle form creation, data submission, and data retrieval using a SQL database. The project uses Node.js along with an ORM for database interaction (such as Sequelize or TypeORM).

**Technologies Used**
**Node**.js: JavaScript runtime for building server-side applications.
**ORM**: Any ORM for connecting to a SQL database (e.g., Sequelize, TypeORM).
**Database**: Any SQL database (e.g., MySQL, PostgreSQL).

**API Endpoints**
1. Create a Form
Route: POST /form

2. Fill Data
Route: POST /fill_data?form_title=user

3. Get All Data
Route: GET /fill_data?form_title=user

**Setup Instructions**
Clone the repository:
https://github.com/Saurabh819/Assignment2.git

cd assignment2

Install dependencies:
npm install

Configure the database:
Update the database configuration in config/database.js with database credentials.

Run the application:
npm start
