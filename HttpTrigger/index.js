module.exports = async function (context, req) {
    const randomNumber = Math.floor(Math.random() * 5) + 1; // Generate 1-5

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Azure Function Webpage</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
            h2 { color: #0078D4; }
            .number { font-size: 40px; font-weight: bold; color: #ff5733; }
            button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
        </style>
        <script>
            function refreshPage() {
                window.location.reload();
            }
        </script>
    </head>
    <body>
        <h2>Your Random Number:</h2>
        <div class="number">${randomNumber}</div>
        <br>
        <button onclick="refreshPage()">Generate Again</button>
    </body>
    </html>`;

    context.res = {
        headers: { "Content-Type": "text/html" },
        body: htmlContent
    };
};
