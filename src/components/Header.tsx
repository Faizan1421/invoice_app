import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./theme-switch";
import Container from "@/components/Container";
import Link from "next/link";

const Header = () => {
    return (
        <Container className="flex justify-between items-center mt-8 w-full h-[40px]">
        
            <div className="flex justify-between items-center gap-4  w-full mr-4 ">
                <p className="font-bold">
                    <Link href="/dashboard">Invoicipedia</Link>
                    
                    
                    </p>
                <div className="flex justify-center items-center">
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
                
            </div>
            <ModeToggle /> 
        
        </Container>
    )
}

export default Header;