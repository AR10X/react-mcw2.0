
ManipalCourseWare (MCW)
-----------------------

ManipalCourseWare (MCW) is an education site with video streaming of lectures, built with a MERN stack and fully mobile responsive.

### Features

-   Login and signup page with form to fill in details such as name, email, password, branch of engineering, and section of the class.
-   Verification by sending a verification email.
-   Dashboard page displaying subjects as coursework in the form of cards, fetched from a MongoDB database.
-   Video player and scrollable list of cards to select and watch a lecture video.
-   Uploading page to upload details of videos, stored in a MongoDB database.

### Folder Structure

The project has the following folder structure:

`├── src
│   ├── components
│   │   ├── navbar
│   │   ├── login-form
│   │   ├── signup-form
│   │   ├── dashboard
│   │   ├── subject-card
│   │   ├── video-player
│   │   ├── lecture-card
│   │   ├── upload-form
│   ├── pages
│   │   ├── login-signup
│   │   ├── dashboard
│   │   ├── subject
│   │   ├── upload
│   ├── services
│   │   ├── auth
│   │   ├── subjects`

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

-   Node.js
-   npm
-   MongoDB

#### Installation

1.  Clone the repository:

`git clone https://github.com/[username]/mcw.git`

2.  Install the dependencies:

`npm install`

3.  Start the development server:

`npm run start`

The app will be running at <http://localhost:3000/>.

### Deployment

To deploy the app, follow these steps:

1.  Build the production version of the app:

`npm run build`

2.  Start the production server:

`npm run start:prod`

### Built With

-   [React](https://reactjs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [MongoDB](https://www.mongodb.com/)

### Authors

-   [Abdul Rehaman](https://github.com/AR10X)
