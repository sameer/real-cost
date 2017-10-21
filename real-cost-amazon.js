CURRENCY_SYMBOL = "\u0394";
apply = function() {
  $(".sx-price, .a-price")
      .each(function(i, obj) {
        prices = $(obj).find(".sx-price-whole, .a-price-whole");
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

  $(".a-color-base,.a-color-price")
      .each(function(i, obj) {
        price = $(obj).text();
        if (!price.startsWith("$")) {
          return;
        }
        price = price.substring(1);
        price = parseFloat(price);
        if (price !== 0)
        $(obj).text(CURRENCY_SYMBOL + price);
      });
};

$(document).ready(apply);
