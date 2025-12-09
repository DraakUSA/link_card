# LinkCard - A Personal Digital Business Card

This is a [Next.js](https://nextjs.org/) application, built in Firebase Studio, that creates a simple and elegant personal digital business card.

## Features

- Displays your name, title, and avatar.
- Links to your website, social media profiles, and email.
- Uses your [Gravatar](https://gravatar.com/) for the profile picture.
- Easily customizable through a single configuration file.

## Tech Stack

- **Framework**: Next.js (with App Router)
- **UI Components**: ShadCN UI
- **Styling**: Tailwind CSS
- **AI**: Google's Genkit
- **Deployment**: Firebase App Hosting

## Getting Started

### 1. Initial Local Environment Setup

Before running the application, you need to set up your local environment.

1.  **Install Dependencies**: Open your terminal and run the following command to install the required Node.js packages.
    ```bash
    npm install
    ```

2.  **Set Up Environment Variables**: The application uses Genkit, which requires an API key for Google's Generative AI models.
    - Create a new file named `.env.local` in the root of your project.
    - Get your API key from [Google AI for Developers](https://aistudio.google.com/app/apikey).
    - Add the following line to your `.env.local` file, replacing `YOUR_API_KEY` with your actual key:
      ```
      GOOGLE_GENAI_API_KEY=YOUR_API_KEY
      ```

3.  **Initialize Firebase**: If you haven't already, configure your local project to connect to Firebase.
    ```bash
    firebase init
    ```
    - When prompted, select **App Hosting**, **Genkit** (or AI Logic), and **Emulators**. This will link your local project to Firebase for deployment and local testing.

### 2. Personalize Your LinkCard

1.  Navigate to `src/config/link-card-config.json`.
2.  Modify the values in the `userConfig` object with your own information. The `gravatarEmail` is used to fetch your profile picture automatically.

That's it! Your environment is ready.

### 3. Local Development

To run the application on your local machine for testing and development:

1.  Open your terminal.
2.  Run the development server:
    ```bash
    npm run dev
    ```
3.  Open your browser and navigate to `http://localhost:9002`.

The application will automatically reload as you make changes to the code.
