const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	// Get the token from the Authorization header
	const authHeader = req.headers.authorization;
	const token = authHeader && authHeader.split(" ")[1]; // Format: "Bearer <token>"

	if (!token) {
		return res.status(401).json("You are not authenticated!");
	}

	// Verify the token
	jwt.verify(token, process.env.SECRET, (err, data) => {
		if (err) {
			return res.status(403).json("Token is not valid!");
		}

		// Attach the user ID to the request object
		req.userId = data._id;
		next();
	});
};

module.exports = verifyToken;