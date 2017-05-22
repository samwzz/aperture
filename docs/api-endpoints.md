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
- `GET /api/users/:user_id/photos`
- `GET /api/albums/:album_id/photos`

### Albums

- `GET /api/albums`
- `POST /api/albums`
- `GET /api/albums/:id`
- `DELETE /api/albums/:id`
- `GET /api/users/:user_id/albums`

### Tags

- `GET /api/tags`
- `POST /api/photos/:photo_id/tags`
- `DELETE /api/photos/:photo_id/tags/:tag_name`
<!-- query string -->
### Comments

- `GET /api/photos/:photo_id/comments`
- `POST /api/photos/:photo_id/comments`
- `DELETE /api/photos/:photo_id/comments/:comment_id`
