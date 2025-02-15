import { NotFoundIcon } from "@/components/icons/not-found"
import Link from "next/link"

const NotFound = () => {
    return (
        <section>
            <div className="flex justify-center items-center h-screen gap-2 flex-col">
                <NotFoundIcon height={60} width={60}/>
                <p className="text-xl  text-muted-foreground font-bold">The editor could not be opened because the file was not found.</p>
                   <Link href={"/"} className="text-blue-800 font-bold text-lg">Go home</Link> 
                </div>
        </section>
    )
}
export default NotFound