
// https://fakestoreapi.com/products/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import $ from 'jquery';

$(document).ready(function () {
    // Add a click event listener to the heart icon
    $('.heart-icon').on('click', function () {
        // Change the color of the heart
        $(this).css('color', 'red'); // Change 'red' to any color you want
    });
});
const Product = (props) => {
    const [productdata, setProductData] = useState([]);

    const productDatafetch = () => {

        axios
            .get('https://dummyjson.com/products')
            .then(function (response) {
                setProductData(response.data.products);
                console.log(response.data.products);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // Any necessary cleanup or additional logic after the request completes
            });
    };

    useEffect(() => {
       
        productDatafetch();
    }, []);



    useEffect(() => {
        console.log(props.val)
        axios
            .get(`https://dummyjson.com/products/search?q=${props.val}`)
            .then(function (response) {
                setProductData(response.data.products);

            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // Any necessary cleanup or additional logic after the request completes
            });
    }, [props.val]);



    useEffect(() => {
        productDatafetch();
    }, []);

    return (
        <div className='main_container'>
            {/* <div className="two alt-two">
                <h1 id='electronic'>Electronic 
                    <span>Electronic Gadgets</span>
                </h1>
            </div> */}
            <main className='main'>
                <section className='section wrapper wrapper-section'>
                    <div className='container wrapper-column'>
                        <div className='wrapper-figure'>
                            <img
                                src='https://i.postimg.cc/mrfzL6PT/sneaker-image.png'
                                className='wrapper-image'
                                loading='lazy'
                                alt='Sneaker'
                            />
                        </div>

                        <div className='wrapper-content'>
                            <div className='wrapper-inform'>
                                <span className='badge badge-darken'>Man's Shoes</span>
                                <h1 className='heading-sm font-bold'>Nike Air Motion Max</h1>
                                <p className='text-md font-regular'>
                                    The combine of breathable mesh without seams for a traditional and modern style to add the perfect
                                    amount of flash to make you shine.
                                </p>
                            </div>
                            <div className='wrapper-detail'>
                                <div className='price'>
                                    <span className='text-md font-semi'>Price:</span>
                                    <div className='price_detail'>
                                        <h3 className='text-xxl font-bold'>₹ 6999.00</h3>
                                        <span>₹ 8999.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className='wrapper-action'>
                                <button className='btn btn-darken'>Add to 🛒</button>
                                <i class="fa-solid fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="sale">
                    <div className="products">
                        <div className="product">
                            <img src="https://i.postimg.cc/Vsrm9htX/Black-Electronic-Promo-Instagram-Post.png" alt="Electronic" />
                            <button className='ele'>
                                <Link to={"/Electronics"}>Shop Now</Link>
                            </button>
                        </div>
                        <div className="product">
                            <img src="https://i.postimg.cc/3RcBXB6x/Sage-Green-Aesthetic-Fashion-Clothes-Product-Sale-Instagram-Story.png" alt="Clothes" />
                            <button className='clo'>
                                <Link to={"/Clothes"}>Shop Now</Link>
                            </button>
                        </div>
                        <div className="product">
                            <img src="https://i.postimg.cc/rFHfz5bd/Jewellery-Product-Promotion-Sale-for-Valentine-s-Day-Instagram-Post.png" alt="Jewellery" />
                            <button className='jew'>
                                <Link to={"/Jewellery"}>Shop Now</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <div className='common_product_box_wrap'>
                {productdata.length > 0 &&
                    productdata.map((val, ind) => (
                        <div className='common_product_box' id='add_card' key={val.id}>
                            <span>ON SALE</span>
                            <div className='product_img'>
                                <img src={val.images[0]} alt='' />
                            </div>
                            <div className='product_details'>
                                <p className='product_title'>{val.title}</p>
                            </div>
                            <h2 className='product_price'>Price: $ {val.price}</h2>
                            <div className='product_cart'>
                                <div className='wrapper-action'>
                                    <button className='btn btn-darken'>Add to 🛒</button>
                                    <div className="heart-icon">&#10084;</div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Product;
