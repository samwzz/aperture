## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home (holds PhotosContainer)
 - Navbar

**PhotosContainer**
 - PhotoIndex
  * PhotoThumbnail

**AlbumContainer**
 - AlbumIndex
  + AlbumThumbnail

**SearchResultsContainer**
 - Search
 - PhotoIndex (photos changed by search)

**TagContainer**
 -  PhotoIndex (renders tags)
  + PhotoThumbnail

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

**New/EditAlbum**
 - AlbumForm

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
| "/home/album/:albumId" | "AlbumContainer" |
| "/home/tag/:tagId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-photo" | "NewPhotoContainer" |
| "/new-album" | "NewAlbum" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
