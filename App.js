
/*
     <div id="parent">
        <div id="child">
            <h1> I am H1 tag </h1>
            <h2> I am h2 Tag </h2>
        </div>
        <div id="child2">
            <h1> I am H1 tag </h1>
            <h2> I am h2 Tag </h2>
        </div>
     </div>

     ReactElement (Object) => HTML (Browser Understands)
*/
 
 const parent = React.createElement("div",{id:"parent"}, 
    React.createElement("div",{id:"child"},
         [ React.createElement("h1",{},"I am an h1 Tag"),
          React.createElement("h2",{},"This is h2 Tag")]),
        
          React.createElement("div",{id:"child2"},
            [ React.createElement("h1",{},"I am an h1 Tag"),
             React.createElement("h2",{},"This is h2 Tag")]),
        
        );

         console.log(parent); // React Element will returns an object ==> when Browser understands it will convert into an HTML



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);