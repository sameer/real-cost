/* popup js here */
$(document).ready(function () {
    $("input[name$='type']").click(function () {
        var test = $(this).val();

        $("div.desc").hide();
        $("#Type" + test).show();

    });

    $('#itemButtonStyle').addClass("inactive");

    $("#itemButtonStyle").click(function () {
        $('#itemButtonStyle').removeClass("inactive");
        $('#wageButtonStyle').addClass("inactive");
    });

    $("#wageButtonStyle").click(function () {
        $('#wageButtonStyle').removeClass("inactive");
        $('#itemButtonStyle').addClass("inactive");
    });
});

function getWageValue() {
    var wage = document.getElementById('wage-input').value;
}

function getItemValue() {
    var item = document.getElementById('item-input').value;
}

function getPriceValue() {
    var price = document.getElementById('price-input').value;
}

var wageButton = document.getElementById('inputWageButton');
wageButton.addEventListener('click', getWageValue);

var itemButton = document.getElementById('inputPriceButton');
itemButton.addEventListener('click', getItemValue);

var priceButton = document.getElementById('inputPriceButton');
priceButton.addEventListener('click', getPriceValue);