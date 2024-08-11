import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="aboutpage">
            <div>
                <h1 className='title'>Sobre a NomeEmpresa</h1>
                <p>
                Fusce sit amet faucibus lectus. Donec mattis odio ipsum, 
                sit amet luctus mauris mattis sed. Nulla nec tristique est. 
                Mauris convallis ultricies venenatis. Pellentesque mollis 
                bibendum nibh.
                </p>
            </div>

            <div className='RowAbout'>
                <div>
                    <h2>Missão</h2>
                    <p>
                    Nulla sodales dapibus massa, eu vestibulum nulla 
                    facilisis sit amet. Phasellus eget nisi erat.
                    Curabitur cursus arcu a justo suscipit sollicitudin.
                    </p>
                </div>
                <div className='visão'>
                    <h2>Visão</h2>
                    <p>
                    Maecenas motie justo ac diam rutrum, ultricies lacinia 
                    justo bibendum.
                    </p>
                </div>
            </div>
                <div>
                    <h2>Valores</h2>
                    <div className='boxvalores'>
                        <span className='valores'>Quisque dui lectus</span>
                        <span className='valores'>lobortis ac nunc a</span>
                        <span className='valores'>tempor maximus nulla</span>
                        <span className='valores'>Class aptent taciti</span>
                        <span className='valores'>sociosqu ad litora</span>
                    </div>
                </div>
        </div>
  );
};

export default About;
