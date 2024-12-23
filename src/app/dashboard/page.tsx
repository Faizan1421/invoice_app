import { CirclePlus } from "lucide-react";

import { db } from "@/db"
import { Invoices } from "@/db/schema"
import Container from "@/components/Container";
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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";


export default async function Home() {

    const results = await db.select().from(Invoices)
    return (
        <Container className="min-h-[calc(100vh-150px)]">
        <main className="flex flex-col gap-6  text-center mt-8">

            <div className="flex  justify-between">
                <h1 className="text-3xl font-semibold">Invoices</h1>
                <p>
                    <Button variant="ghost" className="inline-flex gap-2" asChild>
                        <Link href="/invoices/new">
                            <CirclePlus className="h-4 w-4 " />
                            Create Invoice
                        </Link>
                    </Button>
                </p>
            </div>

            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] p-4">
                            Date
                        </TableHead>
                        <TableHead className="p-4">
                            Customer
                        </TableHead>
                        <TableHead className="p-4">
                            Email
                        </TableHead>
                        <TableHead>
                            Status
                        </TableHead>
                        <TableHead className="text-right p-4">
                            Value
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        results.map((result) => {
                            return (
                                <TableRow key={result.id}>
                                    <TableCell className="font-medium text-left p-0" >
                                        <Link href={`/invoices/${result?.id}`} className="block font-semibold p-4">{new Date(result?.createTs).toLocaleDateString()}</Link>
                                    </TableCell>
                                    <TableCell className="text-left p-0">
                                        <Link href={`/invoices/${result?.id}`} className="block font-semibold p-4" >Faizan Tayyab</Link>
                                    </TableCell>
                                    <TableCell className="text-left p-0">
                                        <Link href={`/invoices/${result?.id}`} className="block p-4">Faizan1421@gmail.com</Link>
                                    </TableCell>
                                    <TableCell className="text-left p-0">
                                        <Link href={`/invoices/${result?.id}`} className="block p-4">
                                            <Badge className={cn(
                                                "rounded-full capitalize",
                                                result.status === "open" && "bg-blue-500",
                                                result.status === "paid" && "bg-green-600",
                                                result.status === "void" && "bg-zinc-700",
                                                result.status === "uncollectible" && "bg-red-600",
                                            )}
                                            >
                                                {result.status}
                                            </Badge>
                                        </Link>
                                    </TableCell>
                                    <TableCell className="text-right p-0">
                                        <Link href={`/invoices/${result?.id}`} className="block font-semibold p-4">${(result?.value / 100).toFixed(2)}</Link>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }

                </TableBody>
            </Table>


        </main>
        </Container>
    );
}
