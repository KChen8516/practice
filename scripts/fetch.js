fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // request
  .then(json => console.log(json)); // payload

// Fetch with timeout
function fetchWithTimeout(url, timeout) {
  return new Promise((resolve, reject) => {
    // Set timeout timer
    let timer = setTimeout(() => reject(new Error('Request timed out')), timeout);

    fetch(url)
      .then(response => resolve(response), err => reject(err))
      .finally(() => clearTimeout(timer));
  });
}
