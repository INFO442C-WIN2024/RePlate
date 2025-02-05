# RePlate

RePlate is a web application designed to reduce food waste by connecting restaurants with surplus food to individuals and organizations in need. Inspired by food delivery platforms like DoorDash, RePlate makes it easy to browse available food items, request pickups, and reduce waste in the community.

Features

Browse Available Food – Users can view surplus food items from participating restaurants.

Request a Pickup – Users can claim available food and schedule a pickup.

Restaurant Dashboard – Restaurants can list surplus food items for donation.

Interactive Map – See nearby available food locations.

Tech Stack

Frontend: React, Tailwind CSS

Backend: Firebase (Authentication, Firestore Database, Hosting)

Deployment: Firebase Hosting

State Management: React Context API / Redux (if needed)

Getting Started

Prerequisites

Make sure you have the following installed:

Node.js & npm

Firebase CLI

Installation

Clone the repository:

git clone https://github.com/your-username/RePlate.git
cd RePlate

Install dependencies:

npm install

Set up Firebase:

Create a Firebase project at Firebase Console.

Enable Firestore, Authentication, and Hosting.

Download firebaseConfig and add it to your React app in a .env file.

Build the project:

npm run build

Deploy to Firebase:

firebase deploy

Running Locally

To run the app on your local machine:

npm start

Visit http://localhost:3000 in your browser.

Directory Structure

RePlate/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Page components (Home, Dashboard, etc.)
│   ├── styles/      # CSS & Tailwind styles
│   ├── firebase.js  # Firebase config & initialization
│   ├── App.js       # Main application component
│   ├── index.js     # Entry point
├── firebase.json    # Firebase configuration
├── .env             # Environment variables
├── package.json     # Project dependencies
└── README.md        # Project documentation

Future Features

User Profiles – Personalized dashboards for users and restaurants.

Notification System – Alerts for new food listings.

Analytics Dashboard – Insights on food waste reduction impact.

Contributing

Fork the repo and create a new branch.

Make your changes and commit with a meaningful message.

Open a pull request for review.

License

MIT License

Questions?

Feel free to open an issue or reach out!
