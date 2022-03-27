import React from 'react';

function Footer(props) {
    return (
        <div className="footerContainer">
            <div className="footerContainerElem">
                <img className="footerLogo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" />
            </div>
            <div className="footerContainerElem">
                <div className="FooterDivTitile">ГЛАВНОЕ</div>
                <div>Связаться с нами</div>
                <div>Форумы</div>
                <div>API</div>
                <div>Статус системы</div>
            </div>
            <div className="footerContainerElem">
                <div className="FooterDivTitile">УЧАСТВУЙТЕ</div>
                <div>Писание об участии</div>
                <div>Сторонние приложения</div>
                <div>Добавить новый фильм</div>
                <div>Добавить новый сериал</div>
            </div >
            <div className="footerContainerElem">
                <div className="FooterDivTitile">СООБЩЕСТВО</div>
                <div>Руководства</div>
                <div>Обсуждения</div>
                <div>Доска почета</div>
                <div>Twitter</div>
            </div>
            <div className="footerContainerElem">
                <div className="FooterDivTitile">О ПРАВЕ</div>
                <div>Условия использования</div>
                <div>API правила использования</div>
                <div>Политика конфиденциальности</div>
            </div>
        </div>
    );
}

export default Footer;
