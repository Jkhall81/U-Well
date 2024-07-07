# U-Well Health

This project is a front end produced for a start up to show to investors and act as the company's website. U-Well Health is a telehealth company that connects patients to therapists.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Testing](#testing)
- [License](#license)

## Features

This front end project features a navbar which disappears after the user scrolls. The site is mobile responsive. The site features two custom made multi step forms that collect information related to provider and patient resgistration. The multi step forms have animation effects and contain several different form step components with features such as standard input fields, checkboxes, option select buttons, text boxes, and more. All forms incorporate data validation on the front end.

## Technologies

This project was made with Next.js. Animations effects are created using Framer Motion and React Transition Group. Shadcn UI, with modifications, was used for some of the components. Zod and react hook forms are being used in the forms. Zustand is being used to manage global state. Jest and the React testing library are being used for testing.

Adobe Express was used to for image editing, and design asset creation.

## Getting Started

If you wish you run this application on your local machine just clone the repo, enter the new directory and execute npm i. Node is required to run this application.

## Deployment

A test build for the application is currently deployed on Vercel. The production build for this application will be deployed on AWS.

AWS build: https://u-wellhealth.com/

## Testing

Jest was used to test this application. At the moment there are tests to test page rendering, state changes, form functionality, link functionality, and mobile responsiveness.

## License

This project uses a standard MIT license.
