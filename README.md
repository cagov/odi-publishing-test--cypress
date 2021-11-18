
# ODI Publishing Test - Cypress

## Get started 

1. Store WP username and password

    _cypress.env.json_
    ```json
    {
        "UN": "myusername",
        "PW": "mypassword"
    }
    ```

2. Get dependencies.

        `npm install`

3. Run test.

    a. In the background:

    `npm run cy:posts:headless`

    b. In the debugging environment. 

    `npm run cy`


## Troubleshooting
 
 - Make sure you've updated to the latest version of Chrome.
 
 ## Other pipelines

1. Change the url values in configSite.js to test other site set ups. 
