<script type="text/javascript" >
    $('.ui.sticky').sticky();

    $('#contact-button-card').click(function () {
        $('#modal-contact-me')
        .modal('setting', 'transition', 'vertical flip')
        .modal('show');
    });

    $(document).foundation();

    setInterval(function () {
        $('.ui.grid .sixteen.wide.column .ui.three.stackable.cards .card').transition({
            animation: 'tada',
            duration: 1000,
            interval: 200
        });
    }, 1000 * 15);

    setInterval(function () {
        $('.ui.grid .sixteen.wide.column .ui.four.stackable.cards .card').transition({
            animation: 'jiggle',
            duration: 800,
            interval: 200
        });
    }, 1000 * 7);
</script>