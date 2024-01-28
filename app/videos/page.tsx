import SideNav from "../dashboard/Components/SideNav"
import TopNav from "../dashboard/Components/TopNav"
import Main from "./Components/Main"

const pageTitle = "Videos"

const VidPage = () => {
    return (
        <section className="bg-gray-900 w-full h-full min-h-screen px-16 py-8 space-y-16">
            <section className="pl-32">
                <TopNav currentTitle={pageTitle} />
            </section>
            <section className="flex items-start space-x-32">
                <SideNav />
                <section className="flex justify-center items-center mx-autom w-full">
                   <Main />
                </section>
            </section>
        </section>
    )
}

export default VidPage;