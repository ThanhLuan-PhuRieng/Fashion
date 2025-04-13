const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Danh sách sản phẩm (có thể để riêng ở file .js hoặc .json nếu muốn)
const products = [
  {
    id: "1",
    name: "Áo da màu đỏ",
    price: "420.000₫",
    img: "../TrangChu/goods/1.jpg",
  },
  {
    id: "2",
    name: "Áo khoác kaki",
    price: "480.000₫",
    img: "../TrangChu/goods/2.jpg",
  },
  {
    id: "3",
    name: "Áo khoác lông",
    price: "520.000₫",
    img: "../TrangChu/goods/3.jpg",
  },
  {
    id: "4",
    name: "Blazer kẻ caro",
    price: "490.000₫",
    img: "../TrangChu/goods/4.jpg",
  },
  {
    id: "5",
    name: "Đầm đen hai dây",
    price: "550.000₫",
    img: "../TrangChu/goods/5.jpg",
  },
  {
    id: "6",
    name: "Đầm đen dáng ôm",
    price: "580.000₫",
    img: "../TrangChu/goods/6.jpg",
  },
  {
    id: "7",
    name: "Áo khoác nâu",
    price: "500.000₫",
    img: "../TrangChu/goods/7.jpg",
  },
  {
    id: "8",
    name: "Áo choàng len",
    price: "490.000₫",
    img: "../TrangChu/goods/8.jpg",
  },
  {
    id: "9",
    name: "Combo đồ nâu",
    price: "590.000₫",
    img: "../TrangChu/goods/9.jpg",
  },
  {
    id: "10",
    name: "Dạ hội trắng",
    price: "600.000₫",
    img: "../TrangChu/goods/10.jpg",
  },
  {
    id: "11",
    name: "Áo choàng midi",
    price: "570.000₫",
    img: "../TrangChu/goods/11.jpg",
  },
  {
    id: "12",
    name: "Đầm hai dây trắng",
    price: "540.000₫",
    img: "../TrangChu/goods/12.jpg",
  },
  {
    id: "13",
    name: "Váy hoa",
    price: "390.000₫",
    img: "../TrangChu/goods/13.jpg",
  },
  {
    id: "14",
    name: "Váy hai dây xanh",
    price: "400.000₫",
    img: "../TrangChu/goods/14.jpg",
  },
  {
    id: "15",
    name: "Đồ matching set tím",
    price: "500.000₫",
    img: "../TrangChu/goods/15.jpg",
  },
  {
    id: "16",
    name: "Váy maxi xanh biển",
    price: "580.000₫",
    img: "../TrangChu/goods/16.jpg",
  },
  {
    id: "17",
    name: "Combo áo hở vai chân váy đen",
    price: "800.000₫",
    img: "../SanPham/TatCa/1.jpg",
  },
  {
    id: "18",
    name: "Áo basic quần short",
    price: "400.000₫",
    img: "../SanPham/TatCa/2.jpg",
  },
  {
    id: "19",
    name: "Dầm đen xẻ xâu",
    price: "650.000₫",
    img: "../SanPham/TatCa/3.jpg",
  },
  {
    id: "20",
    name: "Jumpsuit ngắn vàng",
    price: "500.000₫",
    img: "../SanPham/TatCa/4.jpg",
  },
  {
    id: "21",
    name: "Váy đỏ ren",
    price: "900.000₫",
    img: "../SanPham/TatCa/5.jpg",
  },
  {
    id: "22",
    name: "Áo 2 dây nude kết hợp quần kẻ caro",
    price: "570.000₫",
    img: "../SanPham/TatCa/6.jpg",
  },
  {
    id: "23",
    name: "Áo len đỏ",
    price: "490.000₫",
    img: "../SanPham/TatCa/7.jpg",
  },
  {
    id: "24",
    name: "Đồ thể thao crotop",
    price: "600.000₫",
    img: "../SanPham/TatCa/8.jpg",
  },
  {
    id: "25",
    name: "Áo khoác dài nâu",
    price: "500.000₫",
    img: "../SanPham/TatCa/9.jpg",
  },
  {
    id: "26",
    name: "Váy dài trắng",
    price: "510.000₫",
    img: "../SanPham/TatCa/10.jpg",
  },
  {
    id: "27",
    name: "Áo thun cotton",
    price: "340.000₫",
    img: "../SanPham/AoThun/1.jpg",
  },
  {
    id: "28",
    name: "Áo trễ vai đen",
    price: "560.000₫",
    img: "../SanPham/AoThun/2.jpg",
  },
  {
    id: "29",
    name: "Áo trễ vai đen",
    price: "560.000₫",
    img: "../SanPham/AoThun/3.jpg",
  },
  {
    id: "30",
    name: "Áo thun trắng tay dài",
    price: "270.000₫",
    img: "../SanPham/AoThun/4.jpg",
  },
  {
    id: "31",
    name: "Áo thun ôm sát nữ",
    price: "420.000₫",
    img: "../SanPham/AoThun/5.jpg",
  },
  {
    id: "32",
    name: "Áo crop top trắng",
    price: "370.000₫",
    img: "../SanPham/AoThun/6.jpg",
  },
  {
    id: "33",
    name: "Áo len tay dài",
    price: "500.000₫",
    img: "../SanPham/AoThun/7.jpg",
  },
  {
    id: "34",
    name: "Áo thun phông rộng",
    price: "990.000₫",
    img: "../SanPham/AoThun/8.jpg",
  },
  {
    id: "35",
    name: "Áo thun đen tay ngắn",
    price: "330.000₫",
    img: "../SanPham/AoThun/9.jpg",
  },
  {
    id: "36",
    name: "Áo thun crop đỏ",
    price: "220.000₫",
    img: "../SanPham/AoThun/10.jpg",
  },
  {
    id: "37",
    name: "sơ mi tay rộng",
    price: "340.000₫",
    img: "../SanPham/AoSoMi/1.jpg",
  },
  {
    id: "38",
    name: "Sơ mi đen",
    price: "400.000₫",
    img: "../SanPham/AoSoMi/2.jpg",
  },
  {
    id: "39",
    name: "Sơ mi trắng",
    price: "330.000₫",
    img: "../SanPham/AoSoMi/3.jpg",
  },
  {
    id: "40",
    name: "Sơ mi xanh dài",
    price: "420.000₫",
    img: "../SanPham/AoSoMi/4.jpg",
  },
  {
    id: "41",
    name: "Sơ mi tay ngắn",
    price: "440.000₫",
    img: "../SanPham/AoSoMi/5.jpg",
  },
  {
    id: "42",
    name: "Sơ mi dài tay",
    price: "490.000₫",
    img: "../SanPham/AoSoMi/6.jpg",
  },
  {
    id: "43",
    name: "Sơ mi sọc xanh",
    price: "530.000₫",
    img: "../SanPham/AoSoMi/7.jpg",
  },
  {
    id: "44",
    name: "Sơ mi ngắn xanh",
    price: "480.000₫",
    img: "../SanPham/AoSoMi/8.jpg",
  },
  {
    id: "45",
    name: "Sơ mi ngắn trắng",
    price: "400.000₫",
    img: "../SanPham/AoSoMi/9.jpg",
  },
  {
    id: "46",
    name: "Sơ mi hồng",
    price: "550.000₫",
    img: "../SanPham/AoSoMi/10.jpg",
  },
  {
    id: "47",
    name: "Áo đen cổ V",
    price: "330.000₫",
    img: "../SanPham/AoKieuNu/1.jpg",
  },
  {
    id: "48",
    name: "Áo trắng ren đen",
    price: "270.000₫",
    img: "../SanPham/AoKieuNu/2.jpg",
  },
  {
    id: "49",
    name: "Áo trắng tầng",
    price: "370.000₫",
    img: "../SanPham/AoKieuNu/3.jpg",
  },
  {
    id: "50",
    name: "Áo hai dây",
    price: "290.000₫",
    img: "../SanPham/AoKieuNu/4.jpg",
  },
  {
    id: "51",
    name: "Áo hai dây xanh",
    price: "420.000₫",
    img: "../SanPham/AoKieuNu/5.jpg",
  },
  {
    id: "52",
    name: "Váy họa tiết hoa",
    price: "230.000₫",
    img: "../SanPham/AoKieuNu/6.jpg",
  },
  {
    id: "53",
    name: "Áo ôm",
    price: "440.000₫",
    img: "../SanPham/AoKieuNu/7.jpg",
  },
  {
    id: "54",
    name: "Váy dài ren trắng",
    price: "500.000₫",
    img: "../SanPham/AoKieuNu/8.jpg",
  },
  {
    id: "55",
    name: "Áo hai dây tráng",
    price: "250.000₫",
    img: "../SanPham/AoKieuNu/9.jpg",
  },
  {
    id: "56",
    name: "Áo sọc màu",
    price: "280.000₫",
    img: "../SanPham/AoKieuNu/10.jpg",
  },
  {
    id: "57",
    name: "Quần ống rộng",
    price: "300.000₫",
    img: "../SanPham/QuanDai/1.jpg",
  },
  {
    id: "58",
    name: "Quần sọc trắng đen",
    price: "380.000₫",
    img: "../SanPham/QuanDai/2.jpg",
  },
  {
    id: "59",
    name: "Quần đen ống rộng",
    price: "410.000₫",
    img: "../SanPham/QuanDai/3.jpg",
  },
  {
    id: "60",
    name: "Quần dài trắng",
    price: "400.000₫",
    img: "../SanPham/QuanDai/4.jpg",
  },
  {
    id: "61",
    name: "Quần dài trắng",
    price: "500.000₫",
    img: "../SanPham/QuanDai/5.jpg",
  },
  {
    id: "62",
    name: "Quần jean xanh",
    price: "579.000₫",
    img: "../SanPham/QuanDai/6.jpg",
  },
  {
    id: "63",
    name: "Quần dài 2 sọc",
    price: "499.000₫",
    img: "../SanPham/QuanDai/7.jpg",
  },
  {
    id: "64",
    name: "Quần jean đen",
    price: "500.000₫",
    img: "../SanPham/QuanDai/8.jpg",
  },
  {
    id: "65",
    name: "Quần jean xanh",
    price: "600.000₫",
    img: "../SanPham/QuanJeans/1.jpg",
  },
  {
    id: "66",
    name: "Quần jean ống rộng",
    price: "720.000₫",
    img: "../SanPham/QuanJeans/2.jpg",
  },
  {
    id: "67",
    name: "Quần jean ngắn",
    price: "400.000₫",
    img: "../SanPham/QuanJeans/3.jpg",
  },
  {
    id: "68",
    name: "Quần jean rách gối",
    price: "670.000₫",
    img: "../SanPham/QuanJeans/4.jpg",
  },
  {
    id: "69",
    name: "Quần váy trắng",
    price: "270.000₫",
    img: "../SanPham/QuanNgan/1.jpg",
  },
  {
    id: "70",
    name: "Quần ngắn hồng",
    price: "210.000₫",
    img: "../SanPham/QuanNgan/2.jpg",
  },
  {
    id: "71",
    name: "Quần ngắn đen",
    price: "333.000₫",
    img: "../SanPham/QuanNgan/3.jpg",
  },
  {
    id: "72",
    name: "Quần đen ngắn",
    price: "233.000₫",
    img: "../SanPham/QuanNgan/4.jpg",
  },
  {
    id: "73",
    name: "Quần ngắn sọc caro",
    price: "421.000₫",
    img: "../SanPham/QuanNgan/5.jpg",
  },
  {
    id: "74",
    name: "Quần sọc caro đen",
    price: "640.000₫",
    img: "../SanPham/QuanNgan/6.jpg",
  },
  {
    id: "75",
    name: "Quần ngắn nữ",
    price: "340.000₫",
    img: "../SanPham/QuanNgan/7.jpg",
  },
  {
    id: "76",
    name: "Quần ngắn đen",
    price: "550.000₫",
    img: "../SanPham/QuanNgan/8.jpg",
  },
  {
    id: "77",
    name: "Quần short hồng",
    price: "230.000₫",
    img: "../SanPham/QuanNgan/9.jpg",
  },
  {
    id: "78",
    name: "Túi cầm tay",
    price: "290.000₫",
    img: "../SanPham/TuiXach/1.jpg",
  },
  {
    id: "79",
    name: "Túi nhỏ xinh",
    price: "222.000₫",
    img: "../SanPham/TuiXach/2.jpg",
  },
  {
    id: "80",
    name: "Túi đeo dây",
    price: "170.000₫",
    img: "../SanPham/TuiXach/3.jpg",
  },
  {
    id: "81",
    name: "Túi đeo dây nâu",
    price: "230.000₫",
    img: "../SanPham/TuiXach/4.jpg",
  },
  {
    id: "82",
    name: "Túi xách dây ngắn",
    price: "340.000₫",
    img: "../SanPham/TuiXach/5.jpg",
  },
  {
    id: "83",
    name: "Túi xách đen",
    price: "399.000₫",
    img: "../SanPham/TuiXach/6.jpg",
  },
  {
    id: "84",
    name: "Túi xách cầm tay",
    price: "270.000₫",
    img: "../SanPham/TuiXach/7.jpg",
  },
  {
    id: "85",
    name: "Túi cầm tay",
    price: "420.000₫",
    img: "../SanPham/TuiXach/8.jpg",
  },
  {
    id: "86",
    name: "Túi xách tay cop",
    price: "233.000₫",
    img: "../SanPham/TuiXach/9.jpg",
  },
  {
    id: "87",
    name: "Túi cầm tay",
    price: "499.000₫",
    img: "../SanPham/TuiXach/10.jpg",
  },
  {
    id: "88",
    name: "Kính mát xanh đen",
    price: "70.000₫",
    img: "../SanPham/Kinh/1.jpg",
  },
  {
    id: "89",
    name: "Kính mát nâu",
    price: "99.000₫",
    img: "../SanPham/Kinh/2.jpg",
  },
  {
    id: "90",
    name: "Kính mát gọng vuông",
    price: "110.000₫",
    img: "../SanPham/Kinh/3.jpg",
  },
  {
    id: "91",
    name: "Kính mát gọng vuông",
    price: "85.000₫",
    img: "../SanPham/Kinh/4.jpg",
  },
  {
    id: "92",
    name: "Kính mát tikl",
    price: "210.000₫",
    img: "../SanPham/Kinh/5.jpg",
  },
  {
    id: "93",
    name: "Kính mát wacke",
    price: "180.000₫",
    img: "../SanPham/Kinh/6.jpg",
  },
  {
    id: "94",
    name: "Kính gọng tròn",
    price: "150.000₫",
    img: "../SanPham/Kinh/7.jpg",
  },
  {
    id: "95",
    name: "Kính gọng tròn",
    price: "222.000₫",
    img: "../SanPham/Kinh/8.jpg",
  },
  {
    id: "96",
    name: "Kính mát đen",
    price: "290.000₫",
    img: "../SanPham/Kinh/9.jpg",
  },
  {
    id: "97",
    name: "Kính mát xanh",
    price: "99.000₫",
    img: "../SanPham/Kinh/10.jpg",
  },
  {
    id: "98",
    name: "Lụa đỏ hoa văn",
    price: "100.000₫",
    img: "../SanPham/Khan/1.jpg",
  },
  {
    id: "99",
    name: "Trắng tua rua",
    price: "150.000₫",
    img: "../SanPham/Khan/2.jpg",
  },
  {
    id: "100",
    name: "Hoa màu pastel",
    price: "110.000₫",
    img: "../SanPham/Khan/3.jpg",
  },
  {
    id: "101",
    name: "Khăn tím nhẹ",
    price: "90.000₫",
    img: "../SanPham/Khan/4.jpg",
  },
  {
    id: "102",
    name: "Khăn đỏ kẻ ô",
    price: "95.000₫",
    img: "../SanPham/Khan/5.jpg",
  },
  {
    id: "103",
    name: "Khăn xám nhạt",
    price: "160.000₫",
    img: "../SanPham/Khan/6.jpg",
  },
  {
    id: "104",
    name: "Khăn nâu sẫm",
    price: "160.000₫",
    img: "../SanPham/Khan/7.jpg",
  },
  {
    id: "105",
    name: "Khăn tím kẻ ô",
    price: "130.000₫",
    img: "../SanPham/Khan/8.jpg",
  },
  {
    id: "106",
    name: "Khăn trắng thêu vàng",
    price: "130.000₫",
    img: "../SanPham/Khan/9.jpg",
  },
  {
    id: "107",
    name: "Khăn tím ren trắng",
    price: "140.000₫",
    img: "../SanPham/Khan/10.jpg",
  },
  {
    id: "108",
    name: "Tất trắng dài",
    price: "30.000₫",
    img: "../SanPham/Tat/1.jpg",
  },
  {
    id: "109",
    name: "Tất đen",
    price: "32.000₫",
    img: "../SanPham/Tat/2.jpg",
  },
  {
    id: "110",
    name: "Tất trắng",
    price: "25.000₫",
    img: "../SanPham/Tat/3.jpg",
  },
  {
    id: "111",
    name: "Tất xám nâu",
    price: "32.000₫",
    img: "../SanPham/Tat/4.jpg",
  },
  {
    id: "112",
    name: "Tất sọc cổ dài",
    price: "44.000₫",
    img: "../SanPham/Tat/5.jpg",
  },
  {
    id: "113",
    name: "Tất cổ dài",
    price: "36.000₫",
    img: "../SanPham/Tat/6.jpg",
  },
  {
    id: "114",
    name: "Tất cổ dài chấm",
    price: "37.000₫",
    img: "../SanPham/Tat/7.jpg",
  },
  {
    id: "115",
    name: "Tất sọc caro",
    price: "39.000₫",
    img: "../SanPham/Tat/8.jpg",
  },
  {
    id: "116",
    name: "Tất cổ dài 2 sọc",
    price: "48.000₫",
    img: "../SanPham/Tat/9.jpg",
  },
  {
    id: "117",
    name: "Tất cổ dài sọc",
    price: "32.000₫",
    img: "../SanPham/Tat/10.jpg",
  },
  {
    id: "118",
    name: "Loafer đế dày",
    price: "200.000₫",
    img: "../SanPham/Giay/1.jpg",
  },
  {
    id: "119",
    name: "Mary Jane đế thấp",
    price: "190.000₫",
    img: "../SanPham/Giay/2.jpg",
  },
  {
    id: "120",
    name: "Mule Cap Toe",
    price: "210.000₫",
    img: "../SanPham/Giay/3.jpg",
  },
  {
    id: "121",
    name: "Sandal đế dày",
    price: "220.000₫",
    img: "../SanPham/Giay/4.jpg",
  },
  {
    id: "122",
    name: "Sandal cao gót",
    price: "170.000₫",
    img: "../SanPham/Giay/5.jpg",
  },
  {
    id: "123",
    name: "Cao gót trắng",
    price: "200.000₫",
    img: "../SanPham/Giay/6.jpg",
  },
  {
    id: "124",
    name: "Cao gót đỏ",
    price: "250.000₫",
    img: "../SanPham/Giay/7.jpg",
  },
  {
    id: "125",
    name: "Cao gót bạc",
    price: "250.000₫",
    img: "../SanPham/Giay/8.jpg",
  },
  {
    id: "126",
    name: "Boot trắng ngắn",
    price: "210.000₫",
    img: "../SanPham/Giay/9.jpg",
  },
  {
    id: "127",
    name: "Cao gót nâu",
    price: "230.000₫",
    img: "../SanPham/Giay/10.jpg",
  },
  {
    id: "128",
    name: "Đầm ngắn 2 dây",
    price: "470.000₫",
    img: "../SanPham/DamNgan/1.jpg",
  },
  {
    id: "129",
    name: "Đầm xanh ngắn",
    price: "666.000₫",
    img: "../SanPham/DamNgan/2.jpg",
  },
  {
    id: "130",
    name: "Đầm mây 2 dây",
    price: "780.000₫",
    img: "../SanPham/DamNgan/3.jpg",
  },
  {
    id: "131",
    name: "Váy ren đen",
    price: "980.000₫",
    img: "../SanPham/DamNgan/4.jpg",
  },
  {
    id: "132",
    name: "Đầm bông",
    price: "300.000₫",
    img: "../SanPham/DamNgan/5.jpg",
  },
  {
    id: "133",
    name: "Váy đen ngắn",
    price: "672.000₫",
    img: "../SanPham/DamNgan/6.jpg",
  },
  {
    id: "134",
    name: "Váy ren trắng",
    price: "870.000₫",
    img: "../SanPham/DamNgan/7.jpg",
  },
  {
    id: "135",
    name: "Váy 2 dây",
    price: "444.000₫",
    img: "../SanPham/DamNgan/8.jpg",
  },
  {
    id: "136",
    name: "Váy trắng gokg",
    price: "690.000₫",
    img: "../SanPham/DamNgan/9.jpg",
  },
  {
    id: "137",
    name: "Váy ngắn trắng",
    price: "880.000₫",
    img: "../SanPham/DamNgan/10.jpg",
  },
  {
    id: "138",
    name: "Đầm xanh họa tiết hoa",
    price: "850.000₫",
    img: "../SanPham/DamDai/1.jpg",
  },
  {
    id: "139",
    name: "Đầm ôm nâu",
    price: "555.000₫",
    img: "../SanPham/DamDai/2.jpg",
  },
  {
    id: "140",
    name: "Đầm trắng phối corset",
    price: "700.000₫",
    img: "../SanPham/DamDai/3.jpg",
  },
  {
    id: "141",
    name: "Đầm đen hở lưng",
    price: "460.000₫",
    img: "../SanPham/DamDai/4.jpg",
  },
  {
    id: "142",
    name: "Ren trắng dài tay",
    price: "800.000₫",
    img: "../SanPham/DamDai/5.jpg",
  },
  {
    id: "143",
    name: "Ren đen quyến rũ",
    price: "799.000₫",
    img: "../SanPham/DamDai/6.jpg",
  },
  {
    id: "144",
    name: "Đầm nâu cổ điển",
    price: "840.000₫",
    img: "../SanPham/DamDai/7.jpg",
  },
  {
    id: "145",
    name: "Váy trắng xếp tầng",
    price: "900.000₫",
    img: "../SanPham/DamDai/8.jpg",
  },
  {
    id: "146",
    name: "Ren vàng dáng dài",
    price: "650.000₫",
    img: "../SanPham/DamDai/9.jpg",
  },
  {
    id: "147",
    name: "Cúp ngực họa tiết đen",
    price: "900.000₫",
    img: "../SanPham/DamDai/10.jpg",
  },
  {
    id: "148",
    name: "Ghi chun eo buộc dây",
    price: "600.000₫",
    img: "../SanPham/junpsuitNgan/1.jpg",
  },
  {
    id: "149",
    name: "Bẹt vai tay dài",
    price: "710.000₫",
    img: "../SanPham/junpsuitNgan/2.jpg",
  },
  {
    id: "150",
    name: "Ngắn tay cánh dơi họa",
    price: "800.000₫",
    img: "../SanPham/junpsuitNgan/3.jpg",
  },
  {
    id: "151",
    name: "Con cổ sơ mi dây eo",
    price: "877.000₫",
    img: "../SanPham/junpsuitNgan/4.jpg",
  },
  {
    id: "152",
    name: "Eo cổ vest",
    price: "500.000₫",
    img: "../SanPham/junpsuitNgan/5.jpg",
  },
  {
    id: "153",
    name: "Cúp ngực ren ôm body",
    price: "590.000₫",
    img: "../SanPham/junpsuitNgan/6.jpg",
  },
  {
    id: "154",
    name: "Kẻ 2 túi vuông",
    price: "500.000₫",
    img: "../SanPham/junpsuitNgan/7.jpg",
  },
  {
    id: "155",
    name: "Ngắn mercy",
    price: "690.000₫",
    img: "../SanPham/junpsuitNgan/8.jpg",
  },
  {
    id: "156",
    name: "Tay lửng loe thắt nơ",
    price: "500.000₫",
    img: "../SanPham/junpsuitNgan/9.jpg",
  },
  {
    id: "157",
    name: "Jumpsuit nâu dài",
    price: "840.000₫",
    img: "../SanPham/JumpsuitDai/1.jpg",
  },
  {
    id: "158",
    name: "Công sở vải ôm cổ",
    price: "780.000₫",
    img: "../SanPham/JumpsuitDai/2.jpg",
  },
  {
    id: "159",
    name: "Jumpsuit dài sát nách",
    price: "900.000₫",
    img: "../SanPham/JumpsuitDai/3.jpg",
  },
  {
    id: "160",
    name: "2 dây cổ đổ ống rộng",
    price: "810.000₫",
    img: "../SanPham/JumpsuitDai/4.jpg",
  },
  {
    id: "161",
    name: "Belt màu tím",
    price: "550.000₫",
    img: "../SanPham/JumpsuitDai/5.jpg",
  },
  {
    id: "162",
    name: "Jumbsuit cổ chữ V",
    price: "600.000₫",
    img: "../SanPham/JumpsuitDai/6.jpg",
  },
];

const ten = products.find((p) => p.id === id);

if (ten) {
  document.getElementById("name").innerHTML = `
        <h4>${ten.name}</h4>
        <span class="badge bg-success">Còn hàng</span>
      `;
} else {
  document.getElementById("name").innerText = "Không tìm thấy tên sản phẩm.";
}
const sanpham = products.find((p) => p.id === id);

if (sanpham) {
  document.getElementById("Product").innerHTML = `
        <strong>${sanpham.name}</strong>
      `;
}

const ma = products.find((p) => p.id === id);

if (ma) {
  document.getElementById("ID").innerHTML = `
          <p>Mã sản phẩm: ${ten.id}</p>
        `;
} else {
  document.getElementById("name").innerText = "Không tìm thấy mã sản phẩm.";
}

const gia = products.find((p) => p.id === id);

if (gia) {
  document.getElementById("Price").innerHTML = `
          <p>Giá tiền: ${gia.price}</p>
        `;
} else {
  document.getElementById("name").innerText = "Không tìm thấy mã sản phẩm.";
}

const hinh = products.find((p) => p.id === id);

if (hinh) {
  document.getElementById("image").innerHTML = `
          <img src="${hinh.img}" alt="">
        `;
} else {
  document.getElementById("name").innerText = "Không tìm thấy mã sản phẩm.";
}
