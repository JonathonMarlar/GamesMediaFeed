function feedSet(platform) {
    if ( $(window).width() < 768 )
        $('.navbar-toggle').click(); // collapse navbar if on mobile
    $('#content').children().fadeOut(300).delay(400);
    getFeeds(platform);
    $(platform).fadeIn(300);
}

function getFeeds(platform) {
    if (platform == "#platX") {
        $('#joystiqXbox').rssfeed('http://www.joystiq.com/xbox/rss.xml', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('#redditXbox').rssfeed('http://www.reddit.com/r/xboxone/.rss', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('#ignXbox').rssfeed('http://feeds.ign.com/IGNXboxOneArticles', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('#totalXbox').rssfeed('http://www.totalxbox.com/rss/feed.php?priority=1&limit=10', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('#xboxWire').rssfeed('http://news.xbox.com/feed/stories', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('.navbar').css('box-shadow', '0 2px 10px green');
        $('.navbar-brand').text('Xbox');
    }
    else if (platform == "#platPS") {
        $('#joystiqPS').rssfeed('http://www.joystiq.com/ps3/rss.xml', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('#redditPS').rssfeed('http://www.reddit.com/r/PS4/.rss', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('#psBlog').rssfeed('http://cdn.us.playstation.com/pscomauth/groups/public/documents/webasset/rss/playstation/Games_PS4.rss', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('#ignPS').rssfeed('http://feeds.ign.com/IGNPS4Articles', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('.navbar').css('box-shadow', '0 2px 10px blue');
        $('.navbar-brand').text('PlayStation');
    }
    else if (platform == "#platN") {
        $('#ninLife').rssfeed('http://www.nintendolife.com/feeds/news', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('#redditN').rssfeed('http://www.reddit.com/r/nintendo/.rss', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('#joystiqWiiU').rssfeed('http://www.joystiq.com/wii-u/rss.xml', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('#joystiq3DS').rssfeed('http://www.joystiq.com/3ds/rss.xml', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('#ignWii').rssfeed('http://feeds.ign.com/ign/wii-u-articles', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('.navbar').css('box-shadow', '0 2px 10px lightblue');
        $('.navbar-brand').text('Nintendo');
    }
    else if (platform == "#platPC") {
        $('#pcGamer').rssfeed('http://www.pcgamer.com/feed/rss2/', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('#redditPC').rssfeed('http://www.reddit.com/r/pcgaming/.rss', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('#joystiqPC').rssfeed('http://www.joystiq.com/pc/rss.xml', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('#tomsHardware').rssfeed('http://www.tomshardware.com/feeds/rss2/articles.xml', {
            limit: 5,
            header: false,
            dateformat: "date"
        });
        $('.navbar').css('box-shadow', '0 2px 10px red');
        $('.navbar-brand').text('Computers');
    }
}