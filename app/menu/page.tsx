'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import './menu.css'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

const menuItems: MenuItem[] = [
  // SALATLAR VA ZAKUSKALAR
  {
    id: 1,
    name: 'Assorti gruzin namazoklari',
    description: 'Pxali (lavlagi, baqlajon, qovurilgan qalampir) va xumus',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    category: 'Salatlar va Zakuskalar'
  },
  {
    id: 2,
    name: 'Baqlajon ruliklari',
    description: 'Yupqa baqlajon bo\'laklari, yong\'oq pastasi va xushbo\'y o\'tlar bilan',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop',
    category: 'Salatlar va Zakuskalar'
  },
  {
    id: 3,
    name: 'Yirtilgan baqlajon sarimsoq va kashnich bilan',
    description: 'Pishirilgan baqlajonlar, achchiq sarimsoq va yangi ko\'katlar bilan',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop',
    category: 'Salatlar va Zakuskalar'
  },
  {
    id: 4,
    name: 'Grek salati',
    description: 'Yangi sabzavotlar, feta pishlog\'i, zaytun va zaytun moyi',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    category: 'Salatlar va Zakuskalar'
  },
  {
    id: 5,
    name: 'Tsezar tovuq bilan',
    description: 'Tovuq filesi, romano barglari, xrustyash kruтонlar va "Tsezar" sousi',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    category: 'Salatlar va Zakuskalar'
  },
  {
    id: 6,
    name: 'Tsezar qisqichbaqa bilan',
    description: 'Klassik "Tsezar" salati nozik qisqichbaqalar bilan',
    price: 60000,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop',
    category: 'Salatlar va Zakuskalar'
  },
  {
    id: 7,
    name: 'Xrustyash baqlajonli salat',
    description: 'Oltin rangga qovurilgan baqlajonlar, sabzavotlar va yong\'oq sousi bilan',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop',
    category: 'Salatlar va Zakuskalar'
  },
  {
    id: 8,
    name: 'Steyk-salat qovurilgan suluguni bilan',
    description: 'Shirali steyk, yangi sabzavotlar va xrustyash qovurilgan suluguni - oshpazimizning mualliflik taqdimoti',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
    category: 'Salatlar va Zakuskalar'
  },
  {
    id: 9,
    name: 'Gruzinskiy salat yong\'oq bilan',
    description: 'Sabzavotlar va ko\'katlar an\'anaviy yong\'oq sousi bilan',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    category: 'Salatlar va Zakuskalar'
  },
  {
    id: 10,
    name: 'Kapreze mozzarella va pesto sousi bilan',
    description: 'Pishgan pomidorlar, mozzarella va xushbo\'y pesto kombinatsiyasi',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=300&fit=crop',
    category: 'Salatlar va Zakuskalar'
  },
  
  // SUPLAR
  {
    id: 11,
    name: 'Xarcho qora olxo\'ri bilan',
    description: 'An\'anaviy gruzin supi mol go\'shti, guruch va yengil nordon-shirin notasi bilan',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    category: 'Suplar'
  },
  {
    id: 12,
    name: 'Qo\'ziqorin supi',
    description: 'Xushbo\'y champinon supi nozik qaymoqli ta\'m bilan',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=300&fit=crop',
    category: 'Suplar'
  },
  {
    id: 13,
    name: 'Tom Yam',
    description: 'Mashhur tay supi qisqichbaqa, kokos suti va achchiq ziravorlar bilan',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop',
    category: 'Suplar'
  },
  {
    id: 14,
    name: 'Borshch go\'sht bilan',
    description: 'Klassik borshch go\'shtli bulon, yangi sabzavotlar va smetana bilan',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    category: 'Suplar'
  },
  {
    id: 15,
    name: 'Pomidor krem-supi kremetta bilan',
    description: 'Baxmal pomidor supi, nozik qaymoqli pishloq bilan tortiladi',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    category: 'Suplar'
  },
  {
    id: 16,
    name: 'Achchiq tovuq supi',
    description: 'To\'yingan tovuq buloni sabzavotlar va ziravorlar bilan',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    category: 'Suplar'
  },
  {
    id: 17,
    name: 'Pelmeni gruzincha',
    description: 'Nozik pelmenlar, xushbo\'y tovuq bulonida pishloq va ziravorlar bilan tortiladi',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    category: 'Suplar'
  },
  
  // PIZZA VA PECHDAN
  {
    id: 18,
    name: 'Xachapuri imeretinskiy',
    description: 'Klassik gruzin xachapuri cho\'ziluvchan pishloq bilan',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    category: 'Pizza va Pechdan'
  },
  {
    id: 19,
    name: 'Xachapuri megrelskiy',
    description: 'Pishloq ichida va ustida - yanada to\'yingan ta\'m',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    category: 'Pizza va Pechdan'
  },
  {
    id: 20,
    name: 'Xachapuri adjarskiy',
    description: 'Xamir qayig\'i pishloq va tuxum bilan',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    category: 'Pizza va Pechdan'
  },
  {
    id: 21,
    name: 'Xachapuri adjarskiy pomidor va pesto bilan',
    description: 'Orijinal versiya shirali pomidorlar va pesto sousi bilan',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    category: 'Pizza va Pechdan'
  },
  {
    id: 22,
    name: 'Kubdari',
    description: 'Gruzinskiy pirog go\'shtli to\'ldiruvchi va xushbo\'y ziravorlar bilan',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    category: 'Pizza va Pechdan'
  },
  {
    id: 23,
    name: 'Margarita',
    description: 'Pomidor, mozzarella va bazilik - Italiya klassikasi',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: 'Pizza va Pechdan'
  },
  {
    id: 24,
    name: 'Pepperoni',
    description: 'Pishloq va achchiq pepperoni kolbasa',
    price: 70000,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: 'Pizza va Pechdan'
  },
  {
    id: 25,
    name: 'Kaprichoza',
    description: 'Pishloq, vetchina, qo\'ziqorin va zaytun',
    price: 70000,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: 'Pizza va Pechdan'
  },
  {
    id: 26,
    name: 'Pizza 4 pishloq',
    description: 'Gurmanlar uchun to\'rtta pishloq navining kombinatsiyasi',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: 'Pizza va Pechdan'
  },
  {
    id: 27,
    name: 'Pizza 4 fasl',
    description: 'Har bir bo\'lak boshqacha ta\'mga ega - italyan oshxonasining klassikasi',
    price: 60000,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: 'Pizza va Pechdan'
  },
  {
    id: 28,
    name: 'Pizza sabzavotlar bilan',
    description: 'Yengil va xushbo\'y pizza yangi sabzavotlar bilan',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: 'Pizza va Pechdan'
  },
  {
    id: 29,
    name: 'Pizza Beshamel',
    description: 'Nozik qaymoqli asos pishloq va o\'tlar bilan',
    price: 70000,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: 'Pizza va Pechdan'
  },
  {
    id: 30,
    name: 'Assorti pechdan',
    description: 'Fokachcha, pita, tirnak-pide - xushbo\'y trio yangi pechdan, an\'anaviy retseptlar bo\'yicha tayyorlangan',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
    category: 'Pizza va Pechdan'
  },
  
  // SUSHI ROLLARI
  {
    id: 31,
    name: 'Filadelfiya klassik',
    description: 'Yangi losos, yumshoq qaymoqli pishloq va mukammal pishirilgan guruch - vaqt sinovdan o\'tgan uyg\'unlik',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Sushi Rollari'
  },
  {
    id: 32,
    name: 'Pishirilgan roll',
    description: 'Qisqichbaqa, tovuq, losos, ilonbaliq yoki krevetka bilan',
    price: 70000,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Sushi Rollari'
  },
  {
    id: 33,
    name: 'Roll Kaliforniya',
    description: 'Qisqichbaqa yoki losos bilan',
    price: 70000,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Sushi Rollari'
  },
  {
    id: 34,
    name: 'Roll Tempura',
    description: 'Qisqichbaqa, tovuq, losos, ilonbaliq yoki krevetka bilan',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Sushi Rollari'
  },
  {
    id: 35,
    name: 'Roll Achchiq tovuq',
    description: 'Achchiq sous va kunjut bilan tovuq',
    price: 60000,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Sushi Rollari'
  },
  {
    id: 36,
    name: 'Pishirilgan tovuq',
    description: 'To\'yingan roll tovuq qaymoqli-pishloq sousi ostida',
    price: 60000,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Sushi Rollari'
  },
  {
    id: 37,
    name: 'Roll Achchiq losos',
    description: 'Achchiq sous bilan losos',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Sushi Rollari'
  },
  {
    id: 38,
    name: 'Kappa maki roll',
    description: 'Bodring va kunjut bilan klassik roll',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Sushi Rollari'
  },
  {
    id: 39,
    name: 'Sake maki roll',
    description: 'Nozik roll losos va guruch bilan',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Sushi Rollari'
  },
  {
    id: 40,
    name: 'Unagi Filadelfiya',
    description: 'Tutunlangan ilonbaliq, qaymoqli pishloq, bodring bilan roll, nozik losos qatlami bilan qoplangan. Ta\'m va teksturalarning mukammal kombinatsiyasi',
    price: 70000,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Sushi Rollari'
  },
  {
    id: 41,
    name: 'Futo maki roll',
    description: 'Baliq, sabzavot va pishloqning boy to\'ldiruvchisi bilan roll',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Sushi Rollari'
  },
  {
    id: 42,
    name: 'Nozik roll',
    description: 'Yengil roll nozik qaymoqli pishloq va yangi ingredientlar bilan',
    price: 80000,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Sushi Rollari'
  },
  {
    id: 43,
    name: 'Roll Tsezar',
    description: 'Tovuq, pishloq va sabzavotlarning original kombinatsiyasi sevimli salat uslubida',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Sushi Rollari'
  },
  {
    id: 44,
    name: 'Kappa Maki Roll chukka bilan',
    description: 'Yengil roll chukka dengiz o\'tlari va nozik guruch nori bilan o\'ralgan',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Sushi Rollari'
  },
  
  // ISSIQ TAOMLAR
  {
    id: 45,
    name: 'Xinkali mol go\'shti bilan',
    description: 'Xushbo\'y mol go\'shti va ziravorlar bilan to\'yingan gruzin xinkalisi',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    category: 'Issiq Taomlar'
  },
  {
    id: 46,
    name: 'Xinkali qo\'y go\'shti bilan',
    description: 'Shirali qo\'y go\'shti va ko\'katlar bilan tayyorlangan an\'anaviy xinkali',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    category: 'Issiq Taomlar'
  },
  {
    id: 47,
    name: 'Pasta qisqichbaqa bilan',
    description: 'Qaymoqli sousdagi yo\'lbars qisqichbaqalari bilan italyan pastasi',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop',
    category: 'Issiq Taomlar'
  },
  {
    id: 48,
    name: 'Spagetti Aglio Olio Peperoncino',
    description: 'Zaytun moyi, sarimsoq va achchiq qalampir bilan klassik spagetti',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
    category: 'Issiq Taomlar'
  },
  {
    id: 49,
    name: 'Fettuccine Alfredo',
    description: 'Parmesan pishlog\'i bilan nozik qaymoqli sousdagi fettuccine',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
    category: 'Issiq Taomlar'
  },
  {
    id: 50,
    name: 'Karbonara mol go\'shti bilan',
    description: 'Shirali mol go\'shti bo\'laklari va parmesan bilan qaymoqli-tuxumli sousdagi nozik pasta',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
    category: 'Issiq Taomlar'
  },
  {
    id: 51,
    name: 'Chaxoxbili tovuqdan',
    description: 'Pomidor sousida piyoz va gruzin ziravorlari bilan dimlangan tovuq',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
    category: 'Issiq Taomlar'
  },
  {
    id: 52,
    name: 'Tovuq tabaka sarimsoq sousida',
    description: 'Achchiq sarimsoq sousidagi oltin rangli tovuq tabaka',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
    category: 'Issiq Taomlar'
  },
  {
    id: 53,
    name: 'Mol go\'shti medalonlari bebek kartoshka bilan',
    description: 'Oltin rangli yosh kartoshka bilan nozik mol go\'shti bo\'laklari',
    price: 110000,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
    category: 'Issiq Taomlar'
  },
  {
    id: 54,
    name: 'Tovuq filesi fransuzcha',
    description: 'Pishloq ostida pishirilgan tovuq filesi, fri kartoshkasi bilan tortiladi',
    price: 70000,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
    category: 'Issiq Taomlar'
  },
  {
    id: 55,
    name: 'Dimlangan mol go\'shti yonoqlari tutunlangan pyure bilan',
    description: 'Tutunlangan hidli baxmal kartoshka pyuresi bilan nozik mol go\'shti yonoqlari',
    price: 80000,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
    category: 'Issiq Taomlar'
  },
  {
    id: 56,
    name: 'Dimlangan qovurg\'alar "Olovda"',
    description: 'Shirali mol go\'shti qovurg\'alari, sekin dimlangan, tuz bilan tortiladi va olovda effektli tarzda qovuriladi',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
    category: 'Issiq Taomlar'
  },
  
  // KOFE
  {
    id: 57,
    name: 'Espresso',
    description: 'Klassik italyan kofe to\'yingan ta\'m bilan',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop',
    category: 'Kofe'
  },
  {
    id: 58,
    name: 'Americano',
    description: 'Yengil kofe espresso asosida qaynoq suv qo\'shilgan',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop',
    category: 'Kofe'
  },
  {
    id: 59,
    name: 'Cappuccino',
    description: 'Xushbo\'y kofe nozik sutli ko\'pik bilan',
    price: 17000,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
    category: 'Kofe'
  },
  {
    id: 60,
    name: 'Latte',
    description: 'Yumshoq kofe ichimligi ko\'p miqdorda sut bilan',
    price: 17000,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
    category: 'Kofe'
  },
  {
    id: 61,
    name: 'Raf',
    description: 'Havodor qaymoqli kofe yengil vanil notasi bilan',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
    category: 'Kofe'
  },
  {
    id: 62,
    name: 'Flat White',
    description: '2x espresso baxmal tekstura va nozik sutli ko\'pik qatlami bilan',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
    category: 'Kofe'
  },
  {
    id: 63,
    name: 'Issiq shokolad',
    description: 'Isitadigan ichimlik to\'yingan kakao ta\'mi bilan',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1570554886110-855b4655ccb0?w=400&h=300&fit=crop',
    category: 'Kofe'
  },
  
  // AYS KOFE
  {
    id: 64,
    name: 'Ays Americano',
    description: 'Klassik americano muz bilan - yengil va tetiklantiruvchi',
    price: 17000,
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop',
    category: 'Ays Kofe'
  },
  {
    id: 65,
    name: 'Ays Latte',
    description: 'Nozik sovuq kofe sut va muz bilan',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop',
    category: 'Ays Kofe'
  },
  {
    id: 66,
    name: 'Ays Cappuccino',
    description: 'Xushbo\'y kofe muz va yengil sutli ko\'pik bilan',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop',
    category: 'Ays Kofe'
  },
  {
    id: 67,
    name: 'Frappe',
    description: 'Yunon sovuq kofe muz va havodor ko\'pik bilan, tetiklantiruvchi va jonlantiruvchi',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop',
    category: 'Ays Kofe'
  },
  {
    id: 68,
    name: 'Freddo Cappuccino',
    description: 'Nozik sovuq kofe qaymoqli ko\'pik bilan, muz bilan tortiladi',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop',
    category: 'Ays Kofe'
  },
  
  // CHOY
  {
    id: 69,
    name: 'Turk choyi',
    description: 'An\'anaviy uslubdagi kuchli va xushbo\'y choy',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    category: 'Choy'
  },
  {
    id: 70,
    name: 'Ko\'k choy',
    description: 'Yengil va tetiklantiruvchi, yumshoq ta\'mli ichimlik',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    category: 'Choy'
  },
  {
    id: 71,
    name: 'Qora choy',
    description: 'Boy va to\'yingan xushbo\'y hidli klassik choy',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    category: 'Choy'
  },
  {
    id: 72,
    name: 'Bergamotli choy',
    description: 'Tsitrulli notali xushbo\'y qora choy',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    category: 'Choy'
  },
  {
    id: 73,
    name: 'Yasminli choy',
    description: 'Nozik yasmin xushbo\'y hidli nafis ko\'k choy',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    category: 'Choy'
  },
  {
    id: 74,
    name: 'Sutli oolong',
    description: 'Yumshoq qaymoqli ta\'mli elit choy',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    category: 'Choy'
  },
  
  // UY CHOYLARI
  {
    id: 75,
    name: 'Chakanda-zanjabilli choy',
    description: 'Chakandaning nordonligi va isituvchi zanjabil bilan yorqin choy',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    category: 'Uy Choylari'
  },
  {
    id: 76,
    name: 'Gilos-qulupnayli choy',
    description: 'Gilos va qulupnayning boy ta\'miga ega mevali choy',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    category: 'Uy Choylari'
  },
  {
    id: 77,
    name: 'Yalpiz-chakanda-qalampirchoyli choy',
    description: 'Achchiq notali tetiklantiruvchi choy',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    category: 'Uy Choylari'
  },
  {
    id: 78,
    name: 'Malina-zanjabilli choy',
    description: 'Mevali shirinlik va yengil zanjabil achchiqligi bilan xushbo\'y choy',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    category: 'Uy Choylari'
  },
  {
    id: 79,
    name: 'Shaftoli-malinali choy',
    description: 'Pishgan mevalar va rezavorlarning yorqin ta\'miga ega mevali choy',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    category: 'Uy Choylari'
  },
  
  // ALKOGOLSIZ ICHIMLIKLAR
  {
    id: 80,
    name: 'Pepsi',
    description: '0.250ml',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop',
    category: 'Ichimliklar'
  },
  {
    id: 81,
    name: 'Pepsi Zero',
    description: '0.250ml',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop',
    category: 'Ichimliklar'
  },
  {
    id: 82,
    name: 'Mirinda',
    description: '0.250ml',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop',
    category: 'Ichimliklar'
  },
  {
    id: 83,
    name: '7Up',
    description: '0.250ml',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop',
    category: 'Ichimliklar'
  },
  {
    id: 84,
    name: 'Chortoq',
    description: '0.330ml',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop',
    category: 'Ichimliklar'
  },
  {
    id: 85,
    name: 'Borjomi',
    description: '0.500ml',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop',
    category: 'Ichimliklar'
  },
  {
    id: 86,
    name: 'Adrenaline Rush',
    description: '0.250ml',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop',
    category: 'Ichimliklar'
  },
  
  // FRESH
  {
    id: 87,
    name: 'Tsitrusoviy firmenniy',
    description: 'Shirali mix apelsin, greypfrut va limon',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    category: 'Fresh'
  },
  {
    id: 88,
    name: 'Yablochniy',
    description: 'Pishgan olmalardan yangi siqilgan sharbat',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    category: 'Fresh'
  },
  {
    id: 89,
    name: 'Morkovniy',
    description: 'Foydali fresh yorqin ta\'m bilan',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    category: 'Fresh'
  },
  
  // KOMPOTLAR
  {
    id: 90,
    name: 'Smorodina-vishnya',
    description: 'Mevali nordonlik bilan tetiklantiruvchi ichimlik',
    price: 50000,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    category: 'Kompotlar'
  },
  {
    id: 91,
    name: 'Mors oblepixoviy',
    description: 'Vitaminli mors yengil nordonlik va to\'yingan chakanda ta\'mi bilan',
    price: 60000,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    category: 'Kompotlar'
  },
  
  // MILKSHEYKLAR
  {
    id: 92,
    name: 'Vanilniy milksheyk',
    description: 'Nozik sutli kokteyl vanil ta\'mi bilan',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
    category: 'Milksheyklar'
  },
  {
    id: 93,
    name: 'Shokoladniy milksheyk',
    description: 'Klassik sutli kokteyl to\'yingan shokolad bilan',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
    category: 'Milksheyklar'
  },
  {
    id: 94,
    name: 'Klubnichniy milksheyk',
    description: 'Shirin va tetiklantiruvchi kokteyl qulupnay bilan',
    price: 38000,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
    category: 'Milksheyklar'
  },
  
  // LIMONADLAR
  {
    id: 95,
    name: 'Klubnika-persik',
    description: 'Quyoshli ichimlik mevalarning yumshoq shirinligi bilan',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    category: 'Limonadlar'
  },
  {
    id: 96,
    name: 'Oblepixa-marakuyya',
    description: 'Yorqin vitaminli ichimlik chakanda nordonligi va tropik marakuyya shirinligi bilan',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    category: 'Limonadlar'
  },
  {
    id: 97,
    name: 'Yagodniy',
    description: 'Tetiklantiruvchi ichimlik yovvoyi mevalarning to\'yingan ta\'mi bilan',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    category: 'Limonadlar'
  },
  {
    id: 98,
    name: 'Moxito klassik',
    description: 'Afsonaviy tetiklantiruvchi kokteyl laym, yalpiz va yengil jilolanish bilan',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    category: 'Limonadlar'
  },
  {
    id: 99,
    name: 'Moxito smorodina',
    description: 'Tetiklantiruvchi kokteyl laym, yalpiz va yorqin smorodina nordonligi bilan',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop',
    category: 'Limonadlar'
  },
  
  // SIRUPLAR
  {
    id: 100,
    name: 'Aromatli sirop',
    description: 'Vanil, karamel, yong\'oq, qulupnay va boshqalar - kofe yoki desertingiz uchun noyob ta\'m yaratish uchun',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop',
    category: 'Siroplar'
  }
]

export default function MenuPage() {
  const [cart, setCart] = useState<MenuItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('Barchasi')
  const [showCart, setShowCart] = useState(false)
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: ''
  })

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    // Update cart count in navigation
    window.dispatchEvent(new Event('cartUpdated'))
  }, [cart])

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item])
  }

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price, 0)
  }

  const categories = ['Barchasi', ...Array.from(new Set(menuItems.map(item => item.category)))]

  const filteredItems = selectedCategory === 'Barchasi'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory)

  const handleOrderClick = () => {
    if (cart.length === 0) {
      alert('Dastafka bo\'sh!')
      return
    }
    setShowOrderForm(true)
  }

  const handleCustomerInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    })
  }

  const sendOrderToTelegram = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!customerInfo.firstName || !customerInfo.lastName || !customerInfo.phone || !customerInfo.address) {
      alert('Iltimos, barcha maydonlarni to\'ldiring!')
      return
    }

    const orderText = `🛒 YANGI BUYURTMA\n\n` +
      `👤 Mijoz ma'lumotlari:\n` +
      `Ism: ${customerInfo.firstName}\n` +
      `Familya: ${customerInfo.lastName}\n` +
      `Telefon: ${customerInfo.phone}\n` +
      `Manzil: ${customerInfo.address}\n\n` +
      `📋 Buyurtma:\n` +
      cart.map((item, index) => 
        `${index + 1}. ${item.name} - ${item.price.toLocaleString()} so'm`
      ).join('\n') +
      `\n\n💰 Jami: ${getTotalPrice().toLocaleString()} so'm`

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: orderText,
          type: 'order'
        }),
      })

      const data = await response.json()
      
      if (response.ok) {
        alert('Buyurtma muvaffaqiyatli yuborildi!')
        setCart([])
        setShowCart(false)
        setShowOrderForm(false)
        setCustomerInfo({
          firstName: '',
          lastName: '',
          phone: '',
          address: ''
        })
      } else {
        console.error('API Error:', data)
        alert(`Xatolik yuz berdi: ${data.details || data.error || 'Noma\'lum xatolik'}. Iltimos, qayta urinib ko'ring.`)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Tarmoq xatosi. Iltimos, internetingizni tekshiring va qayta urinib ko\'ring.')
    }
  }

  return (
    <main className="menu-page">
      <div className="container">
        <h1 className="page-title">Menu</h1>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-item card">
              <div className="menu-item-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="menu-image"
                  unoptimized
                />
              </div>
              <h3>{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
              <div className="menu-item-footer">
                <span className="menu-item-price">{item.price.toLocaleString()} so'm</span>
                <button className="btn btn-primary" onClick={() => addToCart(item)}>
                  Qo'shish
                </button>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="cart-fab" onClick={() => setShowCart(true)}>
            🛒 Dastafka ({cart.length})
          </div>
        )}

        {showCart && (
          <div className="cart-modal">
            <div className="cart-content">
              <div className="cart-header">
                <h2>Dastafka</h2>
                <button className="close-btn" onClick={() => setShowCart(false)}>✕</button>
              </div>
              <div className="cart-items">
                {cart.map((item, index) => (
                  <div key={index} className="cart-item">
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.price.toLocaleString()} so'm</p>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(index)}>
                      O'chirish
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Jami: {getTotalPrice().toLocaleString()} so'm</strong>
                </div>
                <button className="btn btn-primary" onClick={handleOrderClick}>
                  Buyurtma berish
                </button>
              </div>
            </div>
          </div>
        )}

        {showOrderForm && (
          <div className="cart-modal">
            <div className="cart-content order-form-content">
              <div className="cart-header">
                <h2>Buyurtma ma'lumotlari</h2>
                <button className="close-btn" onClick={() => setShowOrderForm(false)}>✕</button>
              </div>
              <form onSubmit={sendOrderToTelegram} className="order-form">
                <div className="form-group">
                  <label htmlFor="firstName">Ism *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={customerInfo.firstName}
                    onChange={handleCustomerInfoChange}
                    required
                    placeholder="Ismingizni kiriting"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Familya *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={customerInfo.lastName}
                    onChange={handleCustomerInfoChange}
                    required
                    placeholder="Familyangizni kiriting"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefon raqami *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleCustomerInfoChange}
                    required
                    placeholder="+998 90 123 45 67"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Manzil *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleCustomerInfoChange}
                    required
                    placeholder="Yetkazib berish manzili"
                  />
                </div>

                <div className="order-summary">
                  <h3>Buyurtma:</h3>
                  {cart.map((item, index) => (
                    <div key={index} className="order-item">
                      <span>{item.name}</span>
                      <span>{item.price.toLocaleString()} so'm</span>
                    </div>
                  ))}
                  <div className="order-total">
                    <strong>Jami: {getTotalPrice().toLocaleString()} so'm</strong>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowOrderForm(false)}>
                    Bekor qilish
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Buyurtma berish
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

