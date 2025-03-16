## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/contents | Create a new content with title and image |
| GET | /api/contents | Get all contents |
| GET | /api/contents/:id | Get a specific content by ID |
| PUT | /api/contents/:id | Update a content |
| DELETE | /api/contents/:id | Delete a content |

#### GET ALL

```http
  GET /api/contents
```

#### GET One

```http
  GET /api/contents/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `:id` | `string` | **Required**. |

#### UPDATE One

```http
  PUT /api/contents/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `:id` | `string` | **Required**. |


#### POST

```http
  POST /api/contents
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. |
| `image` | `string` | **Required**. |


#### UPDATE One

```http
  DELET /api/contents/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `:id` | `string` | **Required**. |
