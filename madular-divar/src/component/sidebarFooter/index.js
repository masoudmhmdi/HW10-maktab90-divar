import El from "../library";
import button from "../button";
import { variant } from "../button";

const sidebarFooter = () => {
  return El({
    element: "div",
    className: "w-full",
    child: [
      El({
        element: "div",
        className: "py-3 flex gap-2",
        child: [
          button(
            ["درباره دیوار"],
            `${variant.footerBtn} text-xs hover:text-black`
          ),
          button(
            ["درباره دیوار"],
            `${variant.footerBtn} text-xs hover:text-black`
          ),
          button(
            ["درباره دیوار"],
            `${variant.footerBtn} text-xs hover:text-black`
          ),
        ],
      }),
      El({
        element: "div",
        className: "py-3 flex gap-2",
        child: [
          button(
            ["کسب و کار ها"],
            `${variant.footerBtn} text-xs hover:text-black`
          ),
          button(
            ["پشتیبانی و قوانین"],
            `${variant.footerBtn} text-xs hover:text-black`
          ),
        ],
      }),
      El({
        element: "div",
        className: "flex justify-center my-4 gap-6 items-center text-black--500  ",
        child: [
          El({
            element: "ion-icon",
            name: "logo-instagram",
            className: "h-5 w-5",
          }),
          El({
            element: "ion-icon",
            name: "logo-twitter",
            className: "h-5 w-5",
          }),
          El({
            element: "ion-icon",
            name: "logo-linkedin",
            className: "h-5 w-5",
          }),
          El({
            element: "ion-icon",
            name: "logo-facebook",
            className: "h-5 w-5",
          }),
        ],
      }),
      El({
        element:"div",
        className:"w-full flex pt-5 justify-around itmes-center ",
        child:[El({
          element:"img",
          src:"https://www.p30web.org/wp-content/uploads/enamad/enamad-3.png",
          className:"w-[84px] h-[91px]"
        }),El({
          element:"img",
          src:"https://ecunion.ir/logonama.png",
          className:"w-[84px] h-[91px]"
        }),El({
          element:"img",
          src:"data:image/jpeg;base64,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",
          className:"w-[84px] h-[91px]"
        })]
      })
    ],
  });
};

export default sidebarFooter;


{/* <img src="" class="enamad__image" id="Ixo2TT4kdIkKs7d65xyM" decoding="async" alt="نشان نماد تجارت الکترونیکی" referrerpolicy="origin"></img> */}