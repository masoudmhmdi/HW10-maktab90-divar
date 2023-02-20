import El from "../library";
import button from "../button";
import { variant } from "../button";
const footer = () => {
  return El({
    element: "div",
    className:
      " w-full bg-white z-20 fixed bottom-0  flex justify-around p-3 px-5 items-center lg:hidden",
    dir: "rtl",
    child: [
      button(
        [
          El({
            element: "img",
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAZlBMVEX8/Pz///+mJiagAAClIiKlICCjFxedAACkGxukHR2jFBT79/eqMzOhCQmiERH58/OsOzvEgICxTEzu3Nz06Ojx4uLgv7/IiIjToaG0V1e5Y2PAdXXVqKjmzMzas7OvQ0PNlJS5aWnTnxVuAAAE7UlEQVRoge2bbbuqKhCGHRDf8C211LS0//8nDwxk6nKts7UW7msXnyyKW2HmeUYyC75v1rPtp7F/Bfj/+K9vvhj6DXr+zq9QF8iWGeoXsmWKOiNbBrFjsGUSOwJbRrEPsGUWO4Atw9g72DKN1eBduUaxCrwn1zAWwTtyjWMl+P24O2AF+MP9cP8p7qd92qPtUCUg9tj3xQ5+ndOI+kfjYGgcQqLSPDdjhHiNeW4nuM7BPDe1CQl24IaSu8P6imkmcW8+kSLBjSrjXE4Fl16N39dwV3JPxrnFTtwcuRfj3Atyc/NcGVeRcV+Ak+R65rmtyF87XGPAwJMXbGNXseB2yeid+Q0lQDJ+DW0aHrbz9FDQC/tlGX90FH2dlaMrgqRJ60fciYBgNt3oI8Crg5IoOHiCW486GGWM1qMTaajtOcNr6KMnEu9MHRe9AG4+If5NjwJFTYU9EeIOQgIFvh44cJWByNItXBQL25OLCvWo3IAidAi2hzHC0ZleH0/ZVoXTSYvBlD7sF3joKSzxbgMXE80tRgssJ5p1W7itFCki14zHDxuETF+tmPnzwC0D+YlxQN/k2bkbUh5K5x5Myo4wxlTEkGDK5Z2YEO885uJsxVsse1hUbUeX4VBc+3lcYKppjib+zGUJ6teruVD4tp5cbUcyPbGQlpU0GRU+wDuMIj75fim1Jlh9tTpUEIaHMUaNPAOhIMexIcNBTvuszFVfmp7LH3HxyhgeVlKeiZAnbYgn6GWkUTwTgBKXPCoWuO5arshSGSoHFUuBzIlE64GdcktOLMac0OUbReys2kQvIXT15aLiqJmExpPBO1wEa7EzaoV+F32AeeVl8xFkXLFsbVzhHRGh6mtn/x7ZiQpnqsKqb0I3Rsn0ycwkoZefCdaW3Cr9HCVRmJ2BVupBNUR34Nn6iEwFAqwGT81de88MmT/IDRQyXN0Wj5PIJ/Nm03pi8gCnEIUlXuuEcJJBoQUIjqNqEo5hPKUy6rSjbSmx5pc6Ymry11FFC+UXo8uIe58yMYXoC7ZozHcozaqx/0NyzWJlHE64Vp1VejqD3jau4w6amKDFeV2XdlndtDkf6hsBvRxCqhciylZjcxkUtnOvW4C3TTt01o5KmyRJ+GSXB5IypYGONC8u+VosEEam2xmP4eEgV972xjW8pkMaaSjxonp9jQM3GYwsXZI4qDCB9a2h/qWxOFWXu4biwtLssn63CypMvcWiDK4KK/NDilV+rQ6Z79JI1GHKtQiL3CbfsMd2H3pJaXRfLF2V31zRaOwwGyf+CJCJOtCtr5t+qVG6TIJ6qU9VPl4nnekcTbI4FgsObdkW27YT4YrDsXDhLkMvgB8ORvxQrAhtYfMmpnBanLXg6y3n3WaZkmJgKnaFdgSUhs0zm5diaFWQL8QU8JvCMnVKwhFlC8LuXF7z5JnNWkjUmtkL5TYcM5Rl376LEORVe7rkBX92hxhyGz2OBQvY3EPN9Ub3oq96HgJSFFbfX0hcpWAkyF5wUzsfWpUSwZKJ6D56/o2fYfCa6HlZzUU1Y0tNej1WrGHs0mp5aFH2uAvL/iIwP35rXT/1vYC8se/TPu1t2z6J8X6/73+4/zh3D/A7Pm/2ds8xvt1zqm/3HPJuz3vv9nz7bs/z7/b/hd3+r7Hb/1N+mzwlAZghzzkwbyaof9P/y16I/2Hs/wD95DZT1X5C+AAAAABJRU5ErkJggg==",
            className: "h-6 w-6 ",
          }),
          El({
            element: "span",
            child: "آگهی ها",
            className: "text-sm text-red-500",
          }),
        ],
        `${variant.footerBtn} md:hidden`
      ),
      button(
        [
          El({
            element: "ion-icon",
            name: "list-outline",
            className: "h-5 w-5",
          }),
          El({
            element: "span",
            child: "دسته ها",
            className: "text-sm",
          }),
        ],
        variant.footerBtn
      ),
      button(
        [
          El({
            element: "ion-icon",
            name: "add-circle",
            className: "h-5 w-5",
          }),
          El({
            element: "span",
            child: "ثبت آکهی",
            className: "text-sm",
          }),
        ],
        variant.footerBtn
      ),
      button(
        [
          El({
            element: "ion-icon",
            name: "chatbubble",
            className: "h-5 w-5",
          }),
          El({
            element: "span",
            child: "چت",
            className: "text-sm",
          }),
        ],
        variant.footerBtn
      ),
      button(
        [
          El({
            element: "ion-icon",
            name: "person",
            className: "h-5 w-5 pt-1",
          }),
          El({
            element: "span",
            child: "دیوار من",
            className: "text-sm",
          }),
        ],
        `${variant.footerBtn} hidden md:inline `
      ),
    ],
  });
};

export default footer;
