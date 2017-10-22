CURRENCY_SYMBOL = "\u0394";

var applicants = ".itemPrice, .couponTitle, .oldListPrice, #dealPrice, #dealExtraDetails, .textDescription, .num, .couponInfo, a.altText, .priceInfo";

var currency = new RegExp(/\$\d{1,6}(\.\d{2})?/);
var apply = function() {
  $(applicants)
      .each(function(i, obj) {
        text = $(obj).html();
        //alert(text);
        while (match = currency.exec(text)) {
          //alert(match);
          text = text.replace(match[0], "you lose");
        }
        $(obj).html(text);
      });
};

$(document).ready(apply);
