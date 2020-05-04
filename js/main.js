$(document).ready(function(){
   
    $('#pdfViewer').attr("src","http://docs.google.com/viewer?url=http://mibesharam.github.io/v-93.pdf&embedded=true");
    var h = $('#imageContainer').height();
    $('#pdfViewer').height(h);
    var v = $('#videoPlayer').get(0);
    console.log(v.paused);
});