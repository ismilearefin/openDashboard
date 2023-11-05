"use client";
import { BsChevronDown, BsChevronExpand } from "react-icons/bs";
import { useState } from "react";
import TableRow from "../TableRow/TableRow";
import styles from "../Table/Table.module.css";

export default function Table() {
  const [ClickVolume, SetClickVolume] = useState(false);
  const [Change, SetChange] = useState(false);
  const [floor, SetFloorClick] = useState(false);
  const [sale, SetSalesClick] = useState(false);
  const [Unique, SetUnique] = useState(false);
  const [Items, SetItems] = useState(false);

  return (
    <div className={styles.mainTable}>
      <div className={`${styles.tableHead} row p-2`}>
        <div className="d-flex col-8 col-md-5 col-lg-3">
          <p className="me-4">#</p>
          <p>Collection</p>
        </div>
        <div
          className="col-3 col-lg-2 col-xl-1 text-end"
          onClick={() => SetClickVolume(!ClickVolume)}
        >
          <p>
            Volume{" "}
            <span className={styles.cursorPointer}>
              {ClickVolume ? <BsChevronDown /> : <BsChevronExpand />}
            </span>
          </p>
        </div>
        <p
          className="d-none d-lg-block col-lg-2 col-xl-1 text-end"
          onClick={() => SetChange(!Change)}
        >
          Change{" "}
          <span className={styles.cursorPointer}>
            {Change ? <BsChevronDown /> : <BsChevronExpand />}
          </span>
        </p>
        <p className="d-none d-lg-block col-lg-2 col-xl-1 text-end"
        onClick={()=> SetFloorClick(!floor)}
        >
          Floor price{" "}
          <span className={styles.cursorPointer}>
            {floor ? <BsChevronDown /> : <BsChevronExpand />}
          </span>
        </p>
        <p className="d-none d-lg-block col-lg-2 col-xl-1 text-end"
        onClick={()=>SetSalesClick(!sale)}
        >
          Sales{" "} 
          <span className={styles.cursorPointer}>
            {sale ? <BsChevronDown /> : <BsChevronExpand />}
          </span>
        </p>
        <p className="d-none d-xxl-block col-xxl-1 text-end" onClick={()=> SetUnique(!Unique)}>
          % Unique owners{" "}
          <span className={styles.cursorPointer}>
            {Unique ? <BsChevronDown /> : <BsChevronExpand />}
          </span>
        </p>
        <p className="d-none d-xxl-block col-xxl-1 text-end" onClick={()=> SetItems(!Items)}>
          Items listed{" "}
          <span className={styles.cursorPointer}>
            {Items ? <BsChevronDown /> : <BsChevronExpand />}
          </span>
        </p>
        <p className="d-none d-sm-block col-sm-1 text-center"></p>
      </div>

      <TableRow></TableRow>
    </div>
  );
}
