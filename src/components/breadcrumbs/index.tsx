'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


import "./breadcrumbs.scss";
import { Fragment } from "react";

const Breadcrumbs = () => {

  return (
    <Fragment>
      <div className="container">
        <div className="flex breadcrumb" aria-label="Breadcrumb">
          <ul className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center">
                Главная
              </Link>
            </li>
            <li>{'//'}</li>
            <li className="inline-flex items-center">
              <Link href="/catalog" className="inline-flex items-center">
                Для кухни
              </Link>
            </li>
            <li>{'//'}</li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="ms-1">Продукта</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Breadcrumbs;
