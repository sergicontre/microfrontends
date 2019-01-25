const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/angular-web-component-project/runtime.js',
        './dist/angular-web-component-project/polyfills.js',
        './dist/angular-web-component-project/scripts.js',
        './dist/angular-web-component-project/main.js'
    ];

    await fs.ensureDir('elements');
    await concat(files, 'dist/my-angular-microapp.js');
})();