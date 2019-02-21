
const uuid = require('uuid/v1');

const requestId = {
    add: (req, res, next) => {
        try {
            req.requestId = uuid();
            next();

        } catch (e) {            
            next(e);
        }
    }
}

module.exports = requestId;
