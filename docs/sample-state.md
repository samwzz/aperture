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
  },
  photos: {
    1: {
      title: "Title",
      body: "Body",
      author_id: 1,
      album_id: 1
      tags: {
        1: {
          id: 1
          name: "Tag"
        }
      }
    }
  },
  albums: {
    1: {
      title: "Album",
      author_id: 1,
      description: "Description"
    }
  }
  tagFilters: [1, 2, 3]
}
```
