// MealMate client entry point

// State management
const state = {
  currentView: 'find-meals',
  ingredients: [],
  pantry: [],
  shoppingList: [],
  recipes: []
};

// Navigation
function setupNavigation() {
  const navButtons = document.querySelectorAll('nav button');
  const views = document.querySelectorAll('.view');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const viewName = button.dataset.view;

      // Update active button
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Update active view
      views.forEach(view => {
        view.classList.remove('active');
        if (view.id === viewName) {
          view.classList.add('active');
        }
      });

      state.currentView = viewName;
    });
  });
}

// Find Meals functionality
function setupFindMeals() {
  const addIngredientBtn = document.getElementById('add-ingredient');
  const ingredientInput = document.getElementById('ingredient-name');
  const ingredientList = document.getElementById('ingredient-list');
  const searchBtn = document.getElementById('search-recipes');

  addIngredientBtn.addEventListener('click', () => {
    const ingredient = ingredientInput.value.trim();
    if (ingredient) {
      state.ingredients.push(ingredient);
      renderIngredientList();
      ingredientInput.value = '';
    }
  });

  ingredientInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addIngredientBtn.click();
    }
  });

  searchBtn.addEventListener('click', () => {
    // TODO: Implement recipe search
    console.log('Searching recipes with ingredients:', state.ingredients);
  });

  function renderIngredientList() {
    ingredientList.innerHTML = state.ingredients.map((ing, index) => `
      <div class="ingredient-item">
        <span>${ing}</span>
        <button data-index="${index}">Remove</button>
      </div>
    `).join('');

    ingredientList.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.dataset.index);
        state.ingredients.splice(index, 1);
        renderIngredientList();
      });
    });
  }
}

// Manage Food functionality
function setupManageFood() {
  const addBtn = document.getElementById('add-to-pantry');
  const nameInput = document.getElementById('pantry-ingredient-name');
  const quantityInput = document.getElementById('pantry-ingredient-quantity');
  const unitInput = document.getElementById('pantry-ingredient-unit');
  const pantryList = document.getElementById('pantry-list');

  addBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const quantity = quantityInput.value;
    const unit = unitInput.value.trim();

    if (name && quantity) {
      state.pantry.push({
        name,
        quantity: parseInt(quantity),
        unit: unit || 'pieces'
      });
      renderPantryList();
      nameInput.value = '';
      quantityInput.value = '';
      unitInput.value = '';
    }
  });

  function renderPantryList() {
    pantryList.innerHTML = state.pantry.map((item, index) => `
      <div class="ingredient-item">
        <span>${item.name} - ${item.quantity} ${item.unit}</span>
        <button data-index="${index}">Remove</button>
      </div>
    `).join('');

    pantryList.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.dataset.index);
        state.pantry.splice(index, 1);
        renderPantryList();
      });
    });
  }
}

// Shopping functionality
function setupShopping() {
  const shoppingList = document.getElementById('shopping-list');

  function renderShoppingList() {
    shoppingList.innerHTML = state.shoppingList.map((item, index) => `
      <div class="shopping-item ${item.purchased ? 'purchased' : ''}">
        <input type="checkbox" ${item.purchased ? 'checked' : ''} data-index="${index}">
        <span>${item.name}</span>
        ${item.price ? `<span class="price">$${item.price.toFixed(2)}</span>` : ''}
      </div>
    `).join('');

    shoppingList.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const index = parseInt(checkbox.dataset.index);
        state.shoppingList[index].purchased = checkbox.checked;
        renderShoppingList();
      });
    });
  }

  renderShoppingList();
}

// Initialize app
function init() {
  setupNavigation();
  setupFindMeals();
  setupManageFood();
  setupShopping();

  // Set initial active state
  document.querySelector('nav button[data-view="find-meals"]').classList.add('active');
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
