import SideNav from "@/app/dashboard/Components/SideNav"
import TopNav from "@/app/dashboard/Components/TopNav"
import InvSingle from "./Components/InvSingle"

const pageTitle = "Inventory"

const InventoryPage = () => {
    return (
        <section className="w-full h-full min-h-screen bg-gray-900 lg:w-full relative space-y-32">
            <section className="top-0 px-32 pt-6">
                <TopNav currentTitle={pageTitle} />
            </section>       
            <section className="flex items-start justify-between pb-24">
                <section className="w-24">
                    <SideNav />
                </section>
                <section className="w-full px-32">
                    <InvSingle />
                </section>
            </section>
        </section>
    )
}

export default InventoryPage;