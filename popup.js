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

function convertWage(decimal) {
    var num = decimal / wageVal;
    return num + '&nbsp;'+ "hours of your life";
}

function convertItem(decimal) {
    var num = decimal / priceVal;
    return num + '&nbsp;' + itemVal;
}

var wageVal = document.getElementById('inputWageButton');
wageVal.addEventListener('click', getWageValue);

var itemVal = document.getElementById('inputPriceButton');
itemVal.addEventListener('click', getItemValue);

var priceVal = document.getElementById('inputPriceButton');
priceVal.addEventListener('click', getPriceValue);