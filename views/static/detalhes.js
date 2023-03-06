$("#cancel").click(function() {
    window.location.href = 'http://localhost:3000';
})

$(document).ready( async function () {
    let currentUrl = window.location.href;
    let id = currentUrl.split('/')[(currentUrl.split('/').length) - 1]
    axios.get(`http://localhost:3000/payment/${id}`)
        .then(function (response) {
            fillFields(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
} );

function fillFields(data) {
    $('#buyerName').val(data.buyer.name);
    $('#buyerEmail').val(data.buyer.email);
    $('#buyerCpf').val(data.buyer.cpf);
    $('#paymentAmount').val(data.amount);
    $('#paymentMethod').val(data.type);
    $('#paymentStatus').val(data.status);
}