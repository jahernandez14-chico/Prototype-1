# MealMate Workspace Rules

## File and Variable Naming Conventions

### File Naming
- Use kebab-case for all file names: `recipe-service.js`, `shopping-list.component.js`
- Use descriptive names that indicate purpose: `ingredient-validator.js` (not `utils.js`)
- Client files: `/client/src/components/`, `/client/src/services/`, `/client/src/styles/`
- API files: `/api/routes/`, `/api/services/`, `/api/models/`
- Test files: Same name as file under test with `.test.js` or `.spec.js` suffix

### Variable Naming
- Use camelCase for variables and functions: `const recipeList = []`, `function getRecipes() {}`
- Use PascalCase for classes and constructors: `class RecipeService {}`
- Use UPPER_SNAKE_CASE for constants: `const MAX_COOKING_TIME = 60`
- Use descriptive names: `userShoppingList` (not `list`), `filterByBudget` (not `filter`)

### Component Naming
- Use PascalCase for React-like components (if using framework): `RecipeCard`, `IngredientForm`
- Use descriptive names that indicate functionality: `RecipeSearchForm`, `ShoppingListItem`

## Coding Conventions

### JavaScript/TypeScript
- Use const by default, let only when reassignment is needed
- Use arrow functions for callbacks and short functions
- Use template literals for string interpolation
- Use async/await for asynchronous operations (not raw Promises)
- Add JSDoc comments for functions with complex logic
- Prefer functional programming patterns (map, filter, reduce) over for loops
- Keep functions small and focused (single responsibility)
- Limit line length to 100 characters
- Use 2 spaces for indentation (no tabs)

### CSS
- Use BEM-like naming for classes: `.recipe-card`, `.recipe-card__title`, `.recipe-card--featured`
- Use mobile-first media queries
- Use CSS variables for colors and spacing
- Keep specificity low (avoid deep nesting)
- Group related styles together

### HTML
- Use semantic HTML5 elements: `<header>`, `<main>`, `<section>`, `<article>`
- Include alt text for images
- Use proper heading hierarchy (h1, h2, h3)
- Maintain proper accessibility attributes (aria-labels, etc.)

### API Design
- Use RESTful conventions for endpoints
- Use plural nouns for collections: `/api/recipes`, `/api/ingredients`
- Use kebab-case for endpoint paths: `/api/recipes/search`
- Return JSON responses with consistent structure
- Use appropriate HTTP status codes (200, 201, 400, 404, 500)

## Commit Message Guidelines

### Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

### Examples
```
feat(find-meals): implement recipe search algorithm

Add matching logic that compares user ingredients with recipe ingredients
and returns recipes sorted by match percentage.

feat(shopping): create shopping list data model

Add data structure for shopping list with ingredient names and check status.
fix(filters): resolve budget filter not applying

Budget filter was being ignored due to incorrect query parameter name.
```

### Rules
- Use imperative mood ("add" not "added" or "adds")
- Limit subject line to 50 characters
- Wrap body at 72 characters
- Reference related issue numbers in footer if applicable

## Branching Strategy

### Main Branches
- `main`: Production-ready code
- `develop`: Integration branch for features

### Feature Branches
- Format: `feature/<feature-name>` (e.g., `feature/recipe-search`)
- Branch from `develop`
- Merge back to `develop` via pull request

### Bugfix Branches
- Format: `fix/<bug-name>` (e.g., `fix/budget-filter-bug`)
- Branch from `develop` (or `main` for hotfixes)
- Merge back to appropriate branch via pull request

### Workflow
1. Create feature branch from `develop`
2. Make commits following commit message guidelines
3. Create pull request to `develop`
4. Request code review
5. Address feedback
6. Merge after approval
7. Delete feature branch

## Pull Request Process

### PR Requirements
- All tests must pass
- Code must follow workspace rules
- PR description must include:
  - Purpose of changes
  - Summary of changes
  - Testing performed
  - Screenshots for UI changes (if applicable)
- At least one approval required for merge

### PR Title Format
- Follow commit message format: `feat(find-meals): implement recipe search`

### PR Description Template
```markdown
## Purpose
[Brief description of why this change is needed]

## Changes
[Summary of changes made]

## Testing
[Description of testing performed]

## Checklist
- [ ] Code follows workspace rules
- [ ] Tests pass locally
- [ ] Documentation updated (if applicable)
```

## Code Review Expectations

### Reviewer Responsibilities
- Review within 2 business days of request
- Check for adherence to workspace rules
- Verify logic correctness and edge cases
- Check for security vulnerabilities
- Verify accessibility (for UI changes)
- Provide constructive, specific feedback

### Author Responsibilities
- Respond to review comments within 2 business days
- Address all feedback or provide justification
- Update PR description if scope changes
- Squash commits if requested before merge

### Review Criteria
- **Correctness**: Does the code do what it's supposed to do?
- **Style**: Does it follow workspace rules?
- **Performance**: Are there obvious performance issues?
- **Security**: Are there security concerns?
- **Maintainability**: Is the code clear and well-structured?
- **Testing**: Is the code adequately tested?
- **Documentation**: Is the code documented where necessary?

### Review Etiquette
- Be respectful and constructive
- Explain the "why" behind suggestions
- Offer solutions, not just problems
- Acknowledge good work
- Keep feedback focused on code, not the person
