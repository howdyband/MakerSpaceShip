// header.js

const navContent = `
  <a href="index.html">Home</a>
  <a href="prices.htm">Pricing</a>
  <a href="safety.htm">Safety Protocols</a>
  <a href="tools.htm">Tool Inventory</a>
  <a href="apply.htm">Apply</a>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Create the nav element
  const navElement = document.createElement('nav');
  
  // Inject the HTML links inside the nav
  navElement.innerHTML = navContent;

  // Insert the nav at the very top of the body tag
  document.body.insertBefore(navElement, document.body.firstChild);
});
