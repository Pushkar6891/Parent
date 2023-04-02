# Spring MVC

Link : https://www.youtube.com/watch?v=iCQspqBpOB0&list=PLBgMUB7xGcO31B2gBmy1igpZn6LK78-CJ

Model View Controller

Client  (request) ->     Tomcat (Servlet/JSP)
        <- (response)

Servlet = HTML Code embedded into Java Code
JSP = Java Code embedded into HTML Code

Problems with above :
- Difficult to modify code

An application should always be divided into components :
- Model View Controller
- Model (Java Object) : model represents data or any logic that generates data
- View (HTML): view represents UI part
- Controller (Java Class) : controller manages application flow, controller invokes service (Java Class) which is producing model and then passes on this model to the view

Eg of Spring MVC
                View 1 (Can decorate cake with cream)  View 2 (Can decorate cake with fruits)

Customer ->     Controller      -> Room with machine preparing Chocolate Cake or Strawberry Cake etc.



           Handler Mapping (Scans URL and tells who can generate data for incoming request) 

Browser -> Front Controller or DispatcherServlet          ->                      Controller
        <-                                          (ModelAndView) <-

              View (JSP)              ViewResolver