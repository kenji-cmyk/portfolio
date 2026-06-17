# 3D Backend Portfolio

Personal portfolio website for Nguyen Anh Khoi, focused on backend engineering, scalable APIs, distributed workflows, and selected project case studies.

The application is built with Vite, React 19, Tailwind CSS 4, GSAP, and React Three Fiber. It combines a lightweight 3D hero scene with scroll-triggered sections for projects, backend skills, experience, resume access, social links, and an EmailJS-powered contact form.

## Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Content Configuration](#content-configuration)
- [Assets](#assets)

## Overview

This portfolio presents backend-oriented work rather than a generic frontend showcase. The source content currently highlights:

- Backend API and service development with Java and Spring Boot
- Clean Architecture, repository boundaries, DTO mapping, and service layer design
- API security with JWT, Spring Security, RBAC, authorization rules, validation, and 2FA flows
- Messaging and realtime systems with RabbitMQ, Kafka, gRPC, WebSocket, Redis, and Docker
- Projects including EMIS Voice Detection, Carbon Credit Marketplace, and Premier League Statistics
- Resume download from `public/resume/cv.pdf`

## Features

- Responsive landing page with fixed navigation and smooth section anchors
- Animated hero copy with backend-focused keywords
- Lazy-loaded 3D hero experience for desktop devices
- Loading screen before the main application shell is revealed
- Project showcase with images, tags, years, and short case-study descriptions
- Backend skill grid covering architecture, security, database, cache, messaging, and realtime systems
- Experience section for backend developer work at THD Cybersecurity
- Contact form with EmailJS integration and clear success/error states
- Social links for Instagram, Facebook, GitHub, and LinkedIn

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS 4
- Three.js
- React Three Fiber
- Drei
- GSAP
- EmailJS
- ESLint

## Project Structure

```text
.
|-- public/
|   |-- images/          Static image assets used by sections
|   |-- models/          GLB models for 3D scenes and tech visuals
|   `-- resume/cv.pdf    Public resume file
|-- src/
|   |-- components/      Reusable UI and 3D model components
|   |-- constants/       Portfolio content, navigation, projects, skills, links
|   |-- hooks/           Viewport and hero canvas lifecycle hooks
|   |-- sections/        Page sections: hero, projects, skills, experience, contact
|   |-- App.jsx          Application composition and lazy-loaded sections
|   |-- main.jsx         React entry point
|   `-- index.css        Tailwind theme, layout, animation, and component styles
|-- .env.example         EmailJS environment variable template
|-- package.json         Scripts and dependencies
`-- vite.config.js       Vite configuration
```

## Environment Variables

The contact form uses EmailJS. Create a `.env` file in the project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=service_xxxxx
VITE_APP_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

If these values are not configured, the contact form stays usable visually but displays an error message instead of sending email.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local Vite URL shown in the terminal. By default, it is usually:

```text
http://localhost:5173
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev      # Start Vite development server
npm run build    # Create production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Content Configuration

Most portfolio content is centralized in:

```text
src/constants/index.js
```

Update this file to change:

- Navigation links
- Hero rotating words
- Counter values
- Ability cards
- Tech stack items
- Backend skill groups
- Project case studies
- Experience entries
- Resume metadata
- Social links

## Assets

Static files are served from `public/` and referenced with root-relative paths such as:

```text
/images/emis.png
/images/ccmkp.png
/images/pms.png
/resume/cv.pdf
```

When replacing assets, keep filenames in sync with the references in `src/constants/index.js` and the section components.
