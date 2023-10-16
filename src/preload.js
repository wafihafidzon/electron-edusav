const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, '../.env'),
});

// const formdata = document.getElementById('formdata');

// formdata.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const text = document.getElementById('input');
//     const file = document.getElementById('file');

//     console.log(text.value);
//     console.log(file.files[0].path);
// })

// (async () => {
//   const headers = new Headers();
//   headers.append(
//     'Authorization',
//     'Bearer 17|xolKY40bgNwlhK8BgEmflNdjUjMJxUxNdPTAM3is1447736f'
//   );

//   const requestOption = {
//     method: 'GET',
//     headers: headers,
//     redirect: 'follow',
//   };

//   const response = await fetch(
//     'http://10.1.29.47:8000/api/products',
//     requestOption
//   );

//   if (!response.ok) {
//     const message = `An error has occured: ${response.status} - ${response.statusText}`;
//     throw new Error(message);
//   }

//   const result = await response.json();
//   console.log(result.data);
// })();


const apiUrl = process.env.API_URL
const token = process.env.TOKEN

