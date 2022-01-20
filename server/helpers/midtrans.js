const axios = require('axios')

async function midtrans (id, price, email) {
        const AUTH_STRING = new Buffer.from('SB-Mid-server-ejgmiwXrRhnl5dmLoTS4EqjW:').toString('base64')
        let midtrans = await axios({
            method: 'POST',
            url: 'https://app.sandbox.midtrans.com/snap/v1/transactions',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Basic ${AUTH_STRING}`
            },
            data: {
                "transaction_details": {
                    "order_id": id,
                    "gross_amount": price
                },
                "customer_details": {
                    "email": email,
                }
            }
        })
        return midtrans.data
}

module.exports = midtrans