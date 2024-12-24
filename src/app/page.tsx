
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <Container className="min-h-[calc(100vh-120px)] items-center justify-center text-center flex flex-col gap-6 ">


      <h1 className="text-5xl font-bold">Invoicipedia</h1>
      <p>
        <Button asChild>
          <Link href="/dashboard">
            Sign In
          </Link>
        </Button>
      </p>
    </Container>
  );
}
