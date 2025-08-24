import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("root_int");

    if (!container) {
        console.error("❌ Root container #root_int not found.");
        return;
    }

    const root = createRoot(container);
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
});

