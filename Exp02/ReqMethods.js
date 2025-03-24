const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
// Middleware to parse JSON body (for req.body to work properly)
app.use(express.json());
app.use(cookieParser());
// Custom middleware to log request time
app.use((req, res, next) => {
  req.requestTime = new Date();
  console.log("Time of request:", req.requestTime);
  next();
});

// Route to log and return request properties
app.get("/demo/:param", (req, res) => {
  console.log("1. Time of request:", req.requestTime);
  console.log("2. req.app - Express app instance:", req.app);
  console.log("3. req.baseUrl - URL path where instance is mounted:", req.baseUrl);
  console.log("4. req.body - Request body:", req.body);
  console.log("5. req.cookies - Cookies sent by request:", req.cookies);
  console.log("6. req.fresh - Is request fresh:", req.fresh);
  console.log("7. req.hostname - Hostname from request:", req.hostname);
  console.log("8. req.ip - Remote IP address:", req.ip);
  console.log("9. req.ips - Forwarded IP addresses:", req.ips);
  console.log("10. req.originalUrl - Full request URL:", req.originalUrl);
  console.log("11. req.params - Route parameters:", req.params);
  console.log("12. req.path - Path of request URL:", req.path);
  console.log("13. req.protocol - Request protocol:", req.protocol);
  console.log("14. req.query - Query parameters:", req.query);
  console.log("15. req.route - Matched route:", req.route);
  console.log("16. req.secure - Is request over HTTPS:", req.secure);
  console.log("17. req.signedCookies - Signed cookies:", req.signedCookies);
  console.log("18. req.stale - Is request stale:", req.stale);
  console.log("19. req.subdomains - Subdomains of request:", req.subdomains);
  console.log("20. req.xhr - Was request made via AJAX:", req.xhr);
  console.log("21. req.headers - Request headers:", req.headers);

  res.json({
    requestTime: req.requestTime,
    baseUrl: req.baseUrl,
    body: req.body,
    cookies: req.cookies,
    fresh: req.fresh,
    hostname: req.hostname,
    ip: req.ip,
    ips: req.ips,
    originalUrl: req.originalUrl,
    params: req.params,
    path: req.path,
    protocol: req.protocol,
    query: req.query,
    route: req.route,
    secure: req.secure,
    signedCookies: req.signedCookies,
    stale: req.stale,
    subdomains: req.subdomains,
    xhr: req.xhr,
    headers: req.headers,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});