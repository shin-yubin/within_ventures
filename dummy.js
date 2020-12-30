onLeave: function () { jQuery(
    '.section [data-aos]'
    ).removeClass('aos-animate'); },
    onSlideLeave: function () {
    jQuery( '.slide [data-aos]'
    ).removeClass('aos-animate'); },
    afterSlideLoad: function () {
    jQuery( '.slide.active [data-aos]'
    ).addClass('aos-animate'); },
    afterLoad: function () { jQuery(
    '.section.active [data-aos]'
    ).addClass('aos-animate');
    //jQuery('.fp-table.active
    .aos-init').addClass('aos-animate');
    }, }); new fullpage('#fullpage', {
    afterRender: function () { var
    pluginContainer = this; alert(
    'The resulting DOM structure is
    ready' ); }, });
    $('a[href^="#"]').click( function
    () { var the_id = $(this).attr(
    'href' ); $('html, body').animate(
    { scrollTop: $( the_id
    ).offset().top, }, 'slow' );
    return false; } );


    AOS.init(); AOS.init({ duration:
        1000, offset: 120, easing:
        'ease-in-out', }); 
        new fullpage('.fullpage', {
        //.............................................
        //....Your other options....
        //..............................................
        onLeave: function () { jQuery(
        '.section [data-aos]'
        ).removeClass('aos-animate'); },
        onSlideLeave: function () {
        jQuery( '.slide [data-aos]'
        ).removeClass('aos-animate'); },
        afterSlideLoad: function () {
        jQuery( '.slide.active [data-aos]'
        ).addClass('aos-animate'); },
        afterLoad: function () { jQuery(
        '.section.active [data-aos]'
        ).addClass('aos-animate');
        //jQuery('.fp-table.active
        .aos-init').addClass('aos-animate');
        }, }); new fullpage('#fullpage', {
        afterRender: function () { var
        pluginContainer = this; alert(
        'The resulting DOM structure is
        ready' ); }, });
        $('a[href^="#"]').click( function
        () { var the_id = $(this).attr(
        'href' ); $('html, body').animate(
        { scrollTop: $( the_id
        ).offset().top, }, 'slow' );
        return false; } );