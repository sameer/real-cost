/* popup js here */
document.addEventListener('DOMContentLoaded', function () {

    // UI Transition
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

    // clear value when input and restore when back
    // wage
    var wageInput = document.getElementById('wage-input'),
        a = wageInput.getAttribute('placeholder');
    wageInput.value = a;
    wageInput.onfocus = function () {
        if (this.value === a) this.value = '';
    };
    wageInput.onblur = function () {
        if (!this.value) this.value = a;
    };

    // item
    var itemInput = document.getElementById('item-input'),
        b = itemInput.getAttribute('placeholder');
    itemInput.value = b;
    itemInput.onfocus = function () {
        if (this.value === b) this.value = '';
    };
    itemInput.onblur = function () {
        if (!this.value) this.value = b;
    };

    // price
    var priceInput = document.getElementById('price-input'),
        c = priceInput.getAttribute('placeholder');
    priceInput.value = c;
    priceInput.onfocus = function () {
        if (this.value === c) this.value = '';
    };
    priceInput.onblur = function () {
        if (!this.value) this.value = c;
    };

    // wage
    var getWage = function () {
        var wage = $('#wage-input').val();
        if (isFinite(wage) === true && wage > 0) {
            chrome.storage.sync.set({
                'price': wage,
                'type': 'wage',
                'item_name': 'hours'
            });
            // $('#wage-input').addClass("invalid");
        }
    };

    // set wage
    $("#set-new-wage").submit(function (event) {
        getWage();
        chrome.tabs.reload();
    });

    // Price and Item
    function getPriceAndItem() {
        // set item
        var item = pluralize(document.getElementById('item-input').value);
        chrome.storage.sync.set({
            'type': 'item',
            'item_name': item
        });

        // set price
        var price = document.getElementById('price-input').value;
        if (isFinite(price) === true && price > 0) {
            chrome.storage.sync.set({
                'price': price
            });
        }
    }

    $("#set-new-item").submit(function (event) {
        getPriceAndItem();
        chrome.tabs.reload();

    });
});