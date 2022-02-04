***Common***
============

- [ ] add widgets folder
- [ ] edit-palette-form to widget
- [ ] palette-content-list & color-content-list to widget
- [ ] add dark theme
- [ ] add localStorage support to store app state
` `  
` `  
` `  
` `  

***Pages***
===========

### EDIT-PALETTE
- [ ] change home to root
- [ ] fix emoji-picker
- [ ] validate form in component (clear reducer)
- [ ] style palette view with respect to its colors quantity
- [ ] add mobile
- [x] ~~edit-palette-name-form~~
- [x] ~~edit-palette header~~

### PALETTE
- [ ] display color names on mouse hover
- [ ] restyle color subpage

### HOME
- [ ] create-palette-link fix hover effect
` `  
` `  
` `  
` `  

***Assets***
============

### COLOR-PICKER
- [ ] hue: calc origin from width/height only —> calc pointer angle from offsetX/Y
- [ ] hue: animation via keyframes with respect to direction setted by:

  ```js
  const delta = pointer - PREV.pointer
  const sign = Math.sign(delta)
  const dir = Math.abs(delta) < 180 ? -1 * sign : 1 * sign
  const duration = delta / 90 + 0.2
  ```
  and the run build

### BUTTON
- [x] ~~add idle style type~~