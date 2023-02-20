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

