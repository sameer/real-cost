CURRENCY_SYMBOL = "\u0394";

var apply = function() {
  $(".sx-price, .a-price").not("[real-price-applied='true']")
      .each(function(i, obj) {
        var prices = $(obj).find(".sx-price-whole, .a-price-whole");
        $(obj)
            .find(".sx-price-fractional, .a-price-fraction")
            .each(function(id, frac) {
              prices[id] =
                  parseFloat($(prices[id]).text() + "." + $(frac).text());
            });
        $(obj)
            .find(".sx-price-whole, .a-price-whole")
            .each(function(id, whole) {
              $(whole).text(Math.trunc(prices[id]));
            });
        $(obj)
            .find(".sx-price-fractional, .a-price-fraction")
            .each(function(id, frac) {
              $(frac).text(Math.trunc((prices[id] % 1) * 100));
            });
      });
  $(".sx-price-currency, .a-price-symbol").text(CURRENCY_SYMBOL);

  var applicants =
      ".a-color-base, .a-color-price, .a-text-strike, .a-size-minim .p13n-sc-price, .a-color-secondary, .a-link-normal";
  var currency = new RegExp(/\$\d{1,6}(\.\d{2})?/);
  (function() {
    $(applicants).not("[real-price-applied='true']")
        .each(function(i, obj) {
          var text = $(obj).html();
          var matchedany = false;
          while (match = currency.exec(text)) {
            // alert(text);
            text = text.replace(match[0], "you lose");
            matchedany = true;
          }
          $(obj).attr('real-price-applied', 'true');
          if (matchedany) { $(obj).html(text); }
        });
  })();

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

$(".a-button").click(function() { setTimeout(apply, 300); });
