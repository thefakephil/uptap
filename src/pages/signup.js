import Nav from "@/components/nav";
import SignUp from "@/components/signup";
import Footer from "@/components/footer";
import HowTo from "@/components/howto";
import FAQ from "@/components/faq";

export default function SignUpPage() {
    return (
        <>
            <Nav />
            <div className="my-8">
                <SignUp />
            </div>
            <HowTo /> 
            <FAQ /> 
            <Footer />
        </>
       
    )
}