import React from "react";
import ReactDOM from "react-dom/client";
/*const heading = document.createElement("h1");
        heading.innerHTML = "hello world javascript";

       const root = document.getElementById("root");
        root.appendChild(heading);
        console.log(heading);
        //const parent = React.createElement("div",{id: parent},"Ram RAm");
console.log(parent);
       // const root = ReactDOM.createRoot(document.getElementById("root"));

       // root.render(heading);*/

       const parent = React.createElement("div",{id: "parent"},[
        React.createElement("div",{id : "child"},[
                React.createElement("h1",{},"hello world noob"),
                React.createElement("h2",{},"the greatest"),
        ]),
        React.createElement("div",{id : "child2"},[
                React.createElement("h1",{},"hello noob"),
                React.createElement("h2",{},"the gr"),
        ]),
       ]);
       console.log(parent);  //object 


       const root = ReactDOM.createRoot(document.getElementById("root"));

       root.render(parent);