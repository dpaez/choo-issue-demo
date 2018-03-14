import fs from 'fs'

class Demo {
    doit() {
        if (fs.existsSync('./tmp.js')) console.log('hi tmp')
    }
}

export default Demo
