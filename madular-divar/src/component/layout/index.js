import El from "../library/index"
{/* <div className="w-full"></div> */}
const layout=(child,otherClass="")=>{
  return El({
    element:"div",
    className:`w-full  ${otherClass}`,
    child
  })
}

export {layout}