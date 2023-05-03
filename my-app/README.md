# Barking Boutique Web Store

Welcome to our pet ecommerce web store called Barking Boutique. Here you will be able to purchase toys and treats for your beloved pets!
You can also purchase your favorite pet/animal movies as well. 
You can also create a account to login and keep track of your purchases, and potential discounts and special offers.

# About

Our page allows users to browse available pet toys and treats to have their lovely canine. 
The page was designed by a team of four students from NYU ThriveDx Software Development Program, 
for our MileStone 3 Project, our final project for our Web Development Cooding Bootcamp.
This project is a basic fullstack project devleoped using technolgies such as React, Boostrap React, CSS, HTML, and Javascirpt. 
The page connects to a PostgreSQL database using Sequelize.
The use of Amazon Web Services, Elastic Beanstalk was used
to deploy this project.

# Features 

The Pet Supply Web Ecommerce Store has the following features:
- Homepage welcoming the user and clearly displaying a navigation bar to access products
- Product Page listing the dog treats, dog toys, and movies
- A registration and log in form, to give the user access to view and purchase products
- Authentication is used for the log in and sign up, to ensure the user is inputing a valid email and password
- Shopping cart that gives the user ability to delete and edit items in there cart
- Confirmation page with details about the recent purchase

## Technologies

- React
- Bootstrap React
- CSS
- HTML
- JavaScript
- Sequelize
- Node.JS
- Cors
- BodyParser
- TailwindCSS
- Express
- AWS Elastic Beanstalk 

## Routes
| Method | Path | Purpose |
| ------ | ------------ | ------------ |
| GET | '/' | Homepage |
| GET | '/toys' | Lists all the Dog Toys |
| GET | '/treats' | Lists all the Dog Treats |
| GET | '/dogbreeds' | Lists all the Pet Movies |
| GET | '/:name' | Displays a Single Dog from a dog API |
| GET | '/about' | Displays what the website is About |
| GET | '/signup | Displays a sign up form |
| GET | '/login' | Shows the Log-in form |
| GET | '/payment' | Displays a payment form |
| GET | '/cart' | Displays the shopping cart and any items the user has selected to add |
| GET | '/confirmation' | Shows a page that lets the user know there purchase is confirmed |

### Database:
- AWS
- pgAdmin
- PostgreSQL

**Users**

| Field | Type |
| -------- | -------- |
| id | User ID |
| firstname | String |
| lastname | String |
| email | String |
| password | String |
| role | ENUM |

**Dog Treats**

| Field | Type |
|-------- | -------- |
| id | Object ID |
| barcode | Integer |
| name | String |
| brand | String | 
| image | String |
| price | Integer |
| weight(oz) | Integer |

**Dog Toys**

| Field | Type |
|-------- | -------- |
| id | Object ID |
| barcode | Integer |
| name | String |
| brand | String | 
| image | String |
| price | Integer |

**Movies**
| Field | Type | 
| id | Movie ID |
| name | String |
| duration | Integer |

# Getting Started

## Installation

1. Clone this repository to your local machine.
2. Install dependencies with npm install
3. Install nodemon globally to run the server: npm install -g nodemon
4. Run the server with npm start

## Features 

The Barking Boutique Web Store has the following features:
- Homepage with a navagation bar with links to the dog treats, dog toys and movies
- User Account Sign up and Login in
 

## Acknowledgement

- We would like to thank our instructors for guiding us through this project.
They have also been very supporting and encouraging of us. We would also like to thank 
each other and all of our previous instructors who helped us develop the knowledge.

- ChatGPT, Google, NYU Resources, StackOverflow, YouTube (https://www.youtube.com/watch?v=IRK0-ApR-dc&t=665s)

# Potential Improvements

- Create a Account dashboard were the user can view there recent and previous purchases, 
	while also displaying any offers or upcoming discounts

#Bugs/Fixes

- Issues with connection to the AWS Elastic Beanstalk


# Contributing
Contributions to the Barking Boutique are more than welcome. To contribute, follow these steps:

Fork the repository: https://github.com/First-Organization-NYU/Milestone_Project_3
Create a new feature branch: git checkout -b feature/my-new-feature
Commit your changes: git commit -am 'Add some feature'
Push the branch: git push origin feature/my-new-feature
Submit a pull request

## Contact Us

If you have any questions please reach out to us at:

- Amy@email.com
- Veny@email.com
- Kamel@email.com
- Neil@email.com

License
This project is licensed under the MIT License. See the LICENSE file for more information.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
