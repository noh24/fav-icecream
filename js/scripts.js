// Make a web page that lists out your favorite ice cream flavors. Rather than writing the flavors in the HTML, use a JavaScript loop to insert the flavors into the page from an array. Use the document.createElement() and Element.append() or Element.prepend() methods to create and add elements to your webpage.

const ul = document.createElement("ul");

const icecreamFlavors = ["vanilla", "cookies n cream", "chocolate"];
icecreamFlavors.forEach(function(flavor) {
  const li = document.createElement("li");
  li.append(flavor);
  ul.append(li);
  document.body.append(ul);
})