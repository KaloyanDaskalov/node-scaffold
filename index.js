const express = require('express');
const { PORT, DB_URI } = require('./config');
const router = require('./config/routes');

fireUp();

async function fireUp() {

    const app = express();

    await require('./config/mongoose')(DB_URI);

    require('./config/expressConfig')(app, express.static, express.urlencoded);

    app.use(router);

    app.listen(PORT, (err) => {
        if (err) console.error('>Server Failed <' + err);
        console.log('Server listening at http://localhost:' + PORT);
    });
}
