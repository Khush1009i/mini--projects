document.getElementById('new-quote').addEventListener('click', fetchQuote);

function fetchQuote() {

fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const quote = data[randomIndex];
        document.getElementById('quote-text').textContent = `"${quote.text}"`;
        document.getElementById('quote-author').textContent = quote.author ? `- ${quote.author}` : '- Unknown';
    })
    .catch(error => {
        document.getElementById('quote-text').textContent = "Oops! Something went wrong.";
        document.getElementById('quote-author').textContent = "";
        console.error('Error fetching the quote:', error);
    });
}