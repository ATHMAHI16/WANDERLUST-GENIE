# Sutradhar AI (Hackathon MVP)

**Sutradhar AI** is a "Context-Aware Transcreation" engine designed for Bharat. Unlike standard translation tools, it adapts content culturally (e.g., changing "Baseball" analogies to "Cricket") to make global information relevant to local users.

This project is a Web Application built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🚀 How to Run This Project

Follow these steps to set up and run the application on your local machine.

### 1. Prerequisites (What to Download)

Before you begin, you need to have **Node.js** installed.

*   **Download Node.js:** Go to [nodejs.org](https://nodejs.org/) and download the **LTS (Long Term Support)** version for your operating system (Windows, macOS, or Linux).
*   **Verify Installation:** Open your terminal (Command Prompt or PowerShell on Windows, Terminal on Mac) and type:
    ```bash
    node -v
    npm -v
    ```
    If you see version numbers (e.g., `v20.x.x`), you are ready.

### 2. Installation (Setting up the Project)

Open your terminal and navigate to the project folder (`sutradhar-ai`). Then, install the necessary code libraries (dependencies).

```bash
cd sutradhar-ai
npm install
```

*   **What this does:** It reads the `package.json` file and downloads all the tools (React, Tailwind, Lucide Icons, etc.) required to run the app into a `node_modules` folder.

### 3. Running the App (Start the Server)

Now, start the local development server to see the app in action.

```bash
npm run dev
```

*   **What this does:** It starts a local web server using Vite.
*   **Access the App:** Look at the terminal output. It will show a URL, usually:
    > **http://localhost:5173**

    Open this link in your web browser (Chrome, Edge, Firefox, etc.).

---

## 🛠 Project Overview

*   **Frontend Framework:** [React](https://react.dev/) (Builds the user interface).
*   **Build Tool:** [Vite](https://vitejs.dev/) (Makes the app run fast locally).
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Used for modern, responsive design).
*   **Icons:** [Lucide React](https://lucide.dev/) (Provides the icons used in the UI).
*   **Testing:** [Vitest](https://vitest.dev/) (Ensures the data logic is correct).

### Key Features in MVP
1.  **Scenario Selector:** Choose between Sports, Finance, and Pop Culture demos.
2.  **Transcreation Engine:** Simulates the AI process of "Reading -> Thinking -> Adapting".
3.  **Insight Cards:** Displays *why* a specific change was made (e.g., "Cultural Equivalence").

---

## ✅ Running Tests (Optional)

If you want to verify that the code logic is working correctly, you can run the test suite:

```bash
npm run test
```
