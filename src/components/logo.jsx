/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import PropTypes from "prop-types"

import { colors } from "../styles"

export const Logo = ({ lockup, color, fill, stroke, ...props }) => {
  const getLockup = lockup => {
    switch (lockup) {
      case "type":
        return (
          <svg
            width="auto"
            height="auto"
            viewBox="0 0 136.32 26.804"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>logo-type-long</title>
            <g data-name="Layer 2">
              <g data-name="Layer 1">
                <path d="M0,8.76465A26.766,26.766,0,0,0,4.21289,8.0293h.11328a4.72884,4.72884,0,0,1,.36719,1.89453v.22656A5.47248,5.47248,0,0,1,8.96289,7.917a3.41625,3.41625,0,0,1,3.50586,2.46c1.52734-1.7539,2.7998-2.46,4.43945-2.46A3.75938,3.75938,0,0,1,20.13086,9.5c.39648.73535.45312,1.07422.45312,2.96875v3.59082c.05664,2.5166.19727,2.71484,1.668,2.77148h.16993v.93262H16.11621v-.93262h.11328c1.38574-.085,1.49805-.2832,1.49805-2.77148V12.04492c0-1.89453-.53711-2.6582-1.86524-2.6582-1.10351,0-2.03613.65039-3.25195,2.206v4.4668c0,2.43164.1416,2.68652,1.44238,2.77148h.084v.93262H8.11426v-.93262h.1416c1.38574-.085,1.499-.2832,1.499-2.77148v-3.5625a4.80786,4.80786,0,0,0-.31152-2.29,1.87907,1.87907,0,0,0-1.583-.84863,3.36438,3.36438,0,0,0-2.48828,1.27246c-.62207.707-.62207.707-.707.792v4.63672c0,2.43164.1416,2.68652,1.4707,2.77148h.11231v.93262H.02832v-.93262H.1416c1.49805-.02832,1.69629-.33984,1.69629-2.77148V12.44043C1.78125,10.03711,1.583,9.72656.1416,9.69824H0Z" />
                <path d="m36.447 17.53a2.5378 2.5378 0 0 1-2.7715 2.5166 2.4402 2.4402 0 0 1-2.5723-1.8096 8.1262 8.1262 0 0 1-4.6094 1.8096c-1.7246 0-2.9688-1.0469-2.9688-2.4883 0-1.1035 0.53711-1.8945 1.8096-2.7148a33.679 33.679 0 0 1 4.043-2.0078l1.6406-0.64942v-0.73535a3.31 3.31 0 0 0-0.25488-1.668 2.3672 2.3672 0 0 0-2.1484-0.93359 2.9142 2.9142 0 0 0-1.7246 0.48047 1.8221 1.8221 0 0 0-0.4248 1.0469c-0.16894 0.876-0.62207 1.3281-1.3848 1.3281a1.0443 1.0443 0 0 1-1.1318-1.0176 2.5933 2.5933 0 0 1 1.5556-1.9795 7.84 7.84 0 0 1 3.7324-0.791 5.0972 5.0972 0 0 1 3.8447 1.2158c0.62207 0.62207 0.76367 1.1309 0.76367 2.6572v4.835c0 1.6123 0.19825 2.0644 0.84864 2.0644 0.50878 0 0.876-0.4248 1.0176-1.1592zm-6.1074-4.1006c-2.7988 1.1318-3.8457 2.0644-3.8457 3.5068a1.6425 1.6425 0 0 0 1.584 1.7529 5.1624 5.1624 0 0 0 2.9404-1.4707v-4.0713z" />
                <path d="m37.233 8.793a23.796 23.796 0 0 0 4.2129-0.76367h0.11328a4.8223 4.8223 0 0 1 0.36719 1.8945v0.25488a5.5787 5.5787 0 0 1 4.4678-2.2617 3.6082 3.6082 0 0 1 3.1377 1.583 4.9816 4.9816 0 0 1 0.48144 2.8555v3.7041c0.05567 2.5166 0.19727 2.7148 1.668 2.7715h0.16992v0.93262h-6.4756v-0.93262h0.22656c1.4141-0.085 1.5547-0.31152 1.5547-2.7715v-4.6367a1.9109 1.9109 0 0 0-1.9785-2.1211c-1.1875 0-2.2344 0.707-3.2803 2.1777v4.5801c0 2.46 0.1416 2.7148 1.583 2.7715h0.1416v0.93262h-6.418v-0.93262h0.1416c1.498-0.02832 1.6963-0.33984 1.7246-2.7715v-3.6191c-0.05664-2.4033-0.25488-2.6856-1.7246-2.7422h-0.11326z" />
                <path d="m52.832 8.793a23.796 23.796 0 0 0 4.2129-0.76367h0.11328a4.8223 4.8223 0 0 1 0.36719 1.8945v0.25488a5.5787 5.5787 0 0 1 4.4678-2.2617 3.6082 3.6082 0 0 1 3.1377 1.583 4.9816 4.9816 0 0 1 0.48144 2.8555v3.7041c0.05567 2.5166 0.19727 2.7148 1.668 2.7715h0.16895v0.93262h-6.4746v-0.93262h0.22656c1.4141-0.085 1.5547-0.31152 1.5547-2.7715v-4.6367a1.9109 1.9109 0 0 0-1.9785-2.1211c-1.1875 0-2.2344 0.707-3.2803 2.1777v4.5801c0 2.46 0.1416 2.7148 1.583 2.7715h0.1416v0.93262h-6.418v-0.93262h0.1416c1.498-0.02832 1.6963-0.33984 1.7246-2.7715v-3.6191c-0.05664-2.4033-0.25488-2.6856-1.7246-2.7422h-0.11327z" />
                <path d="M72.81055,8.36914v.9043l-.169.02832c-.65039.02832-1.01855.2832-1.01855.67871,0,.22656.02832.33984.39648,1.13086l2.91211,5.88183,2.34668-5.51367c.02832-.05664.19824-.4248.36719-.82031a1.4806,1.4806,0,0,0,.19824-.67871c0-.45215-.36719-.67871-1.15918-.707h-.25488v-.9043h4.15625v.9043l-.14063.02832c-1.07519.16992-1.4707.65039-2.375,2.7998L73.09375,23.55273c-1.01758,2.40332-1.80957,3.251-2.91211,3.251a1.20674,1.20674,0,0,1-1.30078-1.1875c0-.76269.48047-1.27246,1.583-1.668,1.44238-.50879,1.78125-.76367,2.20605-1.78125l.81934-2.06445L68.99414,11.168c-.82031-1.61133-1.04687-1.83789-1.92285-1.86621l-.22656-.02832v-.9043Z" />
                <path d="m86.732 17.021c-1.0186 1.9785-2.3467 3.1094-3.6474 3.1094a1.6274 1.6274 0 0 1-1.753-1.3564 4.3193 4.3193 0 0 1 0.31055-1.3574l2.3184-7.0967a4.8173 4.8173 0 0 0 0.22656-1.0752c0-0.31055-0.11328-0.48047-0.36719-0.48047-0.59375 0-1.0469 0.62207-1.7812 2.4033l-0.792-0.19727c1.1875-2.46 2.1768-3.3936 3.5908-3.3936 0.9043 0 1.6113 0.53711 1.6113 1.2158a4.7869 4.7869 0 0 1-0.28223 1.3574l-2.4316 7.4648a1.9799 1.9799 0 0 0-0.16992 0.791c0 0.39648 0.16992 0.62207 0.45215 0.62207 0.65039 0 1.1309-0.56543 2.0361-2.375zm1.498-13.827a1.4834 1.4834 0 0 1-1.4697 1.3857 1.4638 1.4638 0 0 1-1.4707-1.3857 1.475 1.475 0 0 1 2.9404 0z" />
                <path d="m91.003 0.45215a12.65 12.65 0 0 0 4.2129-0.45215l0.19824 0.11328-4.1562 13.147c0.93262-1.1309 1.1592-1.4141 1.8379-2.1494 2.2617-2.6289 3.8447-3.7314 5.2871-3.7314 0.65039 0 1.2158 0.42383 1.2158 0.876a1.0861 1.0861 0 0 1-1.1025 0.90527 3.8104 3.8104 0 0 1-0.82031-0.1416 3.1537 3.1537 0 0 0-0.76367-0.1416c-0.93262 0-2.3184 1.2441-4.1279 3.7041 1.8379 0.19824 2.4033 1.0459 2.5449 3.8457 0.085 1.6396 0.11328 1.7812 0.33887 2.1484a0.5757 0.5757 0 0 0 0.53808 0.31055c0.7627 0 1.3848-0.791 1.8369-2.3184l0.707 0.2832c-0.67871 2.0635-1.9502 3.2793-3.4209 3.2793-1.1309 0-1.8945-0.9043-1.8945-2.3184 0-0.19727 0.02832-0.9043 0.085-1.668l0.02832-1.3574c0-1.1592-0.39551-1.6963-1.2158-1.6963a1.9502 1.9502 0 0 0-1.1592 0.42383l-1.9795 6.249h-2.0635l5.4287-17.417a3.3222 3.3222 0 0 0 0.11231-0.62207c0-0.50879-0.33887-0.67871-1.3564-0.67871h-0.53711z" />
                <path d="m109.2 11.479c0 4.4668-3.0254 8.6514-6.2207 8.6514-1.8662 0-3.0537-1.668-3.0537-4.2412 0-4.2969 2.9971-8.3408 6.1641-8.3408 1.8379 0 3.1104 1.6123 3.1104 3.9307zm-6.0791 0.19727a17.454 17.454 0 0 0-1.3857 5.7402c0 1.3008 0.42383 1.9795 1.3008 1.9795 1.1309 0 2.0928-1.1318 3.1387-3.7324a18.797 18.797 0 0 0 1.2442-5.6553c0-1.0459-0.48145-1.668-1.3008-1.668-1.1592 3e-5 -2.0362 0.96097-2.9971 3.336z" />
                <path d="m110.4 11.111c1.1309-2.4033 2.2334-3.5342 3.4775-3.5342a1.3716 1.3716 0 0 1 1.4424 1.5557 6.5657 6.5657 0 0 1-0.31054 1.8096c1.498-2.4316 2.6289-3.3652 4.0146-3.3652a1.9079 1.9079 0 0 1 2.0635 2.0361c0 0.25391 0 0.25391-0.05566 1.0459 1.498-2.1768 2.7139-3.082 4.1562-3.082a2.0651 2.0651 0 0 1 2.2617 1.7529 5.7671 5.7671 0 0 1-0.31152 1.5273l-2.1484 6.7578a2.1422 2.1422 0 0 0-0.16992 0.876c0 0.48047 0.16992 0.76367 0.50879 0.76367 0.67871 0 1.5557-1.0176 2.3193-2.6865l0.67773 0.45312c-1.0742 2.0352-2.375 3.1094-3.7598 3.1094a1.7191 1.7191 0 0 1-1.8096-1.6396 4.5441 4.5441 0 0 1 0.36718-1.6113l2.0078-6.3906a3.4514 3.4514 0 0 0 0.22558-1.1592c0-0.53711-0.2539-0.81934-0.76269-0.81934-1.6123 0-3.3369 2.3184-4.5527 6.1914l-1.6113 5.0615h-2.0644l2.8564-9.3584a3.3333 3.3333 0 0 0 0.16894-0.99023c0-0.56543-0.28223-0.9043-0.791-0.9043-1.5274 0-3.1104 2.2334-4.3545 6.1348l-1.6123 5.1182h-2.1201l2.5166-8.002a8.3774 8.3774 0 0 0 0.59375-2.3184c0-0.39551-0.16992-0.62207-0.45215-0.62207-0.53808 0-1.2158 0.792-2.0928 2.46z" />
                <path d="m134.82 17.021c-1.0186 1.9785-2.3467 3.1094-3.6475 3.1094a1.6274 1.6274 0 0 1-1.7529-1.3564 4.3195 4.3195 0 0 1 0.31054-1.3574l2.3184-7.0967a4.8173 4.8173 0 0 0 0.22656-1.0752c0-0.31055-0.11328-0.48047-0.36718-0.48047-0.59375 0-1.0469 0.62207-1.7812 2.4033l-0.792-0.19727c1.1875-2.46 2.1768-3.3936 3.5908-3.3936 0.9043 0 1.6113 0.53711 1.6113 1.2158a4.7871 4.7871 0 0 1-0.28222 1.3574l-2.4316 7.4648a1.9797 1.9797 0 0 0-0.16993 0.791c0 0.39648 0.16993 0.62207 0.45215 0.62207 0.65039 0 1.1309-0.56543 2.0361-2.375zm1.498-13.827a1.4833 1.4833 0 0 1-1.4697 1.3857 1.4638 1.4638 0 0 1-1.4706-1.3857 1.475 1.475 0 0 1 2.9404 0z" />
              </g>
            </g>
          </svg>
        )
      case "master":
      default:
        return (
          <svg
            width="177"
            height="125"
            viewBox="0 0 177 125"
            // fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.3988 82.1C30.7488 82.1 29.0488 83.5 27.5988 85.6C26.7988 82.9 24.8488 82.1 22.8488 82.1C20.1988 82.1 18.5488 83.7 17.1488 85.75L16.8488 82.65H13.5988V109H17.4488V88.55C18.8988 86.3 20.3988 85.4 22.0488 85.4C23.9488 85.4 24.0988 86.75 24.0988 90.1V109H27.9988V88.55C29.4488 86.3 30.9988 85.4 32.5988 85.4C34.4988 85.4 34.6488 86.75 34.6488 90.1V109H38.4988V89.4C38.4988 83.35 35.9488 82.1 33.3988 82.1ZM67.4293 103.25V90.6C67.4293 85.4 64.1293 82.1 57.5793 82.1C54.9793 82.1 52.1793 82.6 48.9293 83.75L50.0793 86.95C52.7793 86 55.1793 85.6 56.9293 85.6C60.8293 85.6 63.1793 87 63.1793 90.85V93H59.2793C51.3293 93 46.9793 96.05 46.9793 101.45C46.9793 106.35 50.1793 109.55 55.4793 109.55C58.8793 109.55 61.8293 108.3 63.7293 105.85C64.4293 108.25 66.2793 109.3 68.5293 109.6L69.5793 106.6C68.0793 106.15 67.4293 105.35 67.4293 103.25ZM56.5293 106.4C53.0793 106.4 51.4793 104.7 51.4793 101.4C51.4793 98 53.5793 95.9 59.3793 95.9H63.1793V102.65C61.6293 105 59.1293 106.4 56.5293 106.4ZM81.0098 109H85.2098V89.85C86.6098 87.75 89.2598 85.45 92.3598 85.45C96.3098 85.45 96.8598 87.6 96.8598 93V109H101.06V89.9C101.06 85 98.8098 82.1 93.6598 82.1C90.5598 82.1 87.0598 83.65 84.9598 86.35L84.6098 82.65H81.0098V109ZM113.49 109H117.69V89.85C119.09 87.75 121.74 85.45 124.84 85.45C128.79 85.45 129.34 87.6 129.34 93V109H133.54V89.9C133.54 85 131.29 82.1 126.14 82.1C123.04 82.1 119.54 83.65 117.44 86.35L117.09 82.65H113.49V109ZM167.871 82.65H163.521L156.071 105.8L148.521 82.65H144.071L153.221 109H154.621C153.271 113.05 151.671 115.3 146.271 116.25L146.871 119.6C153.871 118.85 156.821 114.55 158.671 109.15L167.871 82.65Z"
              fill={fill || "#001C3D"}
            />
            <path
              d="M26.0488 48.65C24.2488 48.65 23.0488 47.4 23.0488 45.7C23.0488 44 24.2488 42.75 26.0488 42.75C27.8988 42.75 29.1488 44 29.1488 45.7C29.1488 47.4 27.8988 48.65 26.0488 48.65ZM29.3988 36.35H17.3488V33H25.1988V13.35H17.0988V10H36.7988V13.35H29.3988V36.35ZM53.0293 47.45L48.8293 46.95V10H53.0293V47.45ZM70.5793 36.35H65.1793L53.4793 24.4L66.4293 10H71.9793L58.7793 24.45L70.5793 36.35ZM91.0598 36.9C83.6598 36.9 79.6598 31.25 79.6598 23.15C79.6598 14.85 83.6098 9.45 91.0098 9.45C98.3598 9.45 102.36 15.1 102.36 23.2C102.36 31.5 98.4598 36.9 91.0598 36.9ZM91.0598 33.45C95.5598 33.45 97.8098 30.15 97.8098 23.2C97.8098 16.15 95.5598 12.9 91.0098 12.9C86.4598 12.9 84.2098 16.15 84.2098 23.15C84.2098 30.15 86.5098 33.45 91.0598 33.45ZM130.84 36.9C128.19 36.9 126.49 35.5 125.04 33.4C124.24 36.1 122.29 36.9 120.29 36.9C117.64 36.9 115.99 35.3 114.59 33.25L114.29 36.35H111.04V10H114.89V30.45C116.34 32.7 117.84 33.6 119.49 33.6C121.39 33.6 121.54 32.25 121.54 28.9V10H125.44V30.45C126.89 32.7 128.44 33.6 130.04 33.6C131.94 33.6 132.09 32.25 132.09 28.9V10H135.94V29.6C135.94 35.65 133.39 36.9 130.84 36.9ZM155.971 48.65C154.171 48.65 152.971 47.4 152.971 45.7C152.971 44 154.171 42.75 155.971 42.75C157.821 42.75 159.071 44 159.071 45.7C159.071 47.4 157.821 48.65 155.971 48.65ZM159.321 36.35H147.271V33H155.121V13.35H147.021V10H166.721V13.35H159.321V36.35Z"
              fill={fill || "#001C3D"}
            />
            <line
              x1="1.5"
              y1="-6.55671e-08"
              x2="1.50001"
              y2="125"
              stroke={stroke || "#FFD44A"}
              strokeWidth="3"
            />
            <line
              x1="177"
              y1="62.5"
              y2="62.5"
              stroke={stroke || "#FFD44A"}
              strokeWidth="3"
            />
          </svg>
        )
    }
  }

  return (
    <a
      href={`/`}
      css={{
        display: "block",
        // overflow: "hidden",
        // width: "100%",
        // height: "100%",

        ":hover": {
          svg: { fill: colors.orange },
        },

        svg: { width: "100%", height: "auto" },
      }}
      {...props}
    >
      {getLockup(lockup)}
    </a>
  )
}
Logo.propTypes = {
  lockup: PropTypes.oneOf(["master", "type"]),
  styles: PropTypes.any,
}

export const LogoType = props => <Logo lockup={`type`} {...props} />
export const LogoMaster = props => <Logo lockup={`master`} {...props} />

export default Logo
