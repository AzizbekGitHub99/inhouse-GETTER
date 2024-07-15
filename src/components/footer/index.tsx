import Link from "next/link";
import "./footer.scss";


const Footer = () => {
  const navs = [
    "Посуды",
    "Ковры",
    "Аксессуары",
    "Необычные товары",
    "Скидки",
    "Новинки",
    "Для детей",
    "Для кухни",
    "Коллекции",
    "Штучные",
  ];
  return (
    <footer>
      <div className="container">
        <div className="top">
          <Link href="/" className="top__left">
            In House
          </Link>
          <span className="top__right">+998 90 123-45-67</span>
        </div>
        <div className="mid">
          <div className="mid__left">
            {navs.map((el, i) => (
              
              <p key={i}>{el}</p>
            ))}
          </div>
          <div className="mid__right">
            <p>г.Ташкент, р.Темур Малик, ул.Фарабий 150А</p>
            <p>info@gmail.com</p>
            <div className="comunity">
              <Link href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10V14H10V21H14V14H17L18 10H14V8C14 7.73478 14.1054 7.48043 14.2929 7.29289C14.4804 7.10536 14.7348 7 15 7H18V3H15C13.6739 3 12.4021 3.52678 11.4645 4.46447C10.5268 5.40215 10 6.67392 10 8V10H7Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12C8.20888 12 7.43552 12.2346 6.77772 12.6741C6.11992 13.1136 5.60723 13.7384 5.30448 14.4693C5.00173 15.2002 4.92252 16.0044 5.07686 16.7804C5.2312 17.5563 5.61216 18.269 6.17157 18.8284C6.73098 19.3878 7.44372 19.7688 8.21964 19.9231C8.99556 20.0775 9.79983 19.9983 10.5307 19.6955C11.2616 19.3928 11.8864 18.8801 12.3259 18.2223C12.7654 17.5645 13 16.7911 13 16V4C13 5.32608 13.5268 6.59785 14.4645 7.53553C15.4021 8.47322 16.6739 9 18 9"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 4.01001C21 4.50001 20.02 4.69901 19 5.00001C17.879 3.73501 16.217 3.66501 14.62 4.26301C13.023 4.86101 11.977 6.32301 12 8.00001V9.00001C8.755 9.08301 5.865 7.60501 4 5.00001C4 5.00001 -0.182 12.433 8 16C6.128 17.247 4.261 18.088 2 18C5.308 19.803 8.913 20.423 12.034 19.517C15.614 18.477 18.556 15.794 19.685 11.775C20.0218 10.5527 20.189 9.28987 20.182 8.02201C20.18 7.77301 21.692 5.25001 22 4.00901V4.01001Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
