import "./footer.css"

const Footer = () => {
    return <footer className="footer">
        <div className="redes">
            <a href="">
                <img src="/img/facebook.png" alt="Facebook" />
            </a>

            <a href="">
                <img src="/img/twitter.png" alt="twitter" />
            </a>

            <a href="">
                <img src="/img/instagram.png" alt="instagram" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="" />
        <strong>Desarrollado por Enrique Elvira</strong>
    </footer>
}

export default Footer;