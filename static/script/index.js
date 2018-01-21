

$('.player').on('click', function () {
    $('#video').css('left', '50%').css('opacity', '1')
    $('.closed').css('opacity', '1')
    $('#video')[0].play()  
    $('#video').click(function () {    
        if (this.paused == false) {
            this.pause();     
        } else {
            this.play();
            
        }
    })
})

$('.closed').on('click', function () {
    $('#video').css('left', '-100%').css('opacity', '1')
    $('.closed').css('opacity', '0')
    $('#video')[0].pause()
    $('#video')[0].load()
});




