//hobby change description
$(".timeline-event-years-1").click(function() {
    $(".description #home").text("Object Oriented Programming");
});

$(".timeline-event-years-2").click(function() {
    $(".description #home").text("QA Automation Intern");
});

$(".timeline-event-years-3").click(function() {
    $(".description #home").text("Data Structures and Algorithms");
});

$(".timeline-event-years-4").click(function() {
    $(".description #home").text("Personal Website");
});

$(".timeline-event-years-5").click(function() {
    $(".description #home").text("Aerobody Engineer");
});

$(".timeline-event-years-6").click(function() {
    $(".description #home").text("Media Player");
});

$(".timeline-event-years-7").click(function() {
    $(".description #home").text("2048!");
});

$(".timeline-event-years-8").click(function() {
    $(".description #home").text("Combustion Lab");
});

$(window).scroll(function(){
    $('.timelineTitle').css("left", $(this).scrollLeft() + $(this).width() / 2);
    $('.description').css("left", $(this).scrollLeft());
});
