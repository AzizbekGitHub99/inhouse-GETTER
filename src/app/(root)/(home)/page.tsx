"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

import ProductCard from "@/components/productCard";
import SwiperDis from "@/components/swiper";
import Email from "@/components/email";

import "./home.scss";

import img from "@/assets/images/home/hero-card.jpg";
import adv from "@/assets/images/home/advertising.png";
import ProductType from "@/types/product";
import { useStore } from "@/zustand";

export default function Home() {
  
  const {products, execute} = useStore()

  useEffect(() => {
    execute()
    
  }, []);
  return (
    <Fragment>
      <section className="hero">
        <div className="container">
          <h1 className="hero__title">Удивительные иностранные продукты</h1>
          <div className="hero__cards">
            <div className="hero__cards__card">
              <div className="image-box">
                <Image src={img} alt="Picture of the author" fill priority />
              </div>
              <p>Time is the capital of your life, so spend it wisely.</p>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 12H24.5M24.5 12C18.74 12 12.5 8.16 12.5 0M24.5 12C18.74 12 12.5 16.32 12.5 24"
                  stroke="#EE1C25"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="hero__cards__card">
              <div className="image-box">
                <Image src={img} alt="Picture of the author" fill priority />
              </div>
              <p>Time is the capital of your life, so spend it wisely.</p>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 12H24.5M24.5 12C18.74 12 12.5 8.16 12.5 0M24.5 12C18.74 12 12.5 16.32 12.5 24"
                  stroke="#EE1C25"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="last-products">
        <div className="container">
          <h2 className="title">Наши последние продукты</h2>
          <p className="subtitle">
            Теперь можно купить замечательные и уникальные блюда иностранной
            кухни
          </p>
          <div className="last-products__wrapper">
            {products?.slice(1,11).map((el: ProductType) => (
              <ProductCard data={el} key={el.id} dis={false} />
            ))}
          </div>
          <button className="last-products__wrapper__all-btn">
            Посмотреть все
          </button>
        </div>
      </section>
      <section className="advertising">
        <div className="container">
          <div className="advertising__box">
            <div className="advertising__box__left">
              <h1>Наши новейшие ковры!</h1>
              <p>
                В каждый ковер вложена душа мастеров, и все это <br /> именно
                для вас.
              </p>
            </div>
            <div className="advertising__box__right">
              <p>от 499 000.00 uz</p>
            </div>
            <Image src={adv} fill alt="adv" />
          </div>
        </div>
      </section>
      <section className="discount">
        <div className="container">
          <h2 className="title">Товары со скидкой</h2>
          <p className="subtitle">
            В каждый ковер вложена душа мастеров, и все это именно для вас.
          </p>
          <SwiperDis />
        </div>
      </section>
      <section className="collection">
        <div className="container">
          <h2 className="title">Коллекционные товары</h2>
          <p className="subtitle">
            В каждый ковер вложена душа мастеров, и все это именно для вас.
          </p>
          <div className="collection__cards">
            <div className="collection__cards__card">
              <div className="image-box">
                <Image src={img} alt="Picture of the author" fill priority />
              </div>
              <p>
                Название продукта <br /> <span>≈ 45 000.00 uzs</span>
              </p>
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z"
                    fill="#EE1C25"
                  />
                </svg>
                Заказать прямо сейчас
              </button>
            </div>
            <div className="collection__cards__card">
              <div className="image-box">
                <Image src={img} alt="Picture of the author" fill priority />
              </div>
              <p>
                Название продукта <br /> <span>≈ 45 000.00 uzs</span>
              </p>
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z"
                    fill="#EE1C25"
                  />
                </svg>{" "}
                Заказать прямо сейчас
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <Email />
      </div>
    </Fragment>
  );
}
