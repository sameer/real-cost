CURRENCY_SYMBOL = "\u0394";

var applicants =
    ".itemPrice, .couponTitle, .oldListPrice, #dealPrice, #dealExtraDetails, .textDescription, .num, .couponInfo, a.altText, .priceInfo";

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
setInterval(function() {
  if (hasScrolled) {
    apply();
    hasScrolled = false;
  }
}, 1500);
