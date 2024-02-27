import SideNav from "../dashboard/components/SideNav"
import TopNav from "../dashboard/components/TopNav"
import Main from "./components/Main"

const pageTitle = "Videos"

const VidPage = () => {
    return (
        <section className="bg-gray-900 w-full h-full min-h-screen px-16 py-8 space-y-16 lg:px-8">
            <section className="pl-32 lg:pl-0">
                <TopNav currentTitle={pageTitle} />
            </section>
            <section className="flex items-start space-x-32 lg:block">
                <SideNav />
                <section className="flex justify-center items-center mx-auto w-full">
                   <Main />
                </section>
            </section>
        </section>
    )
}

export default VidPage;