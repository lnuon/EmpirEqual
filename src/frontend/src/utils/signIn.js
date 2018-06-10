// GET to /users
export default function(user) {
	fetch(`/users?email=${user}`, {
		method: 'GET'
	});
}