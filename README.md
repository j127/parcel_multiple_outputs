**EDIT:** I think there is a Parcel bug. It isn't reading the `.babelrc` file only when the `env` key is used. Babel by itself _does_ read the file (`npx babel src/index.js -d build`). If I remove the `env` section and move the plugin up to the top level, Parcel does read it. But it reads it in development as well as production, which is not what is wanted.

Parcel does work with this in the `.babelrc`:

```json
{
    "plugins": ["transform-remove-console"]
}
```

Parcel does **not** follow these options in `.babelrc`, but Babel itself does when used directly:

```json
{
    "env": {
        "development": {
            "plugins": []
        },
        "production": {
            "plugins": ["transform-remove-console"]
        }
    }
}
```

It also doesn't work with Parcel if I put the config in `package.json` like this (though I'm not certain if this is the correct syntax for `package.json`):

```json
"babel": {
    "env": {
        "development": {
            "plugins": []
        },
        "production": {
            "plugins": [
                "transform-remove-console"
            ]
        }
    }
}
```

Anyway, the repo is here to look at more closely later.

---

This is an example of using Parcel bundler to:

-   Read from multiple JS files and build to different bundles. (See `package.json`.)
-   Remove `console.log` from the builds using Babel.

```text
$ npm install
```

Run in development:

```text
$ npm start
```

Build for production:

```text
$ npm run build
```

In both cases, you can run the programs with these commands:

```text
$ node build/bundles/index.js
$ node build/bundles/other.js
```

In development mode, the logging statements will work. In production, they won't do anything.
