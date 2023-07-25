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
const Electronics = () => {
    const [electronicsData, setElectronicsData] = useState([]);

    const electronicData = [
        {
            "id": 0,
            "title": "Apple iPhone 12 (256GB) - Purple",
            "price": 69900,
            "description": "146.7 x 71.5 x 7.4 mm (5.78 x 2.81 x 0.29 in)",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/71hIfcIPyxS._SX679_.jpg"
        },
        {
            "id": 1,
            "title": "Apple iPhone 13 Mini (256GB) - Blue",
            "price": 74950,
            "description": "13 cm (5.4-inch) Super Retina XDR display",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/71X6mnUDSzL._SX679_.jpg"
        },
        {
            "id": 2,
            "title": "Apple iPhone 13 (128GB) - Green",
            "price": 62990,
            "description": "15 cm (6.1-inch) Super Retina XDR display",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/61-r9zOKBCL._SX679_.jpg"
        },
        {
            "id": 3,
            "title": "Apple iPhone SE (64 GB) - Midnight (3rd Generation)",
            "price": 49900,
            "description": "11.94 cm (4.7-inch) Retina HD display",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/61TOWf11+jL._SX679_.jpg"
        },
        {
            "id": 4,
            "title": "Apple iPhone 14 (128 GB) - Blue",
            "price": 67499,
            "description": "15.40 cm (6.1-inch) Super Retina XDR display",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/61bK6PMOC3L._SX679_.jpg"
        },
        {
            "id": 5,
            "title": "Apple iPhone 14 Plus (128 GB) - Blue",
            "price": 76999,
            "description": "16.95 cm (6.7-inch) Super Retina XDR display",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/61BGE6iu4AL._SX679_.jpg"
        },
        {
            "id": 6,
            "title": "Apple iPhone 14 Pro (128 GB) - Deep Purple",
            "price": 119999,
            "description": "15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/61HHS0HrjpL._SX679_.jpg"
        },
        {
            "id": 7,
            "title": "Apple iPhone 14 Pro Max (128 GB) - Deep Purple",
            "price": 127999,
            "description": "17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/71yzJoE7WlL._SX679_.jpg"
        },
        {
            "id": 8,
            "title": "Samsung Galaxy M14 5G ",
            "price": 13990,
            "description": "16.72 centimeters (6.6-inch) LCD, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/81KkF-GngHL._SX679_.jpg"
        },
        {
            "id": 9,
            "title": "Samsung Galaxy M33 5G ",
            "price": 16999,
            "description": "Exynos 1280 Octa Core 2.4GHz 5nm Processor with the 12 band support for a True 5G experience",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/81lnKynSaqL._SX679_.jpg"
        },
        {
            "id": 10,
            "title": "Samsung Galaxy S20 FE 5G ",
            "price": 27999,
            "description": "5G Ready powered by Qualcomm Snapdragon 865 Octa-Core processor, 8GB RAM, 128GB internal memory expandable up to 1TB, Android 11.0 operating system and dual SIM",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/812yohjGZ2L._SY741_.jpg"
        },
        {
            "id": 11,
            "title": "Lenovo IdeaPad 3 11th G",
            "price": 37675,
            "description": "Processor: 11th Gen Intel Core i3-1115G4 | Speed: 3.0 GHz (Base) - 4.1 GHz (Max) | 2 Cores | 4 Threads | 6MB Cache",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/513w75K0ffL._SX679_.jpg"
        },
        {
            "id": 12,
            "title": "HP Laptop 15s, Intel Celeron N4500",
            "price": 30490,
            "description": "Processor: Intel Celeron N4500(up to 2.8 GHz burst frequency(2c),4 MB L3 cache, 2 cores, 2 threads)|Memory: 8 GB DDR4-2933 MHz RAM (1 x 8 GB)|Storage: 512 GB PCIe NVMe TLC M.2 SSD",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/71RLItr7I8L._SX679_.jpg"
        },
        {
            "id": 13,
            "title": "Hp Pavilion X360 11Th Gen Intel Core...",
            "price": 51990,
            "description": "Processor: Intel Core i3-1125G4 (up to 3.7 GHz with Intel Turbo Boost Technology(2g), 8 MB L3 cache, 4 cores)| Memory & Storage: 8 GB DDR4-3200 MHz RAM (1 x 8 GB) Upto 16 GB DDR4-3200 MHz RAM (2 x 8 GB)| Storage: 512 GB PCIe NVMe M.2 SSD",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/51VZIz+fngL._SX679_.jpg"
        },
        {
            "id": 14,
            "title": "Dell Vostro 3425 Laptop",
            "price": 41990,
            "description": "Processor: AMD Ryzen5-5500U (up to 4.00 GHz) 8MB L3, 6 Cores // RAM & Storage: 8 GB, 1 x 8 GB, DDR4, 2400 MHz, (2 DIMM Slots, Expandable upto 16GB) & 512GB SSD",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/51u9Q4IEnsL._SX679_.jpg"
        },
        {
            "id": 15,
            "title": "ASUS Vivobook 14 2022",
            "price": 34990,
            "description": "Processor: Intel Core i3-1115G4 Processor Laptop 3.0 GHz (6M Cache, up to 4.1 GHz, 2 cores)",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/71TQ-eDyCAL._SX679_.jpg"
        },
        {
            "id": 16,
            "title": "GSH Video Game Box G5",
            "price": 5997,
            "description": " WiFi 4K HD Super Console X 20+ Emulator 5600+ Games Retro TV Box Video Game Player for CPS, GB, GBA, GBC, MD, SFC, FC, N64, PS1, PSP and Atari Wireless Gamepad Controller",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/51tlsAFgZAL._SX679_.jpg"
        },
        {
            "id": 17,
            "title": "Apple Watch SE (2nd Gen) ",
            "price": 69900,
            "description": "WHY APPLE WATCH SE — All the essentials to help you monitor your fitness, keep connected, track your health and stay safe. Now up to 20% faster, with features like Crash Detection and enhanced workout metrics, it’s a better value than ever.",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/71YdE55GwjL._SX679_.jpg"
        },
        {
            "id": 18,
            "title": "TECKO Watch S8 Ultra Latest Bluetooth...",
            "price": 1700,
            "description": "Blood oxygen & Blood pressure Monitoring.",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/61cuHqh3BzL._SX522_.jpg"
        },
        {
            "id": 19,
            "title": "Amazon Basics Wired Over Ear Gaming Headphone (Black)",
            "price": 699,
            "description": "Equipped with 50 mm dynamic drivers for more impressive sound quality. Enjoy crystal-clear stereo surround sound that brings your games, music, and movies to life.",
            "category": "electronic",
            "image": "https://m.media-amazon.com/images/I/71dlG+QUE+L._SX679_.jpg"
        }

    ]
    const electronicsdatafetch = () => {
        //     axios
        //         .get('https://fakestoreapi.com/products/')
        //         .then(function (response) {
        //             setElectronicsData(response.data);
        //             console.log(response.data);
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         })
        //         .finally(function () {
        //             // Any necessary cleanup or additional logic after the request completes
        //         });
        setElectronicsData(electronicData)
    };
    useEffect(() => {
        electronicsdatafetch();
    }, []);


    return (
        <div className='main_container'>
            <div className="two alt-two">
                <h1 id='electronic'>Electronic
                    <span>Electronic Gadgets</span>
                </h1>
            </div>
            <div className='common_product_box_wrap'>
                {electronicsData.length > 0 &&
                    electronicsData.map((val, ind) => (
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

export default Electronics
