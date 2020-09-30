const topText = document.getElementById("hide");

function hideScrollBtn(scrollTop) {
    //スクロールボタンを隠す関数
    if (scrollTop > 300) {
        topBtn.classList.remove("hide");
    } else {
        topBtn.classList.add("hide");
    }
}

window.addEventListener("load", () => {
    topText.classList.remove("hide");
});

window.addEventListener("scroll", () => {
    let scrollTop = document.scrollingElement.scrollTop;
    hideScrollBtn(scrollTop);
});

$(function() {
    // スムーススクロール
    $('a[href^="#"]').click(function() {
        let header = $(".header").innerHeight();
        let speed = 300;
        let id = $(this).attr("href");
        let target = $("#" == id ? "html" : id);
        let position = $(target).offset().top - header;
        if ("fixed" !== $(".header").css("position")) {
            position = $(target).offset().top;
        }
        if (0 > position) {
            position = 0;
        }
        $("html, body").animate({
                scrollTop: position
            },
            speed
        );
        return false;
    });

    // スクロール判定
    $(window).on("scroll", function() {

        if (100 < $(this).scrollTop()) {
            $('.totop').addClass('is-show');
        } else {
            $('.totop').removeClass('is-show');
        }
    });
});

const today=document.getElementById("nowDate")
const now = new Date();
today.textContent = `${now.getFullYear()}年${now.getMonth()+1}月`;