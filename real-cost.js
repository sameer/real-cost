
var x = document.getElementsByClassName("sx-price-large sx-price-large");
var value = 5;

//iterates over every element
x.forEach(function(element) {
    /*retrieve appropriate values*/
    var prices = [];
    var num_prices = $(element).find('.sx-price-whole');
    var frac_prices = $(element).find('.sx-price-fractional');
    num_prices.forEach(function(txt, index){
        prices.push(txt);
        prices.push(frac_prices(index));
    })
    $(element).add('<div class = "real-cost"> <div class = "real-cost-icon"> </div>  <div class = "real-cost-bar"> </div> </div>');
});


//when mouse enters icon expands
$('.real-cost-icon').addEventListener('mouseenter', function() {
$(this).find('.real-cost-bar').css({visibility: 'visible', width: '200px'});
});

//when mouse leaves bar, collapses
$('.real-cost').addEventListener('mouseleave', function() {
    $(this).find('.real-cost-bar').css({visibility: 'hidden', width: '0px'});
});