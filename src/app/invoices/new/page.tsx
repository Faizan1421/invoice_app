
import {sql} from "drizzle-orm"
import { db } from "@/db";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";




export default async function Home() {
    const results = await db.execute(sql`SELECT current_database()`);
    console.log(results)
    return (
        <main className="flex flex-col gap-6  h-[100vh] max-w-5xl mx-auto my-12">

            <div className="flex  justify-between">
                <h1 className="text-3xl font-semibold">Invoices</h1>
            </div>
            <div className="flex  justify-between">
               <h1 className="text-3xl font-semibold">Create Invoices</h1>
            </div>

            {
                JSON.stringify(results)
            }
            <form className="grid gap-4 max-w-xs" >
                <div>
                    <Label htmlFor="name" className="block mb-2 font-semibold text-sm">Billing Name</Label>
                    <Input id="name" name="name" type="text" />
                </div>
                <div>
                    <Label htmlFor="email" className="block mb-2 font-semibold text-sm">Billing Email</Label>
                    <Input id="email" name="email" type="text" />
                </div>
                <div>
                    <Label htmlFor="value" className="block mb-2 font-semibold text-sm">Value</Label>
                    <Input id="value" name="value" type="text" />
                </div>
                <div>
                    <Label htmlFor="description" className="block mb-2 font-semibold text-sm">Description</Label>
                    <Textarea id="description" name="description"></Textarea>
                </div>
                <div>
                    <Button className="w-full font-semibold">
                        Submit
                    </Button>
                </div>

            </form>

        </main>
    );
}
