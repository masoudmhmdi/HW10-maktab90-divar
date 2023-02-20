import El from "../library";

const card=()=>{
    return El({
        element:"div",
        dir:"rtl",
        className:"w-full md:w-[49%] lg:w-[32%] h-[150px]  border flex p-3",
        child:[
            El({
                element:"div",
                className:"w-2/3 h-full flex flex-col justify-between",
                child:[
                    El({
                        element:"h2",
                        child:"لپ تاپ مدل test lkajdlkajsdglk"
                    }),El({
                        element:"div",
                        child:[
                            El({
                                element:"p",
                                className:"text-[12px]",
                                child:"41,000,000,000",
                            }),
                            El({
                                element:"p",
                                className:"text-[12px] m-0",
                                child:"فروشگاه تست"
                            })]
                    })
                ]

            }),
            El({
                element:"div",
                className:"w-1/3 h-full rounded-lg overflow-hidden ",
                child:[El({
                    element:"img",
                    className:"w-full h-full object-cover ",
                    src:"data:image/jpeg;base64,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"

                })]

            })
        ]
    })
}

export default card