var CURRENCY_SYMBOL = "\u0394";

var icon =
    '<div class="real-wrapper"><div class = "real-cost-icon" ><img src="' +
    chrome.extension.getURL('icon2.png') +
    '"style = "display: block; visibility: visible; width: 20px; height: 20px"> </div>';
var bar =
    '<div class = "real-cost-bar transition"><span>you got grim reaped</span></div></div>';

//$(".a-color-base").append(icon + bar);
var vishnu = function() {  $('.real-wrapper')
.hover(
    function() {
      $(this)
          .find('.real-cost-bar')
          .css({visibility : 'visible', width : '150px'});
    },

    // when mouse leaves bar, collapses
    function() {
      var bar = $(this).find('.real-cost-bar');
      bar.removeClass('transition');
      bar.css({visibility : 'hidden', width : '0px'});
      bar.addClass('transition');
    });
  };

var apply = function() {
  $(".sx-price, .a-price")
      .not("[real-price-applied='true']")
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
      ".a-color-base, .a-color-price, .a-text-strike, .a-size-minim .p13n-sc-price, .a-color-secondary";
  var currency = new RegExp(/\$\d{1,3}(\,\d{3})*(\.\d{2})?/);
  (function() {
    $(applicants)
        .not("[real-price-applied='true']")
       .each(function(i, obj) {
          var text = $(obj).html();
          var matchedany = false;
          while (match = currency.exec(text)) {
            text = text.replace(match[0], match[0].substring(1) + icon + bar);
            matchedany = true;
          }
          $(obj).attr('real-price-applied', 'true');
          if (matchedany) {
            $(obj).html(text);
          }
        });
  })();

  vishnu();
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
