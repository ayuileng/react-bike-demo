add less-loader:
1. yarn add @craco/craco
2. "scripts": {
   "start": "craco start",
   "build": "craco build",
   "test": "craco test"
}
3. yarn add craco-less
4. 
```
const CracoLessPlugin = require('craco-less')
module.exports = {
     plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}
```