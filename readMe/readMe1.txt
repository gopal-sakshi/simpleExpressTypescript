When developing an extensive application, it’s advisable to hook your project with watch parameters 
    that will help you restart your server whenever you make and save changes to your code structure.


(A)
ts-node-dev 
- it watches .ts files, and whenever you make a change, it will restart the server for you.
- npm install -D ts-node-dev            // -D ===> only dev dependency
- "scripts": {
      "dev": "ts-node-dev --respawn ./src/index.ts"
   }


(B) nodemon
- node.js package used to watch .js files 