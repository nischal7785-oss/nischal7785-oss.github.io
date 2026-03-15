// DefendX - Configuration
// The Gemini API key is stored in localStorage so it is never exposed in your public GitHub repo.
// On first visit, the user is prompted to enter their key once. It is saved locally in their browser.

const config = (function () {
    const KEY_NAME = 'defendx_gemini_key';

    function getKey() {
        return localStorage.getItem(KEY_NAME) || '';
    }

    function setKey(k) {
        localStorage.setItem(KEY_NAME, k.trim());
    }

    function promptForKey() {
        const existing = getKey();
        const key = window.prompt(
            '🔑 Enter your Gemini API Key to activate the AI Mentor.\n\nGet a free key at: https://aistudio.google.com/app/apikey\n\nYour key is stored only in your browser (localStorage) and never uploaded anywhere.',
            existing
        );
        if (key && key.trim()) {
            setKey(key);
            return key.trim();
        }
        return existing;
    }

    return {
        get GEMINI_API_KEY() {
            const k = getKey();
            if (!k) return promptForKey();
            return k;
        },
        resetKey() {
            localStorage.removeItem(KEY_NAME);
            promptForKey();
        }
    };
})();
