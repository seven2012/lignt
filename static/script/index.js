
$('.player').on('click', function () {
    // console.log('play')
    $('#video').css('left', '50%').css('opacity', '1')
    $('.closed').css('opacity', '1')


    $('#video').hover(function () {
        $('#video')[0].play() // play() 和 pause() 是HTML5中video自带的API函数，哈哈，方便吧？
    }, function () {
        $('#video')[0].pause()
    })


})
$('.closed').on('click', function () {
    $('#video').css('left', '-100%').css('opacity', '1')
    $('.closed').css('opacity', '0')
    $('#video')[0].pause()
    $('#video')[0].load()
})