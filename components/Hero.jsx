"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

const Hero = () => {
    // State to handle modal open/close
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="h-[80vh] xl:h-screen relative text-white">
            {/* overlay */}
            <div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.83]">
            </div>
            {/* video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/assets/hero/video.mp4" type="video/mp4" />
            </video>
            <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative ">
                {/* text */}
                <div
                    data-scroll
                    data-scroll-speed="0.4"
                    className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full"
                >
                    {/* h1 */}
                    <div className="flex flex-col items-center">
                        <h1 className="h1 text-white">
                            <span className="text-accent">
                                Pharama
                            </span>covigilance
                        </h1>
                    </div>
                    {/* separator */}
                    <p className="lead font-light max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4">
                        Ensuring patient safety through vigilant monitoring and
                        proactive management of drug-related risks.
                    </p>
                    <button
                        className="btn"
                        onClick={() => setIsOpen(true)}
                    >
                        Know More
                    </button>
                </div>
            </div>

            {/* Modal */}
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
            >
                {/* Modal content */}
                <div
                    className="fixed inset-0 bg-black bg-opacity-70"
                    aria-hidden="true"
                >
                </div>

                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-black rounded-lg p-6 relative">
                        <button
                            className="absolute top-2 right-2 text-black"
                            onClick={() => setIsOpen(false)}
                        >
                            ✖
                        </button>

                        <video width="600" controls autoPlay>
                            <source
                                src="/assets/Drug-Safety.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </Dialog>
        </section>
    );
};

export default Hero;
