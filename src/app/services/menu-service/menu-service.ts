import { Injectable, Service } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Menuservice {
  Menu = {
    starters: {
      name: 'starters',
      items: [
        {
          name: 'Hummus',
          description:
            'A creamy blend of chickpeas, tahini, lemon juice, and garlic, served with warm pita bread.',
          price: 1.99,
          category: 'vegetarian',
          imageUrl: 'assets/images/hummus.jpg',
        },
        {
          name: 'falafel',
          description:
            'Crispy, golden-brown balls made from ground chickpeas, herbs, and spices, served with tahini sauce.',
          price: 0.99,
          category: 'vegetarian',
          imageUrl: 'assets/images/falafel.jpg',
        },
        {
          name: 'Fattoush Salad',
          description:
            'A refreshing salad made with fresh vegetables, herbs, and crispy pita chips, dressed with a tangy sumac vinaigrette.',
          price: 2.99,
          category: 'vegetarian',
          imageUrl: 'assets/images/fattoush.jpg',
        },
        {
          name: 'Mutabbal',
          description:
            'A smoky and creamy eggplant dip made with roasted eggplant, tahini, garlic, and lemon juice, served with warm pita bread.',
          price: 2.49,
          category: 'vegetarian',
          imageUrl: 'assets/images/mutabbal.jpg',
        },
        {
          name: 'Kibbeh',
          description:
            'A traditional Middle Eastern dish made with ground meat, bulgur wheat, and spices, shaped into oval patties and fried until golden brown.',
          price: 3.99,
          category: 'non-vegetarian',
          imageUrl: 'assets/images/kibbeh.jpg',
        },
      ],
    },
    mains: {
      name: 'Mains ',
      items: [
        {
          name: 'Chicken Shawarma',
          description:
            'Marinated chicken cooked on a vertical rotisserie, served in a warm pita bread with garlic sauce and pickles.',
          price: 5.99,
          category: 'non-vegetarian',
          imageUrl: 'assets/images/chicken-shawarma.jpg',
        },
        {
          name: 'Beef Kofta',
          description:
            'Juicy beef meatballs seasoned with herbs and spices, served with a side of rice and grilled vegetables.',
          price: 6.99,
          category: 'non-vegetarian',
          imageUrl: 'assets/images/beef-kofta.jpg',
        },
        {
          name: 'Mansaf',
          description:
            'A traditional Jordanian dish made with lamb cooked in a yogurt sauce, served over a bed of rice and garnished with almonds and parsley.',
          price: 9.99,
          category: 'non-vegetarian',
          imageUrl: 'assets/images/mansaf.jpg',
        },
        {
          name: 'Lamb Tagine',
          description:
            'A slow-cooked Moroccan stew made with tender lamb, dried fruits, and aromatic spices, served with couscous.',
          price: 7.99,
          category: 'non-vegetarian',
          imageUrl: 'assets/images/lamb-tagine.jpg',
        },
      ],
    },
    grills: {
      name: 'Grills',
      items: [
        {
          name: 'Grilled Chicken',
          description:
            'Juicy chicken marinated in a blend of spices and grilled to perfection, served with a side of vegetables.',
          price: 8.99,
          category: 'non-vegetarian',
          imageUrl: 'assets/images/grilled-chicken.jpg',
        },
        {
          name: 'Grilled Salmon',
          description:
            'Fresh salmon fillet seasoned with herbs and grilled to perfection, served with a side of rice and vegetables.',
          price: 12.99,
          category: 'non-vegetarian',
          imageUrl: 'assets/images/grilled-salmon.jpg',
        },
        {
          name: 'Grilled sea bass',
          description:
            'A fresh sea bass fillet seasoned with herbs and grilled to perfection, served with a side of rice and vegetables.',
          price: 13.99,
          category: 'non-vegetarian',
          imageUrl: 'assets/images/grilled-sea-bass.jpg',
        },
        {
          name: 'Sish Tawook',
          description:
            'Tender pieces of marinated chicken skewered and grilled to perfection, served with garlic sauce and a side of rice.',
          price: 9.99,
          category: 'non-vegetarian',
          imageUrl: 'assets/images/sish-tawook.jpg',
        },
        {
          name: 'Grilled Lamb Chops',
          description:
            'Juicy lamb chops marinated in a blend of herbs and spices, grilled to perfection and served with a side of vegetables.',
          price: 14.99,
          category: 'non-vegetarian',
          imageUrl: 'assets/images/grilled-lamb-chops.jpg',
        },
      ],
    },
    desserts: {
      name: 'Desserts',
      items: [
        {
          name: 'Baklava',
          description:
            'A sweet pastry made of layers of filo dough filled with chopped nuts and sweetened with honey or syrup.',
          price: 3.99,
          category: 'vegetarian',
          imageUrl: 'assets/images/baklava.jpg',
        },
        {
          name: 'Knafeh',
          description:
            'A traditional Middle Eastern dessert made with shredded phyllo dough, cheese, and sweet syrup.',
          price: 4.99,
          category: 'vegetarian',
          imageUrl: 'assets/images/knafeh.jpg',
        },
        {
          name: 'Rice Pudding',
          description:
            'A creamy dessert made with rice, milk, sugar, and flavored with cinnamon or cardamom.',
          price: 2.99,
          category: 'vegetarian',
          imageUrl: 'assets/images/rice-pudding.jpg',
        },
        {
          name: 'Chocolate Mousse',
          description: 'A rich and creamy dessert made with chocolate, eggs, sugar, and cream.',
          price: 5.99,
          category: 'vegetarian',
          imageUrl: 'assets/images/chocolate-mousse.jpg',
        },
      ],
    },
    drinks: {
      name: 'Drinks',
      items: [
        {
          name: 'Mint Lemonade',
          description:
            'A refreshing blend of fresh mint leaves, lemon juice, and sugar, served over ice.',
          price: 1.99,
          category: 'non-alcoholic',
          imageUrl: 'assets/images/mint-lemonade.jpg',
        },
        {
          name: 'Pomegranate Juice',
          description: 'Freshly squeezed pomegranate juice, served chilled.',
          price: 2.49,
          category: 'non-alcoholic',
          imageUrl: 'assets/images/pomegranate-juice.jpg',
        },
        {
          name: 'Turkish Coffee',
          description:
            'A strong and flavorful coffee made with finely ground coffee beans and served in a small cup.',
          price: 2.99,
          category: 'non-alcoholic',
          imageUrl: 'assets/images/turkish-coffee.jpg',
        },
        {
          name: 'Arabic Tea',
          description:
            'A traditional tea made with black tea leaves, cardamom, and served with sugar and mint.',
          price: 1.49,
          category: 'non-alcoholic',
          imageUrl: 'assets/images/arabic-tea.jpg',
        },
        {
          name: 'Rose Water Lemonade',
          description: 'A refreshing lemonade infused with rose water, served over ice.',
          price: 2.99,
          category: 'non-alcoholic',
          imageUrl: 'assets/images/rose-water-lemonade.jpg',
        },
      ],
    },
  };
}