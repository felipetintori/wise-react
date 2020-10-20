import React from 'react'
import HeaderMobile from '../headerMobile'

function Header() {
    
    return (
        <header id="headerPrincipal">
            <div className="container">
                <div className="logo">
                    <img src={require('../../assets/img/logo_header.png')} />
                </div>
                <div className="menu">
                    <ul>
                        <li><a>Quem Somos</a></li>
                        <li><a>Serviços</a></li>
                        <li><a>Contato</a></li>
                        <li><a className="btn">Cursos</a></li>
                    </ul>
                    <div className="menu_mobile">
                        <HeaderMobile/>

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header