# MealMate Product Requirements Document

## Project Title
MealMate - Mobile-First Meal Planning for Budget-Conscious Students

## Project Description
MealMate is a mobile-first web application designed to help college students manage their meals using ingredients they already have, reduce food waste, and minimize reliance on expensive takeout and food delivery. The app provides recipe suggestions based on available ingredients, manages a digital pantry, and helps create grocery shopping lists.

## Target Users
- Budget-conscious college students
- Students with limited kitchen equipment (microwave, air fryer, stove only)
- Students living in dorms or shared housing
- Students looking to reduce food waste and cooking costs

## Core Prototype Features

### Find Meals
- Manually enter available ingredients
- Search preset recipes based on available ingredients
- Show close recipe matches when not every ingredient is available
- Choose and view meal details

### Filters
- Budget-related filtering (e.g., "under $5", "under $10")
- Cooking-time filtering (e.g., "under 15 minutes", "under 30 minutes")
- Dietary/allergy filtering (e.g., vegetarian, gluten-free, nut-free)
- Cooking-equipment compatibility (microwave, air fryer, stove)

### Manage Food
- Manually add ingredients to inventory
- Maintain a basic digital pantry/inventory system
- Track ingredient quantities

### Shopping
- Create a grocery checklist from missing recipe ingredients
- Allow users to accept missing ingredients before adding to shopping list
- Support basic grocery spending/deal information using mocked or static data

## Technical Architecture

### Front-End Approach
- Client-side JavaScript application
- Mobile-first responsive design
- Vanilla JavaScript or lightweight framework
- RESTful API communication with backend

### Back-End Approach
- Simple REST API structure
- JSON-based data storage for prototype
- Endpoint structure organized by feature (recipes, inventory, shopping)
- Authentication and user management (future scope)

### Tools and Frameworks
- Frontend: HTML5, CSS3, JavaScript (ES6+)
- Build tool: Vite or similar for development
- Package manager: npm or yarn
- Version control: Git
- Testing: Jest or similar (future scope)

### Technical Assumptions and Constraints
- Prototype uses preset/local recipe data (no live recipe APIs)
- Grocery/store information is mocked or static
- No backend database required for initial prototype
- Single-page application architecture
- Mobile-first design approach
- Works offline for basic functionality (cached recipe data)

## Features Explicitly Excluded from Prototype 1
- Live recipe APIs (e.g., Spoonacular, Edamam)
- Live grocery-store APIs (e.g., Instacart, local store APIs)
- Web scraping for recipe or grocery data
- Advanced meal scheduling or calendar integration
- Macro/calorie tracking
- Expiration-date tracking
- Push notifications
- User authentication and accounts
- Cloud synchronization
- Social features (sharing recipes, etc.)
