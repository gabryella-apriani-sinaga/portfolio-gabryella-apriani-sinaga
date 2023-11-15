import Link from "next/link";
import React from "react";

const Button = ({ type, variant, label, href, border }) => {
  return (
    <Link href={href}>
      <button
        type={type}
        className={`${variant} text-white p-2 rounded font-semibold`}
      >
        {label}
      </button>
    </Link>
  );
};

export default Button;
