## Build a basic version of PayTM

- created a db.js in backend and added .env(in which my mongoDB url is there) to gitignore. Inside db.js, created a basic user schema and exported the model 
- created routes folder in backend and inside that index.js and user.js is creeated in which a router is created and imported it into backend/index.js
- created 'backend/congig.js' and exported JWT secret, added cors and body-parser in 'backend/index.js'
- created signup and signin functionality in user.js  
- created 'backend/middleware.js' and wrote the middleware logic