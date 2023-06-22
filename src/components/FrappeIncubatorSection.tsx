import Frappe from '../images/frappe.png'
import FOSSHack from '../images/FOSSHack.jpg'

export default function FrappeIncubatorSection() {
    return (
        <div className="bg-gray-950 py-24 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div className="mx-auto w-full max-w-xl lg:mx-0">
                        <h2 className="text-4xl font-cal text-white">100% Open Source</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Raven is backed by the <a target='_blank' href='https://frappe.io/incubator' className="font-semibold text-indigo-600 hover:text-indigo-500">Frappe Incubator Program</a>, and is built using 100% free and open source software.
                            <br /><br />
                            A major part of Raven was built at <a target='_blank' href="https://fossunited.org/fosshack/2023" className="font-semibold text-indigo-600 hover:text-indigo-500">FOSS Hack 3.0</a>, where we were one of the <a target='_blank' href="https://forum.fossunited.org/t/foss-hack-3-0-results/1882">winning projects</a>.
                        </p>
                        <div className="mt-8 flex items-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Our tech stack
                            </a>
                            <a target='_blank' href="https://github.com/The-Commit-Company/Raven" className="text-sm font-semibold text-white">
                                Star us on Github <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-xl flex flex-col items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                        <img
                            className="max-h-14 w-full object-contain"
                            src={Frappe}
                            alt="Frappe"
                        />
                        <img
                            className="w-70 object-contain rounded-md bg-white/5 shadow-4xl ring-1 ring-white/10"
                            src={FOSSHack}
                            alt="FOSS Hack 3.0"
                            width="80%"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
