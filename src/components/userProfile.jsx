export default function UserProfile() {
    return (

        <>
        {/* <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <img className="object-cover w-32 h-32 mx-auto rounded-full" src="https://firebasestorage.googleapis.com/v0/b/dot-routed-user-data/o/Bo75ItMD9reWlbeCd4BwWxLsV0B3%2Ffglk3p4ix1e1tsg0e%2Fthumb%40512_fglk3p4ix1e1tsg0e.jpg?alt=media&token=a75a1e43-aeca-4d3b-9411-13bbfd6dd7d2" alt="" />
                    <p className="mt-6 text-lg font-semibold text-black">Mark 'Furnasty' Furniss <br></br><span className="font-normal text-gray-600">Minneapolis, Minnesota</span></p>
                    <blockquote className="max-w-xl mx-auto mt-7">
                        <p className="text-xl leading-relaxed text-black">“Juggler, Juggalo and Banker. In that order.”</p>
                    </blockquote>
                </div>
            </div>
        </section> */}
            <div className="antialiased">
                <div className="container mx-auto my-40">
                    <div>

                        <div className="bg-white relative rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                            <div className="flex justify-center">
                                <img src="https://firebasestorage.googleapis.com/v0/b/dot-routed-user-data/o/Bo75ItMD9reWlbeCd4BwWxLsV0B3%2Ffglk3p4ix1e1tsg0e%2Fthumb%40512_fglk3p4ix1e1tsg0e.jpg?alt=media&token=a75a1e43-aeca-4d3b-9411-13bbfd6dd7d2"
                                 alt="" className="object-cover rounded-full mx-auto absolute -top-20 w-32 h-32 transition duration-200 transform hover:scale-110" />
                            </div>

                            <div className="mt-16">
                                <h1 className="font-bold text-center text-3xl text-gray-900">Mark 'Furnasty' Furniss</h1>
                                <p className="text-center text-sm text-gray-400 font-medium">Juggler, Juggalo and Banker</p>
                                <p>
                                    <span>

                                    </span>
                                </p>
                                <div className="my-5 px-6">
                                    <a href="/files/furniss-contact.vcf" className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white" download>
                                         <b> Contact Info </b>
                                        <svg viewBox="0 0 12 16" fill="none" style={{width:13, float: "right"}} className="block" xmlns="http://www.w3.org/2000/svg"><path d="M0.777062 13.9058H11.2225C11.4232 13.9059 11.6161 13.9835 11.7609 14.1225C11.9056 14.2615 11.9911 14.4511 11.9993 14.6516C12.0076 14.8521 11.938 15.0481 11.8052 15.1985C11.6724 15.349 11.4865 15.4422 11.2865 15.4588L11.2225 15.4615H0.777062C0.576407 15.4613 0.383592 15.3836 0.238906 15.2445C0.0942204 15.1055 0.00885667 14.9159 0.000651262 14.7154C-0.00755415 14.515 0.0620336 14.3191 0.194875 14.1687C0.327716 14.0183 0.513533 13.9251 0.7135 13.9085L0.777062 13.9058ZM5.8251 0.918126L5.88866 0.915459C6.08387 0.915466 6.27195 0.988875 6.41555 1.12111C6.55915 1.25335 6.64778 1.43475 6.66384 1.6293L6.66651 1.69331V9.83117L8.79693 7.7012C8.94282 7.55532 9.14068 7.47336 9.34699 7.47336C9.5533 7.47336 9.75116 7.55532 9.89704 7.7012C10.0429 7.84709 10.1249 8.04495 10.1249 8.25125C10.1249 8.45756 10.0429 8.65542 9.89704 8.80131L6.43982 12.2585C6.36759 12.3308 6.28184 12.3881 6.18746 12.4272C6.09308 12.4662 5.99193 12.4864 5.88977 12.4864C5.78761 12.4864 5.68646 12.4662 5.59208 12.4272C5.4977 12.3881 5.41195 12.3308 5.33972 12.2585L1.8825 8.80131C1.73662 8.65542 1.65466 8.45756 1.65466 8.25125C1.65466 8.04495 1.73662 7.84709 1.8825 7.7012C2.02838 7.55532 2.22624 7.47336 2.43255 7.47336C2.63886 7.47336 2.83672 7.55532 2.9826 7.7012L5.11081 9.8294V1.69331C5.11082 1.49803 5.18429 1.30989 5.31662 1.16628C5.44896 1.02267 5.63047 0.934083 5.8251 0.918126Z" fill="white"></path></svg></a>
                                </div>
                                <div className="flex justify-between items-center my-5 px-6">
                                    <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                                    <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                                    <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                                    <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
                                </div>

                                <div className="w-full">
                                    <h3 className="font-medium text-gray-900 text-left px-6">Talk to me!</h3>
                                    <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                        <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                            <img src="https://images.ctfassets.net/gkyt4bl1j2fs/ym6BkLqyGjMBmiCwtM7AW/829bf561ea771c00839b484cb8edeebb/App_Icon.png?w=276&h=276&q=50&fm=webp&bg=transparent" alt="" className="rounded-full h-9 shadow-md inline-block mr-2" />
                                                Venmo
                                                {/* <span className="text-gray-500 text-xs">24 min ago</span> */}
                                        </a>

                                        <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/468px-IMessage_logo.svg.png?20180402204645" alt="" className="rounded-full h-9 shadow-md inline-block mr-2" />
                                                Text Me
                                                {/* <span className="text-gray-500 text-xs">42 min ago</span> */}
                                        </a>

                                        <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                            <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-1024.png" alt="" className="rounded-full h-9 shadow-md inline-block mr-2" />
                                                Email 
                                                {/* <span className="font-bold">#Web Dev</span> */}
                                                {/* <span className="text-gray-500 text-xs">49 min ago</span> */}
                                        </a>

                                        <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="" className="rounded-full h-9 shadow-md inline-block mr-2" />
                                                Website
                                                {/* <span className="text-gray-500 text-xs">1 day ago</span> */}
                                        </a>

                                        <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                            <img src="https://t4.ftcdn.net/jpg/02/98/28/57/360_F_298285715_ct4qtZOJH119A39TdMrbkLsfziVCX1Rz.jpg" alt="" className="rounded-full h-9 shadow-md inline-block mr-2" />
                                                Address
                                                {/* <span className="text-gray-500 text-xs">5 days ago</span> */}
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </>

    )
}