# Sofrito

TO DO:

When preparing the Github demo page (in the gh-pages branch):

- index.html and any other HTML pages:
  - need any changes to header, footer etc brought in. Maybe just copy in a page from /dist?
  - refs to static assets need to be dist/assets/css/main_v0.0.1.min.css whereas in a real page we wouldn’t have the dist part
- favicon and sitemanifest
  - both paths need prefixed with dist/
- *.min.css 
  - refs /assets need to be /sofrito/dist/assets whereas in a real page we wouldn’t have the /sofrito/dist part



- could handle the above in a different/separate build step?
- or with more simple find and replace?









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
- `dir`, `lang`, `charset`. Charset declared within first 127 chars (first byte) so that browsers see it early – improves performance. `lang` and `dir` provide accessibility and CSS benefits.



## “Greedy” (BBC-style) Mobile Navigation


## CSS
- Sass-based
- Print styles included
- @viewport { width: device-width; } ("CSS Device Adaptation") - We’ve built a flexible layout. Make sure readers see our composition at its actual size on any device, without any artificial scaling, while maintaining their ability to zoom in if they want to. Tell the browser to fit the width of our layout to the width of a person’s device. This makes text actual-size, instead of scaling it to match a specific pixel-based width. This is not supported in all browsers yet, though, so we also use an HTML meta tag that accomplishes the same thing.
- Relative font sizes
-- user has control
- whole pixel font size because discovered that Safari is buggy with a subpixel root font size
- avoids text-size-adjust entirely. It can cause serious accessibility problems, it is sometimes overridden by viewport settings, and browser implementation is inconsistent right now.
- body text uses:
-- proportional oldstyle figures (lowercase numerals designed for text, not tables).


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


---------------------

ReadMe / ToDo

A website starting point.
Best practices.
Tricky challenges met, including annoying stuff that designers always ask for ;-)

Philosophies
- Generally keeping presentation and structure separate.
- Prog-En. (not 'fallbacks')
- Mobile First
- Obvious Always Wins - get higher usage by not hiding important actions or links.



Type
  Less focus requires more contrast
  ToDo:
    - Check out Stein’s Webfont Handbook for details on various optimization techniques like font subsetting, conditional loading with unicode-range, reduced requests with browser caching, and asynchronous loading with the CSS Font Loading API.

site.webmanifest
  - This informs details for websites installed on the homescreen of a device, providing users with quicker access and a richer experience.
ToDo:
  - icons https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML

Reslience
  - serviceworker
Performance
  - serviceworker
Normalize.css?
Sticky footer?
Typography: scale (not fluid)
Layout
Media group layout: if you’re going more than one-across (i.e. because of a single-col layout), stack the elements vertically per gov.uk and aneventapart
sections with full-width backgrounds
  - repeating SVG background on body like https://ethanmarcotte.com/? Sections could layer linear-gradient backgrounds on top?  
CSS buttons
  - CF: "The .disabled class for buttons was removed in favor of the [disabled] attribute."
.a11y-only class
  - CF: "The .screen-reader class was renamed .visually-hidden to be consistent with industry norms"
  - I prefer a11y-only as per Mat Marquis.
.btn-secondary changes the color and .btn-large changes the size. A big button with secondary colors would look like this:
rev filenames (ideally automated)
Navigation (https://justuxdesign.com/blog/8-awesome-examples-of-mobile-navigation-on-responsive-websites)
  - gov.uk style search-only in header followed by in-page navigation?
  - Never more than X items? (I like this principle ("enforce leanness") and it should be a goal, but can be out of your control)
  - Footer
    – at footer-top?
    - at footer-top with "menu" anchor in header?
  - Top
    - hidden behind "menu" button?
    - horizontal?
    - top-right and vertical?
  - BBC-style "greedy navigation" with "more" item to handle secondary items beyond X? (like this if it can be optional. Baseline: 'more' links to sitemap/#more or #footer-more)
    - useful when there needs to be more navigation than can fit in a single bar.
    - means the nav jumps a little. As BBC does.
    - Note: 
      - my idea was that we have the "more" and a proper menu in the source as a baseline.
      - BBC approach, however, is:
        - all "main nav bar" items are in the source with "more" last. orb-panels div is empty. 
        - w/o JS nav items are display:none except "more" which links to footer nav.
        - with JS, some items are unhidden while others are given class orb-nav-hide. Orb panel is populated with ALL nav items. Ones already shown above are set to display:none.
        - tapping/clicking "more" reveals orb panel via transition on height from 0 to 128px. 
        - So there is duplication, but they don’t seem to mind and use display:none i.e. hide from everyone inc screenreaders presumably because the content is available elsewhere
    - or switch "components" (RESS)?
  - header and nav two rows on mobile but one row on wide?
Dropdown navigation? (with transition e.g. height like BBC?)
footer
  - prob useful/good to mirror everything that main nav has, plus more if you want.  
<button class="btn btn-secondary btn-large">A Big Button</button>
table styling
  - do interesting stuff per web typography book?
  - CF in Kraken "CSS-only responsive tables had accessibility issues and were removed." – might want to check his table code to get a11y nuggets.
sourcemaps because I believe in reverse engineering as a learning tool
forms
search
utilities – hiding?
Accessibility
  - NB CF Kraken "An accessibility bugfix was added for unstyled and inline lists."
Progressive Enhancement
Mobile-First. Single-column. Enhanced by grid.
  - CF: "Kraken works in all browsers, but it's optimized for browsers that support Flexbox. That includes all modern browsers, and IE 11 and above."
Older browsers will receive a more basic experience, including a single-column layout instead of a grid.

Kraken is built mobile-first. Base layout = single column. @supports grid
Lighthouse score.
Object-Oriented CSS. Kraken takes an OOCSS approach to web development. Throughout the stylesheet, you'll see base styles and modifying styles. Classes can be mixed, matched and reused throughout a project.
SVG
  when background? with sprite? Prog-enh from PNG?
  when inline? (CF Kraken "SVG sprite styles were removed in favor of inline SVGs.")
No presentational naming – I’m probably old-fashioned.
OOCSS?
Blog
- code highlighting (prism lea verou)
Sass
  vars?
  mixins? (CF removed them)
  extend?
Rems and Ems 
Reconciling a sensible measure with a sensible "content layout width". Prob go for left-align the measure although can centre like did on WW.
Polyfilling approach
Some developer convenience
  - Browsersync
Smooth Scroll? https://gomakethings.com/smooth-scrolling-links-with-only-css/

TODO:
- CDN? and/or HTTP2?
- variable fonts? Is provided with source sans!




