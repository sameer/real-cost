/* popup js here */
$(document).ready(function () {
    $("input[name$='type']").click(function () {
        var test = $(this).val();

        $("div.desc").hide();
        $("#Type" + test).show();
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
wageButton.addEventListener('click', getWageValue, false);

var itemButton = document.getElementById('inputItemButton');
itemButton.addEventListener('click', getItemValue, false);

var priceButton = document.getElementById('inputPriceButton');
priceButton.addEventListener('click', getPriceValue, false);