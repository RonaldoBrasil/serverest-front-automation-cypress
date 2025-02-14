const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

cypress.run({
  browser: 'chrome'
})
.then((results) => {
  const args = {
    target: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjljYjJjODQxLTFiMTYtNGMxZi05MmMxLTcyZjczNDZlNjMyZS0xNzM5NTU4OTk5MjkxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNDkwM2ZhODctOTY1ZC00NGMyLThkMjMtYzFlODYxNDg3ZDExIiwidHlwZSI6InQifQ.xV4UBrfh2miGZoSk4Kh83JEHhTjSR1X_rvjWO6cohjY'
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})