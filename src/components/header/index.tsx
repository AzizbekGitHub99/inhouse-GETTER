"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import NavLink from "../navlink";
import "./header.scss";

import logo from "@/assets/images/logo/Logo.svg";
import phone from "@/assets/icons/phone.svg";
import mark from "@/assets/icons/mark.svg";
import circles from "@/assets/icons/circles.svg";
import heart from "@/assets/icons/heart.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <div className="top">
        <div className="top-container container">
          <div className="top-left left">
            <Link href="/" className="logo">
              <Image src={logo} fill priority alt="Logo" />
            </Link>
          </div>
          <div className="top-right right">
            <div className="navs">
              <Link href="/about">О нас</Link>
              <Link href="/about">О доставке</Link>
              <Link href="/about">Помощь</Link>
              <Link href="/about">Контакты</Link>
            </div>
            <div className="address">
              <Link href="tel:+998908205575" className="box">
                <div className="box__icon">
                  <Image src={phone} fill priority alt="phone" />
                </div>
                <div className="box__infos">
                  <div className="box__infos__top">Приём звонков 24/7</div>
                  <div className="box__infos__bottom">+998 90 000 00 00</div>
                </div>
              </Link>
              <Link
                href="https://www.google.com/maps/@41.3149818,69.3289586,21z?entry=ttu"
                target="_blank"
                className="box"
              >
                <div className="box__icon">
                  <Image src={mark} fill priority alt="mark" />
                </div>
                <div className="box__infos">
                  <div className="box__infos__top">Приходите в гости</div>
                  <div className="box__infos__bottom">
                    р.Нурафшон, ул.Фаргона 12Б
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-container container">
          <div className="bottom-left left">
            <NavLink className="nav-btns" href="/catalog">
              <Image src={circles} width={18} height={18} alt="circles" />
              Каталог продуктов
            </NavLink>
          </div>
          <div className="bottom-right right">
            <div className="bottom-nav">
              <NavLink className="nav-btns" href="#">
                Для кухни
              </NavLink>
              <NavLink className="nav-btns" href="#">
                Аксессуары
              </NavLink>
              <NavLink className="nav-btns" href="#">
                Посуды
              </NavLink>
            </div>
            <div className="two-btn">
              <button className="like-btn">
                <Image src={heart} width={13} height={12} alt="heart" />{" "}
                Избранные
              </button>
              <button className="cart-btn">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
      <div className="under">
        <div className="container under-container">
          <Link href="/" className="logo">
            <Image src={logo} fill priority alt="Logo" />
          </Link>
          <div onClick={ ()=> setIsMenuOpen(!isMenuOpen)} className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={isMenuOpen ? "burger-menu open" : "burger-menu"}>
            <ul>
              <li onClick={() =>setIsMenuOpen(false)}>
                <NavLink href="/">Главная</NavLink>
              </li>
              <li onClick={() =>setIsMenuOpen(false)}>
                <NavLink href="/about">О нас</NavLink>
              </li>
              <li onClick={() =>setIsMenuOpen(false)}>
                <NavLink href="/catalog">Каталог продуктов</NavLink>
              </li>
              <li onClick={() =>setIsMenuOpen(false)}>
                <NavLink href="/likes">Избранные</NavLink>
              </li>
              <li onClick={() =>setIsMenuOpen(false)}>
                <NavLink href="/cart">Оформить заказ</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
