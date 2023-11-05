'use client'
import Image from "next/image";
import styles from '../TableRow/TableRow.module.css';
import { BsStar, BsStarFill } from "react-icons/bs";
import { useState } from "react";



export default function TableRow() {
  const [clicked, setOnClick] = useState(false);
  return (
    <a className={`${styles.tableData} row text-decoration-none p-2 `}>
    <div className="d-flex align-items-center col-8 col-md-5 col-lg-3">
      <p className="me-4 mt-3 ">1</p>
      <div className="d-flex align-items-center ">
        <Image className={`${styles.tableDataImage}`} src={'https://media.istockphoto.com/id/1367564577/photo/nft-token-and-money-franklin-on-100-dollar-bill-with-cyber-glasses-for-crypto-art.jpg?s=612x612&w=0&k=20&c=fLK5mrfS3K9UOJnSqzBzTPzh_gbzjdqnORhWRFkZKAM='} alt="image" width={64} height={64}/>
        <div className="ms-4 mt-2">
        <p className="">Mr Beast Test Collection</p>
        <p className="d-block d-lg-none  text-start">Floor price: -</p>
        </div>
      </div>
    </div>
    <div className="col-3 col-lg-2 col-xl-1 text-end">
      <p>--</p>
    </div>
  <p className="d-none d-lg-block col-lg-2 col-xl-1 text-end">-</p>
  <p className="d-none d-lg-block col-lg-2 col-xl-1 text-end">-</p>
  <p className="d-none d-lg-block col-lg-2 col-xl-1 text-end">0</p>
  <div className="d-none d-xxl-block col-xxl-1 text-end ">
    <p>20%</p>
    <p>1 owners</p>
  </div>
  <div className="d-none d-xxl-block col-xxl-1 text-end">
    <p>0%</p>
    <p>0 of 5</p>
  </div>
  <p className=" d-none d-sm-block col-sm-1 text-center" onClick={() => setOnClick(!clicked)}>
    {
      !clicked ? <BsStar></BsStar> : <BsStarFill/>
    }
   
  </p>
</a>
  )
}
