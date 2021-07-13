$(document).ready(function () {

    //$('.gnb > ul').css('display','list-item'); 토글 클릭시 메뉴 나오게
    $('.toggle').click(function () {
        $('.gnb > ul').slideToggle();
    });

    //뉴스 슬라이드 구현 슬라이드의 3번째를 1번의 앞으로 이동한다.
    $('.news_wrap li:last-child').insertBefore('.news_wrap li:first-child');
    //3번이 1번의 앞으로 오면서 뒤로 1칸씩 밀리기 때문에 왼쪽으로 1칸 이동한다.
    $('.news_wrap').css('margin-left', '-100%');

    //왼쪽으로 움직이는 함수
    function moveLeft() {
        $('.news_wrap').animate({
            'margin-left': '0'
        }, 500, function () {
            $('.news_wrap > li:last-child').insertBefore('.news_wrap > li:first-child');
            $('.news_wrap').css('margin-left', '-100%');
        });
    }

    //오른쪽으로 움직이는 함수
    function moveRight() {
        $('.news_wrap').animate({
            'margin-left': '-200%'
        }, 500, function () {
            $('.news_wrap > li:first-child').insertAfter('.news_wrap > li:last-child');
            $('.news_wrap').css('margin-left', '-100%');
        });
    }

    // moveLeft();

    var Timer2 = setInterval(moveLeft, 3000);

    //좌, 우 방향버튼에 마우스 오버시 시간제거하여 멈추게하고, 마우스 아웃시 시간을 넣어서 움직이게 한다.
    $('.news i.fas').hover(function () {
        clearInterval(Timer2);
    }, function () {
        Timer2 = setInterval(moveLeft, 3000);
    });

    //좌측방향 버튼 클릭시 슬라이드 좌측으로 움직이게
    $('.news i.fa-chevron-circle-left').click(function () {
        moveLeft();
    });
    //우측방향 버튼 클릭시 슬라이드 우측으로 움직이게
    $('.news i.fa-chevron-circle-right').click(function () {
        moveRight();
    });

    // let slide = $('.release>div');  $('.release >
    // figure:last-child').insertBefore('.release > figure:firstt-child');
    // slide.css('margin-left', '-100%');  움직이는 함수  function moveLeft() {
    // slide.animate({'margin-left': '-200%'}, 500, function() {
    // $('.release > figure:first-child').insertAfter('.release >
    // figure:last-child');          slide.css('margin-left', '-100%');      });  }
    // var Timer = setInterval(moveLeft, 3000);

});