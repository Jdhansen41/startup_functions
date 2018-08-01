# startup_functions
Functions I've found useful when deploying, packaged for ease-of-use. Includes: date format function, HTTPS enforcer, cookie/visitor accumulator

Functions:
1. userDateFormat: accepts Date object and formats to standard MM-DD-YYYY.

2. enforceHTTPS: middleware used with Node.js applications that checks if request is being made to a secure endpoint. If so, enforce HTTPS (prevent a default to http)

3. checkVisitor: gets cookie of current session and checks if cookie has already occured on server. If not, add it to visitors array in order to count number of unique visits.

Created By:
Josh Hansen
https://www.hdevprogramming.com
