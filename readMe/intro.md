# npm install express

# npm install     --save-dev                  // these are devDependencies... 
        typescript 
        ts-node 
        @types/node 
        @types/express 

npm install typescript ts-node @types/node @types/express --save-dev

Even though code is written in TypeScript, it will be compiled as “vanilla” JavaScript. 
    TypeScript is not required, not used, for runtime and is only used during development. 
    Since the developer is the only “consumer” of TypeScript, it should be installed as a dev dependency.

# npx tsc --init
    Running the above command creates the tsconfig.json file 
        where we can customize the TypeScript configuration.
    
# Important properties in tsconfig.json
- target
    specify which ECMAScript version to use in your project. 
    If you set target to ES5 and then you use arrow functions, the code is compiled to an equivalent ES5 function. 
    The available versions are ES3 (default), ES5, ES2015, ES2016, ES2017, ES2018, ES2019, ES2020, ESNEXT.
- module
    you can specify which module manager to use in the generated JavaScript code. 
    Choose among ----> none, commonjs, amd, system, umd, es2015, es2020, ESNext. 
    The most common module manager and the default one is commonjs.
- outDir
    with this option, we can specify where to output the “vanilla” JavaScript code.
- rootDir
    specifies where the TypeScript files are located.
- strict    
    enabled by default, this toggles strict type-checking options.
- esModuleInterop
    this option is true by default; 
    it controls interoperability between CommonJS and ES modules. 
    It does this by creating namespace objects for all imports.
------------------------------------------------------------------------------------------------------------------

Typically, you would npm i -g typescript (the -g means global) 
    it then allows us to run tsc to create a tsconfig.json. 
    However, with npm we have something called npx which the “x” essentially means “execute”.
npx allows us to skip a global install and use tsc within the local project to create a tsconfig.json.
If we did try to run tsc --init to create a tsconfig.json
    we’d see this error (because typescript would not be available globally, thus tsc also would be unavailable):
------------------------------------------------------------------------------------------------------------------

# node .
- runs the file mentioned in 'main' property of package.json
- generally, default values = `index.js`    `server.js`
--------------------------------------------------------------------------------------------------------------------