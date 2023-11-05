"use client";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../CollectionNavbar/CollectionNavbar.module.css";
import { useEffect, useRef, useState } from "react";
import { fakeData } from "@/utils/Fakedata";



export default function CollectionNavbar() {
  const [categories, setAllCategories] = useState(false);
  const [chains, setAllChains] = useState(false);
  const [time, setTime] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setAllCategories(false);
        setAllChains(false);
        setTime(false)
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <div>
      <div className={`${styles.collectionDiv}`}>
        <h1 className="pr-3">Collection stats</h1>
      </div>
      <div className={`${styles.linkbuttonDiv}`}>
        <Link href={"/"} className={`${styles.linkbutton}`}>
          Trending
        </Link>
        <Link href={"/"} className={`${styles.linkbutton} `}>
          Top
        </Link>
        <Link href={"/"} className={`${styles.linkbutton}`}>
          Watchlist
        </Link>
      </div>
      <div className="d-flex justify-content-between align-items-center position-relative">
        <div className="d-flex " ref={menuRef}>
          {/* Categorie Button for filttering */}
          <button
            className={`${styles.buttonDiv} me-1 me-lg-2`}
            onClick={() => setAllCategories(!categories)}
          >
            <span>All categories</span>
            <BsChevronDown></BsChevronDown>
          </button>
          {categories && (
            <>
            <div
              className={`${styles.categorieDiv} position-absolute bg-white d-lg-flex flex-column p-2 d-none `}
              >
              {fakeData.AllCategorieButtons.map((buttonName) => (
                <button
                key={buttonName.id}
                className={`${styles.categorieButton}`}
                >
                  {buttonName.name}
                </button>
              ))}
            </div>
            {/* Darwer Design for mobile devices */}
            <div className={`${styles.drawer} d-flex d-lg-none`}>
            <p className={`${styles.buttons} d-flex justify-content-between w-100`}>Select <span onClick={() => setAllCategories(false)}><AiOutlineClose /></span></p>
            {fakeData.AllCategorieButtons.map((buttonName) => (
                <button
                key={buttonName.id}
                className={`${styles.categorieButton}`}
                >
                  {buttonName.name}
                </button>
              ))}
            </div>
              </>
          )}
          {/* Chain Button for filttering */}
          <button
            className={`${styles.buttonDiv} me-1 me-lg-2`}
            onClick={() => setAllChains(!chains)}
          >
            <span>All chains</span>
            <BsChevronDown></BsChevronDown>
          </button>
          {chains && (
            <>
            <div
              className={`${styles.categorieDiv} ${styles.categorieDivPosition} position-absolute bg-white shadow d-flex flex-column p-2`}
              >
              {fakeData.AllCategorieButtons.map((buttonName) => (
                <button
                  key={buttonName.id}
                  className={`${styles.categorieButton}`}
                  >
                  {buttonName.name}
                </button>
              ))}
            </div>
            {/* Darwer Design for mobile devices */}
            <div className={`${styles.drawer} d-flex d-lg-none `}>
              <p className={`${styles.buttons} d-flex justify-content-between w-100`}>Select <span onClick={() => setAllChains(false)}><AiOutlineClose /></span></p>
            {fakeData.AllCategorieButtons.map((buttonName) => (
                <button
                key={buttonName.id}
                className={`${styles.categorieButton}`}
                >
                  {buttonName.name}
                </button>
              ))}
            </div>
              </>
          )}
        </div>
        <div className={`${styles.buttontoggle}`}>
          <div className="d-none d-lg-block">
            <button className={`${styles.buttons}`}>1h</button>
            <button className={`${styles.buttons}`}>6h</button>
            <button className={`${styles.buttons}`}>24h</button>
            <button className={`${styles.buttons}`}>7d</button>
            <button className={`${styles.buttons}`}>30d</button>
            <button className={`${styles.buttons}`}>All</button>
          </div>
          <div className={` d-lg-none d-flex align-items-center  px-1 py-1`}>
            <div onClick={()=>setTime(!time)}>
            <button className={` border-0 bg-transparent me-2`}>{fakeData.timeData[0].time}</button>
            <BsChevronDown></BsChevronDown>
            </div>
          </div>
        </div>
          {
                time && (
                  <div className={`${styles.drawer} d-flex d-lg-none left-0 top-0`}>
              <p className={`${styles.buttons} d-flex justify-content-between w-100`}>Select <span onClick={() => setTime(false)}><AiOutlineClose /></span></p>
            {fakeData.timeData.map((time) => (
                <button
                key={time.id}
                className={`${styles.categorieButton}`}
                >
                  {time.time}
                </button>
              ))}
            </div>
                )
              }
      </div>
    </div>
  );
}
