
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