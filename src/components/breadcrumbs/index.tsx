import Link from "next/link";

import "./breadcrumbs.scss";
import { Fragment } from "react";

const Breadcrumbs = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="flex breadcrumb" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center">
                Главная <span> {"//"}</span>
              </Link>
            </li>
            <li>
              <Link href="/catalog" className="ms-1">
                Для кухни <span> {"//"}</span>
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="ms-1"> Название продукта</span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </Fragment>
  );
};

export default Breadcrumbs;
