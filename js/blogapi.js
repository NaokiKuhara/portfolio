$(function () {
    $.ajax({
        type: "GET",
        url: "https://naoki-k-blog.com/wp-json/wp/v2/posts/",
        dataType: "json",
    })
        .done(function (json) {
            let html = "";
            //記事の件数分イテレートする
            $.each(json, function (i, row) {
                //ブログの投稿日
                let date = new Date(row.date);
                let postDate = date.toLocaleDateString()

                //ブログのタイトル
                let title = row.title.rendered;
                //ブログのURL
                let link = row.link;

                html += '<article class="wp-article">';
                html += '<p>' + postDate +'</p>'
                html += '<h3><a href="' + link + '">' + title + "</a></h3>";
                html += "</article>";
            });
            //整形した記事の情報をページに追加する
            $("#wordpress_blog").append(html);
        })
        .fail(function (json) {
            console.error("WordPressのブログ記事取得に失敗しました。");
        });
});
