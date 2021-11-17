
# ODI Publishing Test - Cypress

## Get started 

1. Store WP username and password

        cypress.env.json
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
