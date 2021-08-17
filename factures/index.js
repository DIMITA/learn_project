const axios = require("axios")

async function wil () {
const axiosreq = axios.create({
    baseURL: 'https://docsgen-dev.opensi.co/pdf/template-content'
});

dataBody = {
    reference: "KJhkffljkj"
}

console.log('kpoin')
let data = {
    projectId: 'kkp-v1',
    data: dataBody,
    documentFooter: './footer.html',
    document: './payout.html',
    options: JSON.stringify({
        marginLeft: '0mm',
        marginRight: '0mm'
        })
    }
console.log(await axios.post('/', data))
}

wil()