var fancyText = document.getElementById('name');
var intervalTime = 100;
var initialPause = 1200;
var callbackPause = 500;

//change the header when it is not at the top of the page
$(document).scroll(function() {
  var scrollTop = $(window).scrollTop();
       console.log(scrollTop);
        if (scrollTop >= 50 ) {
            $('header').addClass("backgroundTransparent");
        }
        else {
            $('header').removeClass("backgroundTransparent");
        }
});

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function deleteContent(callback) {

    var intervalId = setInterval(function() {
        if (fancyText.innerHTML.length == 0) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = fancyText.innerHTML.substring(0, fancyText.innerHTML.length - 1);
    }, intervalTime);

}

function addContent(contentToAdd, callback) {
    var currentIndex = 0;

    var intervalId = setInterval(function() {
        if (currentIndex == contentToAdd.length) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = contentToAdd.substring(0, currentIndex);
        currentIndex++;
    }, intervalTime);
}

setTimeout(function() {
    deleteContent(function() {
        addContent("an engineer", function() {
            deleteContent(function() {
                addContent("a developer", function() {
                    deleteContent(function() {
                        addContent("a designer", function() {
                            deleteContent(function() {
                                addContent("Ryan Li");
                            })
                        });
                    })
                });
            });
        });
    });
}, initialPause);

//Hobbies Section
// Masonry Grid
$('.grid').masonry({
    itemSelector: '.item',
    columnWidth: 50,
    gutter: 10,
    fitWidth: true
});

//make each grid item come at different times
$('.item').each(function(i){
    setTimeout(function(){
        $('.item').eq(i).addClass('is-visible');
    }, 200 * i);
});