## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Navbar

**PhotosContainer**
 - PhotoThumbnail
  * PhotoIndex

**AlbumContainer**
 - AlbumThumbnail
  + PhotoIndex

**SearchResultsContainer**
 - Search
 - PhotoIndex

**TagContainer**
 - PhotoThumbnail
  + PhotoIndex

**CommentsContainer**
 - CommentIndex

**PhotoIndex**
 - PhotoIndexItem
  + PhotoDetail
    + CommentsIndex
    - Tags
      - Tag
    * Photo

**CommentIndex**
 - CommentIndexItem

**NewPhotoContainer**
 - NewPhoto

**Search**

**NewAlbum**
 - NewAlbum

**NewTag**
 - NewTag

**newComment**
 - NewComment

**TagsSearch**
 + AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/photo/:photoId" | "PhotosContainer" |
| "/home/album/:albumId/photo/:photoId" | "AlbumContainer" |
| "/home/tag/:tagId/photo/:photodId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-photo" | "NewPhotoContainer" |
| "/new-album" | "NewAlbum" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
