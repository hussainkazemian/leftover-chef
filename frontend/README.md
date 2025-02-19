# Leftover Chef

## Project Overview
Leftover Chef is a web application designed to help users create meals using ingredients they already have at home. By reducing food waste and promoting sustainable cooking habits, the app encourages users to make the most of their available pantry items.

## Key Features
### 1. Ingredient Inventory Management
- Users can enter fresh and dry ingredients from their fridge and pantry.
- Option to mark expiration dates for better tracking.
- Notifications alert users about ingredients that are expiring soon.

### 2. Smart Recipe Generator
- Suggests recipes based on available ingredients.
- Takes into account common kitchen staples (e.g., salt, oil, flour).
- Prioritizes recipes that use ingredients nearing expiration.

### 3. Alternative Ingredient Suggestions
- If an ingredient is missing, suggest substitutes.
- Example: No butter? Use olive oil instead.

### 4. Recipe Filtering & Preferences
- Users can select dietary preferences (vegan, gluten-free, low-carb, etc.).
- Filter recipes by cuisine type or meal type (breakfast, lunch, dinner).

### 5. Educational Resources
- Tips on food storage (e.g., “Store herbs in water to extend freshness”).
- Fun facts about food waste statistics (e.g., “30% of global food is wasted”).

### 6. Suggestions for Leftover Ingredients
- Provides alternative uses for leftover ingredients (e.g., turning stale bread into croutons or breadcrumbs).
- Offers tips on how to store certain foods longer or repurpose scraps (e.g., using vegetable peels for stock).

### 7. Community Features (Optional Enhancements)
- Users can share their own creative zero-waste recipes.
- Comment, rate, and save favorite recipes.
- Weekly challenges for reducing food waste.

### 8. AI-Powered Cooking Assistant (Advanced Feature)
- Uses AI to improve recipe suggestions based on past user behavior.
- Can provide step-by-step cooking instructions.

## Similar Existing Apps & Services
Leftover Chef differentiates itself with a strong zero-waste focus. Some existing apps with related functionalities include:
- **Too Good To Go** – Helps users buy leftover food from restaurants but does not focus on home cooking.
- **SuperCook** – Allows users to input ingredients and get recipe suggestions but lacks an expiration tracking feature.
- **Cookpad** – A recipe-sharing community but not specifically aimed at food waste.
- **Fridge Pal** – Helps track fridge items but does not generate recipes.

Other relevant apps:
- **SuperCook**: Recipe generator based on pantry inputs.
- **NoWaste**: Tracks expiry dates and suggests recipes.
- **Olio**: Connects users to share surplus food locally.
- **Plantix**: Identifies vegetables via image upload (potential inspiration for an ingredient recognition feature).

## Technical Considerations
- **Recipe Database**: Start with open-source datasets (e.g., RecipeNLG, Spoonacular API).
- **AI Integration**: Use NLP to parse recipes or image recognition for ingredient scanning (future feature).
- **Scalability**: Allow users to save favorite recipes and share on social media.

## Installation & Setup (To Be Defined)
1. Clone the repository.
2. Install dependencies.
3. Run the development server.

```bash
# Clone the repository
git clone https://github.com/hussainkazemian/leftover-chef.git
cd leftover-chef

# Install dependencies
npm install  

# Run the development server
npm start 
```

## Future Roadmap
- Implement AI-powered ingredient recognition.
- Expand the recipe database with user-generated content.
- Introduce a mobile app version.


---

Let’s cook smarter and reduce food waste together with Leftover Chef! 🍽️


ENDPOINTS :
GET /api/ingredients
POST /api/ingredients

POST /api/user-inventory