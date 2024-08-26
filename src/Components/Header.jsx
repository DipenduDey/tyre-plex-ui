import img from "../assets/TP-logo.png";

export default function Header() {
    return (
        <>
            <header className="header">
                <button className="logo-button">
                    <img className="logo" src={img} />
                </button>
                <nav className="nav">
                    <ul>
                        <button>Car Tyres</button>
                        <button>Bike Tyres</button>
                        <button>Tyre Pressure</button>
                        <button>Commercial Tyres</button>
                        <button>Accessories</button>
                        <button>More</button>
                    </ul>
                </nav>
                <button className="login">
                    <img src="https://img.icons8.com/?size=100&id=23493&format=png&color=000000" alt="Login Icon" />
                    Login
                </button>
            </header >
        </>
    );
}