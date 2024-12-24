import Container from '@/components/Container'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <Container className='min-h-[calc(100vh-100px)] flex justify-center items-center'>
      <SignUp />
    </Container>
  )
}