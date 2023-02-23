import card from "../card";
import El from "../library";
import sideBar from "../sidebar";
import { db } from "../../db/index";
const mainContainer = () => {
  let cardArr=[]
  db.map((item) => {
    cardArr.push( card(item.title, item.usage, item.price, item.location, item.src))
  })
  console.log(cardArr)
  return El({
    element: "div",
    className: "flex",
    child: [
      El({
        element: "div",
        className:
          "w-full p-4 flex pt-[120px] lg:pt-20 sm:flex-row sm:flex-wrap sm:w-screen sm:w-screen flex-col gap-3 lg:w-[74%]",
        child:cardArr
      }),
      sideBar(),
    ],
  });
};

export default mainContainer;
