/* popup js here */
document.addEventListener('DOMContentLoaded', function () {

    // UI transition
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

    // wage
    var getWage = function () {
        var wage = $('#wage-input').val();
        chrome.storage.sync.set({
            'price': wage,
            'type': 'wage',
            'item_name': 'hours'
        });
    };

    $("#set-new-wage").submit(function (event) {
        getWage();
    });


    // Price and Item
    function getPriceAndItem() {
        // get item
        var item = document.getElementById('item-input').value + "s";
        chrome.storage.sync.set({
            'type': 'item',
            'item_name': item
        });

        // get price
        var price = document.getElementById('price-input').value;
        chrome.storage.sync.set({
            'price': price
        });
    }

    $("#set-new-item").submit(function (event) {
        getPriceAndItem();
    });
});