This is an example of using Parcel bundler to:

- Read from multiple JS files and build to different bundles. (See `package.json`.)
- Remove `console.log` from the builds using a custom `log` function from the `src/logger.js` file.

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
