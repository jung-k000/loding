// ADRA 로딩화면 - 기본 버전
//
// ⓒ 2019. AlDeRAn All rights reserved.
// 저작자: AlDeRAn(https://steamcommunity.com/profiles/76561198128012369/)
$(function() {
    $("body").attr('onload', 'onbody()');
    $("body").append("<audio id=\"l_audio\" onended=\"on_a_embed()\"></audio>");
    $("body").append("<video id=\"l_video\" onended=\"on_v_embed()\"></video>");
    $("body").append("<div id=\"overlay\"></div>");
    $("body").append("<div id=\"logo\"><img><info></info></div>");
    $("status").html(text.load_start); 
    if (logo && logo != "") {
        $('#logo img').attr('src', "images/logo/"+logo);
    } else {
        server_info = "";
    }
    GameDetails(null, null, null, null, 76561197960265728, null);
});

function SetStatusChanged ( status ) {
    if (status == "Starting Lua...") return $('status').html(text.load_end);
    $('status').html(status);
}

function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode ) {
    if (server_info && server_info != "") {
        var server_info_html = text.server_info_t;
        var set = [];
        for (var i = 0; i < server_info.length; i++) {
            set[i] = server_info.charAt(i);
        }
        for (var i in set) {
            if (set[i] == 'm') {
                server_info_html += text.server_info_m.format(mapname);
            } if (set[i] == 'n') {
                server_info_html += text.server_info_n.format(servername);
            } if (set[i] == 'g') {
                server_info_html += text.server_info_g.format(gamemode);
            } if (set[i] == 's') {
                server_info_html += playerinfo(steamid);
            }
        }
        $("#logo info").html(server_info_html);
    }
}

function playerinfo(sid) {
    var say = String(sid);
    say = Number(say.substring(1));
    var y = say - 6561197960265728;
    var x = say % 2;
    y = parseInt((y - x) / 2);
    return text.server_info_s.format(x, y);
}

var audio, video;
var a_i = 0, v_i = 0;

function onbody() {
    if (play_type == "a") {
        img();
        audio = document.getElementById('l_audio');
        audio_list = random(audio_list);
        audio.setAttribute("src", "music/"+audio_list[a_i]);
        audio.play();
        audio.volume = audio_volume;
    } else if (play_type == "v") {
        video = document.getElementById('l_video');
        video_list = random(video_list);
        video.setAttribute("src", "video/"+video_list[v_i]+".webm");
        video.play();
        video.volume = video_volume;
    } else {
        play_type = 'a';
        onbody()
    }
}

function on_a_embed() {
    if (a_i < audio_list.length - 1) {
        a_i++;
    } else {
        a_i = 0;
    }
    audio.setAttribute("src", "music/"+audio_list[a_i]);
    audio.play();
    audio.volume = audio_volume;
}

function on_v_embed() {
    if (v_i < video_list.length - 1) {
        v_i++;
    } else {
        v_i = 0;
    }
    video.setAttribute("src", "video/"+video_list[v_i]+".webm");
    video.play();
    video.volume = video_volume;
}

function img() {
    for (var i = 0; i < img_list.length; i++) {
        img_list[i] = 'images/' + img_list[i];
    }
    img_list = random(img_list);
    $.backstretch(img_list, {fade: img_fade, duration: img_duration});
}

function random(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}

String.prototype.format = function() {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};