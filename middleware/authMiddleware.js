const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    try {
        const authHeader = req.headers.authorization;

        // console.log(authHeader, "authHeader")

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Access Denied.No token Provided" })

        }

        const token = authHeader.split(" ")[1]

        console.log(token, "token")

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decodedToken, "decodedToken")

        req.user = decodedToken;

        next();


    } catch (error) {
        console.error("JWT Verification failed", error);
        res.status(401).json({ message: "Invalid or token expired" });
    }
}

module.exports = verifyToken;


