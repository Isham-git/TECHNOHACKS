document.getElementById("convertBtn").addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;

    document.getElementById("convertBtn").addEventListener("click", function () {
        const amount = parseFloat(document.getElementById("amount").value);
        const fromCurrency = document.getElementById("from").value;
        const toCurrency = document.getElementById("to").value;
    
        const exchangeRate = {
            inr: {
                usd: 0.014,
                eur: 0.012,
                gbp: 0.011,
                jpy: 1.58,
                cad: 0.018,
                aud: 0.02,
                chf: 0.013,
                cny: 0.089,
                brl: 0.075,
            },
            usd: {
                inr: 72.32,
                eur: 0.85,
                gbp: 0.74,
                jpy: 110.36,
                cad: 1.26,
                aud: 1.38,
                chf: 0.91,
                cny: 6.47,
                brl: 5.28,
            },
            eur: {
                inr: 84.52,
                usd: 1.18,
                gbp: 0.86,
                jpy: 128.96,
                cad: 1.47,
                aud: 1.61,
                chf: 1.06,
                cny: 7.49,
                brl: 6.12,
            },
            gbp: {
                inr: 92.78,
                usd: 1.35,
                eur: 1.17,
                jpy: 148.57,
                cad: 1.7,
                aud: 1.87,
                chf: 1.23,
                cny: 8.68,
                brl: 7.11,
            },
            jpy: {
                inr: 0.63,
                usd: 0.0091,
                eur: 0.0078,
                gbp: 0.0067,
                cad: 0.011,
                aud: 0.012,
                chf: 0.008,
                cny: 0.055,
                brl: 0.045,
            },
            cad: {
                inr: 56.21,
                usd: 0.79,
                eur: 0.68,
                gbp: 0.59,
                jpy: 87.7,
                aud: 1.1,
                chf: 0.73,
                cny: 5.17,
                brl: 4.24,
            },
            aud: {
                inr: 49.16,
                usd: 0.73,
                eur: 0.62,
                gbp: 0.54,
                jpy: 79.89,
                cad: 0.91,
                chf: 0.66,
                cny: 4.67,
                brl: 3.83,
            },
            chf: {
                inr: 68.24,
                usd: 1.09,
                eur: 0.94,
                gbp: 0.81,
                jpy: 125.77,
                cad: 1.37,
                aud: 1.51,
                cny: 7.04,
                brl: 5.77,
            },
            cny: {
                inr: 11.23,
                usd: 0.15,
                eur: 0.13,
                gbp: 0.12,
                jpy: 18.13,
                cad: 0.19,
                aud: 0.21,
                chf: 0.14,
                brl: 0.82,
            },
            brl: {
                inr: 13.33,
                usd: 0.19,
                eur: 0.16,
                gbp: 0.14,
                jpy: 21.93,
                cad: 0.24,
                aud: 0.26,
                chf: 0.18,
                cny: 1.22,
            },
        };
    
        const convertedAmount = amount * exchangeRate[fromCurrency][toCurrency];
    
        document.getElementById("result").innerHTML = `${amount.toFixed(2)} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;
    });


    const convertedAmount = amount * exchangeRate[fromCurrency][toCurrency];

    document.getElementById("result").innerHTML = `${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});
