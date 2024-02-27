import SideNav from "@/app/dashboard/components/SideNav"
import TopNav from "@/app/dashboard/components/TopNav"
import InvSingle from "./components/InvSingle"

const pageTitle = "Inventory"

const InventoryPage = () => {
    return (
        <section className="w-full h-full min-h-screen bg-gray-900 lg:w-full relative space-y-32 px-16 lg:px-8">
            <section className="top-0 pl-32 pt-6 lg:pl-0">
                <TopNav currentTitle={pageTitle} />
            </section>       
            <section className="flex items-start justify-between pb-24">
                <section className="w-24">
                    <SideNav />
                </section>
                <section className="w-full px-8 lg:px-0">
                    <InvSingle />
                </section>
            </section>
        </section>
    )
}

export default InventoryPage;