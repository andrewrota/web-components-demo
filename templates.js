(function() {
    'use strict';
    var myTemplate = document.getElementById('template');
    var host = document.getElementById('host');
    var shadow = host.createShadowRoot();
    shadow.appendChild(myTemplate.content.cloneNode(true));
}());