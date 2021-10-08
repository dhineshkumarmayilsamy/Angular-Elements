const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        'dist/angular-elements/polyfills.js',
        'dist/angular-elements/main.js',
    ]
    await fs.ensureDir('../dist')
    await concat(files, '../dist/main.js');

    await fs.copyFile('./dist/angular-elements/styles.css', '../dist/styles.css')
    
    // await fs.copy('./dist/angular-elements/assets/', 'elements/assets/' )
})()