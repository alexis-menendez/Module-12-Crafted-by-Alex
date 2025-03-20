# Module 12: Crafted by Alex
Being a web developer means being part of a community. You need a place to share your projects, whether you're applying for jobs, freelancing, or collaborating with other developers.

# React Portfolio
Now that you’ve completed multiple projects, you’ll create a portfolio using React & Vite. This will help you stand out from developers whose portfolios don’t use the latest technologies.
For this challenge, you’ll deploy your application to Netlify. Follow the instructions in activity 27-Evr_Git-Deploy to create a build that you can deploy.

# User Story
As an employer looking for candidates with experience in single-page applications, I want to view a potential employee’s React portfolio so I can assess their skills for an open position.

# Acceptance Criteria
- The portfolio is a single-page application.
- When loaded, the page displays a homepage. Clicking on the title on the homepage loads a page that displays a header, a content section, and a footer.
- The header contains the developer’s name and navigation menu.
- The navigation includes About Me, Portfolio, Contact, and Resume, with the current section highlighted.
- Clicking a navigation title updates the content below without reloading the page.
- Reloading the page takes you back to the homepage.
- When first loaded, the About Me section is selected by default.
- The About Me section contains a short bio.
- The Portfolio section shows projects with titled images, links to the deployed applications, and GitHub repositories.
- The Contact section includes a form with fields for name, email, and message.
- The contact section includes a link to the developers github.
- If a user leaves a form field empty, they receive a notification that it is required.
- If an invalid email is entered, a notification appears.
- The Resume section includes a downloadable resume link and a list of proficiencies.
- The footer contains links to the developer’s GitHub, LinkedIn, and a link for email that loads the Contact page.

# Getting Started
Your portfolio should include:
- A Header component that appears on multiple pages.
- A Navigation component within the header to render different sections.
- A Project component used multiple times in the Portfolio section.
- A Footer component that appears on multiple pages.
The contact form should work the same way as in your module project since this application doesn’t have a back end yet. You can add your email and phone number to the Contact page for now.

# Homepage
Your homepage should include:
- A single-page application structure (SPA).
- A default homepage that loads first when the app is accessed.
- A title that, when clicked, navigates to a page displaying:
    - A header (developer’s name + navigation menu).
    - A content section that dynamically updates.
    - A footer with links to GitHub, LinkedIn, and an email link that loads the Contact page.

# Projects
Your projects page should include:
- A Portfolio section that displays multiple projects.
- Each project should have:
    - A title
    - An image/thumbnail
    - A link to the deployed application
    - A link to the GitHub repository
- The navigation menu should highlight "Portfolio" when this section is selected.

# About
Your About page should include:
- A section titled "About Me", which is selected by default when the app loads.
- A short bio about the developer.
- The navigation menu should highlight "About Me" when this section is selected.

# Contact
Your Contact page should include:
- A form with fields for:
    - Name
    - Email
    - Message
- Validation checks:
    - Show a notification if any field is left empty.
    - Show an error message if an invalid email is entered.
- A link to the developer’s GitHub.
- The navigation menu should highlight "Contact" when this section is selected.

# Resume
Your Resume page should include:
- A downloadable resume link (e.g., PDF).
- A list of the developer’s proficiencies (e.g., programming languages, frameworks, tools).
- The navigation menu should highlight "Resume" when this section is selected.

# Design Guidelines
Your portfolio should look polished and professional:
- Use a mobile-first design.
- Choose a color palette beyond the default Bootstrap theme. Consider using Coolors or other color generators.
- Ensure the font is readable, and colors don’t cause eye strain.
- Consider using animations and React component libraries (not required but recommended).

# Grading Criteria

# Technical (40%)
- Uses React to render content.
 - Includes a Header with Navigation using react-router-dom for routing.
- Uses a Project component multiple times in the Portfolio section.
- Includes a Footer on multiple pages.
- Deployed to Netlify.

# Deployment (32%)
- Application is deployed to a live URL.
- No errors when loading.
- GitHub repository submitted with the application code.

# Application Quality (15%)
- The user experience is intuitive and easy to navigate.
- The interface is clean and polished.
- The color scheme is not the default Bootstrap palette.

# Repository Quality (13%)
- Unique repository name.
- Follows best practices for file structure, naming conventions, and code formatting.
- Includes multiple descriptive commit messages.
- README file contains a project description, screenshot, and a link to the deployed application.

# How to Submit

# Submit both:
1. The URL of the deployed application.
2. The URL of the GitHub repository, with a descriptive README

