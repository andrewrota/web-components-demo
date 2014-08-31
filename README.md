# Web Components Demo

Experimenting with some of the features of web components, shadow DOM, etc. 

## Install

Run `bower install`

### Requirements

* Node
* Bower

## Notes

### API

#### Creating a Shadow Root

Use `hostElement.createShadowRoot()` where `hostElement` is a DOM element.

#### Accessing a Shadow Root

Use `hostElement.shadowRoot` where `hostElement` is a DOM element with a shadow root.

### @Todo

* Create demo web component UI library

## Resources

Best Practices
* [Ten Principles for Great General Purpose Web Components](https://github.com/basic-web-components/components-dev/wiki/Ten-Principles-for-Great-General-Purpose-Web-Components)

Browser Support
* [Jon Rimmer's Are We Componentized Yet](http://jonrimmer.github.io/are-we-componentized-yet/)

Most of the examples in the demos are not mine; I'm building them based on the examples and code in the following excellent resources:

* [Eric Bidelman's \<web\>components\</web\>](http://html5-demos.appspot.com/static/webcomponents/index.html)
* [Peter Gasston's Web Components: Getting Started](https://speakerdeck.com/stopsatgreen/web-components-getting-started)
