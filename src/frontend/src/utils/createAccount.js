// POST to /users
export default function(user, password) {
	fetch('/users', {
		method: 'POST',
		body: JSON.stringify({
			user,
			password
		})
	});
}