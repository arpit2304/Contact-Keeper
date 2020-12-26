const express = require('express');

const app =express();

app.get('/', (req, res) => res.json({msg: "Welcome to the ContactKeeper API..."}));

//define routes...
app.use('/api/users',require('./routes/users.js'));  
app.use('/api/auth',require('./routes/auth.js'));  
app.use('/api/contacts',require('./routes/contacts.js'));  

const PORT = process.env.PORT || 5000;  //will look for any environment var first otherwise port num 5000
    
app.listen(PORT, () => console.log(`Server stared on port ${PORT}`));  