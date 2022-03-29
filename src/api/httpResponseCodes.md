# API - HTTP Response Codes

JasperReports Server `REST` services return standard `HTTP` status codes. In case of an `error`, a detailed message may be present in the body as plain text. Client `error` codes are of type `4xx`, while server errors are of type `5xx`. The following table lists all the standard `HTTP` codes. Each service returns typical `success` and `error` messages that are given in the reference chapter for that service.
	
## HTTP Response Codes 

| ###  | Success Messages                | ###  | Client Error                    | ###  | Server Errors              |
|------|---------------------------------|------|---------------------------------|------|----------------------------|
| Code | Message                         | Code | Message                         | Code | Message                    |
| 100  | Continue                        | 400  | Bad Request                     | 500  | Internal Server Error      |
| 101  | Switching Protocols             | 401  | Unauthorized                    | 501  | Not Implemented            |
| 200  | OK                              | 402  | Payment Required                | 502  | Bad Gateway                |
| 201  | Created                         | 403  | Forbidden                       | 503  | Service Unavailable        |
| 202  | Accepted                        | 404  | Not Found                       | 504  | Gateway Time-out           |
| 203  | Non-Authoritative Information   | 405  | Method Not Allowed              | 505  | HTTP Version Not Supported |
| 204  | No Content                      | 406  | Not Acceptable                  |      |                            |
| 205  | Reset Content                   | 407  | Proxy Authentication Required   |      |                            | 
| 206  | Partial Content                 | 408  | Request Time-out                |      |                            |
| 300  | Multiple Choices                | 409  | Conflict                        |      |                            |
| 301  | Moved Permanently               | 410  | Gone                            |      |                            | 
| 302  | Found                           | 411  | Length Required                 |      |                            |
| 303  | See Other                       | 412  | Precondition Failed             |      |                            |
| 304  | Not Modified                    | 413  | Request Entity Too Large        |      |                            |
| 305  | Use Proxy                       | 414  | Request URI Too Large           |      |                            | 
| 307  | Temporary Redirect              | 415  | Unsupported Media Type          |      |                            |
|      |                                 | 416  | Requested Range Not Satisfiable |      |                            | 
|      |                                 | 417  | Expectation Failed              |      |                            |
