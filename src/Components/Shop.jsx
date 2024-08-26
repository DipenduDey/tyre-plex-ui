import Review from "./Review"

import shopImage from "../assets/2021-02-06.jpg";

export default function Shop() {
    return (
        <section className="shop">
            <section className="hero">
                <div className="hero-content">
                    <div className='heading'>
                        <h1>Shree Hemkunt Tyres and Services</h1>
                        <div className="verified">
                            <img src="https://img.icons8.com/?size=100&id=102561&format=png&color=000000" alt="Verified Icon" width="20" height="20" />
                            <span>Verified</span>
                        </div>
                    </div>
                    <div className="rating">
                        <span className='rating-para'>4.9</span>
                        <div className='star-rating'>
                            <span className="rating-star">★</span>
                            <span className="rating-star">★</span>
                            <span className="rating-star">★</span>
                            <span className="rating-star">★</span>
                            <span className="rating-star">★</span>
                            <span className="rating-count"><u>2278 Reviews</u></span>
                        </div>
                        <button className="rating-button">Rate</button>
                    </div>

                    <p>
                        Plot Number-09 Ground Floor CISF Campus Road, Ahinsa Khand-02 Indirapuram, Ghaziabad, Uttar Pradesh,
                        201014
                    </p>
                    <p>Open: Monday to Sunday - 10:00AM to 8:00PM</p>
                    <button className="get-directions">Get Directions</button>

                </div>
                <div className="hero-images">
                    <img
                        className="hero-image"
                        src={shopImage}
                        alt="Shop Image"
                    />
                    <img
                        className="hero-image"
                        src={shopImage}
                        alt="Shop Image"
                    />
                </div>


            </section>

            <Review />
        </section>
    )
}