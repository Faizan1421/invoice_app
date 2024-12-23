
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"


export default function Home() {
    return (
        <main className="flex flex-col gap-6 items-center justify-center h-[100vh] text-center max-w-5xl mx-auto ">

            <h1 className="text-5xl font-bold">Dashboard</h1>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Value</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium text-left">
                            <span className="font-semibold">23/12/2024</span>
                        </TableCell>
                        <TableCell className="text-left">
                            <span className="">Faizan1421@gmail.com</span>
                        </TableCell>
                        <TableCell className="text-left">
                        <Badge className="rounded-full">Open</Badge>
                            
                        </TableCell>
                        <TableCell className="text-left">
                            <span className="font-semibold">Faizan Tayyab</span>
                        </TableCell>
                        <TableCell className="text-right">
                            <span className="font-semibold">$250.00</span>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>


        </main>
    );
}
