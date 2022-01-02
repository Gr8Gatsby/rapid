# Local Setup
* Thunder Client Extension for VS Code
* Prettier Extension for VS Code
* [GitHub's CLI "gh"](https://github.com/cli/cli#installation)
* [Netlify's CLI](https://docs.netlify.com/cli/get-started/)
  * `npm install netlify-cli -g`
  * `yarn global add netlify-cli`
  * If using yarn make sure to add: `export PATH="$(yarn global bin):$PATH"` to the end of your command line config

# Steps
```
mkdir rapid 
cd rapid 
```

```
yarn init
``` 
or 
```
npm init 
```

>question name (rapid): 

>question version (1.0.0): 

>question description: example API

>question entry point (index.js): 

>question repository url: 

>question author: Kevin Hill

>question license (MIT): 

>question private: no

```
yarn add --dev @babel/cli @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/runtime @rollup/plugin-babel rollup
```

## Create babel & rollup config
*.babelrc*
```json
{
    "presets": [
        ["@babel/preset-env", {
            "modules": false
        }]
    ]
}
```

*rollup.config.js*
```javascript
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/js/main.js',
    output: {
      file: 'dist/js/main.js',
      format: 'iife',
      name: 'app',
      sourcemap: 'inline'
    }
  }
```

```console
mkdir src
cd src
mkdir js
```

*main.js*
```javascript
/* TODO: add code */
```

*index.html*
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Client Application</title>
</head>
<body>

    <script src="./js/main.js"></script>
</body>
</html>
```

```json
{
  "name": "rapid",
  "version": "1.0.0",
  "description": "example API",
  "main": "index.js",
  "author": "Kevin Hill",
  "license": "MIT",
  "private": false,
  "scripts":{
    "build":"babel ./src --out-dir ./dist --copy-files"
  },
  "devDependencies": {
    "@babel/cli": "^7.16.7",
    "@babel/core": "^7.16.7",
    "@babel/plugin-transform-runtime": "^7.16.7",
    "@babel/preset-env": "^7.16.7",
    "@babel/runtime": "^7.16.7",
    "@rollup/plugin-babel": "^5.3.0",
    "rollup": "^2.62.0"
  }
}
```


```
git init
gh create repo
```

```
yarn add @netlify/functions
```

```
netlify login
```

```
netlify init
```
