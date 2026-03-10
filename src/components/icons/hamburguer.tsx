const HamburguerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="25"
    fill="none"
    viewBox="0 0 35 25"
    {...props}
  >
    <g clipPath="url(#clip0_55_367)">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M1.346 0C.603 0 0 .622 0 1.389s.603 1.389 1.346 1.389h32.308c.743 0 1.346-.622 1.346-1.39C35 .623 34.397 0 33.654 0zM0 12.5c0-.767.603-1.389 1.346-1.389h32.308c.743 0 1.346.622 1.346 1.389s-.603 1.389-1.346 1.389H1.346C.603 13.889 0 13.267 0 12.5m0 11.111c0-.767.603-1.389 1.346-1.389h32.308c.743 0 1.346.622 1.346 1.39 0 .766-.603 1.388-1.346 1.388H1.346C.603 25 0 24.378 0 23.611"
        clipRule="evenodd"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_55_367">
        <path fill="#fff" d="M0 0h35v25H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default HamburguerIcon;