var eventFired = 0;
var mobileWidth = 800;
checkForHashtag();
//if ($(window).width() < mobileWidth) {
checkPriceBlocksForMobile();
//}
//$(window).on('resize', function() {
//    checkPriceBlocksForMobile();
//});

function checkPriceBlocksForMobile() {
    var block = $('.container-fluid.prices .row.question');
    var link = block.children('a');
    var childrens = $('.row.answer.collapse');
    //if ($(window).width() < mobileWidth) {
    if (block.length == 1) {
        childrens.addClass('show');
        childrens.data('aria-expanded', true);
        link.data('aria-expanded', true);
        link.css('display', 'none');
        link.removeClass('collapsed');
    }
    //} else {
    //  if (block.length == 1) {
    //     link.css('display', 'block');
    //}
    //}
}

function checkForHashtag() {

    var hash = window.location.hash;
    if (hash == '#content') {
        if ($(window).width() < mobileWidth) {
            $('html, body').animate({
                scrollTop: ($(hash).offset().top - 50)
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500);
        }
        return false;

    }

}

function hideText() {
    $('#readmore_block p:first').nextAll().hide();
    if ($('#readmore_block').has('p').length) {
        $('#NewsList').show();
    } else
        $('#NewsList').hide();
}

function showText() {
    $('#readmore_block p:first').nextAll().slideDown();
}

function slideText() {
    $('#readmore_block p:first').nextAll().slideUp();
}

$(document).ready(function() {
    $('.enhancer').click(function(e){
        e.preventDefault();
        var counter = $('#count');
        var val = parseInt(counter.val());
        var newVal = 1;
        if($(this).hasClass('plus')){
            newVal = parseInt(val + 1);
            counter.val(newVal);
        }
        else{
            newVal = val > 1 ? parseInt(val - 1) : newVal;
            counter.val(newVal);
        }
    });
    hideText();
    $('#read_more_text').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            slideText();
            $(this).text(readMore);
        } else {
            showText();
            $(this).text(readLess);
            $(this).addClass('active');
        }
    });
});
if ($('a.thickbox').length) {
    var options;
    var lightbox = $('a.thickbox').simpleLightbox(options);
}
if ($('#contact-us').length) {
    $('#contact-btn').attr('href', '#contact-us');
    $('#contact-btn').click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $('#contact-us').offset().top // Scroll to top of body
        }, 500);
    });

}

function initSelects() {
    function t(t) {
        var e = $(".option", t).filter(function() {
            var t = $(this).text().toLowerCase().replace(/\s/g, "");
            return n = n.replace(/\s/g, ""), 0 === t.indexOf(n)
        });
        e.length > 0 && (t.find("select-options").mCustomScrollbar("scrollTo", e.eq(0).position().top), e.eq(0).click()), n = ""
    }
    var e = $("select.styled:not(.done)");
    e.each(function() {
        $(this).wrap('<div class="select-wrap"></div>');
        var t = $(this).parent(),
            e = $(this).find(":selected");
        e.attr("selected", !0), t.css("max-width", $(this).outerWidth());
        var i = e.data("image"),
            a = ' <div class="bg-ico" style="background-image:url(' + i + ')"></div>';
        t.append('<div class="select-value' + (i ? " has-image" : "") + '">' + (i ? a : "") + e.text() + "</div>");
        var s = '<div class="select-options">';
        $(this).find("option").each(function() {
            var t = $(this).data("image"),
                e = ' <div class="bg-ico" style="background-image:url(' + t + ')"></div>';
            s += '<div class="option ' + $(this).attr("class") + ($(this).attr("selected") ? " selected" : "") + '" data-value="' + $(this).val() + '">' + (t ? e : "") + $(this).text() + "</div>"
        }), s += "</div>", t.append(s), t.addClass($(this).attr("class")), $(this).addClass("done"), $(".select-options", t).outerHeight() >= parseInt($(".select-options", t).css("max-height")) && $(".select-options", t).mCustomScrollbar(), t.find("select").val() == $("option", t).eq(0).val() && t.addClass("default")
    }), $(".select-wrap").each(function() {
        var t = $(".select-value", $(this)),
            e = $(".option", $(this)),
            i = t.data("image");
        if ("" != i && "undefined" != typeof i && ("" == t.css("background-image") || "none" == t.css("background-image"))) {
            var a = ' <div class="bg-ico" style="background-image:url(' + i + ')"></div>';
            t.addClass("has-image"), t.prepend(a)
        }
        e.each(function() {
            var t = $(this).data("image");
            if ("" != t && "undefined" != typeof t && 0 == $(this).find(".bg-ico").length) {
                var e = ' <div class="bg-ico" style="background-image:url(' + t + ')"></div>';
                $(this).prepend(e)
            }
        })
    }), $("select.styled").click(function() {
        $(this).parent().focus().toggleClass("clicked")
    }), $(".select-value").click(function() {
        $(this).parent().focus().toggleClass("clicked")
    });
    var i = $(".select-options .option");
    i.hover(function() {
            var currentlang = $(this).children('a');
            var currentimg = currentlang.children('img');
            currentimg.attr('src', currentlang.attr('hover'));
        }, function() {
            var currentlang = $(this).children('a');
            var currentimg = currentlang.children('img');
            currentimg.attr('src', currentlang.attr('init'));
        }),
        i.click(function() {
            var t = $(this).parents(".select-wrap"),
                e = $(this).find(".bg-ico").css("background-image"),
                i = $('<div class="bg-ico"></div>').css("background-image", e);
            t.removeClass("clicked").find(".select-value").html($(this).attr('short')), t.find(".select-value").removeClass("has-image"), e && t.find(".select-value").addClass("has-image").prepend(i), t.find("select").val($(this).attr("data-value")).change(), $(".option", t).removeClass("selected"), $(this).addClass("selected"), t.find("select").val() == $("option", t).eq(0).val() ? t.addClass("default") : t.removeClass("default")
        }), $(".select-wrap").attr("tabindex", "1").focusout(function() {
            $(this).removeClass("clicked")
        });
    var a, s = 700,
        n = "";
    $(".select-wrap").keypress(function(e) {
        n += e.key, clearTimeout(a), selectWrap = $(this), a = setTimeout(function() {
            t(selectWrap)
        }, s)
    })
}
$(document).ready(function() {
    initSelects();
    initDoctors();
    initPartners();
    initForm();
    initMenu();
    initTables();
});

function resize() {
    initDoctors();
    initTables();
}

var timo;
window.onresize = function() {
    clearTimeout(timo);
    timo = setTimeout(resize, 100);
};

function initDoctors() {

    var wrap = $('.doc-wrap');

    if ($('.doc', wrap).outerWidth() * $('.doc', wrap).length < wrap.outerWidth() ||
        !wrap.hasClass('not-inited')) {
        return;
    }

    var owl = $('.doc-container').owlCarousel({
        autoWidth: true,
        mouseDrag: false,
        nav: true,
        items: 1,
        onInitialized: function() {
            wrap.removeClass('not-inited');
        }
    });


    $('.owl-custom', wrap).click(function() {
        if ($(this).hasClass('next')) {
            owl.trigger('next.owl.carousel');
        } else {
            owl.trigger('prev.owl.carousel');
        }
    });

    owl.on('changed.owl.carousel', function(event) {
        var activeCount = $('.owl-item.active', wrap);

        if (event.page.index == 0) {
            $('.owl-custom.prev, .owl-custom.next', wrap).removeClass('hidden');
            $('.owl-custom.prev', wrap).addClass('hidden');

            if (event.page.index >= event.page.count - activeCount.length + 1) {
                $('.owl-custom.next', wrap).addClass('hidden');
            }
        } else if (event.page.index > 0 && event.page.index >= event.page.count - activeCount.length + 1) {
            $('.owl-custom.prev, .owl-custom.next', wrap).removeClass('hidden');
            $('.owl-custom.next', wrap).addClass('hidden');
        } else {
            $('.owl-custom.prev, .owl-custom.next', wrap).removeClass('hidden');
        }
    });

}

function initPartners() {
    var wrap = $('.partners');
    var owl = $('.partner-container').owlCarousel({
        mouseDrag: false,
        loop: true,
        items: 6,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 2
            },
            450: {
                items: 3
            },
            560: {
                items: 4
            },
            680: {
                items: 5
            },
            767: {
                items: 3
            },
            900: {
                items: 4
            },
            1120: {
                items: 5
            },
            1300: {
                items: 6
            }


        }
    });
}

function initMap(params) {
    var mapDiv = $('#' + params.id);
    var loc = { lat: params.lat, lng: params.lng };

    var styles = [
        { elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#ffffff' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#3c3e43' }] },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#e8d7d6' }]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#dbdada' }]
        },

        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e3e5ed' }]
        },

    ];

    var map = new google.maps.Map(document.getElementById(params.id), {
        zoom: params.zoom,
        center: loc,
        disableDefaultUI: true,
        styles: styles,
    });

    var marker = new google.maps.Marker({
        position: loc,
        map: map,
        icon: params.pin
    });

    map.addListener('idle', function() {
        if (!mapDiv.hasClass('loaded')) {
            mapDiv.addClass('loaded').resize();
            google.maps.event.trigger(map, 'resize');
        }
    });


}

function initForm() {
    $('.datepicker').datepicker({
        dateFormat: 'dd.mm.yy',
        firstDay: 1
    }).datepicker("setDate", new Date());

    $('.timepicker').timepicker({
        timeFormat: 'HH:mm',
        interval: 15,
        minTime: '8am',
        maxTime: '5pm',
        defaultTime: '8am',
        startTime: '8am',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });

    $('.datepicker, .timepicker').focus(function() {
        //$(this).blur();
    });
}

function initMenu() {
    // Language menu
    $('body')
        .on('click', '[data-menu-toggle]', e => {
            $($(e.currentTarget).attr('data-menu-toggle'))
                .find('.menu-overlay,.slide-menu')
                .addClass('show');
        })
        .on('click', '[data-menu-close],.menu-overlay', e => {
            $(e.currentTarget)
                .closest('.menu-wrap')
                .children('.menu-overlay,.slide-menu')
                .removeClass('show');
        });

    // Navigation
    var menuToggler = $('.menu-toggle');
    var menu = $('#menu');
    var textSpan = menuToggler.children('span');
    var originalText = textSpan.eq(0).text();
    var overlay = $('.menu-wrap .overlay');

    menuToggler.click(function() {
        menuToggler.toggleClass('show');
        menu.toggleClass('show');
        overlay.toggleClass('show');
        var currentST = $(window).scrollTop();

        if ($(this).hasClass('show')) {
            textSpan.text($(this).data('close'));
        } else {
            textSpan.text(originalText);
        }
    });

    overlay.click(function() {
        menuToggler.eq(0).click();
    });

    var submenuButton = $('.submenu-button', menu);
    var backButton = $('.nav-link.back', menu);
    var columns = $('.navigation .column', menu);
    var sublevels = $('.sub-level', menu);
    let header_labels = [];

    submenuButton.click(function() {
        var pageID = $(this).parents('.nav-item').data('page-id');
        changeColumn($(this), 1, pageID);
    });

    backButton.click(function() {
        changeColumn($(this), -1, false);
        return false;
    });

    function changeColumn(subject, direction, pageID) {
        var currentColumn = subject.parents('.column');
        var index = currentColumn.index('.navigation .column');
        var nextColumn = columns.eq(index + direction);
        let header_label;

        if (direction === 1) {
            currentColumn.addClass('left').removeClass('active');
            nextColumn.addClass('active').removeClass('left');
            if (pageID !== false) {
                $('.sub-level', nextColumn).hide();
                sublevels.filter('[data-parent-id=' + pageID + ']').show();
            }

            header_label = $(`[data-page-id="${pageID}"] a`).text();
            header_labels.push($('#top-menu-header').text());
        } else {
            currentColumn.removeClass('left').removeClass('active');
            nextColumn.addClass('active').removeClass('left');
            header_label = header_labels.pop();
        }

        $('#top-menu-header').text(header_label);
    }
}

var tables = $('.main-content table').not('.dontchange');
var tableWidths = {};

function initTables() {

    tables.each(function() {
        if (!$(this).hasClass('inited')) {
            tableWidths[$(this).index()] = $(this).width();
        }
        if (tableWidths[$(this).index()] <= $(this).parent().width()) {
            $(this).show();
            $(this).next('.new-table').hide();
            return;
        } else {
            if ($(this).hasClass('inited')) {
                $(this).hide();
                $(this).next('.new-table').show();
                return;
            }
        }

        var table = $(this);
        var headers = $('th', table);
        var rows = $('tr', table);
        var newTable = '<div class="new-table">';

        rows.each(function() {
            var row = $(this);
            if ($('th', row).length > 0) {
                return;
            }
            var cells = $('td', row);
            newTable += '<table class="table-row">'

            cells.each(function() {
                var cellIndex = cells.index($(this));
                newTable += '<tr class="cell-row">';
                newTable += '<td class="th">' + headers.eq(cellIndex, headers).html() + '</td>';
                newTable += '<td class="td">' + $(this).html() + '</td>';
                newTable += '</tr>';

            });

            newTable += '</table>';
        });

        newTable += '</div>';

        table.after(newTable);
        table.addClass('inited');
        table.hide();
    });
}
// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});
$('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});


$("#submitButton").click(function(e) {
    let form = $('#sudzibuForma');

    form.addClass('was-validated');
    // e.preventDefault();
    // e.stopPropagation();

    // if (form[0].checkValidity()) {
    //     // Sent form via AJAX.
        
    //     $('body').addClass('js-form-sent');
    // }
});
if($('.left-content .col.navigation .nav-link.nav-item.active'))
{
    var myStr = $(".nav-link.nav-item.active").text();
    if (myStr.length) {
       var len = myStr.length;
       if(len > 34){
        $(".nav-link.nav-item.active").addClass('long-text');
       }
    }
}