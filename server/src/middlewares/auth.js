const jwt = require('jsonwebtoken');


const authentication = (req, res, next) => {
    try {
        let tokenBearer = req.headers['authorization'];
        if (!tokenBearer) {
            return res
                .status(400)
                .send({ status: false, message: "token is required" });
        }

        let tokenArray = tokenBearer.split(" ");
        let token = tokenArray[1];

        if (!token) {
            return res.status(404).send({ status: false, message: "Invalid Token" });
        }
        let decodedToken;
        jwt.verify(token, "password", (err, decode) => {
            if (err) {
                return res
                    .status(401)
                    .send({ status: false, message: err.message });
            }
            else {
                decodedToken = decode;
                let LoginUserId = decodedToken.userId;
                req["userId"] = LoginUserId;
                next();
            }
        });
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}

module.exports = { authentication };