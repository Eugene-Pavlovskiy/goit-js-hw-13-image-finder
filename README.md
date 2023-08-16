
# Admission criteria

- Repositories created `goit-js-hw-13-image-finder`.
- When you turn in your homework, there are two links for each project: to the source
  files and the working page on GitHub pages.
- When visiting the working page (GitHub pages) of a job, there are no errors or warnings in the console.
  warnings
- Variable and function names are clear, descriptive
- The project was assembled with the help of
  [parcel-project-template](https://github.com/goitacademy/parcel-project-template)
- The code is formatted with `Prettier`
- Add minimal styling
- There is a file `apiService.js` with the default export of the object responsible for the logic of the
  HTTP requests to API

## The assignment is an image search

Write a small application to search and browse images by keyword

## Instructions Pixabay API

For HTTP requests, use the public
[Pixabay API](https://pixabay.com/api/docs/). Register and get the key.

URL-query string:

```bash
https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=your_key
```

Pixabay API supports pagination and lets 12 objects come in the response,
and set in the `per_page` parameter. By default, the `page` parameter is set to `1`. At
Each subsequent query `page` is increased by 1, and when searching for a new
keyword, its value should be reset to `1`.

Each isobar is described by an object.

```json
{
  "comments": 78,
  "downloads": 63296,
  "favorites": 558,
  "id": 1508613,
  "imageHeight": 2135,
  "imageSize": 1630104,
  "imageWidth": 2894,
  "largeImageURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_1280.jpg",
  "likes": 575,
  "pageURL": "https://pixabay.com/photos/cat-animal-cat-portrait-cat-s-eyes-1508613/",
  "previewHeight": 110,
  "previewURL": "https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_150.jpg",
  "previewWidth": 150,
  "tags": "cat, animal, cat portrait",
  "type": "photo",
  "user": "cocoparisienne",
  "userImageURL": "https://cdn.pixabay.com/user/2018/11/26/11-06-29-714_250x250.jpg",
  "user_id": 127419,
  "views": 127450,
  "webformatHeight": 472,
  "webformatURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_640.jpg",
  "webformatWidth": 640
}
```

You're interested in the following properties:

- `webformatURL` - link to a small image for the card list
- `largeImageURL` - link to a large image (see 'additional')
- `likes` - number of likes
- `views` - number of views
- `comments` - number of comments
- `downloads` - number of downloads

## Search form

Creates a DOM element of the following structure. Templating can be used.

```html
<form class="search-form" id="search-form">
  <input
    type="text"
    name="query"
    autocomplete="off"
    placeholder="Search images..."
  />
</form>
```

## Images Gallery

Creates a DOM element of the following structure.

```html
<ul class="gallery">
  <!-- List <li> with picture cards -->
</ul>
```

## Image card

Creates a DOM element of the following structure.

```html
<div class="photo-card">
  <img src="" alt="" />

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      1108
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      320321
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      129
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      176019
    </p>
  </div>
</div>
```

For icons are used
[Material icons](https://google.github.io/material-design-icons/). To make them
To make them work correctly, it is enough to add a link to the web font in the HTML file.

```html
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

Or by adding the npm package `material-design-icons` and importing the web font into the
`index.js`.

## Button 'Load more'

When you press the `Load more` button, the next portion of images should be loaded and rendered together with the previous ones.
images and render together with the previous ones.

The page should automatically scroll smoothly after rendering images,
to take the user to the next uploaded images. Use the
method
[Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).

```js
const element = document.getElementById('.my-element-selector');
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
```

## Additionally

- You could add a notifications plugin, for example
  [pnotify](https://github.com/sciactive/pnotify), and show notifications on the
  result of HTTP requests
- You can add functionality to display a large version of an image via a plugin
  modal window plugin, e.g.
  [basicLightbox](https://basiclightbox.electerious.com/), when clicking on a
  gallery image
- Instead of the `Load more` button, you can do an infinite scrolling load
  using `Intersection Observer'.
**Read in other languages: [Russian](README.md), [Ukrainian](README.ua.md).**
