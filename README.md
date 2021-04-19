# serverless-cors

An MWE for enabling CORS requests across multiple specific domains (without allowing `*`).

## Setup

1. Clone the repo locally.
2. [Set up your AWS serverless credentials.](https://www.serverless.com/framework/docs/providers/aws/guide/credentials#quick-setup)
3. Install dependencies `npm i`.
4. Deploy to AWS: `./node_modules/.bin/serverless deploy -r your-region -s your-stage` (Make a note of the https endpoint that is returned for the function; you'll need it later.)
5. Run a local webserver in the root of the project: `npx http-server .`
6. Open the `index.html` page in your browser: `http://localhost:8080/`
7. In the text box, enter the URL of the function endpoint from step 4, and click "Post It!"