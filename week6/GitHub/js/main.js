(function (window, document) {
    //스크립트 선언문?
    'use strict';

    const $toggles = document.querySelectorAll('.toggle'); // Return NodeList -> 유사 배열
    const $toggleBtn = document.getElementById('toggle-btn'); // Return Element
    
    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    //window -> 브라우저
    //resize -> 뷰포트 사이즈
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            offElements();
        }
    });

    function toggleElements() {
        //[] -> 빈 배열
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document);