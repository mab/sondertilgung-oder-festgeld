import Image from "next/image";
import BerechnenButton from "@/app/BerechnenButton";

export default function Home() {
    return (
        <div className="grid">
            <main>
            <h1 className="text-4xl p-3">Sondertilgung oder Festgeld?</h1>

                <div className="flex">
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold"
                               htmlFor="betrag">
                            Betrag
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="betrag" type="text" placeholder="5.000"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/2">
                        <h2>Annuitätendarlehen</h2>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-xs font-bold"
                                   htmlFor="restschuld">
                                Restschuld
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="restschuld" type="text" placeholder="100.000"/>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-xs font-bold"
                                   htmlFor="darlehen-zins">
                                Zins p.a.
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="darlehen-zins" type="text" placeholder="1,0"/>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-xs font-bold"
                                   htmlFor="darlehen-rate">
                                Rate (Monat)
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="darlehen-rate" type="text" placeholder="1.000"/>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h2>Festgeldkonto</h2>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-xs font-bold"
                                   htmlFor="festgeld-zins">
                                Zins p.a.
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="festgeld-zins" type="text" placeholder="3,0"/>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-xs font-bold"
                                   htmlFor="dauer">
                                Dauer (Jahre)
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="dauer" type="text" placeholder="5"/>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/2">
                        <BerechnenButton />
                    </div>
                </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://github.com/mab/sondertilgung-oder-festgeld"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/sondertilgung-oder-festgeld/github-mark-white.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                />
                Quelltext
            </a>
        </footer>
    </div>
  );
}
