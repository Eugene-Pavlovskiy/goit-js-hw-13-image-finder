const API_KEY = '23526711-d54635d6fd3abb803255ed000';
const BASE_URL = 'https://pixabay.com/api/';

export default function fetchImage(query, page, perPage) {
  let url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data.hits;
     
    })
     .catch((error) => {
        alert({ text: 'Something went wrong.Please try again' })
        Promise.reject(error)
      })
}