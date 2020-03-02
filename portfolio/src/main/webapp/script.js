// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['I love the group Jodeci.', 'I have been to Costa Rica', 'I want to learn the Guitar.', 'I am from NY, Senegal and The Gambia!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}
function getdataservlet(){
    console.log('Fetching data servlet');
    const responsePromise = fetch('/data');
    responsePromise.then(handleResponse);
}
function handleResponse(response){
   console.log('Handling response');
   const textPromise = response.text();
   textPromise.then(addDataServletToDom)
}

function addDataServletToDom(servlet) {
    console.log('Adding Data Servlet to dom:' + servlet);
    
    const quoteContainer = document.getElementById('dataservlet-container');
    quoteContainer.innerText = servlet;
}

function getComments(){
    console.log("Fetching comments");
    const responsePromise = fetch('/data');
    // console.log(responsePromise);
    const jsonPromise = responsePromise.then(handleResponse1);
    console.log(jsonPromise);
    jsonPromise.then(handleComments);
}


function handleResponse1(response){
    console.log(response);
    return response.json();
    // console.log("Handle Response");
    // const textPromise = response.text();
    // textPromise.then(addCommentsToDom)
}
    
// // fetch the /server-stats URL
// const fetchPromise = fetch('/server-stats');

// // after the fetch comes back, call the handleResponse function,
// // which itself returns a Promise
// const jsonPromise = fetchPromise.then(handleResponse);

// // when the jsonPromise comes back, call handleStats with the result
// jsonPromise.then(handleStats);

// function handleResponse(response) {
//   return response.json();
// }

function handleComments(comments) {
// your code
    console.log(comments);
    // console.log(comments[0].firstComment);
    const commentsListElement= document.getElementById('comments-container');
    commentsListElement.innerHTML='';
    commentsListElement.appendChild(
        createListElement(comments[0].firstComment));
    commentsListElement.appendChild(
        createListElement(comments[1].secondComment));
    commentsListElement.appendChild(
        createListElement(comments[2].thirdComment));
}  
    
//     fetch('/data').then(response => response.json()).then((comments) =>   
// }

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

