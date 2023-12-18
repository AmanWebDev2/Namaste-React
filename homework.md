## 1. What is emmet?
- It is a plugin which improves HTML ans CSS workflow.
- It is written in pure javascript.
- It allows us to write shortcuts that are then expanded into full piece of code.

```
ul>li*3{hello}

<ul>
    <li>Hello</li>
    <li>Hello</li>
    <li>Hello</li>
</ul>
```

## 2. Difference between Library and Framework

### Library
- It is a collection of pre-written code, modules, classes,objects etc. that we uses to perform specific tasks.

for ex- instead of writing the logic of email validation we can use email-validator library, which is written by someone and we can use it in our code

```
var validator = require("email-validator");
 
validator.validate("test@email.com"); // true
```

### Framework
- A framework is a structure that you can build softwares on.
- Using frameworks saves time and reduces the risk of errors.

for ex- Angular is a web framework developed by google. It provides us routing.<br>
And on the other hand React JS is a library, there is no routing comes with it, so we have to manually add react-router to implement routin.

### Why do we use framework?
- More secure code
- Simpler testing and debugging
- Avoid duplication of code
- Clean and easly adaptable code
- It can be extended

## 3. What is CDN? Why do we use it?
CDN stands for Content Delivery Network.
CDN is a network of servers linked together with the goal of delivery content as quickly, cheaply, reliably, securely as possible.
- It reduces the distance between users and website resources. Instead of connecting the origin server, CDN lets user connect to geographically closer data center

### Benefits of CDN
- Improve website load time.
- Reduce Bandwidth cost.
- Increase content availability and redundancy.
- Improve website security.

[Reference](https://www.cloudflare.com/en-gb/learning/cdn/what-is-a-cdn/)

## 4. What is the difference between React and ReactDOM?

### React
React package contains React.createElement, React.createClass, React.Component, React.Children, React.Proptype

### ReactDOM
- React-DOM is a complimentary library to React which glues React to the browser DOM

React DOM package contains ReactDOM.render, ReactDOM.unmountComponentAtNode, ReactDOM.findDOMNode

### why split into two package?
Because React-DOM binds the idea of React to a web browser. And ideally, React has nothing to do with a browser or web for that matter. 

[Reference 1. Medium Article](https://medium.com/programming-sage/react-vs-react-dom-a0ed3aea9745)<br>
[Reference 2. Stackoverflow](https://stackoverflow.com/questions/34114350/react-vs-reactdom)

## 5. What is difference between react.development.js and react.production.js files via CDN?

### Developement Phase
- It includes additional debugging tools, warnings, and helpful error messages.
- It is larger in file size and may negatively impact the performance of your application.

### Production Phase
- It excludes development-specific tools, warnings, and error messages.
- It excludes development-specific tools, warnings, and error messages.

[Reference](https://medium.com/react-academy/development-vs-production-the-importance-of-choosing-the-right-cdn-links-d8f8efbe1e5b)

## 6. Why is React known as React?
When data in a React application changes, the components that depend on that data are automatically updated, which allows for efficient and seamless updates to the user interface. The name “React” reflects this reactive nature of the library.
<br>
[Reference](https://medium.com/@dhawalpandya/why-is-react-called-react-92f83b10aeac)