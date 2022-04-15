const { ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv').config();


module.exports = {
    systemIfo:{
        operativeSystem: process.platform,
        nodeVersion: process.versions.node,
        rss: process.memoryUsage().rss,
        execPath: process.cwd(),
        pid: process.pid,
        fileProyect: process.mainModule.path
    },
    PORT: 8080,
    mongoRemote: {
        client: { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 },
        cnxStr: `${process.env.URI}`
    },
}