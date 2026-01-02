// Get Quotes from API
async function getQuotes() {
    // const apiUrl = 'https://type.fit/api/quotes';
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        const quotes = await response.json();
        return quotes;
    } catch (error) {
        console.error('Error fetching quotes:', error);
        return [];
    }
}

// Show New Quote
function showNewQuote(quotes) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteText = document.getElementById('quote');
    const quoteAuthor = document.getElementById('author');

    quoteText.textContent = quote.text;
    quoteAuthor.textContent = quote.author ? `- ${quote.author}` : '- Unknown';
}

// Initialize
async function init() {
    const quotes = await getQuotes();
    showNewQuote(quotes);

    const newQuoteButton = document.getElementById('new-quote');
    newQuoteButton.addEventListener('click', () => showNewQuote(quotes));
}

// Run the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);