import logo from './logo.png'
import add_icon from './add_icon.png'
import order_icon from './order_icon.png'
import profile_image from './profile_image.png'
import upload_area from './upload_area.png'
import parcel_icon from './parcel_icon.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import add_icon_green from './add_icon_green.png'
import add_icon_white from './add_icon_white.png'
import bag_icon from './bag_icon.png'
import basket_icon from './basket_icon.png'
import cross_icon from './cross_icon.png'
import facebook_icon from './facebook_icon.png'
import header_img from './header_img.png'
import linkedin_icon from './linkedin_icon.png'
import logout_icon from './logout_icon.png'
import profile_icon from './profile_icon.png'
import rating_starts from './rating_starts.png'
import remove_icon_red from './remove_icon_red.png'
import search_icon from './search_icon.png'
import selector_icon from './selector_icon.png'
import twitter_icon from './twitter_icon.png'
import react_svg from './react.svg'

import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_20 from './food_20.png'
import food_21 from './food_21.png'
import food_22 from './food_22.png'
import food_23 from './food_23.png'
import food_24 from './food_24.png'
import food_25 from './food_25.png'
import food_26 from './food_26.png'
import food_27 from './food_27.png'
import food_28 from './food_28.png'
import food_29 from './food_29.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'

export const assets = {
    logo,
    add_icon,
    order_icon,
    profile_image,
    upload_area,
    parcel_icon,
    app_store,
    play_store,
    add_icon_green,
    add_icon_white,
    bag_icon,
    basket_icon,
    cross_icon,
    facebook_icon,
    header_img,
    linkedin_icon,
    logout_icon,
    profile_icon,
    rating_starts,
    remove_icon_red,
    search_icon,
    selector_icon,
    twitter_icon,
    react_svg,

    menu_1,
    menu_2,
    menu_3,
    menu_4,
    menu_5,
    menu_6,
    menu_7,
    menu_8,

    food_1,
    food_2,
    food_3,
    food_4,
    food_5,
    food_6,
    food_7,
    food_8,
    food_9,
    food_10,
    food_11,
    food_12,
    food_13,
    food_14,
    food_15,
    food_16,
    food_17,
    food_18,
    food_19,
    food_20,
    food_21,
    food_22,
    food_23,
    food_24,
    food_25,
    food_26,
    food_27,
    food_28,
    food_29,
    food_30,
    food_31,
    food_32,
}

export const url = 'http://localhost:4000'

export const menu_list = [
    { menu_name: "Salad", menu_image: menu_1 },
    { menu_name: "Rolls", menu_image: menu_2 },
    { menu_name: "Desserts", menu_image: menu_3 },
    { menu_name: "Sandwich", menu_image: menu_4 },
    { menu_name: "Cakes", menu_image: menu_5 },
    { menu_name: "Pasta", menu_image: menu_6 },
    { menu_name: "Noodles", menu_image: menu_7 },
    { menu_name: "Seafood", menu_image: menu_8 }
]
// -------------------- FOOD LIST --------------------
export const food_list = [
  // Salad Category
  { _id: "1",
     name: "Greek Salad",
      image: food_1,
       price: 12,
        description: "Fresh greens with tomatoes, cucumbers, olives and feta cheese.",
         category: "Salad" },

  { _id: "2",
     name: "Garden Salad", 
     image: food_2,
      price: 10,
       description:"Seasonal greens with cucumber, carrots and vinaigrette",
      category: "Salad" },

  { _id: "3",
    name: "Grilled Halloumi Salad",
     image: food_3,
      price: 13,
       description: "Grilled halloumi cheese with mixed greens and roasted vegetables.",
        category: "Salad" },

  { _id: "4",
     name: "Caesar Salad",
      image: food_15,
       price: 11,
        description: "Crisp romaine with creamy Caesar dressing and parmesan.",
         category: "Salad" },

  { _id: "5",
     name: "Pomegranate Salad",
      image: food_21,
       price: 13,
        description: "Fresh greens with pomegranate, cauliflower and herbs.",
         category: "Salad" },

  { _id: "6",
     name: "Asian Bowl Salad",
      image: food_22,
       price: 14,
        description: "Rice bowl with vegetables, egg and Asian dressing.",
        category: "Salad" },

  { _id: "7",
     name: "Salmon Salad",
      image: food_23,
       price: 12,
        description: "Grilled salmon on fresh greens with citrus dressing.", 
        category: "Salad" },
  { _id: "8",
     name: "Edamame Salad",
      image: food_32, 
      price: 10, 
      description: "Fresh edamame with asparagus and tomato.", 
      category: "Salad" },

  // Rolls Category
  { _id: "9",
     name: "Chicken Tikka Roll",
      image: food_5,
       price: 8,
        description: "Spiced chicken tikka wrapped in soft flatbread.",
         category: "Rolls" },

  { _id: "10",
     name: "Chicken Roll",
      image: food_6,
      price: 8,
       description: "Grilled chicken wrapped with fresh lettuce and tangy sauce.",
        category: "Rolls" },

  { _id: "11",
     name: "Paneer Roll",
      image: food_7,
       price: 9,
        description: "Spiced paneer with onions and chutney wrapped in flatbread.",
         category: "Rolls" },

  // Desserts Category
  { _id: "12",
     name: "Panna Cotta",
      image: food_8,
       price: 6,
        description: "Creamy Italian dessert with berry compote.",
         category: "Desserts" },

  { _id: "13", 
    name: "French Toast Dessert",
     image: food_9,
      price: 7,
       description: "Sweet French toast with ice cream and caramel.",
        category: "Desserts" },

  { _id: "14",
     name: "Strawberry Panna Cotta",
      image: food_10,
       price: 6,
        description: "Layered panna cotta with fresh strawberries.",
         category: "Desserts" },

  { _id: "15",
     name: "Cupcake",
      image: food_11,
       price: 5,
        description: "Moist cupcake with buttercream frosting and cherry.", 
        category: "Desserts" },

  // Sandwich Category
  { _id: "16",
     name: "Club Sandwich", 
     image: food_4,
      price: 9, 
      description: "Toasted bread layered with turkey, bacon, lettuce and tomato.",
       category: "Sandwich" },

  { _id: "17",
     name: "BLT Sandwich", 
     image: food_17,
      price: 8,
       description: "Bacon, lettuce and tomato served on toasted bread.",
        category: "Sandwich" },

  { _id: "18",
     name: "Veggie Sandwich",
      image: food_18,
       price: 7,
        description: "Fresh vegetables with herbs on whole grain bread.", 
        category: "Sandwich" },

  { _id: "19",
     name: "Grilled Veggie Sandwich",
      image: food_19,
       price: 8, 
       description: "Grilled vegetables with cheese on artisan bread.",
        category: "Sandwich" },

  { _id: "20",
     name: "Banh Mi Sandwich",
      image: food_20,
       price: 9, 
       description: "Vietnamese sandwich with pickled vegetables and herbs.",
        category: "Sandwich" },

  // Cakes Category (fixed!)
  { _id: "21",
     name: "Strawberry Cheesecake",
      image: food_12,
       price: 8,
        description: "Creamy cheesecake with fresh strawberry topping.", 
        category: "Cakes" },

  { _id: "22",
     name: "Blueberry Cake", 
     image: food_13,
      price: 18,
       description: "Light vanilla cake topped with fresh blueberries.",
        category: "Cakes" },

  { _id: "23",
     name: "Mango Cheesecake", 
     image: food_14,
      price: 17,
       description: "Smooth cheesecake with mango mousse topping.",
        category: "Cakes" },

  { _id: "24",
     name: "Ice Cream Cake",
      image: food_16, 
      price: 20,
       description: "Layered ice cream cake with colorful sprinkles.",
        category: "Cakes" },

  // Pasta Category
  { _id: "25",
     name: "Carbonara Pasta",
      image: food_24,
       price: 12,
        description: "Creamy pasta with bacon and parmesan cheese.", 
        category: "Pasta" },

  { _id: "26",
     name: "Tomato Pasta",
      image: food_25,
       price: 10,
        description: "Fusilli pasta in rich tomato sauce.",
         category: "Pasta" },

  { _id: "27",
     name: "Mushroom Pasta", 
     image: food_26,
      price: 11,
       description: "Creamy pasta with sautéed mushrooms.",
        category: "Pasta" },

  { _id: "28",
     name: "Chicken Pasta", 
     image: food_27,
      price: 13, 
      description: "Creamy pasta with grilled chicken and spinach.",
       category: "Pasta" },

  { _id: "29",
     name: "Aglio e Olio", 
     image: food_28,
      price: 10,
       description: "Spaghetti with garlic, olive oil and herbs.", 
       category: "Pasta" },

  // Noodles Category
  { _id: "30",
     name: "Spaghetti Marinara",
      image: food_29,
       price: 11,
        description: "Classic spaghetti in rich marinara sauce.",
         category: "Noodles" },

  { _id: "31",
     name: "Seafood Noodles", 
     image: food_30,
      price: 15,
       description: "Stir-fried noodles with prawns and seafood.",
        category: "Noodles" },

  { _id: "32",
     name: "Vietnamese Pho",
      image: food_31,
       price: 12,
        description: "Traditional Vietnamese noodle soup with herbs.",
         category: "Noodles" }
]
