# EmpirEqual

## Running
```bash
# fetch deps, transpile typescript, and transpile react front end
make build

# run backend / frontend locally
make run

# deploy to server
make publish
```
    

```
curl -H 'Content-Type: application/json' \
    -d '{ "fullname": "alex", "password": "test", "age": "35", "description": "gwm", "email": "alex@alexsuttmiller.io" }' \
    -X POST http://localhost:7000/users
```