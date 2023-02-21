$("#cancel").click(function() {
    window.location.href = 'http://localhost:3000';
})

$("#paymentMethod").on("change", function () {
    $("#savePayment").prop('disabled', false);
    if ($("#paymentMethod").val() === 'invoice') {
        $("#cardData").hide();
    } else {
        $("#cardData").show();
    }
})

function mountBody() {
    let body = {
        name: $('#buyerName').val(),
        email: $('#buyerEmail').val(),
        cpf: $('#buyerCpf').val(),
        amount: $('#paymentAmount').val(),
        type: $('#paymentMethod').val(),
    }

    if (body.type === 'card') {
        body.holder = $('#cardHolder').val();
        body.number = $('#cardNumber').val();
        body.expiration = $('#cardExp').val();
        body.cvc = $('#cardCvc').val();
    }
    console.log(body);
    return body;
}

async function postNewPayment(paymentBody) {
    axios.post(`http://localhost:3000/create`, paymentBody)
        .then(function (response) {
            console.log('Criado com sucesso');
            return;
        })
        .catch(function (error) {
            console.log(error);
        })
}

$("#savePayment").click(async function() {
    let paymentBody = mountBody();
    await postNewPayment(paymentBody);
    window.location.href = 'http://localhost:3000';
})