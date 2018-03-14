# tmpdemo

The project is created using `create-choo-app` which is an excellent starter for choo apps.

The purpose of this just project is to ilustrate a problem I am having when one consume a dependency (local or foreign) which does an `imports fs`.

Bankai runs babelify and then brfs (globally). Apparently the problem is related with how brfs works but I am not sure. Digging into the error message I can see the problem comes from this [line](https://github.com/browserify/static-module/blob/master/index.js#L291) in `static-module`.

If you run this project, you will see an error on console telling you `_fs is not defined`.

I have noticed this error on a "real" project when using [choo-slides](https://github.com/geut/choo-slides). In particular, the slides created with choo-slides are having this problem (eg: https://github.com/dpaez/async-tour). Choo-slides is using sheetify to add some style to the built-in slides and controls. Sheetify includes postcss which includes a module: [`previous-map.js`](https://github.com/postcss/postcss/blob/master/lib/previous-map.es6) which imports fs and triggers the error. Also according to postcss compile script sourcemaps are inside the final npm modules.

If I disable the global use of brfs on bankai's [graph-script.js](https://github.com/choojs/bankai/blob/master/lib/graph-script.js#L79) the error is gone but I don't think this is a practical solution.

It is highly probable that I am missing something or maybe there is a problem with how I am building choo-slides. Any help is welcome :)

## Commands
Command                | Description                                      |
-----------------------|--------------------------------------------------|
`$ npm start`          | Start the development server
`$ npm test`           | Lint, validate deps & run tests
`$ npm run build`      | Compile all files into `dist/`
`$ npm run create`     | Generate a scaffold file
`$ npm run inspect`    | Inspect the bundle's dependencies
