# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Photos

- `GET /api/photos`
- `POST /api/photos`
- `GET /api/photos/:id`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Albums

- `GET /api/albums`
- `POST /api/albums`
- `GET /api/albums/:id`
- `DELETE /api/albums/:id`
- `GET /api/albums/:id/photos`

### Tags

- `GET /api/tags`
- `POST /api/photos/:photo_id/tags`
- `DELETE /api/photos/:photo_id/tags/:tag_name`

### Comments

- `GET /api/photos/:photo_id/comments`
- `POST /api/photos/:photo_id/comments`
- `DELETE /api/photos/:photo_id/comments/:comment_id`
