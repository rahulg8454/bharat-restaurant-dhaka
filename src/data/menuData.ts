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
  price: string;
  quantity?: string;
  veg: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  emoji: string;
  image: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "nasta",
    title: "नाश्ता",
    emoji: "🥞",
    image: nastaImg,
    items: [
      { name: "पूरी सब्जी", price: "45", quantity: "5 पीस", veg: true },
      { name: "छोले भटूरे", price: "65", quantity: "2 पीस", veg: true },
      { name: "हरी मिर्च पराठा", price: "35", quantity: "1 पीस", veg: true },
      { name: "लाल मिर्च पराठा", price: "30", quantity: "1 पीस", veg: true },
      { name: "अजवाइन पराठा", price: "35", quantity: "1 पीस", veg: true },
      { name: "आलू पराठा", price: "30", quantity: "1 पीस", veg: true },
      { name: "पनीर पराठा", price: "40", quantity: "1 पीस", veg: true },
    ],
  },
  {
    id: "pakoda",
    title: "पकौड़ा",
    emoji: "🧆",
    image: pakodaImg,
    items: [
      { name: "पनीर पकौड़ा", price: "120", quantity: "8 पीस", veg: true },
      { name: "वेज पकौड़ा", price: "90", quantity: "8 पीस", veg: true },
      { name: "वेज कटलेट", price: "60", quantity: "4 पीस", veg: true },
      { name: "पनीर कटलेट", price: "110", quantity: "4 पीस", veg: true },
    ],
  },
  {
    id: "pav-bhaji",
    title: "पाव भाजी",
    emoji: "🍞",
    image: pavBhajiImg,
    items: [
      { name: "पाव भाजी", price: "80", quantity: "3 पीस", veg: true },
      { name: "पाव भाजी (डबल बटर)", price: "90", quantity: "3 पीस", veg: true },
      { name: "अतिरिक्त पाव", price: "30", quantity: "2 पीस", veg: true },
    ],
  },
  {
    id: "burger",
    title: "बर्गर",
    emoji: "🍔",
    image: burgerImg,
    items: [
      { name: "वेज बर्गर", price: "40", veg: true },
      { name: "पनीर बर्गर", price: "50", veg: true },
      { name: "वेज चीज़ बर्गर", price: "60", veg: true },
      { name: "पनीर चीज़ बर्गर", price: "70", veg: true },
      { name: "वेज बर्गर विद फ्रेंच फ्राई", price: "70", veg: true },
      { name: "पनीर बर्गर विद फ्रेंच फ्राई", price: "80", veg: true },
      { name: "डबल टिक्की बर्गर", price: "100", veg: true },
    ],
  },
   {
    id: "chinese",
    title: "चाइनीज़",
    emoji: "🥡",
    image: chineseImg,
    items: [
      { name: "वेज मंचूरियन", price: "80/150", quantity: "ड्राई/ग्रेवी", veg: true },
      { name: "पनीर चिल्ली", price: "100/180", quantity: "ड्राई/ग्रेवी", veg: true },
      { name: "पनीर मंचूरियन", price: "200", veg: true },
      { name: "मशरूम चिल्ली", price: "200", veg: true },
      { name: "पोटैटो चिल्ली", price: "150", quantity: "ड्राई", veg: true },
      { name: "बेबी कॉर्न चिल्ली", price: "250", quantity: "ड्राई/ग्रेवी", veg: true },
      { name: "सोया चाप चिल्ली", price: "180", quantity: "ड्राई/ग्रेवी", veg: true },
      { name: "पनीर 65", price: "210", veg: true },
      { name: "पनीर पेपर", price: "220", veg: true },
      { name: "क्रिस्पी बेबी कॉर्न चिल्ली", price: "250", veg: true },
      { name: "क्लासिक पनीर", price: "250", veg: true },
      { name: "मशरूम डिलक्स", price: "180", veg: true },
    ],
  },
  {
    id: "sandwich",
    title: "सैंडविच",
    emoji: "🥪",
    image: sandwichImg,
    items: [
      { name: "वेज सैंडविच", price: "30", veg: true },
      { name: "वेज पनीर सैंडविच", price: "50", veg: true },
      { name: "फ्रेंच फ्राई", price: "90", veg: true },
      { name: "ग्रिल्ड वेज सैंडविच", price: "100", veg: true },
      { name: "कोल्ड वेज सैंडविच", price: "50", veg: true },
      { name: "पनीर ग्रिल्ड सैंडविच", price: "140", veg: true },
      { name: "मशरूम ग्रिल्ड सैंडविच", price: "140", veg: true },
    ],
  },
  {
    id: "noodles",
    title: "नूडल्स",
    emoji: "🍜",
    image: noodlesImg,
    items: [
      { name: "वेज नूडल्स", price: "35/65", quantity: "हाफ/फुल", veg: true },
      { name: "पनीर नूडल्स", price: "45/80", quantity: "हाफ/फुल", veg: true },
      { name: "मशरूम नूडल्स", price: "50/80", quantity: "हाफ/फुल", veg: true },
      { name: "वेज हाका नूडल्स", price: "50/90", quantity: "हाफ/फुल", veg: true },
      { name: "पनीर हाका नूडल्स", price: "55/100", quantity: "हाफ/फुल", veg: true },
      { name: "वेज सिंगापुरी नूडल्स", price: "100", veg: true },
      { name: "चिल्ली गार्लिक नूडल्स", price: "55/100", quantity: "हाफ/फुल", veg: true },
      { name: "भारत स्पेशल नूडल्स", price: "60/120", quantity: "हाफ/फुल", veg: true },
    ],
  },
  {
    id: "pasta",
    title: "पास्ता",
    emoji: "🍝",
    image: pastaImg,
    items: [
      { name: "रेड सॉस पास्ता", price: "130", veg: true },
      { name: "व्हाइट सॉस पास्ता", price: "130", veg: true },
    ],
  },

  {
    id: "chaat",
    title: "चाट",
    emoji: "🍱",
    image: chaatImg,
    items: [
      { name: "पापड़ी चाट", price: "40/60", quantity: "हाफ/फुल", veg: true },
      { name: "समोसा चाट", price: "30/50", quantity: "हाफ/फुल", veg: true },
      { name: "राज कचौड़ी चाट", price: "60", veg: true },
      { name: "टिक्की चाट", price: "30/50", quantity: "हाफ/फुल", veg: true },
    ],
  },
  {
    id: "momo",
    title: "मोमो",
    emoji: "🥟",
    image: momoImg,
    items: [
      { name: "वेज स्टीम मोमो", price: "70", quantity: "8 पीस", veg: true },
      { name: "वेज फ्राई मोमो", price: "90", quantity: "8 पीस", veg: true },
      { name: "वेज चिल्ली मोमो", price: "100", quantity: "8 पीस", veg: true },
      { name: "स्टीम पनीर मोमो", price: "120", quantity: "8 पीस", veg: true },
      { name: "पनीर मोमो फ्राई", price: "140", quantity: "8 पीस", veg: true },
      { name: "पनीर चिल्ली मोमो", price: "180", quantity: "8 पीस", veg: true },
      { name: "वेज तन्दूरी मोमो", price: "140", quantity: "8 पीस", veg: true },
      { name: "पनीर तन्दूरी मोमो", price: "200", quantity: "8 पीस", veg: true },
    ],
  },
  {
    id: "pizza",
    title: "पिज़्ज़ा",
    emoji: "🍕",
    image: pizzaImg,
    items: [
      { name: "वेज पिज़्ज़ा", price: "120/220", quantity: "छोटा/बड़ा", veg: true },
      { name: "पनीर पिज़्ज़ा", price: "140/240", quantity: "छोटा/बड़ा", veg: true },
      { name: "ऑनियन मशरूम पनीर", price: "140/230", quantity: "छोटा/बड़ा", veg: true },
      { name: "मशरूम पिज़्ज़ा", price: "140/260", quantity: "छोटा/बड़ा", veg: true },
      { name: "मशरूम चिल्ली पिज़्ज़ा", price: "160/280", quantity: "छोटा/बड़ा", veg: true },
      { name: "कॉर्न पिज़्ज़ा", price: "150/280", quantity: "छोटा/बड़ा", veg: true },
      { name: "इटालियन पिज़्ज़ा", price: "120/200", quantity: "छोटा/बड़ा", veg: true },
      { name: "भारत रेस्टू स्पेशल पिज़्ज़ा", price: "150/280", quantity: "छोटा/बड़ा", veg: true },
    ],
  },
  {
    id: "roll",
    title: "रोल",
    emoji: "🌯",
    image: rollImg,
    items: [
      { name: "वेज रोल", price: "50", veg: true },
      { name: "पनीर रोल", price: "80", veg: true },
      { name: "वेज चीज़ रोल", price: "80", veg: true },
      { name: "पनीर चीज़ रोल", price: "100", veg: true },
    ],
  },

  {
    id: "tandoor-roti",
    title: "तन्दूर रोटी",
    emoji: "🫓",
    image: tandoorRotiImg,
    items: [
      { name: "प्लेन रोटी", price: "10", veg: true },
      { name: "बटर रोटी", price: "15", veg: true },
      { name: "लच्छा पराठा", price: "25", veg: true },
      { name: "प्लेन नान", price: "30", veg: true },
      { name: "बटर नान", price: "35", veg: true },
      { name: "स्टफ्ड नान", price: "35", veg: true },
      { name: "स्टफ्ड पनीर नान", price: "60", veg: true },
      { name: "अमृतसरी नान", price: "50", veg: true },
      { name: "काजू नान", price: "70", veg: true },
      { name: "काश्मीरी नान", price: "90", veg: true },
      { name: "मिस्सी रोटी", price: "40", veg: true },
    ],
  },
  {
    id: "paratha",
    title: "पराठा",
    emoji: "🫔",
    image: parathaImg,
    items: [
      { name: "हरी मिर्च पराठा", price: "35", veg: true },
      { name: "लाल मिर्च पराठा", price: "30", veg: true },
      { name: "अजवाइन पराठा", price: "35", veg: true },
      { name: "आलू पराठा", price: "30", veg: true },
      { name: "पनीर पराठा", price: "40", veg: true },
    ],
  },
  {
    id: "chawal",
    title: "चावल",
    emoji: "🍚",
    image: chawalImg,
    items: [
      { name: "स्टीम राइस", price: "70", veg: true },
      { name: "जीरा राइस", price: "90", veg: true },
      { name: "फ्राई राइस", price: "110", veg: true },
      { name: "पोटैटो राइस", price: "100", veg: true },
      { name: "मंचूरियन राइस", price: "110", veg: true },
      { name: "पनीर फ्राई राइस", price: "130", veg: true },
      { name: "वेज पुलाव", price: "110", veg: true },
      { name: "काश्मीरी पुलाव", price: "120", veg: true },
      { name: "मटर पुलाव", price: "110", veg: true },
    ],
  },
  {
    id: "biryani",
    title: "बिरयानी",
    emoji: "🍛",
    image: biryaniImg,
    items: [
      { name: "टमाटर बिरयानी", price: "130", veg: true },
      { name: "वेज बिरयानी", price: "140", veg: true },
      { name: "दम बिरयानी", price: "160", veg: true },
      { name: "पनीर बिरयानी", price: "170", veg: true },
      { name: "मशरूम बिरयानी", price: "180", veg: true },
      { name: "वेज हाण्डी बिरयानी", price: "160", veg: true },
      { name: "पनीर हाण्डी बिरयानी", price: "190", veg: true },
      { name: "भारत रेस्टू स्पेशल बिरयानी", price: "210", veg: true },
    ],
  },
  {
    id: "dal",
    title: "दाल",
    emoji: "🫘",
    image: dalImg,
    items: [
      { name: "दाल फ्राई", price: "80", veg: true },
      { name: "दाल तड़का", price: "90", veg: true },
      { name: "दाल मखनी", price: "160", veg: true },
      { name: "दाल हाण्डी", price: "120", veg: true },
    ],
  },
  {
    id: "bhartiya",
    title: "भारतीय व्यंजन",
    emoji: "🍲",
    image: bhartiyaImg,
    items: [
      { name: "मटर पनीर", price: "100/170", quantity: "हाफ/फुल", veg: true },
      { name: "पनीर बटर मसाला", price: "210", veg: true },
      { name: "पनीर कड़ाही", price: "130/200", quantity: "हाफ/फुल", veg: true },
      { name: "पनीर हाण्डी", price: "130/200", quantity: "हाफ/फुल", veg: true },
      { name: "पनीर दो प्याज़ा", price: "220", veg: true },
      { name: "शाही पनीर", price: "220", veg: true },
      { name: "पनीर मसाला", price: "200", veg: true },
      { name: "पनीर हैदराबादी", price: "230", veg: true },
      { name: "पनीर लबादार", price: "230", veg: true },
      { name: "पंजाबी पनीर", price: "270", veg: true },
      { name: "पालक पनीर", price: "140/220", quantity: "हाफ/फुल", veg: true },
      { name: "पनीर पसंदा", price: "240", veg: true },
      { name: "पनीर भुर्जी", price: "230", veg: true },
      { name: "पनीर टिक्का मसाला", price: "240", veg: true },
    ],
  },
  {
    id: "mushroom",
    title: "मशरूम",
    emoji: "🍄",
    image: mushroomImg,
    items: [
      { name: "मशरूम बटर मसाला", price: "260", veg: true },
      { name: "कड़ाही मशरूम", price: "230", veg: true },
      { name: "मशरूम दो प्याज़ा", price: "240", veg: true },
      { name: "मटर मशरूम", price: "230", veg: true },
    ],
  },
  {
    id: "hara-sabji",
    title: "हरी सब्जी",
    emoji: "🥦",
    image: haraSabjiImg,
    items: [
      { name: "कड़ाही वेज", price: "180", veg: true },
      { name: "मिक्स वेज", price: "160", veg: true },
      { name: "वेज कोरमा", price: "240", veg: true },
      { name: "दम आलू", price: "140", veg: true },
      { name: "आलू जीरा", price: "110", veg: true },
      { name: "आलू पालक", price: "140", veg: true },
      { name: "दम आलू काश्मीरी", price: "180", veg: true },
      { name: "स्टफ्ड दम आलू", price: "230", veg: true },
      { name: "टमाटर दम मसाला", price: "200", veg: true },
      { name: "राजमा", price: "180", veg: true },
      { name: "चना मसाला", price: "130", veg: true },
      { name: "पालक कॉर्न", price: "190", veg: true },
      { name: "वेज कोफ्ता", price: "170", veg: true },
      { name: "मलाई कोफ्ता", price: "210", veg: true },
      { name: "पालक कोफ्ता", price: "200", veg: true },
    ],
  },
  {
    id: "tandoor-paneer",
    title: "तन्दूरी पनीर",
    emoji: "🔥",
    image: tandoorPaneerImg,
    items: [
      { name: "पनीर टिक्का", price: "210", veg: true },
      { name: "मलाई टिक्का", price: "200", veg: true },
      { name: "पनीर हरियाली टिक्का", price: "250", veg: true },
      { name: "पनीर गोली कबाब", price: "230", veg: true },
      { name: "वेज सीक कबाब", price: "190", veg: true },
      { name: "मशरूम टिक्का", price: "230", veg: true },
      { name: "पनीर सीक कबाब", price: "250", veg: true },
      { name: "पनीर पैरी टिक्का", price: "260", veg: true },
      { name: "पनीर बॉल", price: "260", veg: true },
    ],
  },
    {
    id: "south-indian",
    title: "दक्षिण भारतीय",
    emoji: "🥘",
    image: southIndianImg,
    items: [
      { name: "मसाला डोसा", price: "90", veg: true },
      { name: "पनीर डोसा", price: "120", veg: true },
      { name: "स्पेशल डोसा", price: "130", veg: true },
      { name: "ऑनियन डोसा", price: "90", veg: true },
      { name: "पेपर डोसा", price: "60", veg: true },
      { name: "मसाला पनीर डोसा", price: "110", veg: true },
      { name: "वेज उपमा", price: "100", veg: true },
      { name: "मिक्स उपमा", price: "120", veg: true },
      { name: "ऑनियन उपमा", price: "120", veg: true },
      { name: "टमाटर उपमा", price: "140", veg: true },
      { name: "इडली साम्भर", price: "70", veg: true },
    ],
  },
 
  {
    id: "salad-raita",
    title: "सलाद एवं रायता",
    emoji: "🥗",
    image: saladRaitaImg,
    items: [
      { name: "ग्रीन सलाद", price: "30/50", quantity: "हाफ/फुल", veg: true },
      { name: "बूंदी रायता", price: "40", veg: true },
      { name: "मिक्स वेज रायता", price: "40", veg: true },
      { name: "पाइनएप्पल रायता", price: "45", veg: true },
    ],
  },
  {
    id: "soup",
    title: "सूप",
    emoji: "🍵",
    image: soupImg,
    items: [
      { name: "वेज सूप", price: "70", veg: true },
      { name: "वेज मन्चो सूप", price: "90", veg: true },
      { name: "वेज मशरूम सूप", price: "110", veg: true },
      { name: "क्लियर सूप", price: "80", veg: true },
      { name: "टमाटर सूप", price: "90", veg: true },
      { name: "स्वीट कॉर्न सूप", price: "100", veg: true },
      { name: "हॉट एंड साऊर सूप", price: "110", veg: true },
      { name: "भारत रेस्टो स्पेशल सूप", price: "120", veg: true },
    ],
  },
  {
    id: "thali",
    title: "थाली",
    emoji: "🍽️",
    image: thaliImg,
    items: [
      { name: "वेज थाली", price: "120", veg: true },
      { name: "वेज डिलक्स थाली", price: "150", veg: true },
    ],
  },
  {
    id: "shake",
    title: "शेक",
    emoji: "🥤",
    image: shakeImg,
    items: [
      { name: "मिल्क शेक", price: "75/100", quantity: "प्लेन/आइसक्रीम", veg: true },
      { name: "चॉकलेट", price: "75/95", quantity: "प्लेन/आइसक्रीम", veg: true },
      { name: "बटर स्कॉच", price: "85/115", quantity: "प्लेन/आइसक्रीम", veg: true },
      { name: "मैंगो", price: "85/115", quantity: "प्लेन/आइसक्रीम", veg: true },
      { name: "स्ट्रॉबेरी", price: "90/125", quantity: "प्लेन/आइसक्रीम", veg: true },
      { name: "काजू", price: "95/120", quantity: "प्लेन/आइसक्रीम", veg: true },
      { name: "बादाम", price: "95/125", quantity: "प्लेन/आइसक्रीम", veg: true },
      { name: "ओरियो", price: "115/135", quantity: "प्लेन/आइसक्रीम", veg: true },
      { name: "किट-कैट", price: "95/115", quantity: "प्लेन/आइसक्रीम", veg: true },
      { name: "कोल्ड कॉफी", price: "85/105", quantity: "प्लेन/आइसक्रीम", veg: true },
      { name: "वनिला", price: "75/95", quantity: "प्लेन/आइसक्रीम", veg: true },
    ],
  },
    {
    id: "pesty",
    title: "पेस्ट्री",
    emoji: "🥐",
    image: pestyImg,
    items: [
      { name: "पाइनएप्पल पेस्ट्री", price: "40", veg: true },
      { name: "वनिला पेस्ट्री", price: "40", veg: true },
      { name: "बटर स्कॉच पेस्ट्री", price: "40", veg: true },
      { name: "ब्लैक फॉरेस्ट पेस्ट्री", price: "45", veg: true },
      { name: "बटर स्कॉच कप पेस्ट्री", price: "50", veg: true },
      { name: "चॉकलेट पेस्ट्री", price: "45", veg: true },
      { name: "चॉकलेट कप पेस्ट्री", price: "50", veg: true },
    ],
  },
  {
    id: "icecream",
    title: "आइसक्रीम",
    emoji: "🍦",
    image: icecreamImg,
    items: [
      { name: "वनिला", price: "30/40", quantity: "कप/कोन", veg: true },
      { name: "बटर स्कॉच", price: "40/50", quantity: "कप/कोन", veg: true },
      { name: "चॉकलेट", price: "45/55", quantity: "कप/कोन", veg: true },
      { name: "स्ट्रॉबेरी", price: "40/45", quantity: "कप/कोन", veg: true },
      { name: "मैंगो", price: "55/60", quantity: "कप/कोन", veg: true },
      { name: "पाइनएप्पल", price: "45/55", quantity: "कप/कोन", veg: true },
    ],
  },
  {
    id: "sweets",
    title: "मिठाई",
    emoji: "🍮",
    image: sweetsImg,
    items: [
      { name: "रसगुल्ला", price: "20", veg: true },
      { name: "राज भोग", price: "30", veg: true },
      { name: "गुलाब जामुन", price: "20", veg: true },
      { name: "क्रीम चॉप", price: "20", veg: true },
      { name: "छेना रोल", price: "40", veg: true },
      { name: "रसमलाई", price: "50", veg: true },
    ],
  },
];

export const PHONE_NUMBER_1 = "7979745730";
export const PHONE_NUMBER_2 = "9471217870";
export const WHATSAPP_NUMBER = "917979745730";
