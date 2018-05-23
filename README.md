# React Website Boilerplate

This is a boilerplate meant to build static websites using React, Sass, Webpack, and Github Pages.

#### Setup Instructions
* Clone the repository and rename the folder to your project name
* Renaming the project
    * Search all files for *"React Website Boilerplate"* and replace with your project name
    * Search all files for *"react-website-boilerplate"* and replace with your project name
    * Replace author name in **package.json** with anything you wish
* Changing the font
    * Search all files for *"https://fonts.googleapis.com/css?family=Oxygen:300,400,700"* and replace with any font of your choice (I use Google fonts)
    * Go to **src/styles/base/layout.scss** and replace *"'Oxygen', sans-serif"* with your font
* Replacing favicon
    * Replace **src/assets/icons/favicon.png** with the image of your choice
* Hosting on Github Pages and using custom domain
    * Go to your repository settings and go to the Github Pages section
    * Select ***gh-pages-branch*** as the source from the dropdown
    * Buy a domain name and point it to [github-username].github.io (for example: vinitp94.github.io)
    * Update the **CNAME** file with your domain

#### Local Development, Build, and Deploy Instructions
* Run ***npm install***
* Run ***npm start*** to start server and open a new browser window at ***localhost:8080***
* To deploy:
    * Change *"/build/bundle.js"* in **index.html** and **404.html** to */[repo-name]/build/bundle.js*
    * Change *basename* from **src/index.js** from *"/"* to *"/[repo-name]"*
    * After making any changes, run ***npm run build*** to update JavaScript bundle and style map
    * Commit your changes and push up the ***gh-pages*** branch
    * Changes should automatically go live (make sure the browser doesn't cache your JavaScript and styles)

#### Architecture Notes
* All icons and images live inside **src/assets**
* Components are split up into building-blocks and pages inside **src/components**
    * Page-level components share a one-to-one relationship with routes listed in **src/index.js**
    * Building-block components refer to all child components used in page-level components
* All components are prefixed with *"rwb-"*; this should be replaced with any prefix of your choice
    * Each component has a dedicated stylesheets with styles scoped only to that component
    * Styles under **src/styles/components** follow the same structure as components
* Generic high-level styles for the entire website should go in **src/styles/base/layout.scss**
* Colors used in the entire website should go in **src/styles/base/colors.scss**
* All component stylesheets should have a block dedicated to mobile styles
* Any time a new stylesheet is added, it should be imported in **src/styles/main.scss**
* All new routes should be added to **src/index.js** with a corresponding page-level component and stylesheet
