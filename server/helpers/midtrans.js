const axios = require('axios')

async function midtrans (id, price, email) {
        const AUTH_STRING = new Buffer.from('SB-Mid-server-ejgmiwXrRhnl5dmLoTS4EqjW:').toString('base64')
        // let midtrans = await axios({
        //     method: 'POST',
        //     url: 'https://app.sandbox.midtrans.com/snap/v1/transactions',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //         Authorization: `Basic ${AUTH_STRING}`
        //     },
        //     data: {
        //         "transaction_details": {
        //             "order_id": id+'myrecipee',
        //             "gross_amount": price
        //         },
        //         "customer_details": {
        //             "email": email,
        //         }
        //     }
        // })
        let midtrans = await axios.post("https://app.sandbox.midtrans.com/snap/v1/transactions", {
            "transaction_details": {
                "order_id": id+'myrecipee',
                "gross_amount": price
            },
            "customer_details": {
                "email": email,
            }
        }, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Basic ${AUTH_STRING}`
            }
        })
        console.log(midtrans, 'INI DATAAAAAAAAAAA')
        return midtrans.data
}

module.exports = midtrans