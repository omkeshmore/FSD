const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Route 1: Display Loan Schemes
    if (req.url === '/schemes' && req.method === 'GET') {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        const schemes = [
            { name: 'Home Loan', interest: '8%' },
            { name: 'Personal Loan', interest: '10%' },
            { name: 'Education Loan', interest: '7%' }
        ];

        res.end(JSON.stringify(schemes));
    }

    // Route 2: Calculate EMI
    else if (req.url.startsWith('/emi') && req.method === 'GET') {

        const url = new URL(req.url, 'http://localhost');

        const principal = Number(url.searchParams.get('amount'));
        const rate = Number(url.searchParams.get('rate'));
        const years = Number(url.searchParams.get('years'));

        if (!Number.isFinite(principal) || !Number.isFinite(rate) ||
            !Number.isFinite(years) || principal <= 0 || rate <= 0 || years <= 0) {

            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Invalid loan details');
            return;
        }

        const monthlyRate = rate / 12 / 100;
        const months = years * 12;

        const emi = (principal * monthlyRate *
            Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Monthly EMI: Rs. ' + emi.toFixed(2));
    }

    // Route 3: Check Loan Eligibility
    else if (req.url.startsWith('/eligibility') && req.method === 'GET') {

        const url = new URL(req.url, 'http://localhost');

        const income = Number(url.searchParams.get('income'));

        if (!Number.isFinite(income) || income <= 0) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Invalid income');
            return;
        }

        if (income >= 25000) {
            res.end('Congratulations! You are eligible for a loan.');
        } else {
            res.end('Sorry! You are not eligible for a loan.');
        }
    }

    // Route 4: Handle Invalid Routes
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }

});

// Start server
server.listen(3000, () => {
    console.log('Bank Loan Portal running at http://localhost:3000');
});


// http://localhost:3000/schemes
// http://localhost:3000/emi?amount=500000&rate=8&years=5
// http://localhost:3000/eligibility?income=30000