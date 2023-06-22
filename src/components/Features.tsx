import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Organise conversations in channels',
        description:
            'Open channels are visible to everyone. Private channels are only visible to selected members, and are invite-only. Public channels are visible and can be joined by anyone, but you can restrict them to members of your team.',
        icon: InboxIcon,
    },
    {
        name: 'Direct messages',
        description:
            'Have private conversations with your colleague. Need to store notes? You can DM yourself.',
        icon: UsersIcon,
    },
    {
        name: 'Text, documents, images, and memes.',
        description:
            'Share any file on Raven. Your teammates will be able to preview most of them right inside the app.',
        icon: TrashIcon,
    },
    {
        name: 'React to messages',
        description:
            'Need a quick way to respond to a message? Just react with an emoji.',
        icon: UsersIcon,
    },
    {
        name: 'Reply to messages',
        description:
            "An emoji isn't enough? Reply to a message to quote it, and keep the conversation going.",
        icon: UsersIcon,
    },
    {
        name: 'Bookmark important messages',
        description:
            "Don't lose track of important messages. Bookmark them, and find them later in your saved messages channel.",
        icon: UsersIcon,
    },
    {
        name: 'Search made easy',
        description:
            "Search for messages and files in or across multiple channels.",
        icon: UsersIcon,
    },
]

export default function Features() {
    return (
        <div className="bg-gray-950 py-0 sm:py-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold text-white sm:text-4xl font-cal">Your workplace needs a modern messaging tool.</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Raven can run on your ERPNext (or any Frappe) instance, so it doesn't cost anything. Don't use ERPNext or Frappe Cloud? No problem, you can host it yourself.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-white">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
