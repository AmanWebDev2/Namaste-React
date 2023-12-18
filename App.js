/**
 * HMR - HOT MODULE REPLACEMENT
 * FILE WATCHER ALGORITHM - WRITTEN IN C++
 * 
 * Create Server
 * MINIFY
 * BUNDLER
 * CLEANING OUR CODE
 * Dev build
 * Super fast production build
 * Image Optimization
 * Compression
 * Handle Port number
 * Cache while development
 * Compatible with older version of browser
 * HTTPS on dev 
 * Consistent hashing algorithm to cache thing up
 * Zero Configuration
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1",{
    id:"title",
},"heading1");

const heading2 = React.createElement("h2",
{
    id:"heading2",
    className: 'h2-class',
    style:{
        color:'green'
    }
},"heading2");

const container = React.createElement("div",
{
   id:"container" 
},[heading1,heading2]);

console.log(heading1); //it will return javascript object

const root = ReactDOM.createRoot(document.getElementById("root"));

// react runs only inside root element
root.render(container);