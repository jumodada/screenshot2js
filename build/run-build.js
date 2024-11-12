const fsExtra = require('fs-extra')
const { rollup } = require('rollup')
const getConfig = require('./rollup.config')
const fs = require("fs");

function getPackagesFilesName() {
    return fs.readdirSync(resolve('src'))
}
function build() {
    const filesName = getPackagesFilesName()
    filesName.map((name) => {
        const config = getConfig(name)
        return config.output.map((item) => {
            return rollup(config)
                .then((bundle) => {
                    return bundle.write(item).then(() => {
                        copyTypingFile(name)
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        })
    })
}

function copyTypingFile(name) {
    fsExtra.copy(
        `./dist/types/${name}/src`,
        `./${name}/dist/types`,
        function (err) {
            if (err && err.code === 'EEXIST') console.error(err)
        }
    )
}

function removeDistFolder() {
    fsExtra.remove('./dist', (err) => {
        if (err) return console.error(err)
        console.log('success!')
    })
}

build()
