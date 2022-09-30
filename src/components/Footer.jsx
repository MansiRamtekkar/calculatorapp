import React from "react";

function Footer(){
    const year = new Date().getFullYear();

    return(
        <footer>
            <p>Made with 🤍</p>
            &copy; <a href="https://github.com/MansiRamtekkar">Mansi Ramtekkar</a> {year}
        </footer>
    )
}

export default Footer;