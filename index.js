$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function() {
                window.location.hash = hash;
            });
        }
    });
});

var width = $(window).width();

window.onscroll = function() {
    if ((width >= 900)) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $("#middle").css("background-size", "150% auto");
        } else {
            $("#middle").css("background-size", "100% auto");
        }
    }
};

setTimeout(function() {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function() {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
    }, 800);
}, 1450);

function magnify(imglink) {
    $("#img_here").css("background", `url('${imglink}') center center`);
    $("#magnify").css("display", "flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function() {
        $("#magnify").removeClass("animated fadeIn");
    }, 800);
}

function linkedin() {
    window.location.href = "https://github.com/sanadab";
}



function Library() {
    window.location.href = "https://github.com/sanadab/Library";
}

function Cyber() {
    window.location.href = "https://github.com/sanadab/Cyber";
}

function Bird() {
    window.location.href = "https://github.com/sanadab/projectbdekot";
}

function Bank() {
    window.location.href = "https://github.com/sanadab/project1";
}

function CV() {
    window.location.href = "sanad abo abed (CV) (4) (2) (4).pdf";
}