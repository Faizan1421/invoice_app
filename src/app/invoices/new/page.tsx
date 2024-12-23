"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createAction } from "@/app/actions";
import { SyntheticEvent, useState } from "react";



export default function Home() {
    const [state,setState] = useState("ready")
    async function handleOnSubmit (event: SyntheticEvent){
        event.preventDefault()
        if (state === "pending"){
            return
        }
        setState("pending")
        const target = event.target as HTMLFormElement
        const formData = new FormData(target)
        await createAction(formData)
    }

    return (
        <main className="flex flex-col gap-6 h-[100vh] max-w-full p-4 mx-auto my-12 items-center sm:items-start">

        
            <div className="flex  justify-between">
               <h1 className="text-3xl font-semibold">Create Invoice</h1>
            </div>
            <form onSubmit={handleOnSubmit} className="grid gap-4 w-full sm:max-w-xs" >
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
