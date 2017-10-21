CURRENCY_SYMBOL = "\u0394";

var applicants = ".bold, .fee, .stk-thr";

var currency = new RegExp(/\$\d+\.\d{1,2}/);
var apply = function() {
  $(applicants)
      .each(function(i, obj) {
        text = $(obj).html();
        while (match = currency.exec(text)) {
          // alert(text);
          text = text.replace(match, "you lose");
        }
        $(obj).html(text);
      });
};

$(document).ready(apply);
