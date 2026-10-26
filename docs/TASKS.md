# MealMate Development Task List

## Project Setup
- [ ] Initialize client package.json with dependencies
  - Feature: Project infrastructure
  - Acceptance criteria: package.json exists with basic scripts (dev, build) and minimal dependencies

- [ ] Initialize API package.json with dependencies
  - Feature: Project infrastructure
  - Acceptance criteria: package.json exists with basic scripts and minimal backend dependencies

- [ ] Set up basic client HTML structure
  - Feature: Find Meals
  - Acceptance criteria: index.html exists with mobile viewport meta tag and basic semantic HTML structure

- [ ] Set up basic API server structure
  - Feature: Project infrastructure
  - Acceptance criteria: Basic Express.js server configured and can respond to HTTP requests

## Find Meals Feature
- [ ] Create preset recipe data structure
  - Feature: Find Meals
  - Acceptance criteria: JSON file with at least 10 recipes including ingredients, cooking time, equipment, and dietary tags

- [ ] Implement ingredient input form
  - Feature: Find Meals
  - Acceptance criteria: Form allows manual entry of ingredient names with add/remove functionality

- [ ] Implement recipe search algorithm
  - Feature: Find Meals
  - Acceptance criteria: API endpoint accepts list of ingredients and returns matching recipes

- [ ] Implement partial match logic
  - Feature: Find Meals
  - Acceptance criteria: Recipes that match some but not all ingredients are returned with match percentage

- [ ] Create recipe display component
  - Feature: Find Meals
  - Acceptance criteria: Recipe cards display name, ingredients, cooking time, and equipment needed

- [ ] Implement recipe detail view
  - Feature: Find Meals
  - Acceptance criteria: Clicking a recipe shows full details including instructions and all ingredients

## Filters Feature
- [ ] Implement budget filter UI
  - Feature: Filters
  - Acceptance criteria: UI allows selection of budget ranges (e.g., <$5, <$10, <$15)

- [ ] Implement cooking-time filter UI
  - Feature: Filters
  - Acceptance criteria: UI allows selection of cooking time ranges (e.g., <15min, <30min, <60min)

- [ ] Implement dietary/allergy filter UI
  - Feature: Filters
  - Acceptance criteria: UI allows selection of dietary restrictions (vegetarian, gluten-free, nut-free)

- [ ] Implement equipment filter UI
  - Feature: Filters
  - Acceptance criteria: UI allows selection of available equipment (microwave, air fryer, stove)

- [ ] Connect filters to recipe search
  - Feature: Filters
  - Acceptance criteria: Recipe search results respect all selected filters

## Manage Food Feature
- [ ] Create ingredient data model
  - Feature: Manage Food
  - Acceptance criteria: Ingredient object includes name, quantity, unit, and optional expiration date placeholder

- [ ] Implement add ingredient form
  - Feature: Manage Food
  - Acceptance criteria: Form accepts ingredient name, quantity, and unit; saves to local storage

- [ ] Create pantry/inventory display
  - Feature: Manage Food
  - Acceptance criteria: List view shows all stored ingredients with quantities

- [ ] Implement delete ingredient functionality
  - Feature: Manage Food
  - Acceptance criteria: User can remove ingredients from inventory

- [ ] Implement edit ingredient functionality
  - Feature: Manage Food
  - Acceptance criteria: User can update ingredient quantities

## Shopping Feature
- [ ] Create shopping list data model
  - Feature: Shopping
  - Acceptance criteria: Shopping list object stores ingredient names and check status

- [ ] Implement missing ingredient detection
  - Feature: Shopping
  - Acceptance criteria: Compare recipe ingredients with pantry inventory and identify missing items

- [ ] Create add-to-shopping-list UI
  - Feature: Shopping
  - Acceptance criteria: User can accept missing ingredients and add them to shopping list

- [ ] Implement shopping list display
  - Feature: Shopping
  - Acceptance criteria: Shopping list shows all items with checkbox to mark as purchased

- [ ] Add mock grocery deal data
  - Feature: Shopping
  - Acceptance criteria: Static JSON file with sample grocery deals/prices for common ingredients

- [ ] Display basic pricing information
  - Feature: Shopping
  - Acceptance criteria: Shopping list shows estimated prices from mock data

## UI/UX
- [ ] Implement mobile-first responsive CSS
  - Feature: All features
  - Acceptance criteria: Layout works on mobile screens (320px+) and scales up to desktop

- [ ] Create navigation between features
  - Feature: All features
  - Acceptance criteria: Tab or menu navigation allows switching between Find Meals, Manage Food, and Shopping

- [ ] Add loading states
  - Feature: All features
  - Acceptance criteria: Loading indicators display during async operations

- [ ] Add error handling UI
  - Feature: All features
  - Acceptance criteria: User-friendly error messages display when operations fail

## Documentation
- [ ] Document API endpoints
  - Feature: Project infrastructure
  - Acceptance criteria: API documentation describes all endpoints, request/response formats

- [ ] Add code comments for complex logic
  - Feature: All features
  - Acceptance criteria: Critical functions have explanatory comments

- [ ] Update README with setup instructions
  - Feature: Project infrastructure
  - Acceptance criteria: README includes install, dev server, and build instructions
