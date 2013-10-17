(function() {
    'use strict';
    var host = document.getElementById('host');
    var shadow = host.webkitCreateShadowRoot();
    shadow.innerHTML += '<style>h1,h3 { margin: 0; color: blue; text-align: center;}</style>';
    shadow.innerHTML += '<h3>My name is </h3><h1><content select="h1"></content></h1>';
    shadow.innerHTML += '<p>This is the shadow DOM</p>';
}());
(function() {
  var shadow = document.getElementById('host').webkitShadowRoot;
  var shadowParagraph = shadow.querySelector('p');
  shadowParagraph.innerHTML += '...and JS can add to this element from the outside document using <code>webkitShadowRoot</code>';
}());