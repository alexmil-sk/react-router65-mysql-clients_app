const ERROR_CODES = {
	EMAIL_NOT_FOUND: "This user does not exist",
	EMAIL_EXISTS: "User with this email does not exist",
	MISSING_PASSWORD: "Password shouldn`t be empty",
	INVALID_PASSWORD: "Password is incorrect",
	INVALID_EMAIL: "Email is not valid",
	WEAK_PASSWORD: "Password should be at least 6 characters",
	MISSING_EMAIL: "Email is missing"
}

export function error(code) {
	return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unknown error';
}