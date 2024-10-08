"use client";

import { Fragment, useEffect, MouseEvent, useState } from "react";
import { useParams } from "next/navigation";

import Breadcrumbs from "@/components/breadcrumbs";
import SwiperDis from "@/components/swiper";
import Zoom from "@/components/imageZoom/ImageInnerZoom";
import { useCartStore, useStore } from "@/zustand";

import ProductType from "@/types/product";
import CartProductType from "@/types/cartProducts";
import CurrenProductType from "@/types/currentProduct";

import prod from "@/assets/images/home/product-card.jpg";

import "./singleProduct.scss";

const SingleProductPage = () => {
  const { products, execute } = useStore();
  const { cartProducts, setCartProducts } = useCartStore();
  const { singleProduct: currentId } = useParams();
  const [currentProduct, setCurrentProduct] =useState<CurrenProductType | null>();

  useEffect(() => {
    execute();
  }, []);

  useEffect(() => {
    if (cartProducts?.find((el) => el.id === +currentId)) {
      let res = cartProducts?.find((el) => el.id === +currentId);     
      setCurrentProduct(res);
    } else {      
      let res = products?.find((el) => el.id === +currentId);
      setCurrentProduct(res);
    }   
  }, [cartProducts, products]);

  const toCart = (e: MouseEvent<HTMLSpanElement>, _id: number) => {
    e.preventDefault();

    let clickEl: ProductType | any = products.find((el: ProductType) => {
      return el.id === _id;
    });

    if (cartProducts.find((el: ProductType) => {
        return el.id === clickEl.id;
      })
    ) {
      let newCart = cartProducts.filter((el: CartProductType) => {
        if (el.id === clickEl.id) {
          el.quantity = 0;
        }
        return el.id !== clickEl.id;
      });
      setCartProducts(newCart);
    } else {
      let newCart = [...cartProducts, { ...clickEl, quantity: 1 }];
      setCartProducts(newCart);
    }
  };

  const controlQuantity = (e: MouseEvent<HTMLSpanElement>, _id: number) => {
    e.preventDefault();

    let clickEl: CartProductType | any = cartProducts.find(
      (el: CartProductType) => {
        return el.id === _id;
      }
    );

    if (e.currentTarget.textContent === "+") {
      let newCart = cartProducts.map((el: CartProductType) => {
        if (el.id === _id) {
          el.quantity++;
        }
        return el;
      });
      setCartProducts(newCart);
    } else if (e.currentTarget.textContent === "-") {
      if (clickEl.quantity === 1) {
        let newCart = cartProducts.filter((el: CartProductType) => el.id !== clickEl.id);
        setCartProducts(newCart);
      } else {
        let newCart = cartProducts.map((el: CartProductType) => {
          if (el.id === _id) {
            --el.quantity;
          }
          return el;
        });

        setCartProducts(newCart);
      }
    }
  };

  return (
    <Fragment>
      <Breadcrumbs />
      <section className="product">
        <div className="container product-container">
          <div className="product-container__img">
            <Zoom src={{ prod: prod, alt: "Product" }} />
          </div>
          <div className="product-container__body">
            <h2>
              {currentProduct?.title?.split(" ")[0] +
                " " +
                currentProduct?.title?.split(" ")[1]}
            </h2>
            <h3>{`${currentProduct?.price} usd`}</h3>
            <div className="product-container__body__materials">
              <h4>Материалы</h4>
              <div className="box">
                <div className="box__material">Полипропилен</div>
                <div className="box__material">Пластик</div>
              </div>
            </div>
            <div className="product-container__body__description">
              <h4>Описание</h4>
              <p>{currentProduct?.description}</p>
            </div>
            <div className="product-container__body__btns">
              {cartProducts?.find(
                (el: CartProductType) => el.id === currentProduct?.id
              ) ? (
                <div className="product-container__body__btns__btn-group">
                  <button
                    onClick={(e) => controlQuantity(e, +currentId)}
                    className="product-container__body__btns__to-cart"
                  >
                    -
                  </button>
                  <span>{currentProduct?.quantity}</span>
                  <button
                    onClick={(e) => controlQuantity(e, +currentId)}
                    className="product-container__body__btns__to-cart"
                  >
                    +
                  </button>
                </div>
              ) : (
                <>
                  <button
                    className="product-container__body__btns__to-cart"
                    onClick={(e) => toCart(e, +currentId)}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V9H8V10C8 10.2652 8.10536 10.5196 8.29289 10.7071C8.48043 10.8946 8.73478 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V9H14V10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10V9H18V19Z"
                        fill="white"
                      />
                    </svg>
                    добавить в корзинку
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="product-down container">
        <div className="product-down__card">
          <h2>О товаре</h2>
          <p>
            За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые
            версии появились по ошибке, некоторые - намеренно (например,
            юмористические варианты).
          </p>
        </div>
        <div className="product-down__card">
          <h2>О доставке и наличие</h2>
          <p>
            За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые
            версии появились по ошибке, некоторые - намеренно (например,
            юмористические варианты).
          </p>
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
    </Fragment>
  );
};

export default SingleProductPage;
