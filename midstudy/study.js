$(document).ready(function () {
    // $("span").parentsUntil("div").css({ "color": "green" });
    $("span").parents("ul").css({ "color": "green" });

    // $( "li.third-item" ).prev().css( "background-color", "blue" );
//     $( "body p:first-child" )
//     .css( "text-decoration", "underline" )
//     .hover(function() {
//     $( this ).addClass( "sogreen" );
//     }, function() {
//     $( this ).removeClass( "sogreen" );
//   });
    //code fragment 1
    // $("li").each(function (idx, e) {
    //     $(e).css("color", "yellow");
    // });
    // // code fragment 2
    // $("li").each(function () {
    //     $(this).css("color", "yellow");
    // });
    // // //code fragment 3
    // $("li").each(function (idx) {
    //     $(this).css("color", "yellow");
    // });
    // $("div li").css("color","red");
    // $("div:has(ul)").css('color','blue');
    // $("body").append('<div><h1>JQuery Core</h1></div>');

    // $("div").each(function (idx) {
    //     if($.contains(this, document.getElementsByTagName('ul') ) ) {
    //         console.log('contains');
    //     }

    //     // $(this).css("color", "blue");
    // });

});