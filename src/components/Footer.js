import React from "react";

const Footer = ({Mode}) => {

    return (
        <footer className={`App-footer ${Mode === 'dark' ? 'dark-mode' : ''}`}>
            <p>&copy; {new Date().getFullYear()} BearStore Company Limited. All Rights Reserved. </p>
        </footer>
    )
}
export default Footer;