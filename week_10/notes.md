# Responsive Web Design
* Good reasons for mobile first:
  * Tends to be easier
  * Helps avoid loading desktop assets on mobile devices (load times, data contingent)

## Media queries
```@media print and (min-width:500px) {} ```
```@media not screen {} ```
* Overlapping queries: use min-width (or max-width) only for several break-points (rules get overwritten, order matters, can result in relatively little code)
* Back-to-back queries: use min-width AND max-width for breakpoints (mutually exclusive queries, order doesn't matter, tends to result in more code)
