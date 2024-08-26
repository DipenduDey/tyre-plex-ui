import image from "../assets/haveQuestion-bg.png"
import imageLogo from "../assets/TP-logo.png"

export default function Footer() {
    return (
        <>

            <section className="footer-header">
                <section>
                    <div className="yellow-footer">
                        <div className="footer-content">
                            <h2>Have a question about Tyres?</h2>
                            <p>Get an answer in 24 hours from our experts.</p>
                            <input placeholder="Ask or search your question" />
                        </div>
                        <img src={image} />
                    </div>
                </section>
                <section className="about">
                    <div className="left">
                        <img className="logo-image" src={imageLogo} />
                        <div className="social">
                            <a href="https://www.facebook.com/tyreplex/" target="_blank">

                                <img src="https://img.icons8.com/?size=100&id=435&format=png&color=40C057" />
                            </a>
                            <a href="https://www.instagram.com/ontyreplex/" target="_blank">
                                <img src="https://img.icons8.com/?size=100&id=47872&format=png&color=40C057" />
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <a href="#">Who We Are</a>
                        <a href="#">Are you a Tyre Dealer?</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of use</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Career</a>
                        <a href="#">Shipping & Return Policy</a>
                    </div>
                </section>
                <p>©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
            </section>

        </>
    )
}