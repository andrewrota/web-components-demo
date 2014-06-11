(function() {
    'use strict';
    var myTemplate = document.getElementById('template');
    var host = document.getElementById('host');
    var shadow = host.webkitCreateShadowRoot();
    shadow.appendChild(myTemplate.content.cloneNode(true));
}());