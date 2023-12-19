## 1. What is NPM
npm is a package manager for javascript.

## 2. What is `Parcel/Webpack`? Why do we need it?
A tool that optimizes and bundles assets like HTML,JavaScript and CSS files.
### Features / Why do we need ?
- It created a server
- It minify our code
- Clean our code
- Compression
- Hot Module Replacement: It is written in C++.  Update module change automatically in the browser without a full reload.
- Consistent Hashing
- It uses File Watcher algorithm, as we save/changes any file it rebuild the bundle.
- Image Optimization
- Cache while Development
- Handle PORT number
- Compatible with older version of browser
- Zero Configuration
- Friendly error logging
- Super fast production/development build

## 3. What is `.parcel-cache`?
Parcel caches everything it builds to disk. If you restart the dev server, Parcel will only rebuild files that have changed since the last time it ran. Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build, and granularly invalidates the cache when something changes. For example, if you change a configuration file, all of the source files that rely on that configuration will be rebuilt.
<br>
[Reference](https://parceljs.org/features/development/#caching)

## 4. What is `npx`?
A tool for executing Node packages.
```
eg. npx parcel index.html
```

## 5. What is difference between dependencies vs devDependencies?
Dependencies : dependencies that your project needs to run, eg. like in react and react-dom, we use hooks, states, etc from react.
They are installed transitively(if A depends on B depends on C, npm install on A will install A and B both)
<br>
DevDependencies: Dependencies we only need using development like we use parcel to create bundle of our code, and that bundle will upload to servers.<br>
Another example is test framework like jest, we test our application during development phase only.
They are not installed transitively
<br>
[Reference](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencie)

## 6. What is Tree Shaking?
Tree shaking is a term commonly used in the JavaScript context for dead-code elimination.
Tools like parcel/webpack will detect dead code and mark it as "unused module". During the build process bundler won't include those unused modules in the bundle.


## 7. What is Hot Module Replacement?
Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. 
### Working of HMR
1. The application asks the HMR runtime to check for updates.
2. The runtime asynchronously downloads the updates and notifies the application.
3. The application then asks the runtime to apply the updates.
4. The runtime synchronously applies the updates.

## 8. What is `.gitignore`? What should we add and not add into it?
The gitignore file is a text file which tells git which files or folder to ignore in a project.Those file or folder which can be generate on server should be put inside git.
for eg. node_module, parcel-cache, dist, .env etc. 
<br>
We should not add Readme, API documentation, test result, personal files etc

## 8. What is the difference between `package.json` and `package-lock.json`
package.json: It is a metadeta file that describes the project's dependencies, scripts, configuration.<br>
package-lock.json: It is a file that is generated automatically by npm when a package is installed. It records/lock the exact version of every dependency, including it's sub-dependencies and their version.
<br>
The purpose of ```package-lock.json``` is to ensure that the same dependencies are installed consistently across different environment, such as development and production environment. It also helps to prevent issue with installing different package version, which can lead to confilct and error.
This meant that when a project was deployed or shared with others, there was a risk that different developers or machines would use different versions of the same dependency, which could cause compatibility issues or unexpected behavior.
<br>
[Reference](https://www.atatus.com/blog/package-json-vs-package-lock-json/)

## 9. Why should I not modify `package-lock.json`?
When we install a library using npm, it generates the node_modules folder which contains some functions and methods of that library, it also contains the sub-dependencies folder that our library required.
<br>
It is not a good idea to push node_modules folder on git, beacause it is quite heavy. We can regenerate node_module folder using package.json. 

## 10. What is the `dist` folder?
``` npx parcel build index.html ``` It create a dist folder which contains compressed code.

## 11. What is browerlists?
It is a tool that allows specifying which browser should be supported by our frontend apps by specifying queries in a config file. By using Browserlist, transpiler/bundlers know what browsers you want to support, so they can group browsers in different categories and generate separate bundles.

## ^ caret and ~ tilda in node version
```
~version :  update all future patch version.
^version : upadate all minor/patch version.

eg. major.minor.patch
major : breaking changes
minor : backward compatibility, old functionality deprecated but operational.
pacth : bug fix

```
<br>
[Reference](https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json)