# **GOE EgyBook**

A responsive and modern web application built with ****Next.js****, ****TypeScript****, and ****Tailwind CSS**** for a smooth booking experience.

## **🚀 Getting Started**

### **1. Clone the Repository**

```bash
https://github.com/karreemm/GOE-EgyBook.git
cd GOE-EgyBook
```

### **2. Install Dependencies**

```bash
npm install
# or
yarn install
```

### **3. Run the Development Server**

```bash
npm run dev
# or
yarn dev
```

Open your browser and go to [http://localhost:3000](__http://localhost:3000__)

---

## **📁 Project Structure Highlights**

### **🔹 Components**
Located in the `_components` folder. Contains reusable UI elements:
- `Navbar`
- `Footer`
- `Carousel`

### **🔹 Hooks**
Custom hooks inside the `_hooks` folder:
- `useIsMobile`: Detects the current screen size.
- `useClickOutside`: Handles detecting clicks outside elements, useful for closing popups.

### **🔹 Context**
State management using React Context API in the `context` folder:
- `AuthContext`: Manages User Role (user, guest) logic.
- `PickerContext`: Handles trip booking selection.

### **🔹 Routes and Pages**
- Each route is handled by Next.js file-based routing.
- The `home` route has a dedicated folder with:
  - A `_sections` subfolder containing each section (Hero, MostRelevant, etc.).
  - Each section has:
    - Its own `data.ts` file for content (array of objects).
    - A main `SectionName.tsx` file integrating the UI and logic.

---

## **✨ Features**

- Clean and ****responsive**** design across screen sizes
- Smooth ****hover effects**** on almost every element
- Focus on ****reusability**** to reduce repetition
- Structured folder organization and maintainable codebase

---

## **🎥 Demo Video**

Check out the full walk-through here: [https://drive.google.com/file/d/1ECZa_EwKgqATNi9G4sRSZMyz23cJVyeL/view?usp=sharing]

---

## **🔗 Live Demo**

Explore the deployed version here: [https://egybook-kappa.vercel.app/]

---

## **🛠 Built With**

- [Next.js](__https://nextjs.org/__)
- [TypeScript](__https://www.typescriptlang.org/__)
- [Tailwind CSS](__https://tailwindcss.com/__)
