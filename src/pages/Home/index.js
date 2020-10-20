import React from 'react'


function Home() {

    return (
        <>
            <section id="banner">
                <div className="container">
                    <div className="banner-info">
                        <img src={require('../../assets/img/logo_banner.png')} />
                        <h1>Como fazer a sua marca se <br />destacar e se diferenciar da concorrência?</h1>
                        <p>A <strong>WISE MKT</strong> é a Agência de serviços de Marketing & Branding que impulsiona marcas,<br />cria conexões com propósito e faz marketing com resultados.</p>
                        <div><a className="btn">Vamos Trabalhar Juntos</a></div>
                    </div>
                </div>
            </section>
            <section id="oQueFazemos">
                <div className="container">
                    <div className="title-default">
                        <h2>O que Fazemos<span></span>
                        </h2>                        
                    </div>
                    <div className="cards-o">
                        <div className="cards-o-container">
                            <h2 class="o_fazemos"><span></span>1</h2>
                            <p>Estratégia de marca para <br/>pessoas e empresas</p>
                        </div>
                        <div className="cards-o-container">
                            <h2 class="o_fazemos"><span></span>2</h2>
                            <p>Site institucional</p>
                        </div>
                        <div className="cards-o-container">
                            <h2 class="o_fazemos"><span></span>3</h2>
                            <p>Identidade Visual<br/>e Logomarca</p>
                        </div>
                        <div className="cards-o-container">
                            <h2 class="o_fazemos"><span></span>4</h2>
                            <p>Imagem Pessoal</p>
                        </div>
                        <div className="cards-o-container">
                            <h2 class="o_fazemos"><span></span>5</h2>
                            <p>Branding (Gestão de Marcas) <br/> para pessoas e empresas</p>
                        </div>
                        <div className="cards-o-container">
                            <h2 class="o_fazemos"><span></span>6</h2>
                            <p>Curso Marca Pessoal 4.0</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home