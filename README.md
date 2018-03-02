# Tiny JS Modal

A featherweight (996 byte) modal library based on this css only modal: https://void--.github.io/tiny-css-modal which was in turn based on this codepen https://codepen.io/timothylong/pen/HhAer by Timothy Long (Thanks Tim!)

Check it out here: https://void--.github.io/tiny-js-modal/

## Why?

This library adds a few nice little animations and UX improvements to the css only version. Basic idea is the same though: a very simple very lightweight modal that just does what it's supposed to and nothing more.

## How?

To use simply

`npm install tiny-js-modal`

add a link the minified css in your html head

`<link rel="stylesheet" href="node_modules/tiny-js-modal/dist/tiny-js-modal.min.css">`

put the script tag before your closing body tag

`<script src="node_modules/tiny-js-modal/dist/tiny-js-modal.min.js">`

add the following markup to any page where you want a modal:

```
<div id="tjm" class="tjm">
  <div  class="tjm-c">
    <span onclick="tjmClose()" onKeyPress="tjmClose()" title="Close" class="tjm-cb" role="button" tabindex="0">Close</span>
    <!-- Your content goes here -->
  </div>
</div>
```

and finally, add a button somewhere on the page to open the modal:

`<span role="button" tabindex="0" class="btn" onclick="tjmOpen()" onKeyPress="tjmOpen()"><!-- Your text here --></span>`

Or use the open (`tjmOpen()`) and close (`tjmClose()`) functions directly in your javascript.
