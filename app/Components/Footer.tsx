import Image from "next/image";
import Link from "next/link"

const footerItems = {
    copyright: "© 2024 Fobozo. All rights reserved.",
    socialIcons: [
        { id: 1, name: "github", href: "https://github.com/fobozo", icon: "/assets/github.svg" },
        { id: 2, name: "youtube", href: "https://youtube.com/@fobozo", icon: "/assets/youtube.svg" }
    ]
}

const Footer = () => {
    return (
        <footer className="space-y-8">
            <hr className="w-full h-px bg-gray-700" />
            <section className="flex items-center justify-between lg:block space-y-8 lg:mx-auto">
                <p className="text-white text-base font-primary leading-normal lg:text-center">
                    {footerItems.copyright}
                </p>
                <section className="flex items-center space-x-4 lg:mx-auto lg:justify-center">
                    {footerItems.socialIcons.map((item) => (
                        <Link href={item.href} target="blank" key={item.id}>
                            <Image 
                                src={item.icon} 
                                alt={item.name} 
                                width={64}
                                height={64}
                            />
                        </Link>
                    ))}
                </section>
            </section>
        </footer>
    )
}

export default Footer;