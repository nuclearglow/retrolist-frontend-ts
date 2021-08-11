Now:
-   Workbox PWA: set up config and build job
-   https://frontendchecklist.io/
-   print view of a list -> download
-   refactor item edit view: handle edit / creation directly, jkust take in an item, decide by id

Future:

-   snowpack content-hashing and cache busting in apache2
    https://github.com/snowpackjs/snowpack/issues/3402

Issues
-   Add item -> refetch /lists query to update item count or update cache manually
-   Edit list view: double queries because id is null at the beginning?
-   Return handler still needed for app usage?
