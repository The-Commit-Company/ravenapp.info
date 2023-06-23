const faqs = [
    {
        question: 'Can I use Raven with other Frappe apps?',
        answer:
            'Yes. Raven is built using Frappe framework, and hence can be used with other Frappe apps. We plan on building integrations with ERPNext, FrappeHR, FrappeLMS and FrappeDesk in the future.',
    },
    {
        question: 'Who is this for?',
        answer: "Any team that needs a modern messaging tool. We've built Raven for our own team, and we hope you find it useful too. If you are already using ERPNext or any other Frappe app in your organization, Raven is a no-brainer.",
    },
    {
        question: 'Is Raven really free?',
        answer: "Yep (and forever). It's licensed under the AGPL v3 license, and it's source code is available on Github.",
    },
    {
        question: 'How can I contribute to Raven?',
        answer: 'Any contribution (reporting bugs, suggesting features, or contributing code) is welcome, and frankly, needed. Check out our Github repo for more details.',
    },
    {
        question: 'Can I sponsor an integration with another app?',
        answer: 'Yes. We are open to building integrations with other apps. Please reach out to us at support@thecommit.company for more details, or simply file an issue on Github and we will reach out to you.',
    },
    {
        question: 'I have a self-developed Frappe app. Can I integrate it with Raven?',
        answer: 'Technically, yes. Your app would need to send/view messages using the APIs available in Raven. Third-party integrations with providers like Linear, Salesforce, Github etc are also possible, but have not been implemented yet. We will be building an integration layer and providing documentation for it soon.'
    }
    // More questions...
]

export default function FAQ() {
    return (
        <div className="bg-gray-950">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                        <h2 className="text-4xl font-cal text-white">Frequently asked questions</h2>
                        <p className="mt-4 text-base leading-7 text-gray-300">
                            Can’t find the answer you’re looking for?  <a href="https://github.com/The-Commit-Company/Raven/issues" className="font-semibold text-indigo-600 hover:text-indigo-500">File an issue</a> on Github or reach out to us directly at {' '}
                            <a href="mailto:support@thecommit.company" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                support@thecommit.company
                            </a>.
                        </p>
                    </div>
                    <div className="mt-10 lg:col-span-7 lg:mt-0">
                        <dl className="space-y-10">
                            {faqs.map((faq) => (
                                <div key={faq.question}>
                                    <dt className="text-base font-semibold leading-7 text-gray-100">{faq.question}</dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-400">{faq.answer}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
