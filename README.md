# MealMate

A mobile-first web application designed to help budget-conscious college students manage their meals using ingredients they already have, reduce food waste, and minimize reliance on expensive takeout and food delivery.

## Purpose

MealMate helps students:
- Find recipes based on ingredients they already have
- Reduce food waste by using available ingredients
- Cook with limited kitchen equipment (microwave, air fryer, stove)
- Manage a digital pantry/inventory
- Create grocery shopping lists from missing recipe ingredients
- Make budget-conscious meal decisions

## Initial Feature Scope (Prototype 1)

### Find Meals
- Manually enter available ingredients
- Search preset recipes based on available ingredients
- Show close recipe matches when not every ingredient is available
- Choose and view meal details

### Filters
- Budget-related filtering (e.g., under $5, under $10)
- Cooking-time filtering (e.g., under 15 minutes, under 30 minutes)
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

## Project Directory Structure

```
Prototype-1/
├── client/              # Front-end application
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── services/    # API service calls
│   │   ├── styles/      # CSS styles
│   │   └── index.js     # Entry point
│   └── index.html       # Main HTML file
├── api/                 # Backend/API structure
│   ├── routes/          # API route definitions
│   ├── services/        # Business logic
│   └── models/          # Data models
├── docs/                # Project documentation
│   ├── PRD.md           # Product Requirements Document
│   ├── TASKS.md         # Development task list
│   └── WORKSPACE_RULES.md # Coding conventions and guidelines
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## Local Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Install client dependencies:
```bash
cd client
npm install
```

2. Install API dependencies:
```bash
cd ../api
npm install
```

### Running the Application

1. Start the API server:
```bash
cd api
npm run dev
```
The API server will run on `http://localhost:3001` (or configured port)

2. Start the client development server:
```bash
cd client
npm run dev
```
The client will run on `http://localhost:3000` (or configured port)

3. Open your browser and navigate to the client URL

### Building for Production

1. Build the client:
```bash
cd client
npm run build
```

2. Build the API (if applicable):
```bash
cd api
npm run build
```

## Technical Approach

- **Frontend**: Mobile-first responsive design using HTML5, CSS3, and JavaScript (ES6+)
- **Backend**: Simple REST API with JSON-based data storage
- **Data**: Preset/local recipe data and mocked grocery information (no live APIs in Prototype 1)
- **Architecture**: Single-page application with RESTful API communication

## Documentation

- [Product Requirements Document](docs/PRD.md) - Detailed project specifications
- [Development Task List](docs/TASKS.md) - Planned development tasks
- [Workspace Rules](docs/WORKSPACE_RULES.md) - Coding conventions and guidelines

## Features Excluded from Prototype 1

- Live recipe APIs (e.g., Spoonacular, Edamam)
- Live grocery-store APIs (e.g., Instacart, local store APIs)
- Web scraping for recipe or grocery data
- Advanced meal scheduling or calendar integration
- Macro/calorie tracking
- Expiration-date tracking
- Push notifications
- User authentication and accounts
- Cloud synchronization
- Social features

## License

[To be determined]
