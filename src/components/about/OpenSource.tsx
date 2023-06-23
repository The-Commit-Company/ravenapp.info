import AstroLogo from '../../images/astro-logo-light.png'
import CalSansLogo from '../../images/cal-sans-logo.png'
import TailwindLogo from '../../images/tailwindcss-logotype-white.svg'
import ReactHookFormLogo from '../../images/react-hook-form-logo.png'
import FrappeReactSDKLogo from '../../images/frappe-react-sdk-logo.png'
import QuillLogo from '../../images/quill-logo.svg'

const LINK_PROPS = {
    className: "underline",
    target: "_blank"
}

const posts = [
    {
        id: 1,
        title: 'Frappe Framework',
        href: 'https://frappeframework.com',
        description:
            'The backbone of this product, Frappe is what powers Raven. The database, ORM, cache, web server - everything runs on the Frappe framework.',
        imageUrl:
            'https://frappe.io/files/frappe.png',
        category: "Backend",
        category_color: "blue"
    },
    {
        id: 2,
        title: 'React + Vite',
        href: 'https://reactjs.org/',
        description:
            <span>The frontend is a single page app built using React, with <a {...LINK_PROPS} href="https://vitejs.dev">Vite</a>, set up using <a  {...LINK_PROPS} href="https://github.com/NagariaHussain/doppio">Doppio</a>.</span>,
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        category: "Frontend",
        category_color: "indigo"
    },
    {
        id: 3,
        title: 'ChakraUI',
        href: 'https://chakra-ui.com/',
        description:
            'The user interface is built using components from ChakraUI. They look so good that we have hardly customized any component and used most of it out of the box.',
        imageUrl: 'https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true',
        category: 'UI',
        category_color: 'cyan'
    },
    {
        id: 4,
        title: 'Frappe React SDK',
        href: 'https://github.com/The-Commit-Company/frappe-react-sdk',
        description: <span>
            A library of React hooks developed by us at The Commit Company, it provides a set of common functions to use a Frappe backend in a React application.
            Built using <a {...LINK_PROPS} href="https://swr.vercel.app/">SWR</a>, <a {...LINK_PROPS} href="https://axios-http.com/">Axios</a>, and <a {...LINK_PROPS} href="https://github.com/The-Commit-Company/frappe-js-sdk">frappe-js-sdk</a>.
        </span>,
        category: 'Frontend',
        category_color: "indigo",
        imageUrl: FrappeReactSDKLogo
    },
    {
        id: 5,
        title: 'React Icons',
        href: 'https://react-icons.github.io/react-icons/',
        description: 'We use icons from multiple libraries throughout the app, for which we use react-icons - a collection of popular icons from multiple sources.',
        category: 'UI',
        imageUrl: 'https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667',
        category_color: 'cyan'
    },
    {
        id: 6,
        title: '⌘K',
        href: 'https://cmdk.paco.me/',
        description: 'Fast, composable, unstyled command menu for React. Used for our command palette and search.',
        category: 'Frontend',
        imageUrl: 'https://github.com/pacocoursey/cmdk/raw/main/website/public/og.png',
        imagePos: 'cover',
        category_color: "indigo"
    },
    {
        id: 6,
        title: 'React Hook Form',
        href: 'https://www.react-hook-form.com/',
        description: 'Building performant forms has never been this easy. We use and recommend this library for any React project you might have.',
        category: 'Frontend',
        category_color: "indigo",
        imageUrl: ReactHookFormLogo
    },
    {
        id: 7,
        title: 'Quill and React Quill',
        href: 'https://github.com/zenoamaro/react-quill',
        description: 'Open source WYSIWYG editor that we use for our chat input.',
        category: 'Frontend',
        category_color: "indigo",
        imageUrl: QuillLogo
    },
    {
        id: 8,
        title: 'React Markdown',
        href: 'https://github.com/remarkjs/react-markdown',
        description: 'Markdown component for React, used to show messages in the chat interface.',
        category: 'UI',
        category_color: 'cyan',
        imageUrl: 'https://raw.githubusercontent.com/remarkjs/remark/1f338e72/logo.svg?sanitize=true'
    },
    {
        id: 9,
        title: 'Tailwind CSS & Tailwind UI',
        href: 'https://tailwindcss.com/',
        description: 'We used ready-to-use templates from TailwindUI to build this website.',
        category: 'Website',
        category_color: 'purple',
        imageUrl: TailwindLogo
    },
    {
        id: 10,
        title: 'Astro',
        href: 'https://astro.build/',
        description: 'The framework that allowed us to build this website in days instead of weeks. Easy recommendation for building a landing page or documentation site.',
        category: 'Website',
        category_color: 'purple',
        imageUrl: AstroLogo
    },
    {
        id: 11,
        title: 'Cal Sans font',
        href: 'https://github.com/calcom/font',
        description: <span>All we did for designing our logo was to type it in this amazing font designed by the team at <a {...LINK_PROPS} href="https://cal.com/">Cal.com</a></span>,
        category: 'Logo',
        category_color: 'violet',
        imageUrl: CalSansLogo
    }
    // More posts...
]

export default function OpenSource() {
    return (
        <div className="bg-gray-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold text-white sm:text-4xl font-cal">Projects we used to build Raven.</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        We use these awesome open source projects to build Raven 🎉
                    </p>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start shadow-2xl mt-16 sm:mt-24 px-4 py-8 w-full rounded-lg">
                            <div className="flex justify-center items-center w-full">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className={`object-${post.imagePos ?? 'contain'} h-24 w-full`}
                                />
                            </div>
                            <div className="max-w-xl w-full mt-16">
                                <div className="group relative">
                                    <div className="flex justify-between">
                                        <h3 className="text-2xl font-semibold leading-6 text-gray-100 group-hover:text-gray-300">
                                            <a href={post.href}>
                                                {/* <span className="absolute inset-0" /> */}
                                                {post.title}
                                            </a>
                                        </h3>
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <span
                                                className={`relative z-10 rounded-full bg-${post.category_color}-500  px-3 py-1.5 font-medium text-gray-100`}
                                            >
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="mt-5 text-base leading-6 text-gray-400">{post.description}</p>
                                </div>
                                {/* <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">{post.author.role}</p>
                                    </div>
                                </div> */}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}