# FStop

[Heroku link][heroku]

[heroku]: https://www.fstop-app.herokuapp.com

## Minimum Viable Product

FStop is a web application inspired by Flickr built using Ruby on Rails and
React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Photos
- [ ] Albums for organizing photos
- [ ] Comments
- [ ] Tags
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning Rails project with front-end Authentication

### Phase 2: Photos Model, API, and components (2 days)

**Objective:** Photos can be created, read, edited and destroyed through
the API.

### Phase 3: Albums (2 day)

**Objective:** Photos belong to Albums that can be created, read, edited and destroyed through the API.

### Phase 4: Comments (1 day)

**Objective:** Users can comment on photos.

### Phase 5: Tags (1 day)

**Objective:** Photos can be tagged with multiple tags. Finish and submit Production README.

### Phase 6: - Infinite scroll for Photos Index (1 day)

**Objective:** Add infinite scroll to Photos Index.

### Bonus Features (TBD)
- [ ] Infinite Scroll
- [ ] Clicking on a photo triggers a modal view with details and comments
- [ ] Tags are searchable
- [ ] Metadata for photos
- [ ] Favorites and Follows
