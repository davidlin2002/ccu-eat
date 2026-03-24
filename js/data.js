const restaurants = [
  // ===== 早餐組 =====
  {
    id: 1,
    name: "布格早午餐",
    category: "早餐",
    rating: 4.7,
    reviews: 320,
    deliveryTime: "12 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉大學路一段（大吃後方）",
    phone: "05-272-0001",
    hours: "06:30 - 11:00",
    description: "中正大學附近早餐店中相對便宜的選擇，品項多樣，份量不算小。招牌泡麵加麵一份可以撐到下午，口味中上，但口味清淡的同學要稍微斟酌一下。",
    tags: ["早餐", "平價"],
    promotion: null,
    menu: [
      { name: "泡麵加麵", price: 50, description: "招牌品項，一份撐一整天" },
      { name: "薯餅蛋塔", price: 45, description: "布格經典推薦餐點" },
      { name: "洋蔥豬柳米漢堡", price: 55, description: "人氣米漢堡" },
      { name: "大冰奶", price: 25, description: "早餐必備飲品" }
    ],
    reviewsList: [
      { user: "早起鳥", rating: 5, text: "泡麵加麵真的超飽！CP值很高。", date: "2026-01-15" },
      { user: "中正新生", rating: 4, text: "便宜又方便，品項選擇也多。", date: "2025-12-20" }
    ]
  },
  {
    id: 2,
    name: "早餐好樂",
    category: "早餐",
    rating: 4.3,
    reviews: 280,
    deliveryTime: "15 分鐘",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉復農路89-2號",
    phone: "05-272-0273",
    hours: "07:30 - 14:00（週一公休）",
    description: "又被同學們戲稱為「早餐好貴」，東西較貴但品項比較新潮。人潮眾多但內場人手不算多，等餐需要多點耐心。漢堡類都表現不錯。",
    tags: ["早餐", "漢堡", "早午餐"],
    promotion: null,
    menu: [
      { name: "辣味麵", price: 55, description: "微辣口感，開胃早餐" },
      { name: "起司牛肉漢堡", price: 65, description: "厚實牛肉排搭配起司" },
      { name: "培根蛋餅", price: 45, description: "酥脆蛋餅搭配培根" },
      { name: "鮮奶茶", price: 35, description: "使用鮮奶調製" }
    ],
    reviewsList: [
      { user: "漢堡控", rating: 4, text: "漢堡類真的不錯，但價格偏高。", date: "2026-02-10" },
      { user: "等餐苦主", rating: 4, text: "品質好但要有耐心等，人潮很多。", date: "2025-11-28" }
    ]
  },
  {
    id: 3,
    name: "侯記中式早餐",
    category: "早餐",
    rating: 4.5,
    reviews: 450,
    deliveryTime: "10 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉小吃市（CD棟宿舍門口對面）",
    phone: "05-272-0003",
    hours: "06:00 - 14:00（週日公休）",
    description: "就在小吃街附近，離宿舍距離不遠，東西便宜品項也多，消費族群廣大。賣的是飯麵湯，調味偏鹹，一頓可以撐一天。常點的是黑白切比較多，餛飩清湯也可以換成扁食或其他多一點。",
    tags: ["早餐", "台灣美食", "小吃", "平價"],
    promotion: null,
    menu: [
      { name: "黑白切", price: 50, description: "招牌小菜拼盤" },
      { name: "炒麵/乾麵/湯麵", price: 35, description: "各式麵食" },
      { name: "油飯/滷肉飯", price: 30, description: "古早味飯類" },
      { name: "餛飩湯", price: 40, description: "手工餛飩，湯頭清甜" }
    ],
    reviewsList: [
      { user: "省錢達人", rating: 5, text: "便宜又大碗，學生的好朋友！", date: "2026-01-05" },
      { user: "中正老鳥", rating: 4, text: "從大一吃到大四，調味偏鹹但很下飯。", date: "2025-12-15" }
    ]
  },
  {
    id: 4,
    name: "鹿初 Brunch",
    category: "早餐",
    rating: 4.5,
    reviews: 200,
    deliveryTime: "8 分鐘",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉大學路一段（大吃區域）",
    phone: "05-272-0004",
    hours: "07:00 - 14:00",
    description: "價格還可以，味道也不賴，就在大學附近學校周邊，算是非常方便的選項。沒有特別喜歡的品項。",
    tags: ["早餐", "早午餐"],
    promotion: null,
    menu: [
      { name: "法式先生", price: 65, description: "招牌早午餐" },
      { name: "經典蛋餅", price: 35, description: "酥脆蛋餅，口味多選" },
      { name: "吐司夾蛋", price: 30, description: "經典組合" },
      { name: "紅茶", price: 20, description: "古早味紅茶" }
    ],
    reviewsList: [
      { user: "懶人學生", rating: 4, text: "離學校很近，趕課前快速解決早餐。", date: "2026-02-01" },
      { user: "隨便吃", rating: 4, text: "中規中矩，方便就好。", date: "2025-11-10" }
    ]
  },

  // ===== 午晚餐組 =====
  {
    id: 5,
    name: "嘉農小館",
    category: "便當",
    rating: 4.9,
    reviews: 680,
    deliveryTime: "15 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉神農一街（大吃巷子裡）",
    phone: "05-272-0005",
    hours: "11:00 - 14:00, 17:00 - 20:00（週六公休）",
    description: "價格不算太貴，菜色口味也算均衡，中正附近不錯的便當店，但更推薦內用。嘉農無骨雞腿不必多說，此生必吃！滷蛋也相當好，蛋黃不會太乾，吃起來味道跟口感都好。免費提供冬瓜茶。",
    tags: ["便當", "台灣美食"],
    promotion: "學生套餐優惠中",
    menu: [
      { name: "香煎無骨雞腿飯", price: 75, description: "此生必吃！外酥內嫩無骨雞腿" },
      { name: "椒鹽豪大雞排飯", price: 80, description: "現點現炸豪大雞排" },
      { name: "酥炸排骨飯", price: 70, description: "酥炸排骨搭配四五樣配菜" },
      { name: "滷蛋", price: 10, description: "蛋黃不會太乾，入味好吃" }
    ],
    reviewsList: [
      { user: "便當王", rating: 5, text: "無骨雞腿飯是中正附近的天花板！必吃。", date: "2026-03-01" },
      { user: "內用派", rating: 5, text: "滷蛋也超好吃，蛋黃不乾，味道剛好。", date: "2026-02-18" }
    ]
  },
  {
    id: 6,
    name: "品味香",
    category: "台灣美食",
    rating: 4.5,
    reviews: 350,
    deliveryTime: "12 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉大吃市",
    phone: "05-272-0006",
    hours: "11:00 - 20:30",
    description: "品項多元的燴飯店。中藥湯頭沒有很喜歡，但有些同學很愛。燴飯跟飯類、麵類普普，可以安穩吃飽，算是不特別出彩的選擇。個人最喜歡蛋包燴飯。",
    tags: ["台灣美食", "燴飯"],
    promotion: null,
    menu: [
      { name: "蛋包燴飯", price: 80, description: "滑嫩蛋皮包覆燴飯" },
      { name: "什錦燴飯", price: 75, description: "多種配料搭配燴飯" },
      { name: "中藥湯", price: 30, description: "獨特中藥湯頭" },
      { name: "炒麵", price: 60, description: "大火快炒，鍋氣十足" }
    ],
    reviewsList: [
      { user: "燴飯愛好者", rating: 5, text: "蛋包燴飯是我的最愛，每週必吃一次。", date: "2026-01-20" },
      { user: "吃飽就好", rating: 4, text: "普通但穩定，可以安穩吃飽的好選擇。", date: "2025-12-08" }
    ]
  },
  {
    id: 7,
    name: "地中海美食",
    category: "台灣美食",
    rating: 4.5,
    reviews: 310,
    deliveryTime: "12 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉神農路（大吃市）",
    phone: "0911-196-137",
    hours: "11:00 - 14:00, 17:00 - 20:00",
    description: "在品味香附近的燴飯店，藍白色調的店面很有特色。有特別的花椒雞燴飯品項，招牌虱目魚三鮮炒麵是學生必吃。燴飯偏油，麵類不錯，記得開收據。",
    tags: ["台灣美食", "燴飯", "炒麵"],
    promotion: "湯品免費續",
    menu: [
      { name: "花椒雞燴飯", price: 80, description: "特色品項，花椒香氣十足" },
      { name: "虱目魚三鮮炒麵", price: 75, description: "招牌必吃！虱目魚塊超大" },
      { name: "咖哩炒飯", price: 70, description: "香氣濃郁的咖哩炒飯" },
      { name: "免費續湯", price: 0, description: "湯品可免費續" }
    ],
    reviewsList: [
      { user: "花椒迷", rating: 5, text: "花椒雞燴飯太香了！每次來必點。", date: "2026-02-05" },
      { user: "中正學生", rating: 4, text: "虱目魚三鮮炒麵是招牌，魚塊超大塊。", date: "2026-01-12" }
    ]
  },
  {
    id: 8,
    name: "南方快餐",
    category: "便當",
    rating: 4.2,
    reviews: 180,
    deliveryTime: "10 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉大學路（豪記附近）",
    phone: "05-272-0008",
    hours: "11:00 - 20:00",
    description: "在大學豪記附近的燴飯店。燴飯偏普通，餐具有裝袋包裝，跟豪記共用同一個用餐空間。個人沒有特別喜歡的品項，都過得去。",
    tags: ["便當", "燴飯"],
    promotion: null,
    menu: [
      { name: "雞腿燴飯", price: 75, description: "基本款雞腿燴飯" },
      { name: "豬排燴飯", price: 70, description: "炸豬排搭配燴飯" },
      { name: "炒飯", price: 60, description: "大火快炒" },
      { name: "味噌湯", price: 20, description: "附湯" }
    ],
    reviewsList: [
      { user: "隨便吃", rating: 4, text: "中規中矩，不會踩雷但也不驚艷。", date: "2026-01-18" },
      { user: "填飽肚子", rating: 4, text: "方便快速，價格合理。", date: "2025-12-05" }
    ]
  },
  {
    id: 9,
    name: "翠相連",
    category: "台灣美食",
    rating: 4.5,
    reviews: 290,
    deliveryTime: "14 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉大學路一段",
    phone: "05-272-0009",
    hours: "11:00 - 20:30",
    description: "以前在大學下面，但因為不明原因遷移到大學路。滷味不差，燴飯表現也不錯，但現在似乎沒有內用空間，同學們可能很多外帶。",
    tags: ["台灣美食", "滷味", "麵食"],
    promotion: null,
    menu: [
      { name: "滷味拼盤", price: 70, description: "多種滷味任選" },
      { name: "乾麵", price: 45, description: "拌麵搭配滷味" },
      { name: "燴飯", price: 70, description: "基本燴飯" },
      { name: "貢丸湯", price: 30, description: "彈牙貢丸湯" }
    ],
    reviewsList: [
      { user: "滷味達人", rating: 5, text: "滷味味道不錯，搭配乾麵很對味。", date: "2026-02-15" },
      { user: "外帶族", rating: 4, text: "現在只能外帶有點可惜，但味道還是一樣好。", date: "2026-01-08" }
    ]
  },
  {
    id: 10,
    name: "A店",
    category: "台灣美食",
    rating: 4.5,
    reviews: 260,
    deliveryTime: "10 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉中正大學附近",
    phone: "05-272-0010",
    hours: "11:00 - 14:00, 17:00 - 20:00",
    description: "有固定有外帶，麵類甚至可以當正餐。通常是賣到下午兩點，有白飯跟糙米飯配湯的自助吧。曾經窮到只靠A店午餐當一天的能量來源，味道其實也還不錯，平實卻足夠。最喜歡的品項是魯肉。",
    tags: ["台灣美食", "自助餐", "平價"],
    promotion: "午餐自助吧免費白飯配湯",
    menu: [
      { name: "魯肉飯", price: 30, description: "招牌魯肉飯，最受歡迎" },
      { name: "乾麵", price: 40, description: "份量可當正餐" },
      { name: "排骨飯", price: 70, description: "酥炸排骨搭配配菜" },
      { name: "自助吧", price: 0, description: "白飯、糙米飯、湯品免費取用" }
    ],
    reviewsList: [
      { user: "窮學生", rating: 5, text: "自助吧白飯配湯免費，窮的時候靠它撐過！", date: "2026-02-20" },
      { user: "魯肉控", rating: 4, text: "魯肉飯味道不錯，平實但足夠。", date: "2026-01-25" }
    ]
  },
  {
    id: 11,
    name: "Simple Fit 簡單瘦",
    category: "健康飲食",
    rating: 4.8,
    reviews: 220,
    deliveryTime: "18 分鐘",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉三興村裕農一街9號",
    phone: "05-272-0011",
    hours: "11:00 - 13:30, 17:00 - 19:00（週六日公休）",
    description: "以健康餐的味道跟份量，以及價格來說，這家可以說是相當不錯。低油低鹽高纖維，每份控制在600±50大卡。有時候需要裝模作樣或有特別需求時也很適合。個人相當喜歡鴨胸，真的好好吃。",
    tags: ["健康飲食", "便當"],
    promotion: "熱門優惠方案",
    menu: [
      { name: "嫩煎鴨胸餐", price: 100, description: "招牌鴨胸，真的好好吃" },
      { name: "健身牛肉餐", price: 100, description: "招牌健身牛肉，最高價位" },
      { name: "香煎雞胸餐", price: 80, description: "低脂高蛋白健康選擇" },
      { name: "鮭魚餐盒", price: 80, description: "大部分品項均一價80元" }
    ],
    reviewsList: [
      { user: "健身人", rating: 5, text: "鴨胸真的超好吃！健康又美味，大推。", date: "2026-03-05" },
      { user: "養生派", rating: 5, text: "終於有好吃的健康餐了，份量也很夠。", date: "2026-02-22" }
    ]
  },
  {
    id: 12,
    name: "寓食屋",
    category: "台灣美食",
    rating: 4.5,
    reviews: 300,
    deliveryTime: "12 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉中正大學附近",
    phone: "05-272-0012",
    hours: "11:00 - 20:30",
    description: "套餐併桌屋。價格上來說還可以的乾拌麵、咖哩飯表現不錯。個人最喜歡蛋包咖哩飯。",
    tags: ["台灣美食", "咖哩", "麵食"],
    promotion: null,
    menu: [
      { name: "蛋包咖哩飯", price: 85, description: "滑嫩蛋包搭配濃郁咖哩" },
      { name: "乾拌麵", price: 55, description: "招牌乾拌麵" },
      { name: "日式咖哩飯", price: 80, description: "日式風味咖哩" },
      { name: "味噌湯", price: 20, description: "附餐湯品" }
    ],
    reviewsList: [
      { user: "咖哩控", rating: 5, text: "蛋包咖哩飯超讚！蛋皮滑嫩，咖哩濃郁。", date: "2026-02-08" },
      { user: "乾麵派", rating: 4, text: "乾拌麵味道還行，價格合理。", date: "2025-12-30" }
    ]
  },
  {
    id: 13,
    name: "海南雞飯",
    category: "台灣美食",
    rating: 4.2,
    reviews: 150,
    deliveryTime: "16 分鐘",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉中正大學附近",
    phone: "05-272-0023",
    hours: "11:00 - 20:00",
    description: "小貴，但還算好吃。之前發生過食安事件，同學稍微斟酌一下。",
    tags: ["台灣美食", "雞肉飯"],
    promotion: null,
    menu: [
      { name: "海南雞飯", price: 100, description: "嫩滑雞肉搭配油飯" },
      { name: "咖哩雞飯", price: 95, description: "南洋風味咖哩雞" },
      { name: "椒麻雞飯", price: 95, description: "酥炸雞腿搭配椒麻醬" },
      { name: "例湯", price: 20, description: "每日例湯" }
    ],
    reviewsList: [
      { user: "東南亞風味控", rating: 4, text: "海南雞飯味道還不錯，雞肉挺嫩的。", date: "2026-01-08" },
      { user: "中正學生", rating: 4, text: "價格偏高但口味還算可以。", date: "2025-12-20" }
    ]
  },

  // ===== 宵夜點心組 =====
  {
    id: 14,
    name: "豪記滷味（小吃街）",
    category: "宵夜",
    rating: 4.8,
    reviews: 520,
    deliveryTime: "15 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉小吃街",
    phone: "0933-679-642",
    hours: "17:00 - 02:00",
    description: "口味不錯，價格也可以，菜跟菜之間很親切。唯一的缺點是辣味通常是用辣椒粉。跟附近的財哥共用用餐空間，不過是在路旁的地面。",
    tags: ["宵夜", "滷味"],
    promotion: null,
    menu: [
      { name: "綜合滷味", price: 70, description: "多種滷味自選搭配" },
      { name: "滷大腸", price: 40, description: "入味Q彈大腸" },
      { name: "滷豆干", price: 20, description: "經典滷味小食" },
      { name: "王子麵", price: 15, description: "滷味必搭" }
    ],
    reviewsList: [
      { user: "滷味控", rating: 5, text: "小吃街這家比大學那家好吃！菜很入味。", date: "2026-02-12" },
      { user: "宵夜黨", rating: 5, text: "宵夜首選，價格親民味道好。", date: "2026-01-28" }
    ]
  },
  {
    id: 15,
    name: "豪記滷味（大學）",
    category: "宵夜",
    rating: 4.5,
    reviews: 380,
    deliveryTime: "10 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉大學路一段（大吃市）",
    phone: "0933-679-642",
    hours: "17:00 - 02:00",
    description: "跟小吃街的豪記口味有點不一樣，品項也有不同。特別的是辣味用的是辣椒醬，很有層次。多種口味醬汁自由搭配，包含蒜泥醬、沙茶、藥膳、芥末等。",
    tags: ["宵夜", "滷味"],
    promotion: null,
    menu: [
      { name: "綜合滷味", price: 70, description: "自選滷味搭配" },
      { name: "鴨血", price: 25, description: "軟嫩入味鴨血" },
      { name: "米血糕", price: 20, description: "Q彈米血糕" },
      { name: "多種醬汁", price: 0, description: "蒜泥、沙茶、藥膳、芥末自由搭配" }
    ],
    reviewsList: [
      { user: "辣味控", rating: 5, text: "辣椒醬超好吃，比小吃街那家的辣椒粉有層次。", date: "2026-01-15" },
      { user: "宵夜常客", rating: 4, text: "方便，離宿舍近，晚上肚子餓的好選擇。", date: "2025-12-22" }
    ]
  },
  {
    id: 16,
    name: "溫家滷味",
    category: "宵夜",
    rating: 4.5,
    reviews: 290,
    deliveryTime: "15 分鐘",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉中正大學附近",
    phone: "05-272-0015",
    hours: "17:00 - 23:30",
    description: "較貴，但有特殊品項，不同於豪記的地方在於提供冷滷味。個人相當喜歡冷鴨翅，搭配啤酒非常開心。",
    tags: ["宵夜", "滷味"],
    promotion: null,
    menu: [
      { name: "冷鴨翅", price: 50, description: "招牌冷滷味，搭配啤酒絕配" },
      { name: "冷滷拼盤", price: 90, description: "多種冷滷味組合" },
      { name: "熱滷味", price: 70, description: "現煮熱滷味自選" },
      { name: "滷豆腐", price: 25, description: "入味嫩豆腐" }
    ],
    reviewsList: [
      { user: "冷滷迷", rating: 5, text: "冷鴨翅太讚了！配啤酒是人生享受。", date: "2026-02-28" },
      { user: "滷味比較王", rating: 4, text: "比豪記貴但有特色，冷滷味值得試。", date: "2026-01-10" }
    ]
  },
  {
    id: 17,
    name: "中正雞場",
    category: "宵夜",
    rating: 4.7,
    reviews: 600,
    deliveryTime: "12 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉大學路一段（大吃上方）",
    phone: "05-272-0016",
    hours: "16:00 - 00:30",
    description: "每次於花蝶排行榜最佳鹽酥雞的店家。人潮眾多，同學可以在等的過程中去買個飲料或其他東西。也許你點了之後都還沒輪到你，人真的太多了。相當喜歡薯條與雞相關的品項。需抽號碼牌，繁忙時段等待約20分鐘。",
    tags: ["宵夜", "鹽酥雞", "街頭美食"],
    promotion: null,
    menu: [
      { name: "鹽酥雞", price: 60, description: "招牌鹽酥雞，酥脆多汁" },
      { name: "薯條", price: 40, description: "金黃酥脆薯條" },
      { name: "雞排", price: 65, description: "比臉大的酥脆雞排" },
      { name: "杏鮑菇", price: 40, description: "推薦炸杏鮑菇" }
    ],
    reviewsList: [
      { user: "鹽酥雞控", rating: 5, text: "中正附近最好吃的鹽酥雞！等再久都值得。", date: "2026-03-10" },
      { user: "宵夜王", rating: 5, text: "薯條跟雞排都超讚，每週必吃。", date: "2026-02-15" }
    ]
  },
  {
    id: 18,
    name: "絕佳食雞",
    category: "宵夜",
    rating: 4.9,
    reviews: 480,
    deliveryTime: "20 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉豐收村大學路二段2000號旁",
    phone: "05-226-6197",
    hours: "18:00 - 01:00",
    description: "價格便宜的鹽酥雞店，東西都很好吃，醬汁的處理方式比較特別，獨一無二。人潮非常、非常、非常之多，所以要等得更久。晚上9點後通常要等20分鐘以上。",
    tags: ["宵夜", "鹽酥雞", "街頭美食"],
    promotion: null,
    menu: [
      { name: "鹽酥雞", price: 55, description: "便宜好吃，獨特醬汁" },
      { name: "炭烤雞腿", price: 60, description: "推薦品項" },
      { name: "炭烤雞胸", price: 55, description: "推薦品項" },
      { name: "薯條", price: 35, description: "酥脆薯條" }
    ],
    reviewsList: [
      { user: "排隊達人", rating: 5, text: "等一小時也甘願！醬汁真的獨一無二。", date: "2026-03-08" },
      { user: "鹽酥雞評論家", rating: 5, text: "中正附近鹽酥雞的天花板，便宜又好吃。", date: "2026-02-20" }
    ]
  },
  {
    id: 19,
    name: "老地方廚房",
    category: "便當",
    rating: 5.0,
    reviews: 890,
    deliveryTime: "18 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉中庄16之24號（騎車約7分鐘）",
    phone: "05-272-0018",
    hours: "11:00 - 13:00, 17:00 - 19:00（週六日公休）",
    description: "不用說了，太頂級了。份量跟味道都是滿分。又健康又好吃又便宜，真的找不到輸的理由。除了車程較遠和人非常多之外還有問題嗎？好像沒有了欸。可以說是最好的便當店。自選五種配菜，免費海帶湯和紅茶。",
    tags: ["便當", "台灣美食", "平價"],
    promotion: "學生最愛 CP值之王",
    menu: [
      { name: "雞腿便當", price: 75, description: "自選五樣配菜，份量滿分" },
      { name: "排骨便當", price: 70, description: "酥炸排骨，經典好味" },
      { name: "燒肉飯", price: 70, description: "燒肉飯也很好吃" },
      { name: "免費海帶湯＆紅茶", price: 0, description: "免費供應海帶湯和紅茶" }
    ],
    reviewsList: [
      { user: "便當之神", rating: 5, text: "中正大學最強便當店，沒有之一！健康好吃又便宜。", date: "2026-03-15" },
      { user: "畢業學長", rating: 5, text: "畢業最懷念的就是老地方，回不去了嗚嗚。", date: "2026-02-25" }
    ]
  },
  {
    id: 20,
    name: "胖胖土司",
    category: "宵夜",
    rating: 4.8,
    reviews: 340,
    deliveryTime: "16 分鐘",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉中正大學附近",
    phone: "05-272-0019",
    hours: "16:00 - 23:00",
    description: "價格較貴，但可能是我最喜歡的咖哩店。燴飯表現可以說是最好的幾間之一。",
    tags: ["宵夜", "咖哩"],
    promotion: null,
    menu: [
      { name: "日式咖哩飯", price: 110, description: "濃郁日式咖哩" },
      { name: "起司咖哩", price: 130, description: "牽絲起司搭配咖哩" },
      { name: "厚片土司", price: 50, description: "酥烤厚片吐司" },
      { name: "炸物拼盤", price: 90, description: "多種炸物組合" }
    ],
    reviewsList: [
      { user: "咖哩達人", rating: 5, text: "最喜歡的咖哩店！起司咖哩超濃郁。", date: "2026-03-01" },
      { user: "宵夜控", rating: 5, text: "價格偏高但品質對得起價格，值得吃。", date: "2026-02-10" }
    ]
  },
  {
    id: 21,
    name: "飛龍水餃",
    category: "台灣美食",
    rating: 4.5,
    reviews: 270,
    deliveryTime: "14 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉中正大學附近",
    phone: "05-272-0020",
    hours: "11:00 - 20:30",
    description: "便宜的水餃跟麵食店。相關麵很不錯，個人喜歡它們家的高麗菜水餃。",
    tags: ["台灣美食", "水餃", "麵食"],
    promotion: null,
    menu: [
      { name: "高麗菜水餃（10顆）", price: 50, description: "手工包製，皮薄餡多" },
      { name: "韭菜水餃（10顆）", price: 50, description: "韭菜鮮香" },
      { name: "酸辣湯麵", price: 55, description: "相當不錯的麵食" },
      { name: "乾麵", price: 40, description: "拌麵搭配水餃" }
    ],
    reviewsList: [
      { user: "水餃控", rating: 5, text: "便宜又好吃，高麗菜水餃餡料很飽滿。", date: "2026-01-22" },
      { user: "麵食派", rating: 4, text: "酸辣湯麵也不錯，配水餃吃很滿足。", date: "2025-12-18" }
    ]
  },
  {
    id: 22,
    name: "阿吉麵攤",
    category: "台灣美食",
    rating: 4.8,
    reviews: 550,
    deliveryTime: "15 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉中正大學附近",
    phone: "05-272-0021",
    hours: "11:00 - 14:00, 17:00 - 20:30",
    description: "份量超大，價格便宜，口味優質，有固定有外帶。最常吃的是乾麵跟滷蛋飯，滷味感覺得比較貴。如果有點飢餓的話點個乾麵，它們家會給乾麵附清湯。",
    tags: ["台灣美食", "麵食", "平價"],
    promotion: "乾麵附免費清湯",
    menu: [
      { name: "乾麵", price: 40, description: "招牌乾麵，份量超大，附清湯" },
      { name: "滷蛋飯", price: 50, description: "滷肉飯搭配滷蛋" },
      { name: "滷味拼盤", price: 80, description: "多種滷味自選" },
      { name: "餛飩湯", price: 40, description: "手工餛飩湯" }
    ],
    reviewsList: [
      { user: "大食王", rating: 5, text: "份量大到嚇人！乾麵超大碗還附清湯，佛心。", date: "2026-03-12" },
      { user: "CP值獵人", rating: 5, text: "便宜又好吃又大份，學生的救星。", date: "2026-02-18" }
    ]
  },
  {
    id: 23,
    name: "俗溝大碗",
    category: "台灣美食",
    rating: 4.8,
    reviews: 430,
    deliveryTime: "20 分鐘",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉",
    phone: "05-272-0022",
    hours: "11:00 - 14:00, 17:00 - 20:00",
    description: "離學校較遠，但忠實粉絲很多。味道不差，品項較多，豬耳跟鴨肉是其特色。個人喜歡鴨肉相關的品項，肉質鮮嫩可口得很。",
    tags: ["台灣美食", "鴨肉", "小吃"],
    promotion: null,
    menu: [
      { name: "鴨肉飯", price: 50, description: "招牌鴨肉，肉質鮮嫩可口" },
      { name: "鴨肉麵", price: 60, description: "鴨肉搭配湯麵" },
      { name: "豬耳朵", price: 50, description: "特色小菜，Q脆口感" },
      { name: "鴨肉切盤", price: 100, description: "現切鴨肉搭配沾醬" }
    ],
    reviewsList: [
      { user: "鴨肉愛好者", rating: 5, text: "鴨肉真的超嫩！雖然比較遠但值得跑一趟。", date: "2026-03-05" },
      { user: "中正老饕", rating: 5, text: "豬耳朵跟鴨肉都是絕品，忠實粉絲報到。", date: "2026-02-15" }
    ]
  },
  {
    id: 24,
    name: "鍋序火鍋",
    category: "火鍋",
    rating: 4.7,
    reviews: 85,
    deliveryTime: "25 分鐘",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉神農路186巷2-7號",
    phone: "05-272-0320",
    hours: "週一至週五 17:00 - 22:00，週六日 11:00 - 22:00",
    description: "2026年3月新開幕的火鍋店，前身為姊妹小火鍋，非常好吃不吃會後悔",
    tags: ["火鍋", "新開幕"],
    promotion: "開幕限時優惠活動",
    menu: [
      { name: "招牌豬肉鍋", price: 220, description: "精選豬肉片搭配新鮮蔬菜盤" },
      { name: "牛肉鍋", price: 280, description: "嫩滑牛肉片，湯頭濃郁" },
      { name: "海鮮鍋", price: 300, description: "多種海鮮拼盤搭配鍋物" },
      { name: "蔬菜鍋", price: 190, description: "清爽蔬菜鍋，養生首選" }
    ],
    reviewsList: [
      { user: "火鍋控", rating: 5, text: "新開的火鍋店，湯頭不錯，環境也很新很乾淨。", date: "2026-03-20" },
      { user: "嘗鮮派", rating: 4, text: "開幕優惠很划算，期待之後菜單更豐富。", date: "2026-03-18" }
    ]
  },
  {
    id: 25,
    name: "Just Eat Brunch 就是要吃早午餐",
    category: "早餐",
    rating: 5.0,
    reviews: 240,
    deliveryTime: "15 分鐘",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&h=400&fit=crop",
    address: "嘉義縣民雄鄉三興路105號",
    phone: "0933-090-374",
    hours: "週一至週五 08:00 - 14:00，週六日 08:30 - 14:30",
    description: "中正大學附近人氣早午餐店，提供多樣化的早午餐選擇，份量十足且口味豐富。環境舒適適合內用，是週末假日吃 brunch 的好去處。",
    tags: ["早餐", "早午餐"],
    promotion: null,
    menu: [
      { name: "經典美式早餐", price: 120, description: "培根、太陽蛋、沙拉、吐司組合" },
      { name: "法式吐司套餐", price: 110, description: "香煎法式吐司搭配水果" },
      { name: "起司牛肉堡", price: 95, description: "厚實牛肉排搭配濃郁起司" },
      { name: "鮮奶茶", price: 45, description: "使用鮮奶調製的奶茶" }
    ],
    reviewsList: [
      { user: "Brunch愛好者", rating: 5, text: "份量很大，價格合理，週末來吃很享受！", date: "2026-03-10" },
      { user: "中正學生", rating: 4, text: "環境不錯，餐點也好吃，適合約朋友來。", date: "2026-02-22" }
    ]
  }
];

// 食物分類
const categories = [
  { name: "台灣美食", icon: "🍚" },
  { name: "便當", icon: "🍱" },
  { name: "早餐", icon: "🥞" },
  { name: "宵夜", icon: "🌙" },
  { name: "健康飲食", icon: "🥗" },
  { name: "火鍋", icon: "🍲" },
  { name: "麵食", icon: "🍜" },
  { name: "水餃", icon: "🥟" },
  { name: "滷味", icon: "🍢" },
  { name: "鹽酥雞", icon: "🍗" },
  { name: "咖哩", icon: "🍛" },
  { name: "燴飯", icon: "🥘" },
  { name: "平價", icon: "💰" }
];
