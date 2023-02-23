import El from "../library";
import sidebarFooter from "../sidebarFooter";


const sideBar = () => {
  return El({
    element: "div",
    child: [
      El({
        element: "div",
        dir: "rtl",
        className:
          "hidden lg:flex  lg:w-[26%]  pt-20 pr-8 h-screen overflow-auto fixed right-0 scrollbar-hide",
        child: [
          El({
            element: "ul",
            className: "text-gray-500 w-full",
            child: [
              El({
                element: "li",
                child: [
                  El({
                    element: "small",
                    child: "دسته ها",
                  }),
                ],
              }),
              El({
                element: "li",
                className:
                  "my-4 flex items-center gap-1 hover:text-gray-800 cursor-pointer",
                child: [
                  El({
                    element: "ion-icon",
                    name: "home-outline",
                    className: "h-5 w-5",
                  }),
                  El({
                    element: "span",
                    child: "املاک",
                  }),
                ],
              }),
              El({
                element: "li",
                className:
                  "my-4 flex items-center gap-1 hover:text-gray-800 cursor-pointer",
                child: [
                  El({
                    element: "ion-icon",
                    name: "car-sport-outline",
                    className: "h-5 w-5",
                  }),
                  El({
                    element: "span",
                    child: "وسیله نقلیه",
                    className: "pb-1",
                  }),
                ],
              }),
              El({
                element: "li",
                className:
                  "my-4 flex items-center gap-1 hover:text-gray-800 cursor-pointer",
                child: [
                  El({
                    element: "ion-icon",
                    name: "phone-portrait-outline",
                    className: "h-5 w-5",
                  }),
                  El({
                    element: "span",
                    child: "کالای دیجیتال",
                    className: "pb-1",
                  }),
                ],
              }),
              El({
                element: "li",
                className:
                  "my-4 flex items-center gap-1 hover:text-gray-800 cursor-pointer",
                child: [
                  El({
                    element: "ion-icon",
                    name: "storefront-outline",
                    className: "h-5 w-5",
                  }),
                  El({
                    element: "span",
                    child: "خانه و آشپزخانه",
                    className: "pb-1",
                  }),
                ],
              }),
              El({
                element: "li",
                className:
                  "my-4 flex items-center gap-1 hover:text-gray-800 cursor-pointer",
                child: [
                  El({
                    element: "ion-icon",
                    name: "brush-outline",
                    className: "h-5 w-5",
                  }),
                  El({
                    element: "span",
                    child: "خدمات",
                    className: "pb-1",
                  }),
                ],
              }),
              El({
                element: "li",
                className:
                  "my-4 flex items-center gap-1 hover:text-gray-800 cursor-pointer",
                child: [
                  El({
                    element: "ion-icon",
                    name: "watch-outline",
                    className: "h-5 w-5",
                  }),
                  El({
                    element: "span",
                    child: "وسایل شخصی",
                    className: "pb-1",
                  }),
                ],
              }),
              El({
                element: "li",
                className:
                  "my-4 flex items-center gap-1 hover:text-gray-800 cursor-pointer",
                child: [
                  El({
                    element: "ion-icon",
                    name: "dice-outline",
                    className: "h-5 w-5",
                  }),
                  El({
                    element: "span",
                    child: "سرگرمی و فراغت",
                    className: "pb-1",
                  }),
                ],
              }),
              El({
                element: "li",
                className:
                  "my-4 flex items-center gap-1 hover:text-gray-800 cursor-pointer",
                child: [
                  El({
                    element: "ion-icon",
                    name: "people-outline",
                    className: "h-5 w-5",
                  }),
                  El({
                    element: "span",
                    child: "اجتماعی",
                    className: "pb-1",
                  }),
                ],
              }),
              El({
                element: "li",
                className:
                  "my-4 flex items-center gap-1 hover:text-gray-800 cursor-pointer",
                child: [
                  El({
                    element: "ion-icon",
                    name: "construct-outline",
                    className: "h-5 w-5",
                  }),
                  El({
                    element: "span",
                    child: "تحهیزات و صنعتی",
                    className: "pb-1",
                  }),
                ],
              }),
              El({
                element: "li",
                className:
                  "my-4 flex items-center gap-1 hover:text-gray-800 cursor-pointer",
                child: [
                  El({
                    element: "ion-icon",
                    name: "bag-outline",
                    className: "h-5 w-5",
                  }),
                  El({
                    element: "span",
                    child: "استخدام و کاریابی",
                    className: "pb-1",
                  }),
                ],
              }),
              El({
                element: "li",
                className:
                  " border-t py-4  w-full flex items-center gap-2 text-sm text-black font-semibold cursor-pointer",
                child: [
                  El({
                    element: "ion-icon",
                    name: "chevron-down-outline",
                    className: "h-4 w-4",
                  }),
                  El({
                    element: "span",
                    child: "محل",
                    className: "pb-1",
                  }),
                ],
              }),
              El({
                element: "li",
                className:
                  " border-t py-4  w-full flex items-centergap-2 text-sm text-black font-semibold hover:text-gray-800 cursor-pointer",
                child: [
                  El({
                    element: "ion-icon",
                    name: "chevron-down-outline",
                    className: "h-4 w-4",
                  }),
                  El({
                    element: "span",
                    child: "استخدام و کاریابی",
                    className: "pb-1",
                  }),
                ],
              }),
              El({
                element: "li",
                className:
                  " border-t py-4 border-b w-full flex items-center gap-2 text-sm text-black font-semibold hover:text-gray-800 cursor-pointer",
                child: [
                  El({
                    element: "ion-icon",
                    name: "chevron-down-outline",
                    className: "h-4 w-4",
                  }),
                  El({
                    element: "span",
                    child: "استخدام و کاریابی",
                    className: "pb-1",
                  }),
                ],
              }),
              sidebarFooter()
            ],
          }),
        ],
      }),
    ],
  });
};

export default sideBar;
