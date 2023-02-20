import El from "../library";
{/* <div className="w-3/6"></div> */}
const input=()=>{
    return El({
        element:"input",
        type:"text",
        className:"w-[90%] h-full h-8 outline-none  mx-auto  border-none bg-gray-100",
        dir:"rtl",
        placeholder :"جستجو در همه آگهی ها"
    })
}

export default input