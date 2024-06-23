const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "Heading"),
      React.createElement("p", {}, "This is paragraph"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "Heading"),
      React.createElement("p", {}, "This is paragraph"),
    ]),
  ]);
  console.log(parent);
  let root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);