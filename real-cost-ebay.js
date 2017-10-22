CURRENCY_SYMBOL = "\u0394";

var applicants =
    ".bold, .fee, .stk-thr, #prcIsum, #fshippingCost, .mfe-price, .price, .hl-item__price, .hl-item__deal-price, .dne-itemtile-original-price, .first";

var currency = new RegExp(/\$\d{1,3}(\,\d{3})*(\.\d{2})?/);
var apply = function() {
  $(applicants)
      .not("[real-price-applied='true']")
      .each(function(i, obj) {
        var text = $(obj).html();
        var matchedany = false;
        while (match = currency.exec(text)) {
          // alert(match);
          text = text.replace(match[0], "you lose");
          matchedany = true;
        }
        $(obj).attr('real-price-applied', 'true');
        if (matchedany) {
          $(obj).html(text);
        }
      });
};

$(document).ready(apply);

var hasScrolled = false;
$(window).scroll(function() { hasScrolled = true; });
setInterval(function() {
  if (hasScrolled) {
    apply();
    hasScrolled = false;
  }
}, 1500);
