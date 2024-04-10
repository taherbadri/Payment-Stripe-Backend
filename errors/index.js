const BadRequestError = require("./BadRequestError");
const CustomError = require("./CustomError");
const NotFoundError = require("./NotFoundError");
const UnauthorizedError = require("./UnauthorizedError");

module.exports = {
	CustomError,
	NotFoundError,
	BadRequestError,
	UnauthorizedError,
};
