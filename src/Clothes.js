import React, { useState, useEffect } from 'react'
import axios from 'axios';

import $ from 'jquery';

$(document).ready(function () {
    // Add a click event listener to the heart icon
    $('.heart-icon').on('click', function () {
        // Change the color of the heart
        $(this).css('color', 'red'); // Change 'red' to any color you want
    });
});
const Clothes = () => {
    const [clothesData, setclothesData] = useState([]);

    const clothesdata = [
        {
            "id": 0,
            "title": "Amazon Brand - Inkast Denim Co. Inkast Peach Poplin Shirt",
            "price": 662,
            "description": "28.4 x 19.2 x 4.2 cm; 200 Grams",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/61i7EOIWgNL._UX569_.jpg"
        },
        {
            "id": 1,
            "title": "Ben Martin Men's Classic Collar Slim Fit Cotton Casual Full Sleeve Shirt",
            "price": 474,
            "description": "Care Instructions: Machine Wash",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/513vcfOiSCL._UX679_.jpg"
        },
        {
            "id": 2,
            "title": "Amazon Brand - Inkast Denim Co. Men Casual Shirt",
            "price": 699,
            "description": "Soft and Breathable Cotton Fabric",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/718JmXY1rpL._UY879_.jpg"
        },
        {
            "id": 3,
            "title": "Van Heusen Men's Regular Fit Polo Shirt",
            "price": 599,
            "description": "Care Instructions: Machine Wash",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/71QtKMaNYDL._UY879_.jpg"
        },
        {
            "id": 4,
            "title": "Amazon Brand - Inkast Denim Co. Men's Slim Fit Casual Shirt",
            "price": 599,
            "description": "Garment dyed solid color shirt",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/71OFc-V+HmL._UY879_.jpg"
        },
        {
            "id": 5,
            "title": "Amazon Brand - Symbol Men's Regular Fit Casual Shirt",
            "price": 729,
            "description": "Fit Type: Regular Fit",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/71CWiMfC77L._UY879_.jpg"
        },
        {
            "id": 6,
            "title": "Amazon Brand - House & Shields Men's Regular Fit Shirt",
            "price": 839,
            "description": "Material - 60% Cotton",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/91eiH57brIL._UL1500_.jpg"
        },
        {
            "id": 7,
            "title": "Dennis Lingo Men's Solid Slim Fit Casual Shirt",
            "price": 499,
            "description": "100% Premium Cottton, extremely soft finish and Rich look",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/61MDj5ZrUkL._UL1440_.jpg"
        },
        {
            "id": 8,
            "title": "Dennis Lingo Men Casual Shirt",
            "price": 573,
            "description": "100% Premium Cotton, Pre Washed for an extremely soft finish and Rich look",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/51yIybqYFTL._UX679_.jpg"
        },
        {
            "id": 9,
            "title": "IndoPrimo Men's Regular Fit Casual Shirt",
            "price": 599,
            "description": "100% High-grade Cotton Fabrics: Good capability of tenderness, air permeability and moisture absorption feels soft and comfy.",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/71yM0xUAetL._UX679_.jpg"
        },
        {
            "id": 10,
            "title": "ANNI DESIGNER Women's Cotton Blend Printed Straight Kurta with Pant & Dupatta (Itta STY)",
            "price": 659,
            "description": "Kurta Fabric:Chanderi Cotton || Bottom Fabric : Cotton Blend || Dupatta Fabric : Net",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/61KzT2OrERL._UL1440_.jpg"
        },
        {
            "id": 11,
            "title": "OM SAI LATEST CREATION Women's Slub Cotton Mor Pankh Printed Anarkali Kurti New Selection 2023 Under 399 Designer Attractive Look Women's Kurta (Plus Size Upto 3XL)",
            "price": 369,
            "description": "Fabric :- Slub Cotton || Pattern :- Printed || Style :- Anarkli Kurti",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/61o7YHKIAGL._UL1500_.jpg"
        },
        {
            "id": 12,
            "title": "NAINVISH Women Kaftan With Pant",
            "price": 695,
            "description": "Fit Type: Regular",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/81L9NuLXIwL._UY879_.jpg"
        },
        {
            "id": 13,
            "title": "Uptownie Lite Women's Maxi Jumpsuit",
            "price": 662,
            "description": "Care Instructions: Machine Wash",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/51jLZ2U5+fL._UL1400_.jpg"
        },
        {
            "id": 14,
            "title": "KIPEK Women's Rayon Round Neck Anarkali Kurta with Dupatta in Mustrad Yellow Color Latest Kurti Designed for Casual Function wear Comfy and Smooth in Any Occasions with Double Extra Large Size XXL",
            "price": 1219,
            "description": "material: Rayon || product length: Ankle Length || in box: Kurta with dupatta",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/71rRY2edwRL._UL1440_.jpg"
        },
        {
            "id": 15,
            "title": "Amayra Women's Rayon Printed Anarkali Kurti with Palazzos and Dupatta Set",
            "price": 899,
            "description": "Fabric: 100% Rayon",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/81PtbFjdckL._UX679_.jpg"
        },
        {
            "id": 16,
            "title": "Lymio Women Top (526-576)",
            "price": 399,
            "description": "Color-Multi",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/61RyCbaMh1L._UY879_.jpg"
        },
        {
            "id": 17,
            "title": "Styleville.in Women's Regular T-Shirt",
            "price": 393,
            "description": "Care Instructions: Machine Wash",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/71c3Gunmf1L._UL1500_.jpg"
        },
        {
            "id": 18,
            "title": "GoSriKi Women Kurta with Dupatta",
            "price": 469,
            "description": "Care Instructions: Hand Wash Only, Fit Type: Regular",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/61Ov56SdKVS._UX679_.jpg"
        },
        {
            "id": 19,
            "title": "Uptownie Lite Women's Maxi Jumpsuit",
            "price": 499,
            "description": "Care Instructions: Machine Wash, Fit Type: Regular",
            "category": "Clothes",
            "image": "https://m.media-amazon.com/images/I/61WaelPTkSL._UX679_.jpg"
        },
        {
            "id": 20,
            "title": "Men's Leather Jacket",
            "description": "Stylish leather jacket for men with a classic design.",
            "price": 5000,
            "image": "https://5.imimg.com/data5/SB/CW/JH/SELLER-9865395/mens-leather-jacket-01-1-.jpg"
        },
        {
            "id": 21,
            "title": "Women's Floral Dress",
            "description": "Flowy floral dress for women with a vibrant print.",
            "price": 2500,
            "image": "https://campussutra.com/cdn/shop/products/SS22_CSWSSDR260_1.jpg?v=1643114870"
        },
        {
            "id": 22,
            "title": "Men's Plaid Shirt",
            "description": "Casual plaid shirt for men with a comfortable fit.",
            "price": 1000,
            "image": "https://www.stylevore.com/wp-content/thumb/2022/08/mandeephuda-3166099216342033.jpg"
        },
        {
            "id": 23,
            "title": "Women's Skinny Jeans",
            "description": "Trendy skinny jeans for women with a slimming fit.",
            "price": 1500,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLPDDi61vigl4UbXXTR8NytqYvERt3CYTWfg&usqp=CAU"
        },
        {
            "id": 24,
            "title": "Men's Polo Shirt",
            "description": "Classic polo shirt for men with a timeless style.",
            "price": 800,
            "image": "https://images-cdn.ubuy.co.in/6352b79944a45679fb2dcba3-high-quality-men-39-s-t-shirt-male.jpg"
        },
        {
            "id": 25,
            "title": "Women's Blouse",
            "description": "Elegant blouse for women with a sophisticated look.",
            "price": 1200,
            "image": "https://zigzacmania.com/wp-content/uploads/2020/07/Blouse-1024x791.jpg"
        },
        {
            "id": 26,
            "title": "Men's Chino Pants",
            "description": "Versatile chino pants for men suitable for various occasions.",
            "price": 1400,
            "image": "https://5.imimg.com/data5/PD/UW/RC/SELLER-7779436/men-chino-trousers.jpg"
        },
        {
            "id": 27,
            "title": "Women's Sweater",
            "description": "Warm and cozy sweater for women with a soft texture.",
            "price": 1800,
            "image": "https://stylesatlife.com/wp-content/uploads/2018/04/Crew-Neck-Knit-Sweaters.jpg.webp"
        },
        {
            "id": 28,
            "title": "Men's Hoodie",
            "description": "Comfortable hoodie for men with a relaxed fit.",
            "price": 1200,
            "image": "https://m.media-amazon.com/images/I/71Zz-wlM+DL._AC_UY1100_.jpg"
        },
        {
            "id": 29,
            "title": "Women's Jogger Pants",
            "description": "Casual jogger pants for women perfect for everyday wear.",
            "price": 1000,
            "image": "	https://alyandval.com/wp-content/uploads/2022/08/Pistachio-joggers-image-3.jpg.webp"
        },
        {
            "id": 30,
            "title": "Men's Dress Shoes",
            "description": "Elegant dress shoes for men suitable for formal occasions.",
            "price": 2500,
            "image": "	https://m.media-amazon.com/images/I/81OeTI-LjdL._AC_UY1000_FMwebp_.jpg"
        },
        {
            "id": 31,
            "title": "Women's Sneakers",
            "description": "Comfortable sneakers for women with a sporty design.",
            "price": 1500,
            "image": "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTamFnbWwa7cpG4YagBnIJgureBrK3uU43QfA&usqp=CAU"
        },
        {
            "id": 32,
            "title": "Men's Swim Shorts",
            "description": "Stylish swim shorts for men perfect for the beach or pool.",
            "price": 800,
            "image": "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTral4ue7rIg-ejLmBDEf24frPOPz1GyhvbDw&usqp=CAU"
        },
        {
            "id": 33,
            "title": "The Final Battle - Anime Oversized T-shirt",
            "description": "Eren Yeager, named Eren Jaeger is a fictional character and the protagonist of the manga series Attack on Titan created by Hajime Isayama. Eren is a teenager who swears revenge on enormous humanoid creatures known as Titans that devoured his mother and destroyed his town in the Shiganshina district in Wall Maria.",
            "price": 1000,
            "image": "https://thesagacity.s3.ap-south-1.amazonaws.com/media/Final_Battle.jpg.webp"
        },
        {
            "id": 34,
            "title": "Men's Graphic T-Shirt",
            "description": "Graphic print t-shirt for men with a unique design.",
            "price": 500,
            "image": "	https://m.media-amazon.com/images/I/718-WmYwBpL._AC_UY1100_FMwebp_.jpg"
        },
        {
            "id": 35,
            "title": "Women's Tank Top",
            "description": "Casual tank top for women suitable for layering or summer wear.",
            "price": 400,
            "image": "https://www.gruntstyle.com/cdn/shop/products/GS5332-76WeThePeopleWomen_sFlowyTank-StonewashDenim_STANDARD_WEB_READY-back-min_1500x.jpg?v=1673026863"
        },
        {
            "id": 36,
            "title": "Men's Baseball Cap",
            "description": "Classic baseball cap for men with an adjustable strap.",
            "price": 300,
            "image": "https://img2.ans-media.com/i/840x1260/AA00-CAM0JS-55X_F1.jpg@webp?v=1685705061"
        },
        {
            "id": 37,
            "title": "Women's Sun Hat",
            "description": "Stylish sun hat for women with UPF protection.",
            "price": 400,
            "image": "	https://stylesatlife.com/wp-content/uploads/2018/04/Flat-top-straw-Beach-Hat.jpg.webp"
        },
        {
            "id": 38,
            "title": "Men's Dress Shirt",
            "description": "Formal dress shirt for men with a tailored fit.",
            "price": 800,
            "image": "https://cdn04.nnnow.com/web-images/large/styles/NP7QWBSNRA4/1685085526814/1.jpg"
        },
        {
            "id": 39,
            "title": "Women's Denim Shorts",
            "description": "Classic denim shorts for women perfect for summer.",
            "price": 600,
            "image": "https://pa.namshicdn.com/product/A0/394771W/v3/2-mobile-web-catalog.jpg"
        },
        {
            "id": 40,
            "title": "Men's Casual Shorts",
            "description": "Comfortable casual shorts for men suitable for everyday wear.",
            "price": 500,
            "image": "https://blackficus.com/wp-content/uploads/2023/01/il_1140xN.4541841052_o7qj-jpg.webp"
        },
        {
            "id": 41,
            "title": "Women's Cardigan",
            "description": "Versatile cardigan for women perfect for layering.",
            "price": 700,
            "image": "	https://stylesatlife.com/wp-content/uploads/2019/06/Cardigan-Vest.jpg.webp"
        },
        {
            "id": 42,
            "title": "Men's V-Neck Sweater",
            "description": "Classic V-neck sweater for men with a sophisticated look.",
            "price": 1000,
            "image": "	https://images.lvrcdn.com/Big74I/XBO/048_5d927d15-a5d9-4f9f-a0cb-89f8cd495fb8.JPG"
        },
        {
            "id": 43,
            "title": "Women's Pencil Skirt",
            "description": "Elegant pencil skirt for women suitable for professional settings.",
            "price": 800,
            "image": "https://cdn05.nnnow.com/web-images/preview/styles/JP1OGF2I9QA/1653376803776/1.jpg"
        },
        {
            "id": 44,
            "title": "Men's Cargo Pants",
            "description": "Functional cargo pants for men with multiple pockets.",
            "price": 1200,
            "image": "https://5.imimg.com/data5/ECOM/Default/2022/6/OZ/BH/PP/152906631/6b138bae-97db-4448-8d0a-236fd74679bd-jpg.webp"
        },
        {
            "id": 45,
            "title": "Women's Trench Coat",
            "description": "Classic trench coat for women with a sophisticated style.",
            "price": 2000,
            "image": "https://cdn.mall.adeptmind.ai/https%3A%2F%2Flp2.hm.com%2Fhmgoepprod%3Fset%3Dquality%255B79%255D%252Csource%255B%252Fd1%252F36%252Fd136ee1b91075e1c85158f72799a65814814b584.jpg%255D%252Corigin%255Bdam%255D%252Ccategory%255B%255D%252Ctype%255BLOOKBOOK%255D%252Cres%255Bm%255D%252Chmver%255B1%255D%26call%3Durl%255Bfile%3A%2Fproduct%2Fmain%255D_large.webp"
        },
        {
            "id": 46,
            "title": "Men's Athletic Shorts",
            "description": "Breathable athletic shorts for men suitable for sports or workouts.",
            "price": 800,
            "image": "data:image/jpeg;base64,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"
        },
        {
            "id": 47,
            "title": "Women's Rain Jacket",
            "description": "Waterproof rain jacket for women perfect for rainy days.",
            "price": 1500,
            "image": "https://www.stadtlandkind.ch/src/cache/471x471-admin-img-articles-47041_pic2_raw.jpg.webp"
        },
        {
            "id": 48,
            "title": "Men's Button-Down Shirt",
            "description": "Versatile button-down shirt for men suitable for various occasions.",
            "price": 1000,
            "image": "https://img.freepik.com/free-photo/vertical-shot-s…l-male-standing-with-hand-pocket_181624-44739.jpg"
        },
        {
            "id": 49,
            "title": "Women's Hooded Sweatshirt",
            "description": "Comfortable hooded sweatshirt for women with a relaxed fit.",
            "price": 1200,
            "image": "https://cdn18.nnnow.com/web-images/large/styles/WGENJGLQ5PS/1634893632475/1.jpg"
        },
        {
            "id": 50,
            "title": "Men's Casual Shoes",
            "description": "Casual shoes for men with a comfortable and versatile design.",
            "price": 1500,
            "image": "https://media.istockphoto.com/id/187310279/photo/brown-leather-shoe.jpg?s=612x612&w=0&k=20&c=N-G1SP8dDojp3M_ykS7tQuYI8OVPWM0XA8_knBiWRtY="
        }
    ]

    const clothesDatafetch = () => {
        // axios
        //     .get('http://localhost:3000/clothes')
        //     .then(function (response) {
        //         setclothesData(response.data);
        //         console.log(response.data);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
        //     .finally(function () {
        //         // Any necessary cleanup or additional logic after the request completes
        //     });



        setclothesData(clothesdata)
    };

    useEffect(() => {
        clothesDatafetch();
    }, []);

    return (
        <div className='main_container'>
            <div className="eleven">
                <h1>Clothes</h1>
            </div>
            <div className='common_product_box_wrap'>
                {clothesData.length > 0 &&
                    clothesData.map((val, ind) => (
                        <div className='common_product_box' key={val.id}>
                            <span>ON SALE</span>
                            <div className='product_img'>
                                <img src={val.image} alt='' />
                            </div>
                            <div className='product_details'>
                                <p className='product_title'>{val.title.slice(0, 60)}...</p>
                            </div>
                            <h2 className='product_price'>Price: ₹ {val.price}</h2>
                            <div className='product_cart'>
                                <div className='wrapper-action'>
                                    <button className='btn btn-darken'>Add to 🛒</button>
                                    <div className="heart-icon">&#10084;</div>
                                    {/* <a href="image" target="_blank"> <button className='btn btn-darken'>Read More</button></a> */}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Clothes