const connectDatabase = require('./config/database')
const app = require('./app')
const port = 5000;


connectDatabase();



const server = app.listen(port, () => {
    console.log(`Server listening on port no ${port}`);
});

