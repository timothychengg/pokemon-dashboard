Pokémon Dashboard 👉 https://pokemon-dashboard-aq1gpyr3k-timothy-chengs-projects.vercel.app/

The Pokémon Dashboard is an interactive web application that allows users to explore Pokémon data by type using the public PokéAPI.


Features
1. Fetch & Display Pokémon by Type – Users can select a Pokémon type, and a random subset of Pokémon from that type will be displayed.
2. Detailed Pokémon Info – Clicking on a Pokémon opens a modal displaying its image, stats, and other key details.
3. Responsive Design – Optimized for both desktop and mobile using Material-UI's grid system.
4. Error Handling & Loading States – Ensures a smooth user experience even when API requests fail or take time to load.
5. Modern UI/UX – Styled with Material-UI for a clean and intuitive experience.

Tech Stack

Frontend: Next.js, React, TypeScript
UI Components: Material-UI
State Management: React Hooks (useState, useEffect)
Data Fetching: Axios (API calls to PokéAPI)
Deployment: Vercel
Version Control: GitHub


Installation & Running Locally
1️⃣ Clone the Repository

sh
Copy
Edit
git clone https://github.com/timothychengg/pokemon-dashboard.git
cd pokemon-dashboard
2️⃣ Install Dependencies

sh
Copy
Edit
npm install
3️⃣ Run the Development Server

sh
Copy
Edit
npm run dev
The app will be available at http://localhost:3000.

Deployment
The project was deployed on Vercel, which is optimized for Next.js applications.
Deployed URL: Pokemon Dashboard

Challenges & Solutions
1️⃣ Docker Deployment Issue
Problem:
Docker was initially intended for deployment but encountered technical issues on macOS, preventing the Docker daemon from running.

Solution:
Instead of Docker, the project was deployed successfully using Vercel, which provides a seamless hosting experience for Next.js applications.

Future Improvements
1. Implement Infinite Scroll & Pagination – Currently, Pokémon are randomly selected and limited to 10 per request. Pagination would improve UX.
2. Improve Error Messages – Provide user-friendly error messages when the API fails instead of console logging.
3. Animations & Transitions – Enhance UI with smooth animations for a more engaging experience.....also definitely need music.


