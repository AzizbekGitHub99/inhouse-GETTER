import { Fragment } from "react";

import "./about.scss";
import Breadcrumbs from "@/components/breadcrumbs";

const AboutPage = () => {
  return (
    <Fragment>
      <Breadcrumbs />
      <section className="main-section">
        <div className="container about-container">
          <div className="aside left">
            <ul>
              <li>О нас</li>
              <li>О доставке</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className="mainside right">
            <p>
              Наш интернет-магазин предлагает вам широкий ассортимент товаров
              высокого качества по доступным ценам. Мы гордимся тем, что
              предоставляем нашим клиентам уникальный опыт покупок, сочетая
              удобный интерфейс и первоклассное обслуживание.
            </p>
            <h3>Почему выбирают нас?</h3>
            <p>
              1. **Большой выбор**: У нас вы найдете всё, что вам нужно, от
              электроники и бытовой техники до модной одежды и аксессуаров. Мы
              постоянно обновляем наш ассортимент, чтобы предлагать вам самые
              последние новинки.
            </p>
            <p>
              2. **Качество и надежность**: Мы работаем только с проверенными
              поставщиками и гарантируем высокое качество всех наших товаров.
              Каждая покупка сопровождается гарантией, что вы получите именно
              то, что ожидали.
            </p>
            <p>
              3. **Удобный интерфейс**: Наш сайт разработан так, чтобы вы могли
              легко найти нужный товар и оформить заказ за несколько минут. Мы
              постоянно совершенствуем наш интерфейс, основываясь на отзывах
              клиентов, чтобы сделать процесс покупки еще более удобным.
            </p>
            <p>
              4. **Безопасность покупок**: Мы заботимся о безопасности ваших
              данных и используем передовые технологии для защиты вашей личной
              информации. Ваши платежные данные всегда в безопасности.
            </p>
            <p>
              5. **Быстрая доставка**: Мы предлагаем быструю и надежную доставку
              по всей стране. Вы можете выбрать удобный для вас способ доставки
              и отслеживать статус вашего заказа в режиме реального времени.
            </p>
            <p>
              6. **Поддержка клиентов**: Наша команда поддержки всегда готова
              помочь вам с любыми вопросами. Мы ценим наших клиентов и стремимся
              обеспечить вам наилучший сервис.
            </p>
            <p>
              Присоединяйтесь к тысячам довольных клиентов и откройте для себя
              удобство и удовольствие от покупок в нашем интернет-магазине. Мы
              всегда рады видеть вас среди наших покупателей и готовы сделать
              все возможное, чтобы ваши покупки были приятными и выгодными.
            </p>
            <p>Добро пожаловать в наш интернет-магазин!</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutPage;
