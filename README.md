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
- **Language**: TypeScript

## Getting Started

### Personalize Your LinkCard

1.  Navigate to `src/config/link-card-config.json`.
2.  Modify the values in the `userConfig` object with your own information. The `gravatarEmail` is used to fetch your profile picture automatically.

That's it! The application will update with your details.

### Local Development

To run the application on your local machine for testing and development:

1.  Open your terminal.
2.  Run the development server:
    ```bash
    npm run dev
    ```
3.  Open your browser and navigate to `http://localhost:9002`.

The application will automatically reload as you make changes to the code.
