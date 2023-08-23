# Employee Management App
This is a simple employee management app built with using React, Node.js, Express.js and MongoDB. Docker is used to containerize the app.

## How to run the app
### Without Docker
1. Clone the repository
2. Run `npm install` in the frontend directory
3. Run `npm install` in the backend directory
4. Change the `MONGODB_URI` in the backend directory to your own MongoDB URI
5. Run `npm start` in the backend directory to start the server and connect to the database. You should see the following message in the terminal: `Listening on port: 5000` and `Connected to MongoDB`
6. Run `npm start` in the frontend directory to start the React app. 
7. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  

_Note:_ Backend requires `PORT` and `MONGODB_URI` environment variables to be set and Frontend requires the backend API URL to be set.  
You can set them in a `.env` file in the backend directory. The `.env` file should look like this:
```
PORT=<YOUR_PORT>
MONGODB_URI=<YOUR_URI>
```
You can set the backend API URL in the `.env` file in the frontend directory. The `.env` file should look like this:
```
REACT_APP_API_URL=<YOUR_API_URL>
```

### With Docker
1. Clone the repository
2. Run `docker-compose up` in the root directory
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Operations supported
1. Add an employee
2. Edit an employee
3. Delete an employee
4. Get employee details by department
5. Add a department
6. Edit a department
7. Delete a department
8. Get all departments


