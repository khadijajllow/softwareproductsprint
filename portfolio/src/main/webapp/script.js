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

function getdataservlet(){
    console.log('Fetching data servlet');
    const responsePromise = fetch('/data');
    responsePromise.then(handleResponse);
}
function handleResponse(response){
    console.log('Handling response');

   const textPromise = response.text();
}

function addDataServletToDom(servlet) {
    console.log('Adding Data Servlet to dom:' + quote);
    
    const quoteContainer = document.getElementById('dataservlet-container');
    quoteContainer.innerText = quote;
}


}
