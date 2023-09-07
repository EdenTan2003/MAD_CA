var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

const data = JSON.stringify(
    {
        "recipes": [
            {
                "id": 1,
                "title": "Pepperoni Pizza",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/pepperonipizza.jpg?alt=media&token=e10ae8e7-2117-4ec6-a66b-a812465825a8",
                "likes": 150,
                "description": "The easiest and most simple way to enjoy a delish pepperoni pizza with oozing cheese, savory pepperoni, and crispy crust with your family!",
                "ingredients": "• 1 cup shredded mozzarella cheese \n• 1 Pepperoni \n• 3 ¼ cups all-purpose flour \n• 2 (.25 ounce) of yeast \n• 1 tablespoon sugar \n• 1 ½ teaspoons salt \n• ½ can Tomato Paste \n• 1 teaspoon dried basil, crushed \n• ½ teaspoon garlic powder \n• ½ teaspoon onion powder \n• ¼ teaspoon black pepper",
                "steps": "1. Preheat the oven to 220 degrees C. Grease two 12-inch pizza pans. \n2. Make sauce: Whisk together water, tomato paste, basil, garlic powder, onion powder, sugar, salt, and pepper in a medium bowl until smooth. Set aside. \n3. Make crust: Combine 2 cups flour, yeast, sugar, and salt in a large bowl. Add warm water and oil; mix until well blended, about 1 minute. Gradually add remaining flour, a little at a time, until a soft, sticky dough forms. \n4. Transfer dough to a floured surface; knead until dough is smooth and elastic, about 4 minutes. Add more flour as needed. \n5. Divide dough in half. Lightly flour your hands, then pat each piece of dough onto the prepared pizza pans. \n6. Top dough with sauce, cheese, and pepperoni. \n7. Bake in the preheated oven until crusts are browned and cheese is bubbly, 18 to 20 minutes. Rotate pizza pans between the top and bottom oven racks halfway through baking.",
                "author": "John Doe",
                "like": false,
                "bookmark": true
            },
            {
                "id": 2,
                "title": "Seafood Fried Rice",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/seafoodfriedrice.jpg?alt=media&token=07a0ce8c-e361-40d2-b58c-d30a282a2759",
                "likes": 250,
                "description": "It's a one-pan, quick and easy, better than takeout meal that can be made at home tastier and with healthier ingredients. It's the easiest weeknight meal!",
                "ingredients": "• Vegetable oil - necessary for stir-frying \n• Tiger prawns - I love fresh tiger prawns in this dish, but this can be substituted easily with any kind of shrimp. \n• Eggs - fried rice staple. \n• White rice - freshly cooked is best, but you can use leftover rice. You will just need to add some water to soften the rice. \n• 1 tablespoon sugar \n• Vegetables - fresh or frozen carrots, green peas, and sweet corn. You can get creative and add in whatever vegetables you have on hand. Green beans would go really well in this. \n• Seasonings - sesame oil, maggi sauce, salt. Maggi sauce can be substituted with soy sauce. \n• Satay sauce - has a unique sour and slightly spicy taste. \n• Green onions - can be substituted with cilantro (but if using cilantro, it must be added at the end as a topping, as it will wilt under the heat). \n• Roasted white sesame seeds (optional) - for topping. \n• Masago caviar (optional) - similar to sushi roe.",
                "steps": "1. Cook the prawns over medium-high heat with ginger. \n2. Make some space and add in the eggs with a pinch of green onions, and scramble. \n3. Stir in carrots, sweet corn and peas (and any other vegetables if using). \n4. Then, stir in rice. \n5. Continuously stir to cook evenly and distribute. \n6. Add in seasoning (satay sauce, sesame oil and salt) and continuously stir. \n7. Add maggi sauce and green onions and stir to combine. \n8. Top with a sprinkle of sesame seeds and masago caviar (roe) on top, and serve.",
                "author": "Ace Lee",
                "like": true,
                "bookmark": true
            },
            {
                "id": 3,
                "title": "Salad With Chicken",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/chicsalad.jpg?alt=media&token=3d024430-9add-405e-9644-664bbacf70bf",
                "likes": 75,
                "description": "The easiest and most simple way to enjoy a delish pepperoni pizza with oozing cheese, savory pepperoni, and crispy crust with your family!",
                "ingredients": "• 1 cup shredded mozzarella cheese \n• 1 Pepperoni \n• 3 ¼ cups all-purpose flour \n• 2 (.25 ounce) of yeast \n• 1 tablespoon sugar \n• 1 ½ teaspoons salt \n• ½ can Tomato Paste \n• 1 teaspoon dried basil, crushed \n• ½ teaspoon garlic powder \n• ½ teaspoon onion powder \n• ¼ teaspoon black pepper",
                "steps": "1. Preheat the oven to 220 degrees C. Grease two 12-inch pizza pans. \n2. Make sauce: Whisk together water, tomato paste, basil, garlic powder, onion powder, sugar, salt, and pepper in a medium bowl until smooth. Set aside. \n3. Make crust: Combine 2 cups flour, yeast, sugar, and salt in a large bowl. Add warm water and oil; mix until well blended, about 1 minute. Gradually add remaining flour, a little at a time, until a soft, sticky dough forms. \n4. Transfer dough to a floured surface; knead until dough is smooth and elastic, about 4 minutes. Add more flour as needed. \n5. Divide dough in half. Lightly flour your hands, then pat each piece of dough onto the prepared pizza pans. \n6. Top dough with sauce, cheese, and pepperoni. \n7. Bake in the preheated oven until crusts are browned and cheese is bubbly, 18 to 20 minutes. Rotate pizza pans between the top and bottom oven racks halfway through baking.",
                "author": "Queen Bee",
                "like": false,
                "bookmark": true
            },
            {
                "id": 4,
                "title": "Chicken Karaage",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/chickaraage.jpg?alt=media&token=abb50e56-dd08-408e-b988-e6072d9578d8",
                "likes": 100,
                "description": "The easiest and most simple way to enjoy a delish pepperoni pizza with oozing cheese, savory pepperoni, and crispy crust with your family!",
                "ingredients": "• 1 cup shredded mozzarella cheese \n• 1 Pepperoni \n• 3 ¼ cups all-purpose flour \n• 2 (.25 ounce) of yeast \n• 1 tablespoon sugar \n• 1 ½ teaspoons salt \n• ½ can Tomato Paste \n• 1 teaspoon dried basil, crushed \n• ½ teaspoon garlic powder \n• ½ teaspoon onion powder \n• ¼ teaspoon black pepper",
                "steps": "1. Preheat the oven to 220 degrees C. Grease two 12-inch pizza pans. \n2. Make sauce: Whisk together water, tomato paste, basil, garlic powder, onion powder, sugar, salt, and pepper in a medium bowl until smooth. Set aside. \n3. Make crust: Combine 2 cups flour, yeast, sugar, and salt in a large bowl. Add warm water and oil; mix until well blended, about 1 minute. Gradually add remaining flour, a little at a time, until a soft, sticky dough forms. \n4. Transfer dough to a floured surface; knead until dough is smooth and elastic, about 4 minutes. Add more flour as needed. \n5. Divide dough in half. Lightly flour your hands, then pat each piece of dough onto the prepared pizza pans. \n6. Top dough with sauce, cheese, and pepperoni. \n7. Bake in the preheated oven until crusts are browned and cheese is bubbly, 18 to 20 minutes. Rotate pizza pans between the top and bottom oven racks halfway through baking.",
                "author": "Tommy Lee",
                "like": false,
                "bookmark": false
            },
            {
                "id": 5,
                "title": "Butter Chicken Rice",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/butterchicken.jpg?alt=media&token=dbc39026-7df9-4241-af18-dd08b77d83d4",
                "likes": 139,
                "description": "This simplified version of the Indian classic combines chicken, tomato sauce, and a slew of aromatic spices and herbs — all in one pot, for the simplest cleanup.",
                "ingredients": "• 2 lb boneless, skinless chicken breast(910 g), cubed \n• salt, to taste \n• pepper, to taste \n• 2 teaspoons chili powder, divided \n• ½ teaspoon turmeric \n• 6 tablespoons butter, divided \n• 1 ½ cups yellow onion(225 g), diced \n• 3 teaspoons garam masala \n• 1 teaspoon cumin \n• 1 teaspoon cayenne pepper \n• 1 tablespoon ginger, grated \n• 3 cloves garlic, minced \n• 1 cinnamon, 3 inch (8 cm) stick \n• 14 oz tomato sauce(395 g) \n• 1 cup water(240 mL) \n• 1 cup heavy cream(240 mL) \n• rice, for serving \n• fresh cilantro, chopped for garnish",
                "steps": "1. In a large bowl, season the chicken breast with salt, pepper, 1 teaspoon of chili powder, and the teaspoon of turmeric. Let sit for 15 minutes to marinate. \n2. Melt 2 tablespoons of butter in a large pot over medium heat. Brown the chicken, then remove from the pot. \n3. Melt another 2 tablespoons of butter in the pot, then add the onion, garam masala, remaining teaspoon of chili powder, the cumin, ginger, garlic, cayenne, cinnamon, salt and pepper. Cook until fragrant. \n4. Add the tomato sauce and bring to a simmer. \n5. Add the water and cream and return to a simmer. \n6. Return the chicken to the pot, cover, and simmer for another 10-15 minutes. \n7. Stir in the last 2 tablespoons of butter and season with more salt and pepper to taste. \n8. Serve the chicken over rice and garnish with cilantro.",
                "author": "Lil Wayne",
                "like": false,
                "bookmark": false
            },
        ],
        "yourRecipes": [
            {
                "id": 1,
                "title": "Butter Chicken Rice",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/butterchicken.jpg?alt=media&token=dbc39026-7df9-4241-af18-dd08b77d83d4",
                "last_updated": "10/5/22",
                "likes": 139,
                "description": "This simplified version of the Indian classic combines chicken, tomato sauce, and a slew of aromatic spices and herbs — all in one pot, for the simplest cleanup.",
                "ingredients": "• 2 lb boneless, skinless chicken breast(910 g), cubed \n• salt, to taste \n• pepper, to taste \n• 2 teaspoons chili powder, divided \n• ½ teaspoon turmeric \n• 6 tablespoons butter, divided \n• 1 ½ cups yellow onion(225 g), diced \n• 3 teaspoons garam masala \n• 1 teaspoon cumin \n• 1 teaspoon cayenne pepper \n• 1 tablespoon ginger, grated \n• 3 cloves garlic, minced \n• 1 cinnamon, 3 inch (8 cm) stick \n• 14 oz tomato sauce(395 g) \n• 1 cup water(240 mL) \n• 1 cup heavy cream(240 mL) \n• rice, for serving \n• fresh cilantro, chopped for garnish",
                "steps": "1. In a large bowl, season the chicken breast with salt, pepper, 1 teaspoon of chili powder, and the teaspoon of turmeric. Let sit for 15 minutes to marinate. \n2. Melt 2 tablespoons of butter in a large pot over medium heat. Brown the chicken, then remove from the pot. \n3. Melt another 2 tablespoons of butter in the pot, then add the onion, garam masala, remaining teaspoon of chili powder, the cumin, ginger, garlic, cayenne, cinnamon, salt and pepper. Cook until fragrant. \n4. Add the tomato sauce and bring to a simmer. \n5. Add the water and cream and return to a simmer. \n6. Return the chicken to the pot, cover, and simmer for another 10-15 minutes. \n7. Stir in the last 2 tablespoons of butter and season with more salt and pepper to taste. \n8. Serve the chicken over rice and garnish with cilantro.",
                "author": "Lil Wayne"
            },
            {
                "id": 2,
                "title": "Salad With Chicken",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/chicsalad.jpg?alt=media&token=3d024430-9add-405e-9644-664bbacf70bf",
                "last_updated": "8/1/22",
                "likes": 75,
                "description": "The easiest and most simple way to enjoy a delish pepperoni pizza with oozing cheese, savory pepperoni, and crispy crust with your family!",
                "ingredients": "• 1 cup shredded mozzarella cheese \n• 1 Pepperoni \n• 3 ¼ cups all-purpose flour \n• 2 (.25 ounce) of yeast \n• 1 tablespoon sugar \n• 1 ½ teaspoons salt \n• ½ can Tomato Paste \n• 1 teaspoon dried basil, crushed \n• ½ teaspoon garlic powder \n• ½ teaspoon onion powder \n• ¼ teaspoon black pepper",
                "steps": "1. Preheat the oven to 220 degrees C. Grease two 12-inch pizza pans. \n2. Make sauce: Whisk together water, tomato paste, basil, garlic powder, onion powder, sugar, salt, and pepper in a medium bowl until smooth. Set aside. \n3. Make crust: Combine 2 cups flour, yeast, sugar, and salt in a large bowl. Add warm water and oil; mix until well blended, about 1 minute. Gradually add remaining flour, a little at a time, until a soft, sticky dough forms. \n4. Transfer dough to a floured surface; knead until dough is smooth and elastic, about 4 minutes. Add more flour as needed. \n5. Divide dough in half. Lightly flour your hands, then pat each piece of dough onto the prepared pizza pans. \n6. Top dough with sauce, cheese, and pepperoni. \n7. Bake in the preheated oven until crusts are browned and cheese is bubbly, 18 to 20 minutes. Rotate pizza pans between the top and bottom oven racks halfway through baking.",
                "author": "Lil Wayne"
            },
            {
                "id": 3,
                "title": "Chicken Karaage",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/chickaraage.jpg?alt=media&token=abb50e56-dd08-408e-b988-e6072d9578d8",
                "last_updated": "24/6/21",
                "likes": 100,
                "description": "The easiest and most simple way to enjoy a delish pepperoni pizza with oozing cheese, savory pepperoni, and crispy crust with your family!",
                "ingredients": "• 1 cup shredded mozzarella cheese \n• 1 Pepperoni \n• 3 ¼ cups all-purpose flour \n• 2 (.25 ounce) of yeast \n• 1 tablespoon sugar \n• 1 ½ teaspoons salt \n• ½ can Tomato Paste \n• 1 teaspoon dried basil, crushed \n• ½ teaspoon garlic powder \n• ½ teaspoon onion powder \n• ¼ teaspoon black pepper",
                "steps": "1. Preheat the oven to 220 degrees C. Grease two 12-inch pizza pans. \n2. Make sauce: Whisk together water, tomato paste, basil, garlic powder, onion powder, sugar, salt, and pepper in a medium bowl until smooth. Set aside. \n3. Make crust: Combine 2 cups flour, yeast, sugar, and salt in a large bowl. Add warm water and oil; mix until well blended, about 1 minute. Gradually add remaining flour, a little at a time, until a soft, sticky dough forms. \n4. Transfer dough to a floured surface; knead until dough is smooth and elastic, about 4 minutes. Add more flour as needed. \n5. Divide dough in half. Lightly flour your hands, then pat each piece of dough onto the prepared pizza pans. \n6. Top dough with sauce, cheese, and pepperoni. \n7. Bake in the preheated oven until crusts are browned and cheese is bubbly, 18 to 20 minutes. Rotate pizza pans between the top and bottom oven racks halfway through baking.",
                "author": "Lil Wayne"
            },
            {
                "id": 4,
                "title": "Seafood Fried Rice",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/seafoodfriedrice.jpg?alt=media&token=07a0ce8c-e361-40d2-b58c-d30a282a2759",
                "last_updated": "23/4/21",
                "likes": 250,
                "description": "It's a one-pan, quick and easy, better than takeout meal that can be made at home tastier and with healthier ingredients. It's the easiest weeknight meal!",
                "ingredients": "• Vegetable oil - necessary for stir-frying \n• Tiger prawns - I love fresh tiger prawns in this dish, but this can be substituted easily with any kind of shrimp. \n• Eggs - fried rice staple. \n• White rice - freshly cooked is best, but you can use leftover rice. You will just need to add some water to soften the rice. \n• 1 tablespoon sugar \n• Vegetables - fresh or frozen carrots, green peas, and sweet corn. You can get creative and add in whatever vegetables you have on hand. Green beans would go really well in this. \n• Seasonings - sesame oil, maggi sauce, salt. Maggi sauce can be substituted with soy sauce. \n• Satay sauce - has a unique sour and slightly spicy taste. \n• Green onions - can be substituted with cilantro (but if using cilantro, it must be added at the end as a topping, as it will wilt under the heat). \n• Roasted white sesame seeds (optional) - for topping. \n• Masago caviar (optional) - similar to sushi roe.",
                "steps": "1. Cook the prawns over medium-high heat with ginger. \n2. Make some space and add in the eggs with a pinch of green onions, and scramble. \n3. Stir in carrots, sweet corn and peas (and any other vegetables if using). \n4. Then, stir in rice. \n5. Continuously stir to cook evenly and distribute. \n6. Add in seasoning (satay sauce, sesame oil and salt) and continuously stir. \n7. Add maggi sauce and green onions and stir to combine. \n8. Top with a sprinkle of sesame seeds and masago caviar (roe) on top, and serve.",
                "author": "Lil Wayne"
            }
        ],
        "bookmarkedRecipes": [
            {
                "id": 1,
                "title": "Pepperoni Pizza",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/pepperonipizza.jpg?alt=media&token=e10ae8e7-2117-4ec6-a66b-a812465825a8",
                "likes": 150,
                "description": "The easiest and most simple way to enjoy a delish pepperoni pizza with oozing cheese, savory pepperoni, and crispy crust with your family!",
                "ingredients": "• 1 cup shredded mozzarella cheese \n• 1 Pepperoni \n• 3 ¼ cups all-purpose flour \n• 2 (.25 ounce) of yeast \n• 1 tablespoon sugar \n• 1 ½ teaspoons salt \n• ½ can Tomato Paste \n• 1 teaspoon dried basil, crushed \n• ½ teaspoon garlic powder \n• ½ teaspoon onion powder \n• ¼ teaspoon black pepper",
                "steps": "1. Preheat the oven to 220 degrees C. Grease two 12-inch pizza pans. \n2. Make sauce: Whisk together water, tomato paste, basil, garlic powder, onion powder, sugar, salt, and pepper in a medium bowl until smooth. Set aside. \n3. Make crust: Combine 2 cups flour, yeast, sugar, and salt in a large bowl. Add warm water and oil; mix until well blended, about 1 minute. Gradually add remaining flour, a little at a time, until a soft, sticky dough forms. \n4. Transfer dough to a floured surface; knead until dough is smooth and elastic, about 4 minutes. Add more flour as needed. \n5. Divide dough in half. Lightly flour your hands, then pat each piece of dough onto the prepared pizza pans. \n6. Top dough with sauce, cheese, and pepperoni. \n7. Bake in the preheated oven until crusts are browned and cheese is bubbly, 18 to 20 minutes. Rotate pizza pans between the top and bottom oven racks halfway through baking.",
                "author": "John Doe",
                "like": false,
                "bookmark": true
            },
            {
                "id": 2,
                "title": "Seafood Fried Rice",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/seafoodfriedrice.jpg?alt=media&token=07a0ce8c-e361-40d2-b58c-d30a282a2759",
                "likes": 250,
                "description": "It's a one-pan, quick and easy, better than takeout meal that can be made at home tastier and with healthier ingredients. It's the easiest weeknight meal!",
                "ingredients": "• Vegetable oil - necessary for stir-frying \n• Tiger prawns - I love fresh tiger prawns in this dish, but this can be substituted easily with any kind of shrimp. \n• Eggs - fried rice staple. \n• White rice - freshly cooked is best, but you can use leftover rice. You will just need to add some water to soften the rice. \n• 1 tablespoon sugar \n• Vegetables - fresh or frozen carrots, green peas, and sweet corn. You can get creative and add in whatever vegetables you have on hand. Green beans would go really well in this. \n• Seasonings - sesame oil, maggi sauce, salt. Maggi sauce can be substituted with soy sauce. \n• Satay sauce - has a unique sour and slightly spicy taste. \n• Green onions - can be substituted with cilantro (but if using cilantro, it must be added at the end as a topping, as it will wilt under the heat). \n• Roasted white sesame seeds (optional) - for topping. \n• Masago caviar (optional) - similar to sushi roe.",
                "steps": "1. Cook the prawns over medium-high heat with ginger. \n2. Make some space and add in the eggs with a pinch of green onions, and scramble. \n3. Stir in carrots, sweet corn and peas (and any other vegetables if using). \n4. Then, stir in rice. \n5. Continuously stir to cook evenly and distribute. \n6. Add in seasoning (satay sauce, sesame oil and salt) and continuously stir. \n7. Add maggi sauce and green onions and stir to combine. \n8. Top with a sprinkle of sesame seeds and masago caviar (roe) on top, and serve.",
                "author": "Ace Lee",
                "like": true,
                "bookmark": true
            },
            {
                "id": 3,
                "title": "Salad With Chicken",
                "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/chicsalad.jpg?alt=media&token=3d024430-9add-405e-9644-664bbacf70bf",
                "likes": 75,
                "description": "The easiest and most simple way to enjoy a delish pepperoni pizza with oozing cheese, savory pepperoni, and crispy crust with your family!",
                "ingredients": "• 1 cup shredded mozzarella cheese \n• 1 Pepperoni \n• 3 ¼ cups all-purpose flour \n• 2 (.25 ounce) of yeast \n• 1 tablespoon sugar \n• 1 ½ teaspoons salt \n• ½ can Tomato Paste \n• 1 teaspoon dried basil, crushed \n• ½ teaspoon garlic powder \n• ½ teaspoon onion powder \n• ¼ teaspoon black pepper",
                "steps": "1. Preheat the oven to 220 degrees C. Grease two 12-inch pizza pans. \n2. Make sauce: Whisk together water, tomato paste, basil, garlic powder, onion powder, sugar, salt, and pepper in a medium bowl until smooth. Set aside. \n3. Make crust: Combine 2 cups flour, yeast, sugar, and salt in a large bowl. Add warm water and oil; mix until well blended, about 1 minute. Gradually add remaining flour, a little at a time, until a soft, sticky dough forms. \n4. Transfer dough to a floured surface; knead until dough is smooth and elastic, about 4 minutes. Add more flour as needed. \n5. Divide dough in half. Lightly flour your hands, then pat each piece of dough onto the prepared pizza pans. \n6. Top dough with sauce, cheese, and pepperoni. \n7. Bake in the preheated oven until crusts are browned and cheese is bubbly, 18 to 20 minutes. Rotate pizza pans between the top and bottom oven racks halfway through baking.",
                "author": "Ace Lee",
                "like": false,
                "bookmark": true
            }
        ]
    }
);

// const yourRecipeData = JSON.stringify(
//     {
//         "yourRecipes": [
//             {
//                 "id": 1,
//                 "title": "Butter Chicken With Rice",
//                 "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/butterchicken.jpg?alt=media&token=dbc39026-7df9-4241-af18-dd08b77d83d4",
//                 "last_updated": "10/5/22",
//                 "likes": 139,
//             },
//             {
//                 "id": 2,
//                 "title": "Salad With Chicken",
//                 "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/chicsalad.jpg?alt=media&token=3d024430-9add-405e-9644-664bbacf70bf",
//                 "last_updated": "8/1/22",
//                 "likes": 75,
//             },
//             {
//                 "id": 3,
//                 "title": "Chicken Karaage",
//                 "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/chickaraage.jpg?alt=media&token=abb50e56-dd08-408e-b988-e6072d9578d8",
//                 "last_updated": "24/6/21",
//                 "likes": 100,
//             },
//             {
//                 "id": 4,
//                 "title": "Seafood Fried Rice",
//                 "imageURL": "https://firebasestorage.googleapis.com/v0/b/mad-ca3-a9576.appspot.com/o/seafoodfriedrice.jpg?alt=media&token=07a0ce8c-e361-40d2-b58c-d30a282a2759",
//                 "last_updated": "23/4/21",
//                 "likes": 250,
//             }
//         ]
//     }
// );

app.get('/getRecipes', (req, res) => {
    res.send(data);
});

// app.get('/getYourRecipes', (req, res) => {
//     res.send(yourRecipeData);
// });

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Recipe app listening at http://%s:%s", host, port)
})