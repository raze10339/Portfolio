
function Footer() {
    const date = new Date();
    return (
        <footer>
            <p>@copy; Copyright {date.getFullYear()}</p>
            <p>Designed & Developed By Razieh</p>

        </footer>


    )

}

export default Footer;