
# Amazon-like E-Commerce Store

A fully responsive Amazon-like E-Commerce Store built with **React, HTML, CSS, Bootstrap, and JavaScript**. It features product listing, search & filter, cart management, checkout, and dark mode with LocalStorage cart persistence.


## Key Project Features

- **Product Listing & Details:** Display a range of products with filtering and sorting options.  
- **Search & Filter:** Search by product name and filter by category with combined queries.  
- **Cart Management:** Add, remove, and update product quantities in the cart.  
- **Checkout Process:** Display order summary with form validation.  
- **Theme Switching:** Light and dark mode using React Context API.  
- **LocalStorage Persistence:** Store cart data to retain selections after page reload.  
- **Responsive Design:** Mobile, tablet, and desktop-friendly.  
- **Reusable Components:** Modular components for better code maintainability.  
- **API Integration:** Uses static JSON files as mock data.  

---

## Technologies Used

- **Frontend:** React, HTML, CSS, Bootstrap, JavaScript  
- **State Management:** React Context API  
- **Routing:** React Router  
- **Theme Management:** Context-based dark/light mode  
- **API:** Static `data.json` for product data (mock data)  
- **Deployment:** Netlify/Vercel  

---

## Installation & Setup Guide

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org) >= 18.0.0  
- [npm](https://www.npmjs.com/) 

### Clone the Repository
```bash
git clone https://github.com/Lavanya-rao05/ecommerce-store.git
cd ecommerce-store
```

### Install Dependencies
Install the required dependencies using:
```bash
npm install
```

### Environment Variables
Create a `.env` file at the root of the project if you have any sensitive API keys or configurations (not required for mock data).

### Run the Development Server
Start the app in development mode:
```bash
npm start

```
The app will be available at:  
```
http://localhost:3000
```

---

## Code Structure & Best Practices

### Folder Structure
```
/public  
 ├── /assets                   # Images and logos  
 │     ├── AmazonLogo1.png     # Amazon logo  
 │     ├── AmazonLogo2.png     # Alternative Amazon logo  
 │     ├── Banner1.jpg         # Banner image 1  
 │     ├── Banner2.jpg         # Banner image 2  
/src  
 ├── /components              # Reusable components  
 │     ├── AccountList.jsx    # User account dropdown  
 │     ├── Banner.jsx         # Hero section banner  
 │     ├── FilterBar.jsx      # Category filter bar  
 │     ├── Footer.jsx         # Footer component  
 │     ├── NavBar.jsx         # Navigation bar  
 │     ├── ProductCard.jsx    # Individual product card  
 │     ├── ProductGrid.jsx    # Product grid layout  
 │     ├── ProductList.jsx    # Product list component  
 │     ├── SearchBar.jsx      # Search bar component  
 │  
 ├── /Context                  # State management  
 │     ├── CartContext.jsx     # Cart state management  
 │     ├── OrdersContext.jsx   # Orders management  
 │     ├── ThemeContext.jsx    # Dark/Light mode context  
 │  
 ├── /data                      # Mock data  
 │     ├── categories.jsx       # Category data  
 │     └── data.json            # Mock product data  
 │  
 ├── /pages                     # Pages and routing  
 │     ├── Cart.jsx             # Cart functionality  
 │     ├── CartPage.jsx         # Display cart items  
 │     ├── CategoryPage.jsx     # Filtered category view  
 │     ├── CheckoutPage.jsx     # Checkout page with validation  
 │     ├── CreateAccount.jsx    # Account creation page  
 │     ├── Home.jsx             # Home page with banner & products  
 │     ├── Orders.jsx           # Orders history page  
 │     ├── ProductDetail.jsx    # Single product detail view  
 │     └── Signin.jsx           # Sign-in page  
 │  
 ├── /styles                    # CSS styles  
 │     ├── App.css              # Main app styles  
 │     ├── index.css            # Global styles  
 │  
 ├── App.js                      # Main React component  
 ├── App.jsx                     # Main application entry  
 ├── index.js                    # React DOM rendering  
 ├── main.jsx                    # Application entry point  
 ├── index.html                  # HTML template  
 ├── eslint.config.js            # Linting configuration  
 ├── package.json                # Project dependencies  
 ├── .gitignore                  # Git ignore file  
 └── README.md                   # Project documentation  
```

### Coding Standards
- **Reusable Components:** Components like `ProductCard` are reusable and modular.  
- **Clean and Readable Code:** Follows consistent naming conventions and indentation.  
- **State Management:** React Context API for global state.  
- **Error Handling:** Graceful error handling with fallback UI for failed API requests.  

---

## State Management & Component Design

- **React Context API:** Used for global state management of cart and theme.  
- **Reusable Components:** Components like `ProductCard`, `FilterBar`, and `Navbar` are modular and reusable.  
- **Efficiency:** Utilizes `React.memo` and `useCallback` to prevent unnecessary re-renders.  
- **Lazy Loading:** For faster performance, certain components are lazy-loaded.

---

## API Endpoints

Since this project uses **mock JSON data**, here’s the list of mock APIs:

### Mock Product API
- **File:** `/data/data.json`  
- **Method:** `GET`  
- **Sample Response:**
```json
[
  {
    "id": 1,
    "name": "Smartphone",
    "price": 499,
    "category": "Electronics",
    "image": "smartphone.jpg"
  },
  {
    "id": 2,
    "name": "Laptop",
    "price": 899,
    "category": "Electronics",
    "image": "laptop.jpg"
  }
]
```

## UI/UX Guidelines

### Responsive Design
- **Mobile:** Navigation drawer with responsive grid layout for products.  
- **Tablet:** Two-column layout with visible cart sidebar.  
- **PC:** Full-width layout with product cards and detailed checkout.  

### Theme
- **Dark Mode:** Dark and light themes with React Context API.  
- **LocalStorage:** Persists the current theme across sessions.  

---

## Error Handling & Debugging

### Error Handling  
- **404 Handling:** Redirects users to a custom `404` page for invalid routes.  
- Displays a fallback message if no products are found.  


## Testing Strategies

### Unit Testing
- Test individual components like `ProductCard` and `Cart`.  

### Integration Testing
- Verify component interactions (e.g., `Add to Cart` button).  
- Ensure proper state management and context interactions.  

---

## Deployment

### How to Deploy
1. Build the project:
```bash
npm run build
```
2. Deploy to **Netlify**:
```bash
netlify deploy
```
3. Add your custom domain if required.

### Continuous Integration
- Integrate with GitHub Actions or Vercel for CI/CD.  
- Automatically trigger builds and deployments on new commits.

### Rollback Plan
- Use **versioning** or GitHub branches to roll back to the previous working version in case of issues.  
---

## Contributing
Contributions are welcome! If you'd like to enhance this project, feel free to fork the repository, create a new branch, and submit a pull request.

---

## Author
Lavanya Rao  
[GitHub](https://github.com/Lavanya-rao05)  

---

## License
This project is licensed under the **MIT License**.  

