$(".sx-price").each( function(i, obj) {
  parseFloat($(obj).find(".sx-price-whole").text() + "." + $(obj).find(".sx-price-fractional").text());
  $(obj).addClass("hint--bottom").attr("aria-label", "This is a tooltip yo");
});


