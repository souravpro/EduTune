jQuery(document).ready(function($){
    $(".video-btn").magnificPopup({
        type: 'video'
    })

    $('#map').gmap3({
        address: "Haltern am See, Weseler Str. 151",
        zoom: 6,
        mapTypeId : google.maps.MapTypeId.ROADMAP
      });
});