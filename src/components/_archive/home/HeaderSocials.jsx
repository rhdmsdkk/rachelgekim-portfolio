import React from 'react';

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://www.linkedin.com/in/rachel-kim-632420213/" className="home__social-link" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/rhdmsdkk" className="home__social-link" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-github"></i>
            </a>

            <a href="mailto:rachelgekim@gmail.com" className="home__social-link" target="_blank" rel="noreferrer">
                <i class="fa-solid fa-envelope"></i>
            </a>
        </div>
    )
}

export default HeaderSocials;