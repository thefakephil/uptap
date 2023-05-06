import Nav from "@/components/nav";
import Login from "@/components/login";
import Footer from "@/components/footer";

export default function SignUpPage() {
    return (
        <>
            <Nav />
            <div className="my-8">
                <Login />
            </div>
            <Footer />
        </>
       
    )
}