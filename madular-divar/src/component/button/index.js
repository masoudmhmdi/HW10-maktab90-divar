import El from "../library";
const variant={
    inputBtn:"bg-transparent text-gray-500  flex gap-1 items-center ",
    filterBtn:"border border-gray-300 text-gray-500 bg-white    items-center justify-center p-3 h-7 rounded-xl flex",
    footerBtn:"flex flex-col md:flex md:gap-1 md:flex-row   items-center justify-center  rounded text-gray-600",
    desktopHeaderBtn:"hidden gap-1 lg:flex w-20 h-10 hover:bg-gray-100 rounded items-center justify-center "
}
{/* <div className="mi"><div/> */}
const button=(child, otherStyle="")=>{
    return El({
        element:"button",
        className:`${otherStyle}`,
        child
    })
}

export {variant}
export default button