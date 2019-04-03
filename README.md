# sofrito
A savoury front-end base with advanced typographic, layout, performance and build ingredients.

## Gulp-based build system

## “Greedy” (BBC-style) Mobile Navigation

## HTML: lean, semantic and structural

### Layout containers (from in to out)

<dl>`.prose`/dl>
<dd>Innermost container around flowing prose. Its width will not exceed our maximum comfortable reading measure.</dd>

<dl>`#primary-content`</dl>
<dd>Wraps .prose elements and any other primary content. In a single–column layout its width will be the widest we want our column to go. `.prose` will be left- or centre-aligned within.</dd>

<dl>`.container`</dl>
<dd>A wrapper for the #primary-content (and secondary if exists) to provide an additional layout (row) and styling context.</dd>

### Accessibility

- Skip Links navigation
- `aria-label` applied to elements which do not have a visible label such as navigation (skip-links and main menu)

## Lightweight Analytics
Using minimal analytics snippet.

## Updates required when using in production
- Open up to search engine indexing as appropriate. Sticking with the default robots.txt and "noindex, nofollow" values will cause the entire site to be blocked from search engines.

## Credits
This project is inspired by and or uses elements of the following:
- https://github.com/h5bp/html5-boilerplate
- https://github.com/cferdinandi/gulp-boilerplate
- https://cferdinandi.github.io/kraken/

## License
The code is available under the MIT License.
