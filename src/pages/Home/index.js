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
                            <p>Estratégia de marca para pessoas e empresas</p>
                        </div>
                        <div className="cards-o-container">
                            <h2 class="o_fazemos"><span></span>2</h2>
                            <p>Site institucional</p>
                        </div>
                        <div className="cards-o-container">
                            <h2 class="o_fazemos"><span></span>3</h2>
                            <p>Identidade Visuale Logomarca</p>
                        </div>
                        <div className="cards-o-container">
                            <h2 class="o_fazemos"><span></span>4</h2>
                            <p>Imagem Pessoal</p>
                        </div>
                        <div className="cards-o-container">
                            <h2 class="o_fazemos"><span></span>5</h2>
                            <p>Branding (Gestão de Marcas)  para pessoas e empresas</p>
                        </div>
                        <div className="cards-o-container">
                            <h2 class="o_fazemos"><span></span>6</h2>
                            <p>Curso Marca Pessoal 4.0</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="quemSomos">
                <div className="container">
                    <div className="title-default left">
                        <h2>Quem Somos<span></span>
                        </h2>                        
                    </div>
                    <div className="quem-somos-container">
                        <article>
                            <p className="title">
                            Somos a agência de Estratégias de Negócios & Marketing que posiciona e reposiciona marcas para gerar valor para o consumidor, mercado e acionistas.
                            </p>
                            <p>Acreditamos em marcas que transformam o mundo!</p>
                            <p>Fazemos um estudo profundo e completo do mercado. Usamos dados confiáveis e somamos à nossa criatividade para transformar ideias em negócios sustentáveis. Desde a implementação até a gestão. Assim, construímos Estratégia de Marketing e de Comunicação que geram conexões verdadeiras com clientes.</p>
                            <p>Somos um time de profissionais apaixonados por impulsionar marcas, que ama descobrir e revelar o potencial escondido de cada mercado e que vibra com o encontro feliz entre consumidores e marcas. Este é o nosso propósito.</p>
                        </article>
                        <article>
                            <figure>
                            <img src={require('../../assets/img/liris.png')} />
                            </figure>
                        </article>
                        <article>
                            <p className="title">Liris L.F. Gonçalves<br/>Branding Expert, Sócia Diretora da Wise Marketing</p>
                            <p>“Tive a oportunidade de atuar como Diretora de Marca, Comercial e Marketing em empresas líderes de mercado em seus segmentos como Estée Lauder, Vivara, C&A México, Carrefour, e também na Avon, onde fui Head de Maquiagem.</p>
                            <p>Aprendi na prática como construir e gerir marcas de sucesso, no varejo e na venda direta, durante mais de 30 anos de carreira.</p>
                            <p>Hoje minha missão é AJUDAR EMPRESAS a construírem MARCAS FORTES e RELEVANTES, que SEJAM SUSTENTÁVEIS, gerem emprego e DEVOLVAM ALGO PARA O BEM COMUM, bem como IMPULSIONAR PESSOAS E MARCAS para que vivam diariamente a sua melhor versão, focando nos TALENTOS e DIFERENCIAIS, no seu lado positivo, para que PROSPEREM na vida e ENTREGUEM ABUNDÂNCIA para o mundo. Além disso, quero INSPIRAR PESSOAS a se colocarem em MOVIMENTO, mesmo com medo, para que REALIZEM coisas CONCRETAS e EVOLUAM AGINDO.</p>
                            <p>Nós, da Wise Mkt, conectamos marcas a pessoas e fazemos marketing com resultado, através de uma metodologia própria, divida em 5 módulos.”</p>
                        </article>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Home