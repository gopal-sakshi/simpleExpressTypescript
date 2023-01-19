`build`
- When we npm run build our rimraf package will delete our existing dist folder
- Then, we run tsc to build our project, which as we know is compiled into dist (remember we specified this in our tsconfig.json). i.e. deletes the old code and replaces it with the new code.

`preserve`
- just calls our "build" command
    clean up any existing dist folders 
    and recompiles via tsc. 
- This always gets called before the "serve" command
    it seems, node looks for preserve script everytime we use serve... 
    if preserve is present, it gets executed; else node continues with serve script

`serve `
- uses our cross-env package to set the NODE_ENV to development
    now access process.env.NODE_ENV anywhere inside our .ts files
- Then, using <concurrently> we’re running tsc --watch (TypeScript Compiler in “watch mode”) which will rebuild whenever we change a file. 
- When that happens, our TypeScript code is outputted in out dist directory (remember we specified this in our tsconfig.json). 
- Once that’s recompiled, nodemon will see the changes and reload dist/index.js, our entry-point to the app. 
- This gives us full live recompilation upon every change to a .ts file.

`prestart`
- runs the same task as "preserve" and will clean up our dist, then use tsc to compile a new dist. 
- This happens before the "start" is kicked off, which we run via npm start.

`start`
- uses cross-env again and sets the NODE_ENV to production, so we can detect/enable any “production mode” features in our code. 
- It then uses node dist/index.js to run our project, which is already compiled in the "prestart" hook.
- All our "start" command does is execute the already-compiled TypeScript code.

`test`
- pffft.... What tests.
-----------------------------------------------------


`cross-env`
- CLI that will spawn a process for the command you give it with the environment variables set as you specify in the command.

`dotenv`
- will spawn the process with the environment variables based on a .env file.


`concurrently`
- Two or more NPM commands can be run simultaneously
- when you want to run the server & the client in parallel for a JavaScript project
- npm run serve EXPLAINED
    cross-env NODE_ENV=development
    concurrently \"tsc --watch\" \"nodemon -q dist23/index.js\"         \" is just an escape character...
    concurrently "tsc --watch" "nodemon -q dist23/index.js"
- if u dont like serve, use seve23 ====> it has single quotes

`cross-env`
- Most Windows command prompts will choke when you set environment variables with NODE_ENV=production like that.
    The exception is Bash on Windows, which uses native Bash
- Similarly, there's a difference in how windows & POSIX commands utilize environment variables. 
    With POSIX, you use: $ENV_VAR
    on windows you use %ENV_VAR%.
- This solution
    cross-env makes it so you can have a single command without worrying about setting or environment platform.