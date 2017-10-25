CURRENCY_SYMBOL = "\uD83D\uDCB2";

var icon = function (data) {
  return '<i data-balloon="' + data +
    '" data-balloon-pos="up">&nbsp;<img class="real-cost-icon" src="' +
    chrome.extension.getURL('icon2.png') + '"></i>';
};

var applicants =
  ".bold, .fee, .stk-thr, #prcIsum, #fshippingCost, .mfe-price, .price, .hl-item__price, .hl-item__deal-price, .dne-itemtile-original-price, .first";

var currency = new RegExp(/\$\d{1,3}(\,\d{3})*(\.\d{2})?/);
var apply = function () {
  chrome.storage.sync.get("price", function (price) {
    chrome.storage.sync.get("type", function (type) {
      chrome.storage.sync.get("item_name",
        function (name) {
          diamond(price['price'], type['type'], name['item_name']);
        });
    });
  });
  var diamond = function (price, type, name) {
    $(applicants)
      .not("[real-price-applied='true']")
      .each(function (i, obj) {
        var text = $(obj).html();
        var matchedany = false;
        while (match = currency.exec(text)) {
          // alert(match);
          text = text.replace(
            match[0],
            CURRENCY_SYMBOL + match[0].substring(1) +
            icon(parseFloat(
              Math.trunc((match[0].substring(1)) / parseFloat(price) * 100) / 100) + ' ' + name));
          matchedany = true;
        }
        $(obj).attr('real-price-applied', 'true');
        if (matchedany) {
          $(obj).html(text);
        }
      });
  };
};
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