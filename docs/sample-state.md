```js
{
  currentUser: {
    id: 1,
    username: "user"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    uploadPhoto: {errors: []}
    createComment: {errors: []}
  },
  photos: {
    1: {
      title: "Title",
      body: "body",
      image_url: "url",
      author_id: 1,
      album_id: 1
      tags: {
        1: {
          id: 1
          name: "Tag"
        }
      }
      comments: {
        1: {
          id: 1
          body: "body"
        }
      }
    }
  },
  albums: {
    1: {
      title: "Album",
      author_id: 1,
      description: "Description",
      photos: []
    }
  }
  tagFilters: [1, 2, 3]
}
```
