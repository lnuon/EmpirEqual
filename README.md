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

curl -H 'Content-Type: application/json' \
    -d '{ "question": "How are you?" }' \
    -X POST http://localhost:7000/meetingquestions

curl -X GET http://localhost:7000/meetingquestions

[{"_id":"a768e519-b287-464f-b994-68da2b50fa2a","question":"How are you?"}]

curl -H 'Content-Type: application/json' \
    -d '{ "userId": "7e3d6e47-57d0-4106-9b05-1e0b46f71bd2", "questionResponses": [ { "questionId": "a768e519-b287-464f-b994-68da2b50fa2a", "responseValue": "good" } ] }' \
    -X POST http://localhost:7000/meetings

curl -X GET http://localhost:7000/meetings
[{"_id":"75495864-abba-464a-84af-b0934b5635d5","userId":"7e3d6e47-57d0-4106-9b05-1e0b46f71bd2","questionResponses":[{"questionId":"a768e519-b287-464f-b994-68da2b50fa2a","responseValue":"good"}]}]
```