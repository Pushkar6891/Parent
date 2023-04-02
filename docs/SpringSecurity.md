# Spring Security

Request -> Authentication Filter -> Authentication Manager -> Authentication Provider -> UserDetails Service
         <- Authentication Success Handler                 <-                         -> Password Encoder
         <- Authentication Failure Handler

# Password Handling
Password Encoder
encode()
matches()

Implementation
1. NoOpPasswordEncoder
2. StandardPasswordEncoder (SHA-256 algorithm)
3. BCryptPasswordEncoder (BCrypt Hashing algorithm)

Method Level Security


Securing REST API
1. OAUTH + JWT

OAUTH
Open Authentication and Authorization standard
Using Gmail login

OAUTH Components
1. Authorization Server 
2. Resource Server
3. Resource Owner
4. Client

OAUTH Workflow
Request -> Client -> (username/password) authorization server -> resource server
                                                              <- token 

JWT (JSON Web Token)

JWT Structure
Header
Payload
Signature (Calculated using Hashing)

CSRF (Cross Site Request Forgery)
- Cookies can be used to forge session and steal data

CORS (Cross Origin Request Sharing)
@CrossOrigin on top of @RestController
Which origin,header and methods are allowed?

# Spring Security OAuth 2.0 and OpenID Connect

https://www.youtube.com/watch?v=MOCeQYbQPPU

OAuth 2.0 (Open Authorization) : allow websites to access resources hosted by other web apps on behalf of a user
Eg : to use others phone number take permission from user.
OAuth 2.0 uses Access Tokens
OAuth designed to grant access to a set of resources.
Eg : remote API or user's data

OAuth 2.0 Roles
Resource Owner
Client
Authorization Server
Resource Server

- Resource Owner
User that owns protected resource and who can grant access
- Client
Client must have appropriate Access Token
- Authorization Server
This server receives request from Client for Access Token and issues them upon successful authentication and consent by Resource Owner
- Resource Server
Protects user's resource and receives access requests from Client.
It accepts and validates Access Token from Client and returns appropriate resources to it.

OAuth 2.0 Scopes
Specify exact reason for which access to resources may be granted.

# Bharath Thippireddy

Authentication : Who you are using Login and Password (Basic Form OAuth)
Authorization : What access level using ROLES
Confidentiality : Encrypt data using public and private key
Integrity : Data is not changed (Token and Signature)