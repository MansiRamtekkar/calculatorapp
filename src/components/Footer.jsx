import React from "react";

function Footer(){
    const year = new Date().getFullYear();

    return(
        <footer>
            &copy; <a href="https://github.com/MansiRamtekkar" rel="noreferrer" target="_blank">Mansi Ramtekkar</a> {year}
        </footer>
    )
}

export default Footer;
