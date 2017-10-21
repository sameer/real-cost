$(".sx-price").each( function(i, obj) {
  if($(obj).find('.sx-dash-formatting').length !== 0) {

  }
  prices = $(obj).find(".sx-price-whole");
  $(obj).find(".sx-price-fractional").each(function(id, frac){
    prices[id] = parseFloat($(prices[id]).text() + "." + $(frac).text());
  });
  $(obj).find(".sx-price-whole").each(function(id, whole) { $(whole).text(Math.trunc(prices[id])); });
  $(obj).find(".sx-price-fractional").each( function(id, frac) { $(frac).text(Math.trunc((prices[id] % 1)*100)); });
});


