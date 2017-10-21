/* popup js here */
$(document).ready(function () {
    $("input[name$='type']").click(function () {
        var test = $(this).val();

        $("div.desc").hide();
        $("#Type" + test).show();
    });
});

