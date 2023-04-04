npm i body-parser cross-env dotenv express helmet rimraf

`body-parser`
extracts the entire body of an incoming request stream (for Express) and exposes it on req.body

`cross-env`
sets environment variables without us having to worry about the platform.

`dot-env`
loads in .env variables into process.env so we can access them inside our *.ts files.

`express`
framework for building APIs, such as handling GET, POST, PUT, DELETE requests with ease and building your application around it. 
It’s simple and extremely commonly used.

`helmet`
adds some sensible default security Headers to your app.
helmet acts as a middleware for Express; automatically adding or removing HTTP headers to comply with web security standards.

`rimraf`
essentially a cross-platform rm -rf for Node.js 
so we can delete older copies of our dist directory before recompiling a new dist

`cookie-parser`
Cookies are simple, small files/data that are sent to client with a server request 
they are stored on the client side. 
Every time the user loads the website back, this cookie is sent with the request
Based on cookie, we get to know who accessed our server & respond with his favourites
-----------------------------------------------------------------------------------------------------

Most of these packages ship with type definitions for TypeScript
- @types/node, which are type definitions for Node.js
------------------------------------------------------------------------------------------------------------------------------------