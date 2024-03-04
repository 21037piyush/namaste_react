const heading = document.createElement("h1");
        heading.innerHTML = "hello world javascript";

       /* const root = document.getElementById("root");
        root.appendChild(heading);
        console.log(heading);*/

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);