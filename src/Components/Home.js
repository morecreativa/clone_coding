import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://drive.google.com/uc?export=download&id=1vsEj8cS0f2-HWewB_pejW9vyUnQHB1zl"
                alt=""
            />
            {/* Product id, title, price, rating, imgae*/}
            <div className="home__row">
                <Product
                    id="1"
                    title="A bus is caught in floodwaters in Paju, Gyeonggi Province, Thursday. Yonhap.A bus is caught in floodwaters in Paju, Gyeonggi Province, Thursday. Yonhap."
                    price="600"
                    rating={5}
                    image="https://drive.google.com/uc?export=download&id=1sGlImbwPTXD9uS7Jnr-vgolX3GZaOH9G"
                />

                <Product
                    id="2"
                    title="As heavy rain continues to wreak havoc in Korea's central regions, including the city and the Seoul metropolitan area, the death toll rose to 16 as of Thursday morning."
                    price="1230"
                    rating={5}
                    image="https://drive.google.com/uc?export=download&id=1I8Vd3OYN3WK6TeJ0XHjBHYvB-VACJReK"
                />
            </div>

            <div className="home__row">
                <Product
                    id="3"
                    title="Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi "
                    price="455"
                    rating={5}
                    image="https://drive.google.com/uc?export=download&id=1RnxvYABI6gG77E5lwdn7R5DwwaCVlLk0"
                />
                <Product
                    id="4"
                    title="Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi "
                    price="395"
                    rating={5}
                    image="https://drive.google.com/uc?export=download&id=1sGlImbwPTXD9uS7Jnr-vgolX3GZaOH9G"
                />
                <Product
                    id="5"
                    title="Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi "
                    price="684"
                    rating={5}
                    image="https://drive.google.com/uc?export=download&id=1sGlImbwPTXD9uS7Jnr-vgolX3GZaOH9G"
                />

            </div>

            <div className="home__row">
            <Product
                id="6"
                title="Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi "
                price="600"
                rating={5}
                image="https://drive.google.com/uc?export=download&id=1sGlImbwPTXD9uS7Jnr-vgolX3GZaOH9G"
            />
            </div>
        </div>
    )
}

export default Home;