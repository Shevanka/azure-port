import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Prevent transition flash on initial load
document.documentElement.classList.add("loading");

createRoot(document.getElementById("root")!).render(<App />);

// Remove loading class after a brief delay to enable transitions
setTimeout(() => {
  document.documentElement.classList.remove("loading");
}, 100);
