import React, { useState } from "react";

function Square({ value, onSquareClick, style}) {
    return <button className={style} onClick={onSquareClick}>{value}</button>;
  }

export default Square;