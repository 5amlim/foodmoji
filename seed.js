require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Bakery', sortOrder: 10},
    {name: 'Seafood', sortOrder: 20},
    {name: 'Frozen', sortOrder: 30},
    {name: 'Dairy', sortOrder: 40},
    {name: 'Beverage', sortOrder: 50},
    {name: 'Personal', sortOrder: 50},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {title:"Chocolate Mousse Torte Cake",description:"Two rich, chocolate cake layers are filled with luscious chocolate whipped cream mousse, then covered with milk chocolate frosting and a dark chocolate glaze. This best selling delight is then garnished with fudge rosettes and dark chocolate shaves. Includes a Chocolate Occasion Plaque, matching Greeting Card and is packaged in an elegant gift box!",category:categories[0],brand:"Gaston’s Bakery", expDate:"05/15/2017",mfdDate:"05/10/2017",size:"7 inches in diameter",price:42.95,"stock":"5",image:"https://goldbelly.imgix.net/uploads/showcase_media_asset/image/93607/chocolate-outrage-cake.52608e8b20476800690445ad646ff7f5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1&w=2258",suggestion:["Serves 6 to 8","Ships Nationwide in Refrigerated Packaging","Certified Kof-K Kosher"],allergens:["Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts.","Our facility is not Gluten Free."]},
    {title:"Triple Chocolate Enrobed Brownie Cake",description:"This is the perfect cake for the true chocolate lover. Our dense, moist brownie cake is covered in not one, but three layers of decadent chocolate. The cake is coated with a rich chocolate fondant icing, showered with dark chocolate shavings and then finally drizzled with milk and dark chocolate glazes. This triple-chocolate delight is sure to satisfy any sweet tooth. Each cake is delivered in an elegant gift box with a chocolate occasion plaque and personalized greeting card to celebrate any occasion.",category:categories[0],brand:"Gaston’s Bakery",expDate:"05/16/2017",mfdDate:"05/12/2017",size:"7 inches in diameter",price:39.95,"stock":"2",image:"https://handletheheat.com/wp-content/uploads/2019/01/Raspberry-Brownies-SQUARE-500x500.jpg",suggestion:["Serves 6 to 8","Certified KOF-K Kosher"],allergens:["Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts.","Our facility is not Gluten Free."]},
    {title:"Reddi Wip Dairy Whipped Topping Extra Creamy Aerosol Refrigerated",description:"Reddi Wip® Extra Creamy Sweetened Dairy Whipped Topping. Milk from cows. Not treated with artificial growth hormone*. Made with real cream. No artificial flavors or sweeteners. 15 calories per 2 tbsp. Ultra-pasteurized.",category:categories[3],brand:"Daiya Dairy",expDate:"05/14/2017",mfdDate:"08/14/2017",size:"6.5 oz can",price:3.19,"stock":"7",image:"https://images.albertsons-media.com/is/image/ABS/960057222-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available",suggestion:[" Shake it! Shake it! 4 times before use then remove cap.","Turn can completely upside down and press nozzle sideways with finger.","Rinse nozzle thoroughly with warm water. "],allergens:["Contains: milk.","Deliberately concentrating and inhaling the contents can be harmful or fatal.","Contents under pressure.","Do not expose to temperatures above 120 degrees F.","Do not puncture or incinerate can.","Keep out of the reach of children.","Choking hazard, cap contains small parts."]},
    {title:"Red Velvet Chocolate Cake",description:"A truly decadent southern classic: two rich layers of red chocolate cake, fill and covered with the finest, pure cream cheese frosting, and then garnished with white chocolate sprinkles around the sides. Includes a Chocolate Occasion Plaque, matching Greeting Card and is packaged in an elegant gift box!",category:categories[0],brand:"Cake Factory",expDate:"05/18/2017",mfdDate:"05/15/2017",size:"7 inches in diameter",price:42.95,"stock":"4",image:"http://www.sweetestmenu.com/wp-content/uploads/2016/10/redvelvetcake8.jpg",suggestion:["Serves 6 to 8","Certified KOF-K Kosher","Ships Nationwide in Refrigerated Packaging"],allergens:["Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts.","Our facility is not Gluten Free."]},
    {title:"Rice Dream Original Non-Dairy Beverage Organic",description:"Rice Dream® Organic Original Enriched Rice Drink. Value size. Calcium vitamin D. Easy to digest. USDA Organic. Non GMO project.",category:categories[3],brand:"Rice Dream",expDate:"05/14/2017",mfdDate:"05/17/2017",size:"64 oz ctn",price:5.19,"stock":"21",image:"https://images.albertsons-media.com/is/image/ABS/116150313-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available",suggestion:["Shake well.","Serve chilled.","Stays fresh 7-10 days in refrigerator after opening."],allergens:["Not for use as an infant formula.","For children under age 5, consult your child's doctor."]},
    {title:"Member's Mark Mini Plain Sliced Bagels",description:"Kettle boiled like they do in the Big Apple, these heat-and-serve mini bagels are made with premium ingredients like real yeast and triple-filtered water.",category:categories[0],brand:"Member's Mark",expDate:"05/28/2017",mfdDate:"05/15/2017",size:"12ct",price:20.99,"stock":"3",image:"https://www.feesers.com/content/uploads/itemImages/560633_1-600x462.jpg",suggestion:["Authentic New York-style kettle boiled bagels","Soft, chewy and delicious","The taste and quality you'd expect from your local bagel shop","Mini sized for snacking"],allergens:[]},
    {title:"Daiya Dairy Free Greek Yogurt Black Cherry",description:"Daiya Dairy Free Black Cherry Greek Yogurt Style. New. Rich and creamy lots of fruit. Deliciously Dairy-Free®. Soy free. 8g protein*. 3g* fiber. Excellent source of calcium. Probiotics. Excellent source of Vitamin B12.",category:categories[3],brand:"Daiya Dairy",expDate:"05/13/2017",mfdDate:"05/15/2017",size:"5.3 oz cup",price:1.95,"stock":"15",image:"https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00871459003047/06bfb87d6c18aa6cbaff07cb9839ec23_large.png&width=512&type=webp&quality=90",suggestion:["Keep refrigerated."],allergens:["Contains coconut."]},
    {title:"Daily Chef Mini Candy Cookies",description:"Delicious mini candy cookies baked fresh in Club.",category:categories[0],brand:"Daily Chef",expDate:"05/30/2017",mfdDate:"05/15/2017",size:"36ct",price:28.99,"stock":"12",image:"https://img.freepik.com/premium-photo/chocolate-chip-cookies-white-background_146936-712.jpg?w=2000",suggestion:[],allergens:[]},
    {title:"So Delicious Cultured Coconut Milk Yogurt Vanilla Dairy Soy Free Organic",description:"So Delicious® Dairy Free Coconut Milk Yogurt Alternative Vanilla. Made with organic coconut. Net Wt. 5.3 oz (150 g). Certified Vegan. Certified Gluten-Free®.",category:categories[3],brand:"So Delicious",expDate:"05/14/2017",mfdDate:"05/18/2017",size:"5.3 oz cup",price:2.09,"stock":"15",image:"https://p.kindpng.com/picc/s/207-2072843_download-yogurt-transparent-background-for-designing-bowl-of.png",suggestion:["Keep refrigerated."],allergens:["Contains coconut.","Produced in a facility that also processes other tree nuts and soy.","We apply strict quality control measures to prevent contamination by undeclared food allergens"]},
    {title:"Gaston’s Bakery Small Puff Pastry Squares",description:"Easily create delicious pies, savory hors d’oeuvres, tarts, baklava and more with these ready-to-use puff pastry squares. Puff pastry bakes up light and flaky and pairs perfectly with a wide range of toppings and fillings.",category:categories[0],brand:"Gaston’s Bakery",expDate:"05/18/2017",mfdDate:"05/13/2017",size:"32 pieces",price:39.95,"stock":"2",image:"http://images-gmi-pmc.edge-generalmills.com/644711d0-7687-4a15-8db6-968c12a894a0.jpg",suggestion:[],allergens:["Not available to ship to Hawaii or Alaska.","Contains wheat and milk"]},
    {title:"Signature Bakery Assortment",description:"Our Signature Bakery Assortment is ideal when you need a cookie delivery. This bakery gift is filled with baked goods such as lemon poppyseed coffee cake and baklava handcrafted in our own bakery. We've added some of our most popular cookie types, from raspberry galettes to Moose Munch® Cookies, to round out this generous collection.",category:categories[0],brand:"Signature Bakery",expDate:"05/24/2017",mfdDate:"05/14/2017",size:"Large",price:59.99,"stock":"6",image:"https://c4.wallpaperflare.com/wallpaper/989/480/884/bread-rolls-buns-cakes-wallpaper-preview.jpg",suggestion:[],allergens:["Unless otherwise noted, products contain milk, wheat, soy and egg, and were produced on equipment that processes peanuts, almonds, hazelnuts, pecans, walnuts.","Our facility is not Gluten Free."]},
    {title:"Gaston’s Bakery Croissants",description:"Our vendor will ship directly to you. Allow 5-7 business days for delivery. Not available to ship to Hawaii or Alaska. $7.50 handling and shipping fee applied in cart to ensure freshness.",category:categories[0],brand:"Gaston’s Bakery",expDate:"05/25/2017",mfdDate:"05/15/2017",size:"Set of 15",price:34.95,"stock":"8",image:"https://www.pngitem.com/pimgs/m/154-1542993_roissant-png-transparent-background-croissant-png-png-download.png",suggestion:["15 ready-to-bake croissants"],allergens:[]},
    {title:"Daiya Dairy Free Greek Yogurt Black Cherry",description:"Daiya Dairy Free Black Cherry Greek Yogurt Style. New. Rich and creamy and lots of fruit. Deliciously Dairy-Free®. Soy free. 8g protein*. 3g* fiber. Excellent source of calcium. Probiotics. Excellent source of Vitamin B12.",category:categories[3],brand:"Daiya Dairy",expDate:"05/13/2017",mfdDate:"05/15/2017",size:"5.3 oz cup",price:1.92,"stock":"15",image:"https://www.kindpng.com/picc/m/207-2072898_yogurt-png-pic-transparent-background-greek-yogurt-png.png",suggestion:["Keep refrigerated."],allergens:["Contains coconut."]},
    {title:"Celeste Pizza For One Vegetable Frozen",description:"Celeste® Pizza For One™ Vegetable. Authentic Italian Since 1930. Microwaves In Minutes. Truecookplus®. With Green Red Peppers, Mushrooms, Onions Olives. ",category:categories[2],brand:"Celeste Pizza",expDate:"03/14/2017",mfdDate:"03/14/2018",size:"5.6 oz box",price:1,"stock":"102",image:"https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2Farchive%2Fb36036a54e1cf9c084f4b702a63e5a08f1e98983",suggestion:["Do not put microwave disk in conventional oven.","Place baking sheet on center oven rack; preheat oven to 400°F.","Remove frozen pizza from carton; unwrap."],allergens:[]},
    {title:"Nestle Coffee-mate Powder Coffee Creamer Original",description:"Nestle® Coffee-Mate® The Original Coffee Creamer. Easy-grip handle. This product is non-dairy, lactose-free, cholesterol-free and gluten-free. Please recycle. Gluten free. Lactose free. Per 1 tsp: 10 calories. 0.5g sat fat, 3% DV. 0mg sodium, 0% DV. 0g sugars.",category:categories[3],brand:"Nestle",expDate:"03/14/2017",mfdDate:"9/14/2017",size:"35.3 oz can",price:6.99,"stock":"12",image:"https://www.goodnes.com/sites/g/files/jgfbjl321/files/gdn_product/field_product_images/coffeemate-82be21191841604ce59ffe0c475a6136ee56d325.png",suggestion:["Spoon Coffee-Mate into prepared coffee, tea, or cocoa.","Stir and enjoy!"],allergens:["Contains: a milk derivative."]},
    {title:"Nature's Promise Free from Vanilla Almond Milk Refrigerated",description:"Nature's Promise™ Vanilla Almondmilk. Free from: Artificial colors. Artificial flavors. Artificial preservatives. Naturally flavored. Calcium enriched. Excellent source of vitamin D. Lactose \u0026 dairy free.",category:categories[3],brand:"Nature's Promise",expDate:"05/14/2017",mfdDate:"05/16/2017",size:"32 oz ctn",price:2.02,"stock":"1",image:"https://www.pngmart.com/files/21/Almond-Milk-PNG-Transparent.png",suggestion:["Shake well + serve chilled.","Refrigerate after opening and use within 7-10 days."],allergens:[]},
    {title:"Weight Watchers Smart Ones Thin Crust Pizza Pepperoni",description:"Weight Watchers Smart Ones® Thin Crust Pepperoni Pizza. Savory Italian recipes. With tomato sauce and reduced fat cheese. 17g of protein. U.S. inspected and passed by Department of Agriculture.",category:categories[2],brand:"Weight Watchers",expDate:"05/14/2017",mfdDate:"01/14/2018",size:"4.4 oz box",price:2.39,"stock":"51",image:"https://www.pngitem.com/pimgs/m/393-3931265_thin-crust-pepperoni-pizza-slice-hd-png-download.png",suggestion:["Keep frozen.","Do not put microwave disk in conventional oven.","Open carton at perforated strip.","Remove frozen pizza from carton; unwrap."],allergens:[]},
    {title:"Kellogg's Special K Flatbread Breakfast Sandwich, Sausage, Egg, and Cheese",description:"Craving something warm and delicious to help you start your morning? Add a breakfast revelation to your morning routine. Special K Flatbread Breakfast Sandwiches are a mouthwatering way to start your day on the right track. Multigrain flatbread, real eggs, sausage and cheese will help keep your taste buds very happy.",category:categories[2],brand:"Kellogg's",expDate:"04/11/2017",mfdDate:"04/10/2018",size:"4 ct",price:7.49,"stock":"11",image:"https://i.pinimg.com/originals/d4/50/aa/d450aa83e974012cc2444cd25cb96ca1.png",suggestion:["Keep frozen."],allergens:["Contains Eggs","Contains Wheat","Contains Milk Ingredients"]},
    {title:"Kellogg's Eggo Chocolate Chip Waffles",description:"Get a sweet start to your morning with Eggo® Chocolate Chip waffles. They have a light, crispy texture and a yummy chocolatey taste that makes eating breakfast a real delight! (from Kellogg's)",category:categories[2],brand:"Kellogg's",expDate:"05/14/2017",mfdDate:"08/14/2017",size:"10 ct",price:3.32,"stock":"11",image:"https://assets.epicurious.com/photos/5cbf70ed38289267a6293613/4:6/w_2554,h_3831,c_limit/Gourmet-Waffle-Recipe-18042019.jpg",suggestion:["Keep frozen."],allergens:["Contains Eggs","Contains Wheat","Contains Milk Ingredients","Contains Soy"]},
    {title:"Deep Cocktail Samosa (Potato Pea)",description:"Crispy triangles filled with spicy potatoes and peas.",category:categories[2],brand:"Deep",expDate:"03/21/2017",mfdDate:"08/03/2017",size:"40 pcs",price:4.99,"stock":"6",image:"https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Indian-Punjabi-Samosa-Recipe.jpg",suggestion:["Keep frozen."],allergens:["Contains Eggs","High Spices","Contains Preservatives"]},
    {title:"Cold-Pressed Orange Juice",description:"Cold-pressed each morning. Organic oranges",category:categories[4],brand:"FOODMoji",expDate:"03/21/2017",mfdDate:"08/03/2017",size:"",price:4.99,"stock":"6",image:"https://i.pinimg.com/originals/ab/57/65/ab5765312d7154966a7b7f218fbc0106.jpg",suggestion:["NA"],allergens:["NA"]},  
    {title:"Reusable Tote Bag",description:"Made with love in the USA",category:categories[5],brand:"NA",expDate:"NA",mfdDate:"08/03/2017",size:"",price:34.99,"stock":"6",image:"https://4.imimg.com/data4/GD/OI/MY-24415604/canvas-tote-bag-500x500.jpg",suggestion:["NA"],allergens:["NA"]}, 
]);

  console.log(items)

  process.exit();

})();
