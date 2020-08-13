document.onreadystatechange = function () {
    var state = document.readyState;
    if($('.waves').length>0) {
        wave();
    }
    if (state == 'complete') {
        document.getElementById('interactive');
        $('#load').addClass('hidden');
        $('.main-content').removeClass('hidden');
    }
};
$(document).ready(function(){
    'use strict';

    if($('.waves').length>0) {
        wave();
    }

    if($('#sign-up-carousel').length > 0) {
        $("#sign-up-carousel").owlCarousel({
            items: 4,
            lazyLoad: true,
            loop: true,
            margin: 10
        });
    }

    $(document).on('click','.play-icon', function(){
       $(this).addClass('hidden');
       $('.play-status .play-icon').removeClass('hidden');
       $(this).addClass('hidden');
		$('.play-status .pause-icon').addClass('hidden');
		var sounds = document.getElementsByTagName('audio');
		for(var i=0; i<sounds.length; i++) sounds[i].pause();
       $(this).closest('.play-status').find('.pause-icon').removeClass('hidden');
       var parent = $(this).closest('.single-listing').find('.audio audio');
       if(parent.length > 0) {
           parent[0].play();
       }
        parent = $(this).closest('.item').find('.audio audio');
        if(parent.length > 0) {
            parent[0].play();
        }
        parent = $(this).closest('.single-picture').find('.audio audio');
        if(parent.length > 0) {
            parent[0].play();
        }
    });

    $(document).on('click', '.pause-icon', function(){
        $(this).addClass('hidden');
        $(this).closest('.play-status').find('.play-icon').removeClass('hidden');
        var parent = $(this).closest('.single-listing').find('.audio audio');
        if(parent.length > 0) {
            parent[0].pause();
        }
        parent = $(this).closest('.item').find('.audio audio');
        if(parent.length > 0) {
            parent[0].pause();
        }
        parent = $(this).closest('.single-picture').find('.audio audio');
        if(parent.length > 0) {
            parent[0].pause();
        }
    });

    if($("#podcast-stuff-picks-carousel").length > 0) {
        $("#podcast-stuff-picks-carousel").owlCarousel({
            items: 2,
            lazyLoad: true,
            loop: true,
            margin: 10
        });
    }

    if($("#top-singer-carousel").length > 0) {
        $("#top-singer-carousel").owlCarousel({
            items: 2,
            lazyLoad: true,
            loop: true,
            margin: 10
        });
    }

    var owl = $('#favorite-station-carousel.owl-carousel');

    var options = {
        autoPlay:true,
        autoPlayInterval:2000,
        itemsMobile : [600,2]
    };

    $('.options-player').on('click', function(){
        $('.settings-container').removeClass('hidden');
        $('.loading-overlay').css('visibility','visible');
    });

    $('.cancel-btn').on('click', function(){
        $('.settings-container').addClass('hidden');
        $('.loading-overlay').css('visibility','hidden');
        $('.settings-start').removeClass('hidden');
        $('.add-country-start').addClass('hidden');
        $('.settings-add-country-start').removeClass('hidden');
        $('.settings-add-country').addClass('hidden');
        $('.settings-start-container').removeClass('hidden');
        $('.settings-add-country-choices').addClass('hidden');
        $('.settings-back-btn').addClass('visibility-hidden');
    });

    $('.settings-back-btn').on('click', function(){
        $('.settings-start').removeClass('hidden');
        $('.add-country-start').addClass('hidden');
        $('.settings-add-country-start').removeClass('hidden');
        $('.settings-add-country').addClass('hidden');
        $('.settings-start-container').removeClass('hidden');
        $('.settings-add-country-choices').addClass('hidden');
        $('.settings-back-btn').addClass('visibility-hidden');
    });

    if($("#favorite-station-carousel").length > 0) {
        $("#favorite-station-carousel").owlCarousel(options);
    }

    if($("#listen-to-what-you-want-carousel").length > 0) {
        $("#listen-to-what-you-want-carousel").owlCarousel(options);
    }

    if($("#recent-station-carousel").length > 0) {
        $("#recent-station-carousel").owlCarousel(options);
    }

    if($("#featured-podcast-carousel").length > 0) {
        $("#featured-podcast-carousel").owlCarousel(options);
    }

    if($("#classical-station-carousel").length > 0) {
        $("#classical-station-carousel").owlCarousel(options);
    }

    if($("#fantasy-football-podcast").length > 0) {
        $("#fantasy-football-podcast").owlCarousel(options);
    }

    owl.trigger('play.owl.autoplay',[1000]);

    $('.password-visibility').on('click', function() {
        var inputelement = $(this).closest('.input-group').find('input');
        if (inputelement.attr('type') == 'text') {
            inputelement.attr('type', 'password');
        } else {
            inputelement.attr('type', 'text');
        }
    });


    $('.fas.fa-star').on('mouseover', function(){
        var index = $(this).index();
        $(this).parent().find('.fas.fa-star').removeClass('active');
        for(var i=0;i<=index;i++){
            var star = $(this).parent().find('.fas.fa-star')[i];
            $(star).addClass('active');
        }
    });

    var starAmount = 0;
    $('.fas.fa-star').on('click', function(){
        var index = $(this).index();
        $(this).parent().find('.fas.fa-star').removeClass('active');
        starAmount = index+1;
        for(var i=0;i<=index;i++){
            var star = $(this).parent().find('.fas.fa-star')[i];
            $(star).addClass('active');
        }
    });

    $('.rating').on('mouseout', function(){
        $(this).find('.fas.fa-star').removeClass('active');
        if(starAmount>0){
            for(var i=0;i<starAmount;i++){
                var star = $(this).find('.fas.fa-star')[i];
                $(star).addClass('active');
            }
        }
        else{
            $('.fas.fa-star').removeClass('active');
        }
    });

    $('.tab-pills .title-text').on('click', function(){
       $('.tab-pills .title-text').removeClass('active');
       $(this).addClass('active');
       var activeClass = $(this).data('active-class');
        $('.tab-pill-container').addClass('hidden');
       $('.'+activeClass).removeClass('hidden').addClass('active');
    });

    $('.options').on('click', function(){
        $( '.options-container').fadeIn( "slow", function() {
            $('body').addClass('modal-open');
        });
    });

    $('.help-feedback').on('click', function(){
        $( '.options-container-1').fadeIn( "slow", function() {
            $('body').addClass('modal-open');
        });
    });

    $('.cancel-option').on('click', function(){
        checkModalOpen();
    });

    $('.add-country-btn').on('click', function(){
       $('.settings-start').addClass('hidden');
       $('.add-country-start').removeClass('hidden');
       $('.settings-add-country-start').addClass('hidden');
       $('.settings-add-country').removeClass('hidden');
       $('.settings-start-container').addClass('hidden');
       $('.settings-add-country-choices').removeClass('hidden');
       $('.settings-back-btn').removeClass('visibility-hidden');
    });

    $('.icon-heart').on('click',function () {
       $(this).addClass('hidden');
       $(this).parent().find('.icon-heart-filled').removeClass('hidden');
    });

    $('.icon-heart-filled').on('click',function () {
        $(this).addClass('hidden');
        $(this).parent().find('.icon-heart').removeClass('hidden');
    });

    function checkModalOpen(){
        if($('body.modal-open').length>0){
            $('.options-container').fadeOut('slow', function(){
                $('body').removeClass('modal-open');
            });
            $('.options-container-1').fadeOut('slow', function(){
                $('body').removeClass('modal-open');
            });
        }
    }

    if($('#draggable2').length > 0) {

        init();
        $("#draggable2").draggable({
            containment: "parent",
            axis: "x",
            stop: function (event, ui) {
                $('.AudioNext').trigger('click', false);
                enablePause();
            }
        });

    }

    if($('#audio4_html5_white').length > 0) {
        $('#audio4_html5_white').audio4_html5({
            playerWidth: 1200,
            skin: 'whiteControllers',
            initialVolume: 0.5,
            responsive: false,
            showPlaylistOnInit: false,
            showCategories: false,
            showSearchArea: false,
            autoPlay:true
        });
    }

    $('.hap-next-toggle').on('click', function(e, data){
       if(data!==false) {
           e.preventDefault();
           var position = $('#draggable2').position();
           var amountScrolled = $('.radio-channel-container').scrollLeft();
           if(position != undefined) {
               if (position.left >= 0) {
                   $('#draggable2').css('left', position.left + amountScrolled + 25 + 'px');
               } else {
                   $('#draggable2').css('left', 0);
               }
           }
       }
       enablePause();
    });

    $('.hap-prev-toggle').on('click', function(e, data){
        if(data!==false) {
            e.preventDefault();
            var position = $('#draggable2').position();
            var positionLeftOfLastItem = $('.short').last().position();
            var amountScrolled = $('.radio-channel-container').scrollLeft();
            if(position != undefined) {
                if (position.left >= 0) {
                    $('#draggable2').css('left', position.left + amountScrolled - 25 + 'px');
                } else {
                    $('#draggable2').css('left', positionLeftOfLastItem.left);
                }
            }
        }
        enablePause();
    });


    if($('#hap-wrapper').length > 0) {
        if($('.VolumeSlider').length>0){
            return;
        }

        var artistTitleSeparator = "</div><div class='icon-heart-container'><img src='../icons/heart-icon.svg' class='icon-heart'><img src='../icons/icon-heart-filled.svg' class='icon-heart-filled hidden'><img class='ml-3' src='../icons/vertical-dots-icon.svg'></div><div class='title'>";
        if($('.dark-v').length>0){
            artistTitleSeparator = "</div><div class='icon-heart-container'><img src='../icons/heart-icon-white.svg' class='icon-heart'><img src='../icons/icon-heart-filled.svg' class='icon-heart-filled hidden'><img class='ml-3' src='../icons/vertical-dots-icon-white.svg'></div><div class='title'>";
        }

        var settings = {
            instanceName:"artwork6",
            sourcePath:"",
            activePlaylist:"#playlist-audio1",
            activeItem:0,
            volume:0.5,
            autoPlay:false,
            preload:"auto",
            randomPlay:false,
            loopingOn:true,
            mediaEndAction:'next',
            soundCloudAppId:"",
            usePlaylistScroll:true,
            playlistScrollOrientation:"vertical",
            playlistScrollTheme:"minimal",
            facebookAppId:"",
            useNumbersInPlaylist: false,
            numberTitleSeparator: ".  ",
            artistTitleSeparator: artistTitleSeparator,
            playlistItemContent:"title,thumb, description"
        };

        var initialLoad = true;
        var hap_player = $("#hap-wrapper").on('clickPlaylistItem', function (e, data) {
            //called when new song has been requested, returns (instance, instanceName, counter)
            if (hap_player) hap_player.togglePlaylist();
        }).on('playlistStartLoad', function (e, data) {
            if(!initialLoad) {
                enablePause();
            }
            initialLoad = false;
            //called when new song has been requested, returns (instance, instanceName, counter)
            $('.hap-playlist-item').removeClass('hidden');
            $('.hap-playlist-item-selected').addClass('hidden');
            var thumbnailAddress = $('.hap-playlist-item-selected').data('thumb');
            $('.hap-playlist-item-selected').removeClass('hidden');
            $('.album-cover-container').html('<img src="' + thumbnailAddress + '">');
        }).on('playlistItemEnabled', function (e, data) {
            var thumbnailAddress = hap_player.getCurrMediaData().thumb;
            $('.album-cover-container').html('<img src="' + thumbnailAddress + '">');
            enablePause();
        }).on('soundEnd', function () {
            if ($('.hap-loop-toggle').data('status') == 1) {
                hap_player.previousMedia().playMedia();
                enablePause();
            }
        }).hap(settings);
        $('.hap-playlist-item-selected').addClass('hidden');
        var thumbnailAddress = $('.hap-playlist-item-selected').data('thumb');
        $('.album-cover-container').html('<img src="'+thumbnailAddress+'">');
        $('.hap-playlist-item-selected').removeClass('hidden');

        hap_player.togglePlaylist = function(){
            enablePause();
            var thumbnailAddress = $('.hap-playlist-item-selected').data('thumb');
            $('.album-cover-container').html('<img src="'+thumbnailAddress+'">');
            $('.hap-playlist-item-selected').removeClass('hidden');
            var playerHolder = $(this).find('.hap-player-holder'),
                playlistHolder = $(this).find('.hap-playlist-holder'),
                time = 350,
                openValue = playerHolder.height() - 70;

            if(!hap_player.playlistOpened){
                playerHolder.stop().animate({'top': openValue+'px'},{duration: time});
                playlistHolder.stop().animate({'top': 0+'px'},{duration: time});
            }else{
                playerHolder.stop().animate({'top': 0+'px'},{duration: time});
                playlistHolder.stop().animate({'top': -openValue+'px'},{duration: time});
            }
            hap_player.playlistOpened = !hap_player.playlistOpened;
        }

        $('.hap-random-toggle').on('click', function(){
            hap_player.sort('random');
            hap_player.nextMedia();
        });

        $('.hap-loop-toggle').on('click', function(){
            var dataStatus = $(this).attr('data-status');
            if(dataStatus == 0 || dataStatus == undefined ) {
                $($(this)[0]).attr('data-status', 1);
            }
            else{
                $($(this)[0]).attr('data-status', 0);
            }
        });
    }

    $('.selected-stations .single-listing').on('click', function(){
        $('.selected-stations .single-listing').removeClass('active');
        $(this).addClass('active');
    })

    $('.single-listing .play-status.close').on('click', function(){
        $(this).closest('.single-listing').remove();
    })

    if($('#awp-wrapper').length>0){

        var awp_player;

        var settings = {
            instanceName:"default4",
            sourcePath:"",
            playlistList:"#awp-playlist-list",
            activePlaylist:"playlist-audio1",
            activeItem:0,
            volume:0.5,
            autoPlay:true,
            drawWaveWithoutLoad:false,
            randomPlay:false,
            loopingOn:true,
            autoAdvanceToNextMedia:true,
            facebookAppId:"",
            mediaEndAction:"loop",
            soundCloudAppId:"",
            gDriveAppId:"",
            useKeyboardNavigationForPlayback:true,
            usePlaylistScroll:true,
            playlistScrollOrientation:"vertical",
            playlistScrollTheme:"light-thin",
            useDownload:true,
            useNumbersInPlaylist: true,
            numberTitleSeparator: ".  ",
            artistTitleSeparator: "</div><div class='icon-heart-container'><img src='../icons/heart-icon.svg'><img class='ml-3' src='../icons/vertical-dots-icon.svg'></div><div class='title'> ",
            playlistItemContent:"title,thumb, description",
            wavesurfer:{
                waveColor: '#D5D5D5',
                progressColor: '#FF8900',
                barWidth: 3,
                cursorColor: '#ffffff',
                cursorWidth: 1,
                height: 70,
                responsive:true,
                fillParent:true
            }
        };
        initialLoad = true;

        awp_player = $("#awp-wrapper").on('awpPlaylistStartLoad', function (e, data) {
            console.log("Are we here???");
            //called when new song has been requested, returns (instance, instanceName, counter)
        }).on('playlistItemEnabled', function (e, data) {
            console.log("Are we heere theeeeeen???");
            enablePause();
        }).on('soundEnd', function () {
            console.log("Where he fuck are we ??");
            if ($('.hap-loop-toggle').data('status') == 1) {
                hap_player.previousMedia().playMedia();
                enablePause();
            }
        }).on('awpPlaylistEndLoad', function(){
            console.log("Are we here?");
        }).awp(settings);

        $('.awp-random-toggle').on('click', function(){
            awp_player.sort('random');
            awp_player.nextMedia();
        });

        $('.awp-next-toggle').on('click', function(){
            awp_player.nextMedia();
            enablePause();
        });

        $('.awp-previous-toggle').on('click', function(){
            awp_player.previousMedia();
            enablePause();
        });

        $('.awp-loop-toggle').on('click', function(){
            var dataStatus = $(this).attr('data-status');
            if(dataStatus == 0 || dataStatus == undefined ) {
                $($(this)[0]).attr('data-status', 1);
            }
            else{
                $($(this)[0]).attr('data-status', 0);
            }
        });

    }

    $('.menu-open').on('click',function(){
        var main_menu = $('.main-menu');
        main_menu.toggleClass('hidden-soft');
        $(this).toggleClass('closed');
        if($(this).hasClass('closed')) {
            main_menu.css('display','block').animate({
                width: "toggle"
            }, 300);
        }
        else {
            main_menu.css('display','block').hide().animate({
                width: "toggle"
            }, 300);
        }
        $('.loading-overlay').css('visibility','visible');
    });

    $('.menu-close').on('click', function(){
        var main_menu = $('.main-menu');
        main_menu.hide().css('display','block').animate({
            width: "toggle"
        }, 300);
        $('.menu-open').addClass('closed');
        $('.loading-overlay').css('visibility','hidden');
    });

    function touchHandler(event) {
        var touch = event.changedTouches[0];

        var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            }[event.type], true, true, window, 1,
            touch.screenX, touch.screenY,
            touch.clientX, touch.clientY, false,
            false, false, false, 0, null);

        touch.target.dispatchEvent(simulatedEvent);
    }

    function init() {
        document.addEventListener("touchstart", touchHandler, true);
        document.addEventListener("touchmove", touchHandler, true);
        document.addEventListener("touchend", touchHandler, true);
        document.addEventListener("touchcancel", touchHandler, true);
    }

});

function wave(){
    var wave = new Wave('.waves', {
        border: {
            show: true,
            width: 2,
            color: ['#D0BB9E', '#FFEACE', '#FF9500'],
        },
        number: 3,
        smooth: 50,
        velocity: 1,
        height: 0.3,
        opacity: 0,
        position: 'bottom'
    });
    wave.animate();
}

function enablePause(){
    $('.icon-same-height.play-icon').addClass('hidden');
    $('.icon-same-height.pause-icon').removeClass('hidden');
}
