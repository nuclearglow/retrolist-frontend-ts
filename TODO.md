-   Fix Styling Issues for Mobile
-   Login and Register in separate views
-   Login /login -> success: history.replace to /lists
-   Register -> success: history.replace to /login
-   Add item -> refetch /lists query to update item count
-   Smarter Back Button Handling, do not show if disabled, do not show if harmful
-   Production Readiness
    -   https://frontendchecklist.io/
    -   snowpack content-hashing and cache busting in apache2
        https://github.com/snowpackjs/snowpack/issues/3402
