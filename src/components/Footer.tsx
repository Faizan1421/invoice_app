
import Container from "@/components/Container";


const Footer = () => {
    return (
        <Container>
        <footer className="flex justify-between gap-4 items-center "> 
           <p>
            Invoicipedia &copy; {new Date().getFullYear()}
           </p>
           <p>
            Created By Faizan Tayyab Hussain With Next.js 
           </p>
        </footer>
        </Container>
    )
}

export default Footer;