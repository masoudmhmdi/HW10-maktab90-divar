import El from "../library";

const card=(title,usage,price,location,img)=>{
    return El({
        element:"div",
        dir:"rtl",
        className:"w-full sm:w-[49%] xl:w-[32%] h-[150px]  border flex p-3",
        child:[
            El({
                element:"div",
                className:"w-2/3 h-full flex flex-col justify-between",
                child:[
                    El({
                        element:"h2",
                        child:title,
                    }),El({
                        element:"div",
                        child:[
                            El({
                                element:"p",
                                className:"text-[12px]",
                                child:usage,
                            }),
                            El({
                                element:"p",
                                className:"text-[12px]",
                                child:price,
                            }),
                            El({
                                element:"div",
                                className:"flex justify-between",
                                child:[ El({
                                    element:"p",
                                    className:"text-[12px]",
                                    child:location,
                                }),
                                El({
                                    element:"ion-icon",
                                    name:"chatbubble-outline",
                                    className:"px-1"

                                }),]
                            })]
                    })
                ]

            }),
            El({
                element:"div",
                className:"w-36 h-full rounded-lg overflow-hidden ",
                child:[El({
                    element:"img",
                    className:"w-full h-full  ",
                    src:img
                })]

            })
        ]
    })
}

export default card