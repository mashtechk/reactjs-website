## 🚀 Quick start

1.  **Fork and clone this repo**

2.  **Install dependencies**

    Navigate into the site’s directory and install dependencies.

    ```sh
    cd reactjsph-website/
    yarn
    # or yarn install
    ```

3.  **Start developing**

    ```sh
    yarn start
    # or yarn develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `reactjsph-website` directory in your code editor of choice and start developing. Save your changes and the browser will update in real time!

More for information about how you can contribute to this project, check our [contributing guidelines](https://github.com/reactph/reactjsph-website/blob/master/CODE_OF_CONDUCT.md).

## 📋 Enlisting in the Dev Board

1. Edit the [`content/devs.json`](https://github.com/reactph/reactjsph-website/blob/master/content/devs.json) file.

2. At the end of the array, add an object describing yourself given the format below:

  | Key | Description ||
  |-|-|-|
  | `avatar` | An external URL to an image of yourself | <ul><li>Must be a square image</li><li>Must be less than 80 kB</li></ul> |
  | `name` | Your name |  |
  | `title` | Your current job title |  |
  | `company` | Your current employer | <ul><li>Optional</li></ul> |
  | `blurb` | Short bio describing yourself | <ul><li>Must be 140 characters or less</li></ul> |
  | `skills` | String array of your skills/technologies that you would like to promote | <ul><li>Only the first 5 will be listed, but feel free to add as many as you like (We plan to allow devs to be filtered by skills in the future)</li></ul> |
  | `contacts` | Object array of contact information where each item has a `type` and a `url` | <ul><li>`type` can be any of the following: "behance", "email", "github", "linkedin", "twitter", "website"</li><li>`url` must be a URL corresponding to the `type` selected</li></ul> |

3. Open a pull request with the title `[DEV BOARD] {YOUR_NAME}` using the template below:

  ```
  I have read and verified the following upon opening this pull request to add my information to the ReactJS Dev Board:

  - [ ] My `avatar` is a square image
  - [ ] My `avatar` is below 80 kB
  - [ ] My `blurb` is no longer than 140 characters
  - [ ] I understand that only the first 5 `skills` I list will be shown on the site
  ```
