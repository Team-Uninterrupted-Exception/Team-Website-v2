export default function HeroSection() {

    return (
        <section
            id="home"
            className="
                flex
                flex-1
                w-full
                h-screen
                flex-row
                items-center
                bg-dark-blue
                md:px-20
                lg:px-45
                pb-20
                justify-between

                "
        >

            {/* this is the text blob on the right side of the page. */}
            <div className="flex flex-col flex-1 items-center md:items-start lg:space-y-7">
                <div
                    className="text-white text-4xl lg:text-6xl font-bold font-['Inter'] leading-16 text-nowrap">Team Uninterrupted Exception
                </div>
                <div className="p-4 bg-white rounded-2xl">
                    <div className="text-dark-blue text-xl lg:text-4xl font-bold font-['Inter'] leading-6">
                        FTC Team 36691
                    </div>
                </div>
                <div
                    className="text-white text-xl lg:text-3xl font-bold font-['Inter'] leading-6 wrap-normal">We dont Just Build Robots,
                </div>
                <div
                    className="text-white text-xl lg:text-3xl font-bold font-['Inter'] leading-6 wrap-normal">We Build people too.
                </div>
            </div>

            {/* This is the image of Cameron thrap that shows on the title screen of the website */}
            {/*<Image*/}
            {/*    className="w-1/2 lg:w-9/16 mt-0 lg:-mt-13 hidden md:block"*/}
            {/*    src="/Placeholder.png"*/}
            {/*    alt="*/}
            {/*        Transparent Picture of Cameron Thrap holding a lightsaber.*/}
            {/*        He is wearing a blue shirt and has a slight smirk.*/}
            {/*    "*/}
            {/*    loading="eager"*/}
            {/*    width={1620}*/}
            {/*    height={2160}>*/}
            {/*</Image>*/}
        </section>
    );
}
