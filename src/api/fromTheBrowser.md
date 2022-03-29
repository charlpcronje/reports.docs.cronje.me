# API - Sending REST Requests from the Browser

Normally, you program your client application to send `REST` requests to your instance of JasperReports Server. You may also want to test certain requests or examine the response from the server, and some browsers have `plug-ins` to send a `REST` request and view the response.

However, the server includes `cross-session` request forgery `(CSRF)` protection that does not allow requests, including `REST`, from a browser in a different `domain`. Sending `POST`, `PUT`, or `DELETE` requests from a browser will often fail for this reason. `REST` requests from `REST-client` applications are secure and are not stopped by `CSRF` protection.

To allow testing of the `REST API` through a browser, configure your browser `REST` client to include the following header in every request:

```R
X-REMOTE-DOMAIN: 1
```