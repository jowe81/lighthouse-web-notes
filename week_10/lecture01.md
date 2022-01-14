# Responsive Design: Charlotte

* vw/vh: percent of viewport
* percentages: apply to parent element
  * note that height % only works if parent element has a definite height
* em: relative to font size of parent element. 1em = font-size of parent element
* rem: relative to font size of top most parent element (html). Used instead of pixel/em/percentage
* max-width, min-width: don't shrink or grow past value

* Vscode go to line#: CTRL+G

# Flexbox
* ```display:flex``` will make the element fill out the available width AND height
* ```display:block``` will make the element fill out the available width only


# SASS/SCSS
* "Syntactically Awesome Style Sheets" (SASS)
* "Sassy CSS" (SCSS)
* iTerm (terminal app) lets you put multiple terminals side-by-side
* ```npm install sass```
* scripts: 
```json
"scripts" :{
  "sass": "sass index.scss styles.css --no-source-map",
  "sass-watch": "sass --watch index.scss styles.css --no-source-map"
}
```
* nesting: convention is not to go beyond 3 levels
* declare a variable ```$variablename: value```
* naming convention: other scss files than index.scss use _partial.scss (underscore)
* import another scss file: ```@import '_partial.css'```
* _mixin_: Style function

Syntax:
```css
/* Known as style function */
@mixin mixin-name

@mixin add-underline($decoration, $color, $style) {
  text-decoration: $decoration;
  text-decoration-color: $color;
  text-decoration-style: $style;
}
```

Use the mixin:
```css

.classrule {
  @include add-underline(underline, red, double);
  color: green;
}

```
* BEM convention: Block Element Modifier