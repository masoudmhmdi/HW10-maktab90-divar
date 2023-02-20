import mainContainer from "./component/mainContainer/index";
import footer from "./component/footer";
import header from "./component/header";
import { layout } from "./component/layout";

const app = () => {
  return layout([header(),mainContainer(),footer()], "h-full");
};

export default app;
