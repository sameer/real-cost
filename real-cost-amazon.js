$(".sx-price").each( function(i, obj) {
  price = parseFloat($(obj).find(".sx-price-whole").text() + "." + $(obj).find(".sx-price-fractional").text());
  $(obj).attr("data-balloon", "Stop wasting all your money, this costs " + price).attr("data-balloon-pos", "right");
});


