Pokémon Dashboard
Live Deployment 👉 Pokemon Dashboard

The Pokémon Dashboard is an interactive web application that allows users to explore Pokémon by type using the PokéAPI. Built with Next.js and TypeScript, the application delivers a fast, responsive, and visually engaging user experience.

Design Decisions & Approach

Tech Stack & Deployment
Next.js with TypeScript – Chosen for server-side rendering (SSR) and incremental static regeneration (ISR) to enhance performance and maintainability.
Material-UI – Enables rapid UI prototyping with a clean, modern, and accessible design.
Axios – Used for efficient API calls with built-in error handling.
Deployment via Vercel – Docker was originally planned but encountered compatibility issues on macOS, leading to Vercel as the chosen alternative for its Next.js-optimized hosting.

User Experience & Interface
Minimalist UI – Designed for a clean, uncluttered experience optimized for both desktop and mobile.
Modal-based Navigation – Clicking a Pokémon opens a modal window, preventing full-page reloads and preserving context.
Dynamic Theming – Background colors change based on Pokémon type, creating a visually intuitive experience.
Error Handling & Loading States – Prevents broken user experiences by displaying loading indicators and error messages when API requests fail.

Performance Considerations
Optimized API Requests – Pokémon data is fetched only when a type is selected, reducing unnecessary API calls.
Randomized Selection – Instead of static pagination, Pokémon are shuffled to create a more dynamic experience.
React Hooks for State Management – useState and useEffect efficiently manage API calls and UI updates.
Strict TypeScript Typing – Prevents runtime errors and improves overall code maintainability.

Installation & Running Locally
1️⃣ Clone the Repository
git clone https://github.com/timothychengg/pokemon-dashboard.git
cd pokemon-dashboard

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev
The app will be available at http://localhost:3000.

Deployment
The project was deployed using Vercel, an optimized hosting platform for Next.js applications.

Live URL: 👉 https://pokemon-dashboard-aq1gpyr3k-timothy-chengs-projects.vercel.app/

Docker Deployment Explanation
Originally, Docker was planned for deployment, but technical issues on macOS prevented the Docker daemon from running properly.
As an alternative, Vercel was chosen for its seamless Next.js integration and zero-config deployment.

Challenges & Solutions
1️⃣ Docker Deployment Issue
Problem: Docker installation on macOS failed due to system compatibility issues.
Solution: Switched to Vercel, ensuring a reliable and scalable hosting solution.

2️⃣ TypeScript Type Errors
Problem: PokemonData had conflicting types when fetching data.
Solution: Standardized the type definition and explicitly defined the expected API response structure.

3️⃣ API Rate Limits
Problem: Too many API calls to PokéAPI could cause request failures.
Solution: Reduced the number of Pokémon fetched per request and used error handling to retry failed requests.

Future Improvements:

1. Infinite Scroll & Pagination – Currently, Pokémon are randomly selected and limited to 10 per request. Pagination would enhance user experience.
2. Better Error Handling – Provide user-friendly error messages when the API fails instead of logging errors in the console.
3. Animations & Transitions – Add smooth UI animations to enhance engagement.
4. Search Functionality – Allow users to search for Pokémon by name, not just by type.
5. Music & Sound Effects – Implement Pokémon-inspired music to create a more immersive experience.


Tech Stack
Frontend: Next.js, React, TypeScript
UI Components: Material-UI
State Management: React Hooks (useState, useEffect)
Data Fetching: Axios (PokéAPI integration)
Deployment: Vercel
Version Control: GitHub


