# Sofrito
A savoury front-end base with advanced typographic, layout, performance and build ingredients.

## Updates required when using in production
- Open up to search engine indexing as appropriate. Sticking with the default robots.txt and "noindex, nofollow" values will cause the entire site to be blocked from search engines.
- To lower file size you might want to remove some of the HTML comments that I put there just to remind me why I’m doing certain things.

## Gulp-based build system

- cache-busting (when necessary) by adding package version number to end of JS and CSS files.

## Mobile First and Responsive
- Sass mixins

## HTML: lean, semantic and structural

<dl>
  <dt>`details` elements for disclosure.</dt>
  <dd>
  Native show/hide control. Click on the summary element to reveal the contents. Baseline for no support is that the content is shown, so this represents a sensible progressive enhancement. However a polyfill for Internet Explorer included too (https://github.com/javan/details-element-polyfill). Styles to change the summary arrow also included.</dd>
  <dt>Forms</dt>
  <dd>
  </dd>
  <dt>Tables</dt>
  <dd>
  </dd>
</dl>



### Layout containers (from in to out)

<dl>
  <dt>`.prose`</dt>
  <dd>Innermost container around flowing prose. Its width will not exceed our maximum comfortable reading measure.</dd>

  <dt>`#primary-content`</dt>
  <dd>Wraps .prose elements and any other primary content. In a single–column layout its width will be the widest we want our column to go. `.prose` will be left- or centre-aligned within.</dd>

  <dt>`.container`</dt>
  <dd>A wrapper for the #primary-content (and secondary if exists) to provide an additional layout (row) and styling context.</dd>
</dl>

### Accessibility

- Skip Links navigation
- `aria-label` applied to elements which do not have a visible label (such as navigation: both skip-links and main menu)

## A good &lt;head&gt; start
- `lang` declared. This can affect the way CSS layout is handled.
- asd


## “Greedy” (BBC-style) Mobile Navigation


## CSS
- Sass-based
- Print styles included
- @viewport { width: device-width; } because in will eventually replace the viewport meta tag

### Opionated stuff
- Please DO zoom text on rotate. html { -webkit-text-size-adjust: auto; } (Tim Brown, contrary to advice of normalise.css) 

### Polyfills
Via polyfill.io.

## Lightweight Analytics
Using minimal analytics snippet.

## Cookie Consent (covering EU cookie Law)
- Integrates https://cookieconsent.insites.com/


## Credits
This project is inspired by and or adapts elements of the following:
- https://github.com/h5bp/html5-boilerplate
- https://github.com/cferdinandi/gulp-boilerplate
- https://github.com/cferdinandi/houdini
- https://cferdinandi.github.io/kraken/
- https://github.com/filamentgroup/formcore
- https://www.filamentgroup.com/lab/select-css.html
- https://inclusive-components.design/data-tables/

## License
The code is available under the MIT License.
