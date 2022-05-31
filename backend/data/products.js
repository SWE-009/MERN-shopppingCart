const products = [
  {
    name: "Trilby Fedora - Wheat",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/sgtrilbyfedorawheat_2000x.jpg?v=1623779272",
    description:
      "Made of 100% wool felt | 2″ Wide Brim 4.5″ | High Crown | SG Shotgun shell ornament | Ribbon Hemmed Brim | Feather included",
    price: 100,
    countInStock: 6,
  },
  {
    name: "Trilby Fedora - Navy",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/Navy-Trilby-1-e1525875274191_2000x_e8777e36-135c-4fa1-a441-d5863467fdb2_2000x.jpg?v=1643082768",
    description:
      "Made of 100% wool felt | 2″ Wide Brim 4.5″ | High Crown | SG Shotgun shell ornament | Ribbon Hemmed Brim | Feather included",
    price: 80,
    countInStock: 3,
  },
  {
    name: "Trilby Fedora - Brown",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/BrownTrillby1_2000x_aff1077e-e92e-4700-8e19-afcd84aadd41_2000x.jpg?v=1623767778",
    description:
      "Made of 100% wool felt | 2″ Wide Brim 4.5″ | High Crown | SG Shotgun shell ornament | Ribbon Hemmed Brim | Feather included",
    price: 100,
    countInStock: 6,
  },
  {
    name: "Trilby Fedora - Burgundy",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/Burgundy-Trilby-1_2000x_fa78b3ac-fe54-4ee6-92c8-d7ee7d5f095c_2000x.jpg?v=1643082453",
    description:
      "Made of 100% wool felt | 2″ Wide Brim 4.5″ | High Crown | SG Shotgun shell ornament | Ribbon Hemmed Brim | Feather included",
    price: 80,
    countInStock: 3,
  },
  {
    name: "Trilby Fedora - Black",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/Black-Trilby-1_2000x_28452661-e2e5-4f07-a1c9-6b30625b36ea_2000x.jpg?v=1623766241",
    description:
      "Made of 100% wool felt | 2″ Wide Brim 4.5″ | High Crown | SG Shotgun shell ornament | Ribbon Hemmed Brim | Feather included",
    price: 100,
    countInStock: 6,
  },
  {
    name: "Straw Trilby Fedora - Coffee",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/20190512_210235_2000x_b1a936c4-a813-4276-8c8f-0f698b266ca6_2000x.jpg?v=1623768860",
    description:
      "Made of 100% straw | 2″ Wide Brim 4.5″ | High Crown | SG Shotgun shell ornament | Ribbon Hemmed Brim | Feather included",
    price: 100,
    countInStock: 6,
  },
  {
    name: "Straw Trilby Fedora - Avocado + Black",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/AvocadoTrilby_2000x_e008830a-99cc-40a0-af93-e458a9187c40_2000x.jpg?v=1623256437",
    description:
      "Made of 100% straw | 1.5″ Wide Brim 4.5″ | High Crown | SG Shotgun shell ornament | Ribbon Hemmed Brim | Feather included",
    price: 95,
    countInStock: 6,
  },
  {
    name: "Straw Trilby Fedora - Ivory + Navy",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/trilby-ivory_-3_2000x_413443b4-a8a9-434a-b7cd-25ffae243906_2000x.jpg?v=1623769180",
    description:
      "Made of 100% straw | 2″ Wide Brim | 4.5″ High Crown | SG Shotgun shell ornament | Ribbon Hemmed Brim | Feather included",
    price: 100,
    countInStock: 6,
  },
  {
    name: "Miller Ranch Fedora - Tusk",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/Miller_Ranch_Tusk_2_2000x_85443ca5-5352-4cb4-950f-da6d95f98e93_2000x.jpg?v=1623693058",
    description:
      "Made of 100% wool felt | 3″ Wide Brim | 4″ Crown | SG Bearded Coin Ornament | Ribbon Hemmed Stiff Brim | Feather included",
    price: 150,
    countInStock: 6,
  },
  {
    name: "Miller Ranch Fedora - Platinum",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/Miller_Ranch_-5_2000x_50862daa-2807-46a2-af21-a7d14e3fbe39_2000x.jpg?v=1622828074",
    description:
      "Made of 100% wool felt | 3″ Wide Brim | 4″ Crown | SG Bearded Coin ornament | Ribbon Hemmed Brim | Feather included",
    price: 150,
    countInStock: 6,
  },
  {
    name: "Miller Ranch Fedora - Chocolate",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/Miller_Ranch_-9_2000x_61bfed22-78b4-44b4-a7ca-6e99c6024f73_2000x.jpg?v=1622827370",
    description:
      "Made of 100% wool felt | 3″ Wide Brim | 4″ Crown | SG Bearded Coin ornament | Ribbon Hemmed Brim | Feather included",
    price: 150,
    countInStock: 6,
  },
  {
    name: "Miller Ranch Fedora - Patriotic Straw",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/MillerRanch-PatrioticStrawPortrait_2000x_4c99ef37-a938-4cd3-90ec-ee8ad362548a_2000x.jpg?v=1622827751",
    description: "Made of 100% straw | 3″ Wide Brim | 4″ Vented Crown",
    price: 150,
    countInStock: 0,
  },
  {
    name: "Miller Ranch Fedora - Ebony Straw",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/2021Hats-3_2000x_da23f175-3283-4228-9fa6-d07f14a1488d_2000x.jpg?v=1648604427",
    description:
      "Made of 100% straw | 3″ Wide Brim | 4″ Vented Crown | Feather included",
    price: 150,
    countInStock: 6,
  },
  {
    name: "Ferguson Fedora - Lavender + Black",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/FergusonFedora-Lavender1_2000x_0af38e1f-14b0-43a7-a331-30f234a40c7b_2000x.jpg?v=1623764684",
    description:
      "Made of 100% Premium wool | 3.25″ Wide Brim | 4″ Crown | Ribbon Hemmed Brim",
    price: 160,
    countInStock: 6,
  },
  {
    name: "Ferguson Fedora - Slate + Burgundy",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/FergusonFedora-9_2000x_494012b9-1828-4885-8e9e-d40bb582f585_2000x.jpg?v=1623763613",
    description:
      "Made of 100% Premium wool | 3.25″ Wide Brim | 4″ Crown | Ribbon Hemmed Brim",
    price: 160,
    countInStock: 6,
  },
  {
    name: "Ferguson Fedora - Ivory",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/FergusonFedora-IvoryPortrait_2000x_d5e31c06-de95-4d73-9d5e-6760537fd5a7_2000x.jpg?v=1632454602",
    description:
      "Made of 100% Premium wool | 3.25″ Wide Brim | 4″ Crown | Ribbon Hemmed Brim",
    price: 160,
    countInStock: 0,
  },
  {
    name: "Geoffrey Fedora - Camel",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/SGGeoffreyFedoraCamel_2000x.jpg?v=1623689994",
    description:
      "Made of 100% wool felt | 2.5″ Wide Brim | 4″ Crown | SG Bullet Ornament | Unfinished Stiff Brim",
    price: 100,
    countInStock: 6,
  },
  {
    name: "Geoffrey Fedora - Brown",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/SGGeoffreyFedoraBrown_2000x.jpg?v=1622230024",
    description:
      "Made of 100% wool felt | 2.5″ Wide Brim | 4″ Crown | SG Bullet Ornament | Unfinished Stiff Brim",
    price: 100,
    countInStock: 6,
  },
  {
    name: "Geoffrey Fedora - Black",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/SGGeoffreyFedoraBlack_2000x.jpg?v=1623387641",
    description:
      "Made of 100% wool felt | 2.5″ Wide Brim | 4″ Crown | SG Bullet Ornament | Unfinished Stiff Brim",
    price: 100,
    countInStock: 6,
  },
  {
    name: "Geoffrey Fedora - Olive Green",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/SGGeoffreyFedoraOlive_2000x.jpg?v=1622737289",
    description:
      "Made of 100% wool felt | 2.5″ Wide Brim | 4″ Crown | SG Bullet Ornament | Unfinished Stiff Brim",
    price: 100,
    countInStock: 6,
  },
  {
    name: "Alexander Fedora - Black",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/Alexander1_2000x.jpg?v=1637733277",
    description:
      "Made of 100% Premium wool | 3.7″ Wide Brim | 4″ Crown | Twisted Frayed Rope | Peacock Feather",
    price: 175,
    countInStock: 6,
  },
  {
    name: "Alexander Fedora - Taupe",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/2021Hats-10_2000x_3c3c9f92-06b9-4323-8e21-3252b197eb0f_2000x.jpg?v=1623771085",
    description:
      "Made of 100% Premium wool | 3.7″ Wide Brim | 4″ Crown | Twisted Frayed Rope | Peacock Feather",
    price: 175,
    countInStock: 6,
  },
  {
    name: "Lone Star Fedora - Walnut",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/LoneStarFedora-Portrait_2000x_7897c4f1-2f98-4974-b9e0-18119d6a3b29_2000x.jpg?v=1623696590",
    description:
      "Made of 100% Premium wool | 3.25″ Wide Brim | 4″ Crown | Feather & Metal Bolo Pin Crown decoration | Unfinished Stiff Brim",
    price: 215,
    countInStock: 6,
  },
  {
    name: "Lone Star Fedora - Black",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/2021Hats-10_2000x_3c3c9f92-06b9-4323-8e21-3252b197eb0f_2000x.jpg?v=1623771085",
    description:
      "Made of 100% Premium wool | 3.25″ Wide Brim | 4″ Crown | Feather & Metal Bolo Pin Crown decoration | Unfinished Stiff Brim",
    price: 215,
    countInStock: 0,
  },
  {
    name: "James Fedora - Brown",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/SGJamesFedoraBrown_29a4067e-5b70-4d72-bc8a-df136228b366_2000x.jpg?v=1623730540",
    description:
      "Made of 100% wool felt | 2.5″ Wide Brim | 4″ Crown | SG Aspire Coin Ornament | Ribbon Hemmed Stiff Brim | Feather  included",
    price: 115,
    countInStock: 6,
  },
  {
    name: "Boater Straw Hat - Tan",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0250/9294/8021/products/SportShoes-3_2000x_42636234-7783-496c-a90c-468caf79d205_2000x.jpg?v=1623769810",
    description:
      "Made of 100% straw | 1.5″ Wide Brim | 4″ Crown | SG Shotgun Shell Ornament | Ribbon Decoration",
    price: 95,
    countInStock: 3,
  },
];

module.exports = products;
