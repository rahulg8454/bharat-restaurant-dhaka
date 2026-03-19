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
  quantityEn?: string;
  options?: {
    label: string;
    labelEn: string;
  }[];
  
  
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
    titleEn: "Nasta",
    emoji: "🥞",
    image: nastaImg,
    items: [
      { name: "पूरी सब्जी", nameEn: "Puri Sabzi", price: "45", quantity: "5 पीस", quantityEn: "5 pcs"},
      { name: "छोले भटूरे", nameEn: "Chole Bhature", price: "65", quantity: "2 पीस", quantityEn: "2 pcs" },
      { name: "हरी मिर्च पराठा", nameEn: "Green Chilli Paratha", price: "35"},
      { name: "लाल मिर्च पराठा", nameEn: "Red Chilli Paratha", price: "30" },
      { name: "अजवाइन पराठा", nameEn: "Ajwain Paratha", price: "35" },
      { name: "आलू पराठा", nameEn: "Aloo Paratha", price: "30"},
      { name: "पनीर पराठा", nameEn: "Paneer Paratha", price: "40" },

    ],
  },
  {
    id: "pakoda",
    title: "पकोड़ा",
    titleEn: "Pakoda",
    emoji: "🍡",
    image: pakodaImg,
    items: [

  { name: "पनीर पकोड़ा", nameEn: "Paneer Pakoda", price: "120", quantity: "8 पीस", quantityEn: "8 pcs"},
    { name: "वेज पकोड़ा", nameEn: "Veg Pakoda", price: "90", quantity: "8 पीस", quantityEn: "8 pcs"},
    { name: "वेज कटलेट", nameEn: "Veg Cutlet", price: "60", quantity: "4 पीस", quantityEn: "4 pcs"},
    { name: "पनीर कटलेट", nameEn: "Paneer Cutlet", price: "110", quantity: "4 पीस", quantityEn: "4 pcs"}
    ],
  },
  {
    id: "pav-bhaji",
    title: "पाव भाजी",
    titleEn: "Pav Bhaji",
    emoji: "🥪",
    image: pavBhajiImg,
    items: [
    { name: "पाव भाजी", nameEn: "Pav Bhaji", price: "80", quantity: "3 पीस", quantityEn: "3 pcs"},
    { name: "पाव भाजी (डबल बटर)", nameEn: "Pav Bhaji (Double Butter)", price: "90", quantity: "3 पीस", quantityEn: "3 pcs"},
    { name: "अतिरिक्त पाव", nameEn: "Extra Pav", price: "30", quantity: "2 पीस", quantityEn: "2 pcs"}
    ],
  },
  {
    id: "burger",
    title: "बर्गर",
    titleEn: "Burger",
    emoji: "🍔",
    image: burgerImg,
    items: [
   { name: "वेज बर्गर", nameEn: "Veg Burger", price: "40"},
    { name: "पनीर बर्गर", nameEn: "Paneer Burger", price: "50"},
    { name: "वेज चीज बर्गर", nameEn: "Veg Cheese Burger", price: "60"},
    { name: "पनीर चीज बर्गर", nameEn: "Paneer Cheese Burger", price: "70"},
    { name: "वेज बर्गर विद फ्रेंच फ्राई", nameEn: "Veg Burger with French Fries", price: "70"},
    { name: "पनीर बर्गर विद फ्रेंच फ्राई", nameEn: "Paneer Burger with French Fries", price: "80"},
    { name: "डबल टिक्की बर्गर", nameEn: "Double Tikki Burger", price: "100"}
    
    ],
  },
  {
    id: "sandwich",
    title: "सैंडविच",
    titleEn: "Sandwich",
    emoji: "🥪",
    image: sandwichImg,
    items: [
          { name: "वेज सैंडविच", nameEn: "Veg Sandwich", price: "30"},
    { name: "पनीर सैंडविच", nameEn: "Paneer Sandwich", price: "50"},
    { name: "फ्रेंच फ्राई", nameEn: "French Fries", price: "90"},
    { name: "ग्रिल वेज सैंडविच", nameEn: "Grill Veg Sandwich", price: "100"},
    { name: "कोल्ड वेज सैंडविच", nameEn: "Cold Veg Sandwich", price: "50"},
    { name: "पनीर ग्रिल सैंडविच", nameEn: "Paneer Grill Sandwich", price: "140"},
    { name: "मशरूम ग्रिल सैंडविच", nameEn: "Mushroom Grill Sandwich", price: "140"}
    ],
  },
  {
    id: "noodles",
    title: "नूडल्स",
    titleEn: "Noodles",
     emoji: "🍜",
    image: noodlesImg,
    items: [
          { name: "वेज नूडल्स", nameEn: "Veg Noodles", price: "35/65", quantity: "हाफ/फुल", quantityEn: "Half/Full", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]},
    { name: "पनीर नूडल्स", nameEn: "Paneer Noodles", price: "45/80", quantity: "हाफ/फुल", quantityEn: "Half/Full", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]},
    { name: "मशरूम नूडल्स", nameEn: "Mushroom Noodles", price: "50/80", quantity: "हाफ/फुल", quantityEn: "Half/Full", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]},
    { name: "वेज हक्का नूडल्स", nameEn: "Veg Hakka Noodles", price: "50/90", quantity: "हाफ/फुल", quantityEn: "Half/Full", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]},
    { name: "पनीर हक्का नूडल्स", nameEn: "Paneer Hakka Noodles", price: "55/100", quantity: "हाफ/फुल", quantityEn: "Half/Full", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]},
    { name: "वेज सिंगापुरी नूडल्स", nameEn: "Veg Singapore Noodles", price: "100"},
    { name: "चिल्ली गार्लिक नूडल्स", nameEn: "Chilli Garlic Noodles", price: "55/100", quantity: "हाफ/फुल", quantityEn: "Half/Full", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]},
    { name: "भभारत रेस्टोरेंट स्पेशल नूडल्स", nameEn: "Bharat Restu. Special Noodles", price: "60/120", quantity: "हाफ/फुल", quantityEn: "Half/Full", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]}
    ],
  },
  {
    id: "pasta",
    title: "पास्ता",
    titleEn: "Pasta",
      emoji: "🍝",
    image: pastaImg,
    items: [
        { name: "रेड सॉस पास्ता", nameEn: "Red Sauce Pasta", price: "130"},
    { name: "व्हाइट सॉस पास्ता", nameEn: "White Sauce Pasta", price: "130"}
    ],
  },
  {
    id: "south-indian",
    title: "दक्षिण भारतीय",
    titleEn: "South Indian",
    emoji: "🍛",
    image: southIndianImg,
    items: [
      { name: "मसाला डोसा", nameEn: "Masala Dosa", price: "90"},
    { name: "पनीर डोसा", nameEn: "Paneer Dosa", price: "120"},
    { name: "स्पेशल डोसा", nameEn: "Special Dosa", price: "130"},
    { name: "ऑनियन डोसा", nameEn: "Onion Dosa", price: "90"},
    { name: "पेपर डोसा", nameEn: "Paper Dosa", price: "60"},
    { name: "मसाला पनीर डोसा", nameEn: "Masala Paneer Dosa", price: "110"},
    { name: "वेज उपमा", nameEn: "Veg Upma", price: "100"},
    { name: "मिक्स उपमा", nameEn: "Mix Upma", price: "120"},
    { name: "ऑनियन उपमा", nameEn: "Onion Upma", price: "120"},
    { name: "टमाटर उपमा", nameEn: "Tomato Upma", price: "140"},
    { name: "इडली सांभर", nameEn: "Idli Sambhar", price: "70"}
    ],
  },
  {
    id: "chaat",
    title: "चाट",
    titleEn: "Chaat",
    emoji: "🥘",
    image: chaatImg,
    items: [
     { name: "पापड़ी चाट", nameEn: "Papdi Chaat", price: "40/60", quantity: "हाफ/फुल", quantityEn: "Half/Full", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]},
    { name: "समोसा चाट", nameEn: "Samosa Chaat", price: "30/50", quantity: "हाफ/फुल", quantityEn: "Half/Full", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]},
    { name: "राज कचौड़ी चाट", nameEn: "Raj Kachori Chaat", price: "60"},
    { name: "टिक्की चाट", nameEn: "Tikki Chaat", price: "30/50", quantity: "हाफ/फुल", quantityEn: "Half/Full", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]}
    ],
  },
  {
    id: "momo",
    title: "मोमो",
    titleEn: "Momo",
    emoji: "🥟",
    image: momoImg,
    items: [
    { name: "वेज स्टीम मोमो", nameEn: "Veg Steam Momos", price: "70", quantity: "8 पीस", quantityEn: "8 pcs"},
    { name: "वेज फ्राई मोमो", nameEn: "Veg Fry Momos", price: "90", quantity: "8 पीस", quantityEn: "8 pcs"},
    { name: "वेज चिल्ली मोमो", nameEn: "Veg Chilli Momos", price: "100", quantity: "8 पीस", quantityEn: "8 pcs"},
    { name: "स्टीम पनीर मोमो", nameEn: "Paneer Steam Momos", price: "120", quantity: "8 पीस", quantityEn: "8 pcs"},
    { name: "पनीर मोमो फ्राई", nameEn: "Paneer Fry Momos", price: "140", quantity: "8 पीस", quantityEn: "8 pcs"},
    { name: "पनीर चिल्ली मोमो", nameEn: "Paneer Chilli Momos", price: "180", quantity: "8 पीस", quantityEn: "8 pcs"},
    { name: "तंदूरी मोमो", nameEn: "Tandoori Momos", price: "140", quantity: "8 पीस", quantityEn: "8 pcs"},
    { name: "पनीर तंदूरी मोमो", nameEn: "Paneer Tandoori Momos", price: "200", quantity: "8 पीस", quantityEn: "8 pcs"}
    ],
  },
  {
    id: "pizza",
    title: "पिज़्ज़ा",
    titleEn: "Pizza",
    emoji: "🍕",
    image: pizzaImg,
    items: [
 { name: "वेज पिज्जा", nameEn: "Veg Pizza", price: "120/220", quantity: "छोटा/बड़ा", quantityEn: "Small/Large", options: [{ label: "छोटा", labelEn: "Small" }, { label: "बड़ा", labelEn: "Large" }]},
    { name: "पनीर पिज्जा", nameEn: "Paneer Pizza", price: "140/240", quantity: "छोटा/बड़ा", quantityEn: "Small/Large", options: [{ label: "छोटा", labelEn: "Small" }, { label: "बड़ा", labelEn: "Large" }]},
    { name: "ऑनियन मशरूम पिज्जा", nameEn: "Onion Mushroom Pizza", price: "140/230", quantity: "छोटा/बड़ा", quantityEn: "Small/Large", options: [{ label: "छोटा", labelEn: "Small" }, { label: "बड़ा", labelEn: "Large" }]},
    { name: "मशरूम पिज्जा", nameEn: "Mushroom Pizza", price: "140/260", quantity: "छोटा/बड़ा", quantityEn: "Small/Large", options: [{ label: "छोटा", labelEn: "Small" }, { label: "बड़ा", labelEn: "Large" }]},
    { name: "मशरूम चिल्ली पिज्जा", nameEn: "Mushroom Chilli Pizza", price: "160/280", quantity: "छोटा/बड़ा", quantityEn: "Small/Large", options: [{ label: "छोटा", labelEn: "Small" }, { label: "बड़ा", labelEn: "Large" }]},
    { name: "कॉर्न पिज्जा", nameEn: "Corn Pizza", price: "150/280", quantity: "छोटा/बड़ा", quantityEn: "Small/Large", options: [{ label: "छोटा", labelEn: "Small" }, { label: "बड़ा", labelEn: "Large" }]},
    { name: "इटालियन पिज्जा", nameEn: "Italian Pizza", price: "120/200", quantity: "छोटा/बड़ा", quantityEn: "Small/Large", options: [{ label: "छोटा", labelEn: "Small" }, { label: "बड़ा", labelEn: "Large" }]},
    { name: "भारत रेस्टोरेंट स्पेशल पिज्जा", nameEn: "Bharat Restaurant Special Pizza", price: "150/280", quantity: "छोटा/बड़ा ", quantityEn: "Small/Large", options: [{ label: "छोटा", labelEn: "Small" }, { label: "बड़ा", labelEn: "Large" }]}
    ],
  }, 
  {
    id: "roll",
    title: "रोल",
    titleEn: "Roll",
    emoji: "🌯",
    image: rollImg,
    items: [
      { name: "वेज रोल", nameEn: "Veg Roll", price: "50"},
    { name: "पनीर रोल", nameEn: "Paneer Roll", price: "80"},
    { name: "वेज चीज रोल", nameEn: "Veg Cheese Roll", price: "80"},
    { name: "पनीर चीज रोल", nameEn: "Paneer Cheese Roll", price: "100"}
    ],
  },
{
    id: "chinese", 
    title: "चाइनीज",
    titleEn: "Chinese",
    emoji: "🍜",
    image: chineseImg,
  items: [
    { name: "वेज मंचूरियन (ड्राई+ग्रेवी)", nameEn: "Veg Manchurian (Dry+Gravy)", price: "80/150", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]},
    { name: "पनीर चिल्ली (ड्राई+ग्रेवी)", nameEn: "Paneer Chilli (Dry+Gravy)", price: "100/180", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]},
    { name: "पनीर मंचूरियन (ड्राई+ग्रेवी)", nameEn: "Paneer Manchurian (Dry/Gravy)", price: "200"},
    { name: "मशरूम चिल्ली (ड्राई+ग्रेवी)", nameEn: "Mushroom Chilli (Dry/Gravy)", price: "200"},
    { name: "पोटैटो चिल्ली (ड्राई)", nameEn: "Potato Chilli (Dry)", price: "150"},
    { name: "बेबी कॉर्न चिल्ली (ड्राई+ग्रेवी)", nameEn: "Baby Corn Chilli (Dry+Gravy)", price: "250"},
    { name: "सोया चाप चिल्ली (ड्राई+ग्रेवी)", nameEn: "Soya Chaap Chilli (Dry+Gravy)", price: "180"},
    { name: "पनीर 65", nameEn: "Paneer 65", price: "210"},
    { name: "पनीर पेपर", nameEn: "Paneer Pepper", price: "220"},
    { name: "क्रिस्पी बेबी कॉर्न चिल्ली", nameEn: "Crispy Baby Corn Chilli", price: "250"},
    { name: "क्लासिक चाप", nameEn: "Classic Chaap", price: "250"},
    { name: "मशरूम चिल्ली", nameEn: "Mushroom Chilli", price: "180"}
  ]
},
  {
    id: "thali",
    title: "थाली",
    titleEn: "Thali",
    emoji: "🍱",
    image: thaliImg,
    items: [
      { name: "वेज थाली", nameEn: "Veg Thali", price: "120"},
    { name: "वेज डिलक्स थाली", nameEn: "Veg Deluxe Thali", price: "150"}
    ],
  },
   {
    id: "bhartiya",
    title: "भारतीय व्यंजन",
    titleEn: "Indian Main Course",
    emoji: "🍛",
    image: bhartiyaImg,
    items: [
    { name: "मटर पनीर", nameEn: "Matar Paneer", price: "100/170", quantity: "हाफ/फुल", quantityEn: "Half/Full", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]},
    { name: "पनीर बटर मसाला", nameEn: "Paneer Butter Masala", price: "210"},
    { name: "पनीर कढ़ाही", nameEn: "Paneer Kadhai", price: "130/200", quantity: "हाफ/फुल", quantityEn: "Half/Full", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]},
    { name: "पनीर हांडी", nameEn: "Paneer Handi", price: "130/200", quantity: "हाफ/फुल", quantityEn: "Half/Full", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]},
    { name: "पनीर दो प्याजा", nameEn: "Paneer Do Pyaza", price: "220"},
    { name: "शाही पनीर", nameEn: "Shahi Paneer", price: "220"},
    { name: "पनीर मसाला", nameEn: "Paneer Masala", price: "200"},
    { name: "पनीर हैदराबादी", nameEn: "Paneer Hyderabadi", price: "230"},
    { name: "पनीर लबाबदार", nameEn: "Paneer Lababdar", price: "230"},
    { name: "पंजाबी पनीर", nameEn: "Punjabi Paneer", price: "270"},
    { name: "पालक पनीर", nameEn: "Palak Paneer", price: "140/220", quantity: "हाफ/फुल", quantityEn: "Half/Full", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]},
    { name: "पनीर पसंदा", nameEn: "Paneer Pasanda", price: "240"},
    { name: "पनीर भुर्जी", nameEn: "Paneer Bhurji", price: "230"},
    { name: "पनीर टिक्का मसाला", nameEn: "Paneer Tikka Masala", price: "240"}
    ],
  },
    {
    id: "mushroom",
    title: "मशरूम",
    titleEn: "Mushroom",
    emoji: "🍄",
    image: mushroomImg,
    items: [
     { name: "मशरूम बटर मसाला", nameEn: "Mushroom Butter Masala", price: "260"},
    { name: "कढ़ाही मशरूम", nameEn: "Kadhai Mushroom", price: "230"},
    { name: "मशरूम दो प्याजा", nameEn: "Mushroom Do Pyaza", price: "240"},
    { name: "मटर मशरूम", nameEn: "Matar Mushroom", price: "230"}
    ],
  },
    {
    id: "hara-sabji",
    title: "हरी सब्जी",
    titleEn: "Hari Sabzi",
    emoji: "🥦",
    image: haraSabjiImg,
    items: [
     { name: "कढ़ाही वेज", nameEn: "Kadhai Veg", price: "180"},
    { name: "मिक्स वेज", nameEn: "Mix Veg", price: "160"},
    { name: "वेज कोरमा", nameEn: "Veg Korma", price: "240"},
    { name: "दम आलू", nameEn: "Dum Aloo", price: "140"},
    { name: "आलू जीरा", nameEn: "Aloo Jeera", price: "110"},
    { name: "आलू पालक", nameEn: "Aloo Palak", price: "140"},
    { name: "दम आलू कश्मीरी", nameEn: "Dum Aloo Kashmiri", price: "180"},
    { name: "स्टफ्ड दम आलू", nameEn: "Stuffed Dum Aloo", price: "230"},
    { name: "टमाटर दम मसाला", nameEn: "Tamatar Dum Masala", price: "200"},
    { name: "राजमा", nameEn: "Rajma", price: "180"},
    { name: "चना मसाला", nameEn: "Chana Masala", price: "130"},
    { name: "पालक कॉर्न", nameEn: "Palak Corn", price: "190"},
    { name: "वेज कोफ्ता", nameEn: "Veg Kofta", price: "170"},
    { name: "मलाई कोफ्ता", nameEn: "Malai Kofta", price: "210"},
    { name: "पालक कोफ्ता", nameEn: "Palak Kofta", price: "200"},
    ],
  },
   {
    id: "tandoor-paneer",
    title: "तंदूरी पनीर",
    titleEn: "Tandoori Paneer",
    emoji: "🍢",
    image: tandoorPaneerImg,
    items: [
    { name: "पनीर टिक्का", nameEn: "Paneer Tikka", price: "210"},
    { name: "मलाई टिक्का", nameEn: "Malai Tikka", price: "200"},
    { name: "पनीर हरियालीी टिक्का", nameEn: "Paneer Hariyali Tikka", price: "250"},
    { name: "पनीर गोलीी कबाब", nameEn: "Paneer Goli Kabab", price: "230"},
    { name: "भेज सिक कबाब", nameEn: "Veg Sikk Kabab", price: "190"},
    { name: "मशरूम टिक्का", nameEn: "Mushroom Tikka", price: "230"},
    { name: "पनीर सिक कबाबी", nameEn: "Veg Sikk Kabab", price: "250"},
    { name: "पनीर पैरी टिक्का", nameEn: "Paneer Perry Tikka", price: "260"},
    { name: "पनीर बॉल", nameEn: "Paneer ball", price: "260"}
    ],
  },
    {
    id: "dal",
    title: "दाल",
    titleEn: "Dal",
    emoji: "🥣",
    image: dalImg,
    items: [
  { name: "दाल फ्राई", nameEn: "Dal Fry", price: "80"},
    { name: "दाल तड़का", nameEn: "Dal Tadka", price: "90"},
    { name: "दाल मखनी", nameEn: "Dal Makhani", price: "160"},
    { name: "दाल हांडी", nameEn: "Dal Handi", price: "120"}
    ],
  },
    {
    id: "tandoor-roti",
    title: "तंदूरी रोटी",
    titleEn: "Tandoori Roti",
    emoji: "🫓",
    image: tandoorRotiImg,
    items: [
       { name: "प्लेन रोटी", nameEn: "Plain Roti", price: "10"},
    { name: "बटर रोटी", nameEn: "Butter Roti", price: "15"},
    { name: "लच्छा पराठा", nameEn: "Lachha Paratha", price: "25"},
    { name: "प्लेन नान", nameEn: "Plain Naan", price: "30"},
    { name: "बटर नान", nameEn: "Butter Naan", price: "35"},
    { name: "स्टफ नान", nameEn: "Stuffed Naan", price: "35"},
    { name: "स्टफ पनीर नान", nameEn: "Stuffed Paneer Naan", price: "60"},
    { name: "अमृतसरी नान", nameEn: "Amritsari Naan", price: "50"},
    { name: "काजू नान", nameEn: "Kaju Naan", price: "70"},
    { name: "काश्मीरी नान", nameEn: "Kashmiri Naan", price: "90"},
    { name: "मिस्सी रोटी", nameEn: "Missi Roti", price: "40"},
    ],
  },
  {
    id: "paratha",
    title: "परांठा",
    titleEn: "Paratha",
    emoji: "🫓",
    image: parathaImg,
    items: [
          { name: "हरी मिर्च पराठा", nameEn: "Green Chilli Paratha", price: "35"},
      { name: "लाल मिर्च पराठा", nameEn: "Red Chilli Paratha", price: "30" },
      { name: "अजवाइन पराठा", nameEn: "Ajwain Paratha", price: "35" },
    { name: "आलू पराठा", nameEn: "Aloo Paratha", price: "30"},
    { name: "पनीर पराठा", nameEn: "Paneer Paratha", price: "40"}
    ],
  },

 
  {
    id: "chawal",
    title: "चावल",
    titleEn: "Rice",
    emoji: "🍚",
    image: chawalImg,
    items: [
{ name: "स्टीम राइस", nameEn: "Steam Rice", price: "70"},
    { name: "जीरा राइस", nameEn: "Jeera Rice", price: "90"},
    { name: "फ्राई राइस", nameEn: "Fried Rice", price: "110"},
    { name: "पोटैटो राइस", nameEn: "Potato Rice", price: "100"},
    { name: "मंचूरियन राइस", nameEn: "Manchurian Rice", price: "110"},
    { name: "पनीर फ्राई राइस", nameEn: "Paneer Fried Rice", price: "130"},
    { name: "वेज पुलाव", nameEn: "Veg Pulao", price: "110"},
    { name: "कश्मीरी पुलाव", nameEn: "Kashmiri Pulao", price: "120"},
    { name: "मटर पुलाव", nameEn: "Matar Pulao", price: "110"}
    ],
  },
  {
    id: "biryani",
    title: "बिरयानी",
    titleEn: "Biryani",
    emoji: "🍲",
    image: biryaniImg,
    items: [
    { name: "टोमेटो बिरयानी", nameEn: "Tomato Biryani", price: "130"},
    { name: "वेज बिरयानी", nameEn: "Veg Biryani", price: "140"},
    { name: "दम बिरयानी", nameEn: "Dum Biryani", price: "160"},
    { name: "पनीर बिरयानी", nameEn: "Paneer Biryani", price: "170"},
    { name: "मशरूम बिरयानी", nameEn: "Mushroom Biryani", price: "180"},
    { name: "वेज हांडी बिरयानी", nameEn: "Veg Handi Biryani", price: "160"},
    { name: "पनीर हांडी बिरयानी", nameEn: "Paneer Handi Biryani", price: "190"},
    { name: "भारत रेस्टोरेंट स्पेशल बिरयानी", nameEn: "Bharat Restu. Special Biryani", price: "210"}
    ],
  },

 


 
  {
    id: "salad-raita",
    title: "सलाद और रायता",
    titleEn: "Salad & Raita",
    emoji: "🥗",
    image: saladRaitaImg,
    items: [
    { name: "ग्रीन सलाद", nameEn: "Green Salad", price: "30/50", quantity: "हाफ/फुल", quantityEn: "Half/Full", options: [{ label: "हाफ", labelEn: "Half" }, { label: "फुल", labelEn: "Full" }]},
    { name: "बूंदी रायता", nameEn: "Boondi Raita", price: "40"},
    { name: "मिक्स वेज रायता", nameEn: "Mix Veg Raita", price: "40"},
    { name: "पाइनएप्पल रायता", nameEn: "Pineapple Raita", price: "45"}
    ],
  },
  {
    id: "soup",
    title: "सूप",
    titleEn: "Soup",
    emoji: "🥣",
    image: soupImg,
    items: [
    { name: "वेज सूप", nameEn: "Veg Soup", price: "70"},
    { name: "वेज मंचो सूप", nameEn: "Veg Manchow Soup", price: "90"},
    { name: "वेज मशरूम सूप", nameEn: "Veg Mushroom Soup", price: "110"},
    { name: "क्लीयर सूप", nameEn: "Clear Soup", price: "80"},
    { name: "टमाटर सूप", nameEn: "Tomato Soup", price: "90"},
    { name: "स्वीट कॉर्न सूप", nameEn: "Sweet Corn Soup", price: "100"},
    { name: "हॉट एंड सावर सूप", nameEn: "Hot & Sour Soup", price: "110"},
    { name: "भारत रेस्टोरेंट स्पेशल सूप", nameEn: "Bharat Restu. Special Soup", price: "120"},
    ],
  },
    {
    id: "pesty",
    title: "पेस्ट्री",
    titleEn: "Pastry",
    emoji: "🍰",
    image: pestyImg,
    items: [
    { name: "पाइनएप्पल पेस्ट्री", nameEn: "Pineapple Pastry", price: "40"},
    { name: "वनीला पेस्ट्री", nameEn: "Vanilla Pastry", price: "40"},
    { name: "बटर स्कॉच पेस्ट्री", nameEn: "Butterscotch Pastry", price: "40"},
    { name: "ब्लैक फॉरेस्ट पेस्ट्री", nameEn: "Black Forest Pastry", price: "45"},
    { name: "बटर स्कॉच पेस्ट्री कप", nameEn: "Butterscotch Pastry Cup", price: "50"},
    { name: "चॉकलेट पेस्ट्री", nameEn: "Chocolate Pastry", price: "45"},
    { name: "चॉकलेट पेस्ट्री कप", nameEn: "Chocolate Pastry Cup", price: "50"}
    ],
  },
  {
    id: "shake",
    title: "शेक",
    titleEn: "Shake",
    emoji: "🥤",
    image: shakeImg,
    items: [
         { name: "मिल्क शेक", nameEn: "Milk Shake", price: "75/100", quantity: "प्लेन/आइसक्रीम", quantityEn: "Plane/Icecream", options: [{ label: "प्लेन", labelEn: "Plane" }, { label: "आइसक्रीम", labelEn: "Icecream" }]},
    { name: "चॉकलेट शेक", nameEn: "Chocolate Shake", price: "75/95", quantity: "प्लेन/आइसक्रीम", quantityEn: "Plane/Icecream", options: [{ label: "प्लेन", labelEn: "Plane" }, { label: "आइसक्रीम", labelEn: "Icecream" }]},
    { name: "बटर स्कॉच", nameEn: "Butterscotch Shake", price: "85/115", quantity: "प्लेन/आइसक्रीम", quantityEn: "Plane/Icecream", options: [{ label: "प्लेन", labelEn: "Plane" }, { label: "आइसक्रीम", labelEn: "Icecream" }]},
    { name: "मैंगो शेक", nameEn: "Mango Shake", price: "85/115", quantity: "प्लेन/आइसक्रीम", quantityEn: "Plane/Icecream", options: [{ label: "प्लेन", labelEn: "Plane" }, { label: "आइसक्रीम", labelEn: "Icecream" }]},
    { name: "स्ट्रॉबेरी शेक", nameEn: "Strawberry Shake", price: "90/125", quantity: "प्लेन/आइसक्रीम", quantityEn: "Plane/Icecream", options: [{ label: "प्लेन", labelEn: "Plane" }, { label: "आइसक्रीम", labelEn: "Icecream" }]},
    { name: "काजू शेक", nameEn: "Kaju Shake", price: "95/120", quantity: "प्लेन/आइसक्रीम", quantityEn: "Plane/Icecream", options: [{ label: "प्लेन", labelEn: "Plane" }, { label: "आइसक्रीम", labelEn: "Icecream" }]},
    { name: "बदाम शेक", nameEn: "Badam Shake", price: "95/125", quantity: "प्लेन/आइसक्रीम", quantityEn: "Plane/Icecream", options: [{ label: "प्लेन", labelEn: "Plane" }, { label: "आइसक्रीम", labelEn: "Icecream" }]},
    { name: "ओरियो शेक", nameEn: "Oreo Shake", price: "115/135", quantity: "प्लेन/आइसक्रीम", quantityEn: "Plane/Icecream", options: [{ label: "प्लेन", labelEn: "Plane" }, { label: "आइसक्रीम", labelEn: "Icecream" }]},
    { name: "किट-कैट शेक", nameEn: "KitKat Shake", price: "95/115", quantity: "प्लेन/आइसक्रीम", quantityEn: "Plane/Icecream", options: [{ label: "प्लेन", labelEn: "Plane" }, { label: "आइसक्रीम", labelEn: "Icecream" }]},
    { name: "कोल्ड कॉफी", nameEn: "Cold Coffee", price: "85/105", quantity: "प्लेन/आइसक्रीम", quantityEn: "Plane/Icecream", options: [{ label: "प्लेन", labelEn: "Plane" }, { label: "आइसक्रीम", labelEn: "Icecream" }]},
    { name: "वेनिला शेक", nameEn: "Vanilla Shake", price: "75/95", quantity: "प्लेन/आइसक्रीम", quantityEn: "Plane/Icecream", options: [{ label: "प्लेन", labelEn: "Plane" }, { label: "आइसक्रीम", labelEn: "Icecream" }]}
    ],
  },
  {
    id: "ice-cream",
    title: "आइसक्रीम",
    titleEn: "Ice Cream",
    emoji: "🍦",
    image: icecreamImg,
    items: [
    { name: "वनीला", nameEn: "Vanilla", price: "30/40", quantity: "कप/कोन", quantityEn: "Cup/Cone", options: [{ label: "कप", labelEn: "Cup" }, { label: "कोन", labelEn: "Cone" }]},
    { name: "बटर स्कॉच", nameEn: "Butterscotch", price: "40/50", quantity: "कप/कोन", quantityEn: "Cup/Cone", options: [{ label: "कप", labelEn: "Cup" }, { label: "कोन", labelEn: "Cone" }]},
    { name: "चॉकलेट", nameEn: "Chocolate", price: "45/55", quantity: "कप/कोन", quantityEn: "Cup/Cone", options: [{ label: "कप", labelEn: "Cup" }, { label: "कोन", labelEn: "Cone" }]},
    { name: "स्ट्रॉबेरी", nameEn: "Strawberry", price: "40/45", quantity: "कप/कोन", quantityEn: "Cup/Cone", options: [{ label: "कप", labelEn: "Cup" }, { label: "कोन", labelEn: "Cone" }]},
    { name: "मैंगो", nameEn: "Mango", price: "55/60", quantity: "कप/कोन", quantityEn: "Cup/Cone", options: [{ label: "कप", labelEn: "Cup" }, { label: "कोन", labelEn: "Cone" }]},
    { name: "पाइनएप्पल", nameEn: "Pineapple", price: "45/55", quantity: "कप/कोन", quantityEn: "Cup/Cone", options: [{ label: "कप", labelEn: "Cup" }, { label: "कोन", labelEn: "Cone" }]}
    ],
  },
  {
    id: "sweets",
    title: "मिठाई",
    titleEn: "Sweets",
    emoji: "🍬",
    image: sweetsImg,
    items: [
        { name: "रसगुल्ला", nameEn: "Rasgulla", price: "20"},
    { name: "राज भोग", nameEn: "Raj Bhog", price: "30"},
    { name: "गुलाब जामुन", nameEn: "Gulab Jamun", price: "20"},
    { name: "केम चोप", nameEn: "Khem Chop", price: "20"},
    { name: "छेना रोल", nameEn: "Chhena Roll", price: "40"},
    { name: "रस मलाई", nameEn: "Ras Malai", price: "50"}
    ],
  },
];

export const PHONE_NUMBER_1 = "7979745730";
export const PHONE_NUMBER_2 = "9471217870";
export const WHATSAPP_NUMBER = "917979745730";
