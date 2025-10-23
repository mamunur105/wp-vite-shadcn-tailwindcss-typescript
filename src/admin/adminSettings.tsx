import { createRoot } from 'react-dom/client';
import App from './js/App';
import './css/index.css';
import './css/admin.scss';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('wpvstt-settings');
    // Type guard to ensure container is not null
    if (container) {
        // console.log('option?.optionFields?.fields', option?.optionFields?.fields );
        const root = createRoot(container as HTMLElement); // Explicit type cast
        root.render(<App />);
    }
});
