

import Input from "../Input";
import "./email.scss"

const Email = () => {
  return (
    <div className="email">
      <p className="email__description">
        Оставте ваше контакты мы вам <br /> перезвоним!
      </p>
      <form className="email__form">
        <Input pl={"Ваше имя"}/>
        <Input pl={"Номер телефона"}/>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Email;
