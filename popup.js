/* popup js here */
$(document).ready(function () {

    $('#itemButtonStyle').addClass("inactive");
    $('#Type1').show();
    $('#Type2').hide();


    $("#itemButtonStyle").click(function () {
        $('#itemButtonStyle').removeClass("inactive");
        $('#wageButtonStyle').addClass("inactive");
        $('#Type1').hide();
        $('#Type2').show();
    });

    $("#wageButtonStyle").click(function () {
        $('#wageButtonStyle').removeClass("inactive");
        $('#itemButtonStyle').addClass("inactive");
        $('#Type2').hide();
        $('#Type1').show();
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