function show_date_time() {
    window.setTimeout("show_date_time()", 1000);
    var BirthDay = new Date("01/03/2020 00:00:01"); //初始时间
    var today = new Date();
    var timeold = (today.getTime() - BirthDay.getTime());
    var sectimeold = timeold / 1000;
    var secondsold = Math.floor(sectimeold);
    var msPerDay = 24 * 60 * 60 * 1000;
    var e_daysold = timeold / msPerDay;
    var daysold = Math.floor(e_daysold);
    var e_hrsold = (e_daysold - daysold) * 24;
    var hrsold = Math.floor(e_hrsold);
    var e_minsold = (e_hrsold - hrsold) * 60;
    var minsold = Math.floor((e_hrsold - hrsold) * 60);
    var seconds = Math.floor((e_minsold - minsold) * 60);
    document.getElementById("show_date_time").innerHTML = "本站已运行" + daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
}
show_date_time()