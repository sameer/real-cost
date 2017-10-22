/* popup js here */
document.addEventListener('DOMContentLoaded', function() {

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

var wagef = function () {
    var wage = $('#wage-input').val();
    chrome.storage.sync.set({'type': 'wage', 'price':wage, 'item_name': 'hours'}, function() {alert('Saved!');});
};

function getItemValue() {
    var item = document.getElementById('item-input').value;
    chrome.storage.sync.set({'type': 'item', 'item_name':item});
}

function getPriceValue() {
    var price = document.getElementById('price-input').value;
    chrome.storage.sync.set({'price': price});
}

function convertWage(decimal) {
    var num = decimal / wageVal;
    return num + '&nbsp;'+ "hours of your life";
}

function convertItem(decimal) {
    var num = decimal / priceVal;
    return num + '&nbsp;' + itemVal;
}
$("#set-new-wage").submit(function(event) {
  wagef();
});
$("#set-new-item").submit(function(event) {
  getPriceValue();
  getItemValue();
});
});
