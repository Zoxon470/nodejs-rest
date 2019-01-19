# nodejs-rest
Simple node-js RESTful application

# Starting
```sh
$ git clone https://github.com/Zoxon470/nodejs-rest
$ cd nodejs-rest
$ docker-compose up --build
```

# Documentation for API

| Endpoint  | Description | Method | Payload
| :---: | :---: | :---: | :---: |
| /notes  | Get all notes  | **GET** |
| /notes/`note id`  | Get note  | **GET** |
| /notes  | Create note  | **POST** | ```json {"title": "Go to work", "text": "Tomorrow I'll go to work at 9:00"}```
| /notes/`note id`  | Edit note  | **PUT** |  ```json {"title": "Go to school", "text": "Tomorrow I'll go to school at 8:00"}```
| /notes/`note id`  | Delete note  | **DELETE** | 