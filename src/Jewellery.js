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
const Jewellery = () => {
    const [jewelleryData, setjewelleryData] = useState([]);

    const Jewelleysdata = [
        {
            "id": 1,
            "title": "ZENEME American Diamond Studded Leaf Shaped Necklace With Earring and Butterfly Shaped Bracelete Jewellery Shaped For Women and Girl",
            "price": 479,
            "description": "Style Name: Rose Gold",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/61l3UIZIeYL._UY695_.jpg"
        },
        {
            "id": 2,
            "title": "ZENEME Jewellery American Diamond Floral Design Choker Necklace Set With Earring For Women and Girls",
            "price": 1137,
            "description": "Fancy Chain",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/61cQ7Z3XhML._UL1500_.jpg"
        },
        {
            "id": 3,
            "title": "ZAVERI PEARLS Green Meenakari Bridal Choker Necklace Earring & Maangtikka Set For Women-ZPFK10497",
            "price": 645,
            "description": "Brand: ZAVERI PEARLS",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/816X1wEzxLL._UY695_.jpg"
        },
        {
            "id": 4,
            "title": "ZAVERI PEARLS Pink Dazzling Stones Sleek Choker Necklace Earring & Ring Set For Women-ZPFK15144",
            "price": 389,
            "description": "Stones: Artificial Stones",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/71AojXryCYL._UY695_.jpg"
        },
        {
            "id": 5,
            "title": "Shining Diva Fashion One Gram Gold Plated Latest Long Chain Traditional Necklace Jewellery Set for Women",
            "price": 489,
            "description": "One Gram Gold Plated Jewellery Set. Gives Original Gold Jewelry Look.",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/71gZFlFVmzL._UY695_.jpg"
        },
        {
            "id": 6,
            "title": "Atasi International Silver Plated Alloy Necklace Set with Earrings For Women (RF5461)",
            "price": 282,
            "description": "About Product :- Colour : Blue, Silver, Material : Alloy, Plating : Silver Plated; In The Box :- 1 Necklace + 2 Earring",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/71lp9XI3oNL._UY695_.jpg"
        },
        {
            "id": 7,
            "title": "YouBella Fashion Jewellery Silver Crystal Rhinestone Choker Necklace for Women.(Valentine Gift Special)",
            "price": 305,
            "description": "Plated with High Quality Polish for Long Lasting Finish",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/61g4uh+5k5L._UY695_.jpg"
        },
        {
            "id": 8,
            "title": "Peora Traditional Kundan & Pearl Drop Choker Necklace Earring Set with Maang Tikka for Women",
            "price": 899,
            "description": "Department Name: Womens; Metal Type: Brass",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/81ZHhuiOmtL._UY695_.jpg"
        },
        {
            "id": 9,
            "title": "Estele Gold Plated Austrian Crystals Jewellery Set for Women",
            "price": 898,
            "description": "Material:Brass, Plating:Gold, Occasion:Wedding, Dimensions:Length:38 CM",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/71jqnWt4nPL._UY695_.jpg"
        },
        {
            "id": 10,
            "title": "GIVA 925 Sterling Silver Anushka Sharma Heartlock Bracelet, Adjustable | Gifts for Women & Girls",
            "price": 3039,
            "description": "PRODUCT DETAILS: The AAA+ Zircon embellished bracelet is made up of 925 sterling silver with stamp. Adjustable upto 2.30 inch with lobster clasp, this bracelet is anti tarnish with rhodium e-coating.",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/617MBdR-KiL._UY695_.jpg"
        },
        {
            "id": 11,
            "title": "Shining Diva Fashion Latest Stylish Austrian Crystal Rose Gold Charm Bracelet for Women",
            "price": 248,
            "description": "Free size suitable for all. Skin friendly. Nickel free and lead free as per international standards. Anti-allergic and safe for skin",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/51rmMr2nSiL._UY695_.jpg"
        },
        {
            "id": 12,
            "title": "Shining Diva Fashion Set of 5 Stylish Multilayer Crystal Bangle Gold Plated Bracelet for Women and Girls (Golden) (13075b), One Size",
            "price": 259,
            "description": "Set of 5 Latest Design Stylish Bracelets",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/61QESxHwrlL._UY695_.jpg"
        },
        {
            "id": 13,
            "title": "Shining Diva Fashion Set of 4 Multilayer Charm Bangle Gold Plated Bracelet for Women and Girls (Golden) (10695b)",
            "price": 250,
            "description": "Set of 4 Latest Design Stylish Bracelets",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/61oCLzTHSiL._UY695_.jpg"
        },
        {
            "id": 14,
            "title": "Shining Diva Fashion Stylish Bracelet for Women",
            "price": 247,
            "description": "Stylish 18K rose gold plated crystal bracelet for women and girls",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/51It+fREv7L._UY695_.jpg"
        },
        {
            "id": 15,
            "title": "Shining Diva Fashion Latest Stylish Crystal Multilayer 3-5 pcs Set Charm Bracelets for Women and Girls",
            "price": 199,
            "description": "Suitable For Party Wear Or Daily Wear",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/61JNAzCKcdL._UY695_.jpg"
        },
        {
            "id": 16,
            "title": "YouBella Jewellery Bracelets for Women Stylish Rose Gold Plated Crystal Bracelet Bangle Jewellery for Girls and Women",
            "price": 205,
            "description": "Plated with High Quality Polish for Long Lasting Finish",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/71vG0xUgbiL._UY695_.jpg"
        },
        {
            "id": 17,
            "title": "Shining Diva Fashion Latest Collection Gold Plated Combo of 2 Bracelet for Women and Girls (Rose Gold)",
            "price": 269,
            "description": "Combo of two rose gold plated stylish bracelets",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/71CV1ddvQAL._UY695_.jpg"
        },
        {
            "id": 18,
            "title": "Shining Diva Fashion Royal Blue Crystal CZ Silver Plated Stylish Bracelet Gift for Girls Women(9576b)",
            "price": 249,
            "description": "Gift For Her: Perfect gift for any occasion for yourself and your loved ones that will surely make a memorable impression. Ideal Valentine, Birthday, Anniversary gift for someone you Love",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/71Vjnob0hXL._UY695_.jpg"
        },
        {
            "id": 19,
            "title": "Shining Diva Fashion White Silver Plated Cubic Zirconia Stylish AAA Crystal Charm Bracelet for Women (10950b)",
            "price": 300,
            "description": "This latest design bracelet for girls is made from high quality imported Austrian crystal. Five layer silver plated.",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/61z8FOeH4AL._UY695_.jpg"
        },
        {
            "id": 20,
            "title": "MEENAZ Couple Finger Ring Combo for women girls Men Boys girlfriend lovers CZ AD Solitaire Rings Proposal American diamond Stylish Valentine Gifts Platinum Silver Love Heart Single Adjustable CFRM164",
            "price": 115,
            "description": "Stainless steel American diamond Initial letter Alphabet Silver Rings for women girls girlfriend couples boyfriend lovers love valentine rings Heart shape Finger rings adjustable party wear fancy",
            "category": "Jewellery",
            "image": "https://m.media-amazon.com/images/I/51kEhBPEDQL._UY695_.jpg"
        }
    ]


    const jewelleryDatafetch = () => {
        // axios
        //     .get('http://localhost:3000/jewellery')
        //     .then(function (response) {
        //         setjewelleryData(response.data);
        //         console.log(response.data);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
        //     .finally(function () {
        //         // Any necessary cleanup or additional logic after the request completes
        //     });

        setjewelleryData(Jewelleysdata)
    };

    useEffect(() => {
        jewelleryDatafetch();
    }, []);

    return (
        <div className='main_container'>
            <div className="seven">
                <h1>Jewellery</h1>
            </div>
            <div className='common_product_box_wrap'>
                {jewelleryData.length > 0 &&
                    jewelleryData.map((val, ind) => (
                        <div className='common_product_box' key={val.id}>
                            <span>ON SALE</span>
                            <div className='product_img'>
                                <img src={val.image} alt='' />
                            </div>
                            <div className='product_details'>
                                <p className='product_title'>{val.title.slice(0, 46)}...</p>
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

export default Jewellery