# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
image_url   | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
album_id    | integer   | not null, foreign key (references albums), indexed

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## tags
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
name         | string    | not null
taggable_id  | integer   | indexed
taggable_type| integer   |

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
photo_id    | integer   | not null, foreign key (references photos), indexed, unique [tag_id]
