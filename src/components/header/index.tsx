"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

import NavLink from "../navlink";

import "./header.scss";

import logo from "@/assets/images/logo/Logo.svg";
import phone from "@/assets/icons/phone.svg";
import mark from "@/assets/icons/mark.svg";
import circles from "@/assets/icons/circles.svg";
import heart from "@/assets/icons/heart.svg";

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="top">
        <div className="top-container container">
          <div className="logo">
            <Image src={logo} fill priority alt="Logo" />
          </div>
          <div className="navs">
            <a href="/about">О нас</a>
            <a href="/about">О доставке</a>
            <a href="/about">Помощь</a>
            <a href="/about">Контакты</a>
          </div>
          <div className="address">
            <div className="box">
              <div className="box__icon">
                <Image src={phone} fill priority alt="phone" />
              </div>
              <div className="box__infos">
                <div className="box__infos__top">Приём звонков 24/7</div>
                <div className="box__infos__bottom">+998 90 000 00 00</div>
              </div>
            </div>
            <div className="box">
              <div className="box__icon">
                <Image src={mark} fill priority alt="mark" />
              </div>
              <div className="box__infos">
                <div className="box__infos__top">Приходите в гости</div>
                <div className="box__infos__bottom">
                  р.Нурафшон, ул.Фаргона 12Б
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-container container">
          <div className="bottom__left">
            <NavLink className="navBtns" href="/catalog">
              <Image src={circles} width={18} height={18} alt="circles" />
              Каталог продуктов
            </NavLink>
            <NavLink className="navBtns" href="#">
              Для кухни
            </NavLink>
            <NavLink className="navBtns" href="#">
              Аксессуары
            </NavLink>
            <NavLink className="navBtns" href="#">
              Посуды
            </NavLink>
          </div>
          <div className="bottom__right">
            <button className="like-btn">
              <Image src={heart} width={13} height={12} alt="heart" /> Избранные
            </button>
            <button className="cart-btn">Оформить заказ</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
