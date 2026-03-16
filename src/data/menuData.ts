import nastaImg from "@/assets/bharat-logo2.jpg";
import pakodaImg from "@/assets/food/pakoda.jpg";
import pavBhajiImg from "@/assets/food/pav-bhaji.jpg";
import burgerImg from "@/assets/food/burger.jpg";
import sandwichImg from "@/assets/food/sandwich.jpg";
import noodlesImg from "@/assets/food/noodles.jpg";
import pastaImg from "@/assets/food/pasta.jpg";
import southIndianImg from "@/assets/food/south-indian.jpg";
import chaatImg from "@/assets/food/chaat.jpg";
import momoImg from "@/assets/food/momo.jpg";
import pizzaImg from "@/assets/food/pizza.jpg";
import rollImg from "@/assets/food/roll.jpg";
import pestyImg from "@/assets/food/pesty.jpg";
import tandoorRotiImg from "@/assets/food/tandoor-roti.jpg";
import parathaImg from "@/assets/food/paratha.jpg";
import chawalImg from "@/assets/food/chawal.jpg";
import biryaniImg from "@/assets/food/biryani.jpg";
import dalImg from "@/assets/food/dal.jpg";
import bhartiyaImg from "@/assets/food/bhartiya.jpg";
import mushroomImg from "@/assets/food/mushroom.jpg";
import haraSabjiImg from "@/assets/food/hara-sabji.jpg";
import tandoorPaneerImg from "@/assets/food/tandoor-paneer.jpg";
import chineseImg from "@/assets/food/chinese.jpg";
import saladRaitaImg from "@/assets/food/salad-raita.jpg";
import soupImg from "@/assets/food/soup.jpg";
import thaliImg from "@/assets/food/thali.jpg";
import shakeImg from "@/assets/food/shake.jpg";
import icecreamImg from "@/assets/food/icecream.jpg";
import sweetsImg from "@/assets/food/sweets.jpg";

export interface MenuItem {
  name: string;
  nameEn: string;
  price: string;
  quantity?: string;
  veg: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  titleEn: string;
  emoji: string;
  image: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "nasta",
    title: "नाश्ता",
    titleEn: "Breakfast",
    emoji: "🥞",
    image: nastaImg,
    items: [
      { name: "पूरी सब्जी", nameEn: "Puri Sabzi", price: "45", quantity: "5 पीस", veg: true },
      { name: "छोले भटूरे", nameEn: "Chole Bhature", price: "65", quantity: "2 पीस", veg: true },
      { name: "हरी मिर्च पराठा", nameEn: "Green Chilli Paratha", price: "35", quantity: "1 पीस", veg: true },
      { name: "लाल मिर्च पराठा", nameEn: "Red Chilli Paratha", price: "30", quantity: "1 पीस", veg: true },
      { name: "अजवाइन पराठा", nameEn: "Ajwain Paratha", price: "35", quantity: "1 पीस", veg: true },
      { name: "सत्तू पराठा", nameEn: "Sattu Paratha", price: "45", quantity: "1 पीस", veg: true },
      { name: "आलू पराठा", nameEn: "Aloo Paratha", price: "40", quantity: "1 पीस", veg: true },
      { name: "पनीर पराठा", nameEn: "Paneer Paratha", price: "60", quantity: "1 पीस", veg: true },
      { name: "मिशी रोटी", nameEn: "Missi Roti", price: "30", quantity: "1 पीस", veg: true },
      { name: "सादा पराठा", nameEn: "Plain Paratha", price: "20", quantity: "1 पीस", veg: true },
      { name: "पोहा", nameEn: "Poha", price: "30", veg: true },
      { name: "ब्रेड ऑमलेट", nameEn: "Bread Omelette", price: "45", quantity: "2 पीस", veg: false },
      { name: "मैगी", nameEn: "Maggi", price: "35", veg: true },
      { name: "अंडा मैगी", nameEn: "Egg Maggi", price: "50", veg: false },
      { name: "पनीर मैगी", nameEn: "Paneer Maggi", price: "55", veg: true },
    ],
  },
  {
    id: "pakoda",
    title: "पकोड़ा",
    titleEn: "Pakoda",
    emoji: "🍡",
    image: pakodaImg,
    items: [
      { name: "मिक्स पकोड़ा", nameEn: "Mix Pakoda", price: "160/85", quantity: "फुल/हाफ", veg: true },
      { name: "पनीर पकोड़ा", nameEn: "Paneer Pakoda", price: "240/130", quantity: "फुल/हाफ", veg: true },
      { name: "आलू पकोड़ा", nameEn: "Aloo Pakoda", price: "120/70", quantity: "फुल/हाफ", veg: true },
      { name: "प्याज पकोड़ा", nameEn: "Onion Pakoda", price: "140/80", quantity: "फुल/हाफ", veg: true },
      { name: "ब्रेड पकोड़ा", nameEn: "Bread Pakoda", price: "20", quantity: "1 पीस", veg: true },
    ],
  },
  {
    id: "pav-bhaji",
    title: "पाव भाजी",
    titleEn: "Pav Bhaji",
    emoji: "🥪",
    image: pavBhajiImg,
    items: [
      { name: "बटर पाव भाजी", nameEn: "Butter Pav Bhaji", price: "70", quantity: "2 पाव", veg: true },
      { name: "पनीर पाव भाजी", nameEn: "Paneer Pav Bhaji", price: "90", quantity: "2 पाव", veg: true },
      { name: "एक्स्ट्रा पाव", nameEn: "Extra Pav", price: "10", quantity: "1 पीस", veg: true },
    ],
  },
  {
    id: "burger",
    title: "बर्गर",
    titleEn: "Burger",
    emoji: "🍔",
    image: burgerImg,
    items: [
      { name: "वेज बर्गर", nameEn: "Veg Burger", price: "40", veg: true },
      { name: "चीज बर्गर", nameEn: "Cheese Burger", price: "55", veg: true },
      { name: "पनीर बर्गर", nameEn: "Paneer Burger", price: "60", veg: true },
      { name: "चिकन बर्गर", nameEn: "Chicken Burger", price: "70", veg: false },
    ],
  },
  {
    id: "sandwich",
    title: "सैंडविच",
    titleEn: "Sandwich",
    emoji: "🥪",
    image: sandwichImg,
    items: [
      { name: "वेज सैंडविच", nameEn: "Veg Sandwich", price: "35", veg: true },
      { name: "ग्रिल सैंडविच", nameEn: "Grill Sandwich", price: "50", veg: true },
      { name: "पनीर सैंडविच", nameEn: "Paneer Sandwich", price: "60", veg: true },
      { name: "चिकन सैंडविच", nameEn: "Chicken Sandwich", price: "75", veg: false },
    ],
  },
  {
    id: "noodles",
    title: "नूडल्स",
    titleEn: "Noodles",
    emoji: "🍝",
    image: noodlesImg,
    items: [
      { name: "वेज नूडल्स", nameEn: "Veg Noodles", price: "80/50", quantity: "फुल/हाफ", veg: true },
      { name: "सिंगापुरी नूडल्स", nameEn: "Singapuri Noodles", price: "100/60", quantity: "फुल/हाफ", veg: true },
      { name: "हक्का नूडल्स", nameEn: "Hakka Noodles", price: "110/70", quantity: "फुल/हाफ", veg: true },
      { name: "चिकन नूडल्स", nameEn: "Chicken Noodles", price: "130/80", quantity: "फुल/हाफ", veg: false },
    ],
  },
  {
    id: "pasta",
    title: "पास्ता",
    titleEn: "Pasta",
    emoji: "🍝",
    image: pastaImg,
    items: [
      { name: "रेड सॉस पास्ता", nameEn: "Red Sauce Pasta", price: "80", veg: true },
      { name: "वाइट सॉस पास्ता", nameEn: "White Sauce Pasta", price: "100", veg: true },
      { name: "मिक्स सॉस पास्ता", nameEn: "Mix Sauce Pasta", price: "120", veg: true },
    ],
  },
  {
    id: "south-indian",
    title: "साउथ इंडियन",
    titleEn: "South Indian",
    emoji: "🍛",
    image: southIndianImg,
    items: [
      { name: "सादा डोसा", nameEn: "Plain Dosa", price: "60", veg: true },
      { name: "मसाला डोसा", nameEn: "Masala Dosa", price: "80", veg: true },
      { name: "पनीर डोसा", nameEn: "Paneer Dosa", price: "100", veg: true },
      { name: "मैसूर मसाला डोसा", nameEn: "Mysore Masala Dosa", price: "110", veg: true },
      { name: "इडली सांबर", nameEn: "Idli Sambhar", price: "60", quantity: "2 पीस", veg: true },
      { name: "वड़ा सांबर", nameEn: "Vada Sambhar", price: "70", quantity: "2 पीस", veg: true },
    ],
  },
  {
    id: "chaat",
    title: "चाट",
    titleEn: "Chaat",
    emoji: "🥘",
    image: chaatImg,
    items: [
      { name: "आलू टिकिया चाट", nameEn: "Aloo Tikki Chaat", price: "40", veg: true },
      { name: "पापड़ी चाat", nameEn: "Papdi Chaat", price: "40", veg: true },
      { name: "दही भल्ला", nameEn: "Dahi Bhalla", price: "50", veg: true },
      { name: "गोलगप्पा", nameEn: "Golgappa", price: "20", quantity: "6 पीस", veg: true },
    ],
  },
  {
    id: "momo",
    title: "मोमो",
    titleEn: "Momo",
    emoji: "🥟",
    image: momoImg,
    items: [
      { name: "वेज स्टीम मोमो", nameEn: "Veg Steam Momo", price: "50", quantity: "8 पीस", veg: true },
      { name: "वेज फ्राइड मोमो", nameEn: "Veg Fried Momo", price: "60", quantity: "8 पीस", veg: true },
      { name: "पनीर स्टीम मोमो", nameEn: "Paneer Steam Momo", price: "70", quantity: "8 पीस", veg: true },
      { name: "चिकन स्टीम मोमो", nameEn: "Chicken Steam Momo", price: "80", quantity: "8 पीस", veg: false },
    ],
  },
  {
    id: "pizza",
    title: "पिज़्ज़ा",
    titleEn: "Pizza",
    emoji: "🍕",
    image: pizzaImg,
    items: [
      { name: "मार्गेरिटा पिज़्ज़ा", nameEn: "Margherita Pizza", price: "120", veg: true },
      { name: "फार्महाउस पिज़्ज़ा", nameEn: "Farmhouse Pizza", price: "180", veg: true },
      { name: "पनीर टिक्का पिज़्ज़ा", nameEn: "Paneer Tikka Pizza", price: "220", veg: true },
      { name: "चिकन पिज़्ज़ा", nameEn: "Chicken Pizza", price: "250", veg: false },
    ],
  },
  {
    id: "roll",
    title: "रोल",
    titleEn: "Roll",
    emoji: "🌯",
    image: rollImg,
    items: [
      { name: "वेज रोल", nameEn: "Veg Roll", price: "50", veg: true },
      { name: "पनीर रोल", nameEn: "Paneer Roll", price: "70", veg: true },
      { name: "एग रोल", nameEn: "Egg Roll", price: "60", veg: false },
      { name: "चिकन रोल", nameEn: "Chicken Roll", price: "90", veg: false },
    ],
  },
  {
    id: "pesty",
    title: "पेस्ट्री",
    titleEn: "Pastry",
    emoji: "🍰",
    image: pestyImg,
    items: [
      { name: "चॉकलेट पेस्ट्री", nameEn: "Chocolate Pastry", price: "40", veg: true },
      { name: "ब्लैक फॉरेस्ट", nameEn: "Black Forest", price: "45", veg: true },
      { name: "पाइनएप्पल पेस्ट्री", nameEn: "Pineapple Pastry", price: "35", veg: true },
    ],
  },
  {
    id: "tandoor-roti",
    title: "तंदूरी रोटी",
    titleEn: "Tandoori Roti",
    emoji: "🫓",
    image: tandoorRotiImg,
    items: [
      { name: "तंदूरी रोटी", nameEn: "Tandoori Roti", price: "10", veg: true },
      { name: "बटर तंदूरी रोटी", nameEn: "Butter Tandoori Roti", price: "12", veg: true },
      { name: "तंदूरी लच्छा पराठा", nameEn: "Tandoori Lachha Paratha", price: "30", veg: true },
      { name: "बटर नान", nameEn: "Butter Naan", price: "40", veg: true },
      { name: "पनीर नान", nameEn: "Paneer Naan", price: "60", veg: true },
    ],
  },
  {
    id: "paratha",
    title: "परांठा",
    titleEn: "Paratha",
    emoji: "🫓",
    image: parathaImg,
    items: [
      { name: "तवा रोटी", nameEn: "Tawa Roti", price: "8", veg: true },
      { name: "बटर तवा रोटी", nameEn: "Butter Tawa Roti", price: "10", veg: true },
      { name: "सादा पराठा", nameEn: "Plain Paratha", price: "15", veg: true },
    ],
  },
  {
    id: "chawal",
    title: "चावल",
    titleEn: "Rice",
    emoji: "🍚",
    image: chawalImg,
    items: [
      { name: "सादा चावल", nameEn: "Plain Rice", price: "60/40", quantity: "फुल/हाफ", veg: true },
      { name: "जीरा राइस", nameEn: "Jeera Rice", price: "80/50", quantity: "फुल/हाफ", veg: true },
      { name: "वेज पुलाव", nameEn: "Veg Pulao", price: "100/60", quantity: "फुल/हाफ", veg: true },
    ],
  },
  {
    id: "biryani",
    title: "बिरयानी",
    titleEn: "Biryani",
    emoji: "🍲",
    image: biryaniImg,
    items: [
      { name: "वेज बिरयानी", nameEn: "Veg Biryani", price: "120/70", quantity: "फुल/हाफ", veg: true },
      { name: "चिकन बिरयानी", nameEn: "Chicken Biryani", price: "180/100", quantity: "फुल/हाफ", veg: false },
      { name: "अंडा बिरयानी", nameEn: "Egg Biryani", price: "140/80", quantity: "फुल/हाफ", veg: false },
    ],
  },
  {
    id: "dal",
    title: "दाल",
    titleEn: "Dal",
    emoji: "🥣",
    image: dalImg,
    items: [
      { name: "दाल फ्राई", nameEn: "Dal Fry", price: "80/50", quantity: "फुल/हाफ", veg: true },
      { name: "दाल तड़का", nameEn: "Dal Tadka", price: "100/60", quantity: "फुल/हाफ", veg: true },
      { name: "दाल मखनी", nameEn: "Dal Makhani", price: "140/80", quantity: "फुल/हाफ", veg: true },
    ],
  },
  {
    id: "bhartiya",
    title: "भारतीय व्यंजन",
    titleEn: "Indian Main Course",
    emoji: "🍛",
    image: bhartiyaImg,
    items: [
      { name: "मिक्स वेज", nameEn: "Mix Veg", price: "120/70", quantity: "फुल/हाफ", veg: true },
      { name: "आलू गोभी", nameEn: "Aloo Gobhi", price: "100/60", quantity: "फुल/हाफ", veg: true },
      { name: "कड़ाही पनीर", nameEn: "Kadai Paneer", price: "220/120", quantity: "फुल/हाफ", veg: true },
      { name: "मटर पनीर", nameEn: "Matar Paneer", price: "200/110", quantity: "फुल/हाफ", veg: true },
      { name: "शाही पनीर", nameEn: "Shahi Paneer", price: "240/130", quantity: "फुल/हाफ", veg: true },
    ],
  },
  {
    id: "mushroom",
    title: "मशरूम",
    titleEn: "Mushroom",
    emoji: "🍄",
    image: mushroomImg,
    items: [
      { name: "मशरूम मसाला", nameEn: "Mushroom Masala", price: "200/110", quantity: "फुल/हाफ", veg: true },
      { name: "मटर मशरूम", nameEn: "Matar Mushroom", price: "220/120", quantity: "फुल/हाफ", veg: true },
      { name: "कड़ाही मशरूम", nameEn: "Kadai Mushroom", price: "240/130", quantity: "फुल/हाफ", veg: true },
    ],
  },
  {
    id: "hara-sabji",
    title: "हरी सब्जी",
    titleEn: "Green Vegetables",
    emoji: "🥦",
    image: haraSabjiImg,
    items: [
      { name: "पालक पनीर", nameEn: "Palak Paneer", price: "180/100", quantity: "फुल/हाफ", veg: true },
      { name: "भिंडी मसाला", nameEn: "Bhindi Masala", price: "100/60", quantity: "फुल/हाफ", veg: true },
    ],
  },
  {
    id: "tandoor-paneer",
    title: "तंदूरी पनीर",
    titleEn: "Tandoori Paneer",
    emoji: "🍢",
    image: tandoorPaneerImg,
    items: [
      { name: "पनीर टिक्का", nameEn: "Paneer Tikka", price: "180", quantity: "8 पीस", veg: true },
      { name: "मलाई पनीर टिक्का", nameEn: "Malai Paneer Tikka", price: "200", quantity: "8 पीस", veg: true },
    ],
  },
  {
    id: "chinese",
    title: "चाइनीज",
    titleEn: "Chinese",
    emoji: "🍜",
    image: chineseImg,
    items: [
      { name: "वेज मंचूरियन", nameEn: "Veg Manchurian", price: "120/70", quantity: "फुल/हाफ", veg: true },
      { name: "पनीर चिली", nameEn: "Paneer Chilli", price: "180/100", quantity: "फुल/हाफ", veg: true },
      { name: "चिकन चिली", nameEn: "Chicken Chilli", price: "220/120", quantity: "फुल/हाफ", veg: false },
    ],
  },
  {
    id: "salad-raita",
    title: "सलाद और रायता",
    titleEn: "Salad & Raita",
    emoji: "🥗",
    image: saladRaitaImg,
    items: [
      { name: "ग्रीन सलाद", nameEn: "Green Salad", price: "40", veg: true },
      { name: "बूंदी रायता", nameEn: "Boondi Raita", price: "50", veg: true },
      { name: "मिक्स वेज रायता", nameEn: "Mix Veg Raita", price: "60", veg: true },
    ],
  },
  {
    id: "soup",
    title: "सूप",
    titleEn: "Soup",
    emoji: "🥣",
    image: soupImg,
    items: [
      { name: "टमाटर सूप", nameEn: "Tomato Soup", price: "50", veg: true },
      { name: "वेज हॉट एंड सोर", nameEn: "Veg Hot & Sour", price: "60", veg: true },
      { name: "चिकन सूप", nameEn: "Chicken Soup", price: "80", veg: false },
    ],
  },
  {
    id: "thali",
    title: "थाली",
    titleEn: "Thali",
    emoji: "🍱",
    image: thaliImg,
    items: [
      { name: "साधारण थाली", nameEn: "Normal Thali", price: "100", veg: true },
      { name: "स्पेशल थाली", nameEn: "Special Thali", price: "150", veg: true },
      { name: "महाराजा थाली", nameEn: "Maharaja Thali", price: "250", veg: true },
    ],
  },
  {
    id: "shake",
    title: "शेक",
    titleEn: "Shake",
    emoji: "🥤",
    image: shakeImg,
    items: [
      { name: "बनाना शेक", nameEn: "Banana Shake", price: "50", veg: true },
      { name: "मैंगो शेक", nameEn: "Mango Shake", price: "60", veg: true },
      { name: "ओरियो शेक", nameEn: "Oreo Shake", price: "80", veg: true },
    ],
  },
  {
    id: "ice-cream",
    title: "आइसक्रीम",
    titleEn: "Ice Cream",
    emoji: "🍦",
    image: icecreamImg,
    items: [
      { name: "वैनिला", nameEn: "Vanilla", price: "30", veg: true },
      { name: "चॉकलेट", nameEn: "Chocolate", price: "40", veg: true },
      { name: "बटर स्कॉच", nameEn: "Butter Scotch", price: "50", veg: true },
    ],
  },
  {
    id: "sweets",
    title: "मिठाई",
    titleEn: "Sweets",
    emoji: "🍬",
    image: sweetsImg,
    items: [
      { name: "गुलाब जामुन", nameEn: "Gulab Jamun", price: "20", quantity: "1 पीस", veg: true },
      { name: "रसगुल्ला", nameEn: "Rasgulla", price: "15", quantity: "1 पीस", veg: true },
    ],
  },
];

export const PHONE_NUMBER_1 = "7979745730";
export const PHONE_NUMBER_2 = "9471217870";
export const WHATSAPP_NUMBER = "917979745730";
