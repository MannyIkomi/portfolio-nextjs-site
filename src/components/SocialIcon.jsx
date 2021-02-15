import React from "react"
import {
  colors,
  typesetHover,
  TOUCH_TARGET,
  styleTransition,
  onMedia,
  onHover,
} from "../styles"
export const SocialIcon = ({
  platform,
  href,
  alt,
  styles,
  color,
  ...props
}) => {
  const matchIconWith = platform => {
    switch (platform) {
      case "Twitter":
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M29 8.36308C28.039 8.76923 27.013 9.04 25.9351 9.16308C27.039 8.53538 27.8831 7.55077 28.2727 6.36923C27.2468 6.94769 26.1039 7.36615 24.8831 7.6C23.9091 6.61538 22.5325 6 20.987 6C18.039 6 15.6623 8.26462 15.6623 11.0462C15.6623 11.44 15.7143 11.8215 15.8052 12.2031C11.3766 11.9938 7.45455 9.98769 4.81818 6.92308C4.36364 7.67385 4.09091 8.53538 4.09091 9.45846C4.09091 11.2062 5.02597 12.7569 6.46753 13.6677C5.5974 13.6431 4.76623 13.4092 4.05195 13.04C4.05195 13.0646 4.05195 13.0769 4.05195 13.1015C4.05195 15.5508 5.88312 17.5938 8.32468 18.0492C7.88312 18.16 7.4026 18.2215 6.92208 18.2215C6.58442 18.2215 6.24675 18.1846 5.92208 18.1354C6.5974 20.1415 8.57143 21.6062 10.8961 21.6431C9.07792 22.9969 6.77922 23.8092 4.27273 23.8092C3.84416 23.8092 3.41558 23.7846 3 23.7354C5.36364 25.1631 8.15584 26 11.1688 26C20.974 26 26.3247 18.3077 26.3247 11.6369C26.3247 11.4154 26.3247 11.2062 26.3117 10.9846C27.3766 10.2708 28.2857 9.38462 29 8.36308Z" />
          </svg>
        )
      case "Instagram":
        return (
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5 3.78949C13.0801 3.78949 12.6513 3.80354 11.3082 3.86297C9.96796 3.92225 9.05258 4.12868 8.25163 4.43055C7.42359 4.74255 6.72137 5.16007 6.02128 5.83889C5.32125 6.51775 4.89068 7.1987 4.56893 8.00165C4.25762 8.77833 4.04475 9.66596 3.98362 10.9656C3.92234 12.268 3.90784 12.6838 3.90784 16C3.90784 19.3162 3.92234 19.732 3.98362 21.0344C4.04475 22.3341 4.25762 23.2217 4.56893 23.9984C4.89068 24.8013 5.32125 25.4823 6.02128 26.1611C6.72137 26.84 7.42359 27.2575 8.25163 27.5695C9.05258 27.8714 9.96796 28.0778 11.3082 28.1371C12.6513 28.1965 13.0801 28.2105 16.5 28.2105C19.9198 28.2105 20.3486 28.1965 21.6916 28.1371C23.0319 28.0778 23.9473 27.8714 24.7482 27.5695C25.5763 27.2575 26.2785 26.84 26.9786 26.1611C27.6786 25.4823 28.1092 24.8013 28.431 23.9984C28.7422 23.2217 28.9551 22.3341 29.0163 21.0344C29.0776 19.732 29.092 19.3162 29.092 16C29.092 12.6838 29.0776 12.268 29.0163 10.9656C28.9551 9.66596 28.7422 8.77833 28.431 8.00165C28.1092 7.1987 27.6786 6.51775 26.9786 5.83889C26.2785 5.16007 25.5763 4.74255 24.7482 4.43055C23.9473 4.12868 23.0319 3.92225 21.6916 3.86297C20.3486 3.80354 19.9198 3.78949 16.5 3.78949ZM16.5 5.98958C19.8622 5.98958 20.2604 6.00204 21.5882 6.06078C22.816 6.11507 23.4827 6.31399 23.9264 6.48121C24.5142 6.70271 24.9336 6.96731 25.3743 7.39462C25.8149 7.82188 26.0878 8.22864 26.3162 8.7986C26.4886 9.22886 26.6938 9.8754 26.7498 11.0659C26.8103 12.3535 26.8232 12.7397 26.8232 16C26.8232 19.2604 26.8103 19.6466 26.7498 20.9341C26.6938 22.1246 26.4886 22.7712 26.3162 23.2014C26.0878 23.7714 25.8149 24.1781 25.3743 24.6054C24.9336 25.0327 24.5142 25.2973 23.9264 25.5188C23.4827 25.686 22.816 25.885 21.5882 25.9392C20.2606 25.998 19.8624 26.0105 16.5 26.0105C13.1375 26.0105 12.7393 25.998 11.4117 25.9392C10.1839 25.885 9.51719 25.686 9.07348 25.5188C8.48571 25.2973 8.06624 25.0327 7.62562 24.6054C7.18501 24.1781 6.9121 23.7714 6.68367 23.2014C6.51122 22.7712 6.30609 22.1246 6.25011 20.9341C6.18953 19.6466 6.17668 19.2604 6.17668 16C6.17668 12.7397 6.18953 12.3535 6.25011 11.0659C6.30609 9.8754 6.51122 9.22886 6.68367 8.7986C6.9121 8.22864 7.18496 7.82188 7.62562 7.39462C8.06624 6.96731 8.48571 6.70271 9.07348 6.48121C9.51719 6.31399 10.1839 6.11507 11.4117 6.06078C12.7394 6.00204 13.1377 5.98958 16.5 5.98958ZM16.5 9.72975C12.9287 9.72975 10.0337 12.537 10.0337 16C10.0337 19.463 12.9287 22.2703 16.5 22.2703C20.0712 22.2703 22.9662 19.463 22.9662 16C22.9662 12.537 20.0712 9.72975 16.5 9.72975ZM16.5 20.0702C14.1818 20.0702 12.3026 18.2479 12.3026 16C12.3026 13.7521 14.1818 11.9298 16.5 11.9298C18.8181 11.9298 20.6973 13.7521 20.6973 16C20.6973 18.2479 18.8181 20.0702 16.5 20.0702ZM24.7327 9.48202C24.7327 10.2913 24.0562 10.9473 23.2216 10.9473C22.3871 10.9473 21.7106 10.2913 21.7106 9.48202C21.7106 8.67277 22.3871 8.01673 23.2216 8.01673C24.0562 8.01673 24.7327 8.67277 24.7327 9.48202Z"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="25.1842"
                  height="24.4211"
                  transform="translate(3.90784 3.78949)"
                />
              </clipPath>
            </defs>
          </svg>
        )
      case "LinkedIn":
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.37214 28H4.39643V11.9764H9.37214V28ZM6.88161 9.79066C5.29054 9.79066 4 8.47278 4 6.88167C4 6.1174 4.3036 5.38444 4.844 4.84402C5.38441 4.3036 6.11736 4 6.88161 4C7.64586 4 8.3788 4.3036 8.91921 4.84402C9.45962 5.38444 9.76321 6.1174 9.76321 6.88167C9.76321 8.47278 8.47214 9.79066 6.88161 9.79066ZM27.9946 28H23.0296V20.1998C23.0296 18.3409 22.9921 15.9569 20.4427 15.9569C17.8557 15.9569 17.4593 17.9766 17.4593 20.0659V28H12.4889V11.9764H17.2611V14.1622H17.3307C17.995 12.9032 19.6177 11.5746 22.0386 11.5746C27.0743 11.5746 28 14.8908 28 19.198V28H27.9946Z" />
          </svg>
        )
      default:
        return new Error(
          `"${platform}" SVG Icon does not exist, add new switch case using inline <svg>`
        ).toString()
    }
  }

  return (
    <a
      href={href}
      title={alt}
      css={{
        display: "block",
        width: "100%",
        height: "auto",

        minWidth: TOUCH_TARGET,

        ...onHover({
          ...styleTransition(),
          ...typesetHover(),
          svg: {
            ...styleTransition(),

            fill: colors.TURQUOISE,
          },
        }),
      }}
      {...props}
    >
      {matchIconWith(platform)}
    </a>
  )
}
