// Green Dollar Sign
var CURRENCY_SYMBOL = "\uFF04";

// Icon
var iconUp = function (data) {
  return '<img title="'+data+'" class="real-cost-icon" src="' +
    chrome.extension.getURL('icon2.png') + '" />';
};

var iconDown = function (data) {
  return '<img title="'+data+'" class="real-cost-icon" src="' +
    chrome.extension.getURL('icon2.png') + '" />';
};

var dollarUp = function (data) {
  return '<img title="'+data+'" class="real-cost-icon" src="' +
    chrome.extension.getURL('icon2.png') + '" />';
};

// Find and Change
var changePrice = function (price, type, name) {
  // Catalogue 
  $(".sx-price, .a-price").not("[real-price-applied='true']").each(function (i, obj) {
    // Store Values
    var prices = $(obj).find(".sx-price-whole, .a-price-whole");
    $(obj).find(".sx-price-fractional, .a-price-fraction")
      .each(function (id, frac) {
        prices[id] =
          parseFloat($(prices[id]).text() + "." + $(frac).text());
      });

    // Number Covert
    for (var a = 0; a < prices.length; ++a) {
      prices[a] = Math.trunc(prices[a] / parseFloat(price) * 100) / 100;
    }

    $(obj).find(".sx-price-currency, .a-price-symbol").each(function (i) {
      $(this).html(dollarUp(prices[i] + ' ' + name));
    });

    // Redundancy Mark  
    $(obj).attr('real-price-applied', 'true');
  });

  // Amazon Internal Selector  
  // Dollar Finder
  var currency = new RegExp(/\$\d{1,3}(\,\d{3})*(\.\d{2})?/);

  // Fresh Selector
  $(".ap-fresh, .snsPriceBlock").not("[real-price-applied='true'], .offer-price").each(function (i) {
    var text = $(this).html();
    var switched = false;

    while (match = currency.exec(text)) {
      text = text.replace(
        match[0],
        CURRENCY_SYMBOL + match[0].substring(1) +
        iconDown(parseFloat(
          Math.trunc((match[0].substring(1)) / parseFloat(price) * 100) / 100) + ' ' + name));
      switched = true;
    }

    $(this).attr('real-price-applied', 'true');

    if (switched) {
      $(this).html(text);
    }
  });

  // General Selector
  var applicants =
    ".a-color-base, .a-color-price, .a-text-strike, .a-size-minim .p13n-sc-price, .a-color-secondary";
  var elements = document.getElementsByTagName("*");


  // Apply Interal
  $(elements).not("[real-price-applied='true'], [id*='color_name'], .offer-price, .twister_swatch_price, .price_slot_ppu, .a-size-small, .aok-float-right, .a-size-mini").filter(applicants).each(function (i) {
    var text = $(this).html();
    var switched = false;

    // Replace
    while (match = currency.exec(text)) {
      text = text.replace(
        match[0],
        CURRENCY_SYMBOL + match[0].substring(1) +
        iconUp(parseFloat(Math.trunc((match[0].substring(1)) / parseFloat(price) * 100) / 100) + ' ' + name));
      switched = true;
    }

    $(this).attr('real-price-applied', 'true');

    if (switched) {
      $(this).html(text);
    }
  });
};

// Main
var apply = function () {
  // Sync Info
  chrome.storage.sync.get("price", function (price) {
    chrome.storage.sync.get("type", function (type) {
      chrome.storage.sync.get("item_name", function (name) {
        changePrice(price.price, type.type, name.item_name);
      });
    });
  });
};

// Start
$(document).ready(apply);

var hasScrolled = false;

$(window).scroll(function () {
  hasScrolled = true;
});

setInterval(function () {
  if (hasScrolled) {
    apply();
    hasScrolled = false;
  }
}, 1500);

$(".a-button").click(function () {
  setTimeout(apply, 300);
});
