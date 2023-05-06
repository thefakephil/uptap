export default function Hero() {

    const heroCopy = {
        title: 'Connect and network, with ',
        description: 'Make connecting fun again - share social profiles, payment methods, or even a list of your choice '
      }

    return (
        // <div className="bg-gradient-to-b from-green-50 to-green-100">
        <div>

            <section className="py-10 sm:py-16 lg:py-12">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                                {heroCopy.title}
                                <div className="relative inline-flex">
                                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">UpTap.</h1>
                                </div>
                            </h1>

                            <p className="mt-8 text-base text-black sm:text-xl">{heroCopy.description}</p>

                            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                                <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button">
                                     Join Now </a>

                                <a href="#" title="" className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                                    <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path fill="#F97316" stroke="#F97316" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Watch video
                                </a>
                            </div>
                        </div>

                        <div>
                            <img className="w-full hero-image" src="/phone-mock.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}