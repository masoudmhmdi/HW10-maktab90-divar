import { layout } from "../layout/index";
import input from "../input";
import El from "../library";
import button from "../button";
import { variant } from "../button";
import img from "../imgTag";
import { btnDB } from "../../db";

console.log(variant.inputBtn);
const header = () => {
  let btnArr = [];
  btnDB.forEach((item) =>
    btnArr.push(
      button(
        [
          El({
            element: "span",
            child: item,
            className: "text-[14px]",
          }),
        ],
        `${variant.filterBtn}`
      )
    )
  );
  return layout(
    [
      button(
        ["ثبت آگهی"],
        `bg-[#A62626] text-white hover:bg-[#A64640] text-bold text-[14px] hidden gap-2 lg:inline w-20 h-10 rounded text-sm  flex gap-2 `
      ),
      button(["پشتیبانی"], `${variant.desktopHeaderBtn} text-xs`),
      button(
        [
          El({
            element: "span",
            className: "",
            child: "چت",
          }),
          El({
            element: "ion-icon",
            name: "chatbubble-outline",
            className: "h-4 w-5",
          }),
        ],
        `${variant.desktopHeaderBtn} text-xs`
      ),
      button(
        [
          El({
            element: "span",
            className: "",
            child: "دیوار من",
          }),
          El({
            element: "ion-icon",
            name: "person-outline",
            className: "h-4 w-5",
          }),
        ],
        `${variant.desktopHeaderBtn} text-xs`
      ),
      El({
        element: "div",
        className:
          "w-[90%] lg:w-1/3 outline-0 h-10 rounded mx-auto flex  radius bg-gray-100",
        child: [
          button(
            [
              El({
                element: "ion-icon",
                name: "location-outline",
                className: "w-5 h-5",
              }),
              El({
                element: "spand",
                child: "تهران",
                className: "align-senter pb-1",
              }),
            ],
            `${variant.inputBtn} lg:hidden`
          ),
          El({
            element: "div",
            className:
              "w-[3px] h-4/5 my-auto ml-1 rounded-xl bg-gray-300 lg:hidden",
          }),
          input(),
          button(
            [
              El({
                element: "ion-icon",
                name: "search-outline",
                className: "w-5 h-5",
              }),
            ],
            `${variant.inputBtn} justify-center w-14`
          ),
        ],
      }),
      button(
        [
          El({
            element: "ion-icon",
            name: "chevron-down-outline",
            className: "w-5 h-5",
          }),
          El({
            element: "spand",
            child: "دسته ها",
            className: "align-senter pb-1 w-[60px]",
          }),
        ],
        `${variant.desktopHeaderBtn} text-md`
      ),

      button(
        [
          El({
            element: "spand",
            child: "تهران",
            className: "align-senter pb-1",
          }),
          El({
            element: "ion-icon",
            name: "location-outline",
            className: "w-5 h-5",
          }),
        ],
        `${variant.desktopHeaderBtn} text-md`
      ),
      El({
        element: "div",
        className: "w-[1px] h-[20px] bg-gray-300 hidden lg:inline",
      }),
      button(
        [
          El({
            element: "img",
            src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E2MjYyNiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4zODYgMTQuNjE3SDguMjhhLjcxMi43MTIgMCAwIDEtLjU5NS0uODA2Yy40NzMtMy4xMTcuNjMtOC4wOTIuNjMtOC4xMjcuMDM1LS4zODYuMzMzLS43LjczNi0uNjgzYS43MTUuNzE1IDAgMCAxIC42ODMuNzE4YzAgLjIxLS4xNzUgNS4wOTctLjY0OCA4LjMwM2EuNy43IDAgMCAxLS43LjU5NVptMTAuMDM3IDEuMjk2YS42OTMuNjkzIDAgMCAxLS42NjYtLjQ5LjY4OC42ODggMCAwIDEgLjQ1NS0uODc2YzMuMzEtMS4wNSAzLjM2My0xLjg1NyAzLjM4MS0yLjI5NS4wMzUtLjY4My0uNDktMS41NTgtLjctMS44NTZhLjcwMS43MDEgMCAxIDEgMS4xMzgtLjgyNGMuMTA1LjE0IDEuMDUgMS40NTQuOTYzIDIuNzY4LS4wODcgMS41OTQtMS4zMTQgMi41NzUtNC4zNjEgMy41NTZhLjg0NS44NDUgMCAwIDAtLjEwNS4wMDljLS4wMzUuMDA0LS4wNy4wMDktLjEwNS4wMDlabS05LjUxMiAyLjQ3YS42NTYuNjU2IDAgMCAxLS41NDMtLjI2Mi42ODMuNjgzIDAgMCAxIC4xMjMtLjk4MWMxLjQzNi0xLjEzOSAyLjQtMi4xNTUgMy4wMy0zLjA0OC0uMzUtLjE3NS0uNzE4LS40MzgtLjkxLS44NzYtLjE3Ni0uNDAzLS4yODEtMS4wNjkuMzMyLTEuOTYyLjg3Ni0xLjI5NiAxLjc1Mi0xLjU5NCAyLjA4NC0xLjY2NGEuODcxLjg3MSAwIDAgMSAxLjAxNi42MTNjLjA4OC4zMTUuMjk4IDEuMzE0LS4zMzIgMi44MzguODQtLjAxOCAxLjUwNi0uMjQ1IDIuMDE0LS42NjYuOTgtLjc4OCAxLjAzMy0yLjEyIDEuMDMzLTIuMTM3YS43MTUuNzE1IDAgMCAxIC43MTktLjY4My43MTUuNzE1IDAgMCAxIC42ODMuNzE4YzAgLjA3LS4wNyAxLjk0NC0xLjUyNCAzLjE3LS45MTEuNzcxLTIuMTU1IDEuMTA0LTMuNjYxLjk4Mi0uNzE4IDEuMTAzLTEuODU3IDIuNC0zLjYyNiAzLjhhLjcwOC43MDggMCAwIDEtLjQzOC4xNThabTMuODAxLTcuMDc2YTMuMTM0IDMuMTM0IDAgMCAwLS42My43MzVjLS4yMjguMzUtLjI0Ni41NDMtLjIyOC41OTYuMDM1LjA4OC4yMS4xNzUuMzg1LjI0NS4zMzMtLjY2NS40MzgtMS4xOTEuNDczLTEuNTc2Wm0uMTc1IDQuOTIyYS43MS43MSAwIDAgMCAuNy42ODNoLjAzNmMuMDUzIDAgMS4yMjYtLjAzNSAyLjkwOC0uNDJhLjcwMi43MDIgMCAwIDAgLjU0My0uODQxLjcwMi43MDIgMCAwIDAtLjg0MS0uNTQzYy0xLjU2LjMzMi0yLjY2My4zODUtMi42OC4zODVhLjcwNC43MDQgMCAwIDAtLjY2Ni43MzZaTTEuMTM0IDE4LjEwM2MuMTIyLjE3NS4zNS4yOC41Ni4yOC4xNCAwIC4yOC0uMDM1LjQyLS4xMjIgNC40NS0zLjI0IDQuNjI1LTcuNDggNC42MjUtNy42NTUgMC0uMzg1LS4yOTgtLjctLjY4My0uNzE4LS4zODYtLjAxOC0uNy4yOTgtLjcxOC42ODMgMCAuMTQtLjE3NiAzLjczMS00LjA0NyA2LjU1MWEuNzAxLjcwMSAwIDAgMC0uMTU3Ljk4MVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",
            className: "h-12 w-12 hidden lg:inline",
          }),
        ],
        `${variant.footerBtn} `
      ),

      //filter mobile section
      El({
        element: "div",
        dir: "rtl",
        className:
          "border-t-2 overflow-x-scroll border-b-2 mt-2 lg:hidden w-full p-2 flex gap-3 border-t-1 border-gray-300",
        child: [
          button(
            [
              El({
                element: "ion-icon",
                name: "list-outline",
                className: "w-4 h-4",
              }),
              El({
                element: "span",
                child: "فیلرها",
                className: "text-[14px]",
              }),
            ],
            `${variant.filterBtn}`
          ),
          button(
            [
              El({
                element: "ion-icon",
                name: "filter-outline",
                className: "w-4 h-4",
              }),
              El({
                element: "span",
                child: "فیلترها",
                className: "text-[14px]",
              }),
            ],
            `${variant.filterBtn}`
          ),
          ...btnArr
        ],
      }),
    ],
    " flex flex-col  pt-3 justify-center items-center fixed z-20 bg-white // lg:flex lg:flex-row lg:px-10 lg:gap-5 lg:border-b-2 lg:pb-2"
  );
};
{
  /* <div className=""></div> */
}
export default header;
