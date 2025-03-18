# Pokémon Dashboard  

**Live Deployment:** [Pokemon Dashboard](https://pokemon-dashboard-aq1gpyr3k-timothy-chengs-projects.vercel.app/)  

The Pokémon Dashboard is an interactive web application that allows users to explore Pokémon by type using the PokéAPI.  
Built with **Next.js** and **TypeScript**, the application delivers a fast, responsive, and visually engaging user experience.

---

##  Project Overview  

The Pokémon Dashboard enables users to:  
- Select a **Pokémon type** and fetch **random Pokémon** belonging to that type.  
- View **detailed Pokémon stats** in a modal-based UI.  
- Experience a **responsive and modern** design built with Material-UI.  
- Ensure **seamless performance** with optimized API requests and state management.  

This project was built to demonstrate **technical expertise**, **UI/UX capabilities**, and **performance optimizations** while working with **Next.js** and **PokéAPI**.

---

##  Installation & Running Locally  

### Clone the Repository  
```sh
git clone https://github.com/timothychengg/pokemon-dashboard.git
cd pokemon-dashboard
```
### Install Dependencies  
```sh
npm install
```
### Run the Development Server  
```sh
npm run dev
```
The application will be available at **[http://localhost:3000](http://localhost:3000)**.

---

##  Deployment  

The project is **deployed on Vercel**, which provides seamless integration with Next.js.

**Live URL:** [Pokemon Dashboard](https://pokemon-dashboard-aq1gpyr3k-timothy-chengs-projects.vercel.app/)  

### Docker Deployment (Initially Planned)  
Originally, the project was intended to be **Dockerized** for deployment. However, due to compatibility issues on macOS, **Vercel** was chosen as the alternative deployment platform.

---

## Approach & Design Decisions  

### Tech Stack & Deployment  
- **Next.js with TypeScript** – Enables **server-side rendering (SSR)** and **incremental static regeneration (ISR)** for performance and maintainability.  
- **Material-UI** – Allows rapid UI prototyping with a **clean, accessible, and responsive** design.  
- **Axios** – Used for efficient **API calls** with built-in error handling.  
- **Vercel** – Chosen as the **deployment platform** due to its **Next.js optimizations** and **ease of use**.  

### User Experience & Interface  
- **Minimalist UI** – Designed for a clean and intuitive experience, optimized for both **desktop and mobile**.  
- **Modal-based Navigation** – Clicking a Pokémon opens a **modal window**, preserving context and improving UX.  
- **Dynamic Theming** – Background colors adjust based on **Pokémon type**, enhancing visual clarity.  
- **Error Handling & Loading States** – Ensures the application remains responsive and does not break due to API failures.  

### Performance Considerations  
- **Optimized API Requests** – Pokémon data is fetched only **when a type is selected**, reducing unnecessary API calls.  
- **Randomized Selection** – Instead of static pagination, Pokémon are **shuffled dynamically** to create variety.  
- **React Hooks for State Management** – `useState` and `useEffect` efficiently handle API calls and UI updates.  
- **Strict TypeScript Typing** – Ensures **code safety, maintainability, and fewer runtime errors**.  

---

## Future Improvements  

- **Infinite Scroll & Pagination** – Implement pagination instead of random Pokémon selection to allow better browsing.  
- **Enhanced Error Handling** – Provide **user-friendly messages** instead of logging errors to the console.  
- **Animations & Transitions** – Add smooth UI animations for a more engaging user experience.  
- **Search Functionality** – Allow users to search Pokémon by **name or ID**, not just by type.  
- **Music & Sound Effects** – Implement Pokémon-inspired music for a more immersive experience.  

---

## What Could Be Improved with More Time  

If more time were available, these improvements would be prioritized:  

- **Better API Caching** – Reduce API load by caching Pokémon data client-side.  
- **Dark Mode Support** – Offer a dark mode option for **better user accessibility**.  
- **Improved Mobile Experience** – Optimize UI elements for **smaller screens** and improve **touch interactions**.  

---

## Repository  

GitHub Repository: [Pokemon Dashboard](https://github.com/timothychengg/pokemon-dashboard)  




