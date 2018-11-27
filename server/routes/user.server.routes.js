var jwt = require('express-jwt'),
    authorize = jwt({
        secret: 'Unknown',
        userProperty: 'payload'
    });

    route.get('/profile', authorize, ctrlProfile.profileRead);

    