// footer.js

const currentYear = new Date().getFullYear();

const footerContent = `
  <div class="footer-container" style="text-align: center; padding: 2rem 1rem; margin-top: 3rem; background-color: #f4f4f4; border-top: 1px solid #ddd; font-size: 0.9em; color: #555;">
    <p><strong>MakerSpaceShip</strong> &mdash; A community project of LearnSTEAM LLC.</p>
    <p>Located at the SE Corner of Laurel & 3rd St. | Florence, OR</p>
    <p style="margin-top: 1rem;">
      &copy; ${currentYear} MakerSpaceShip. All rights reserved.<br>
      <a href="https://learnsteam.com/contact.htm" target="_blank" rel="noopener noreferrer" style="color: #4169E1; text-decoration: none;">Contact Us</a>
    </p>
  </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Create the footer element
  const footerElement = document.createElement('footer');
  
  // Inject the HTML content inside the footer
  footerElement.innerHTML = footerContent;

  // Append the footer at the very bottom of the body tag
  document.body.appendChild(footerElement);
});
