import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))


const Header = () => ( 
    <header className="header">
        <img className="logo" src="react-logo.png" alt="React logo cyan nucleus" />
        <nav>
            <ul className="topnav">         
                <li>Pricing</li>
                <li>About </li>
                <li>Contact</li>
            </ul>  
        </nav>
        
    </header>
)

    

const MainContent = () => (
    <main>
    <h1>Reason I am excited to learn React</h1>
    <ol>
        <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
        <li>I am more likely to get a job as a front end developer when I know React</li>
    </ol>
</main>
    )


const Footer = () => (
        <footer>
                <small>© 2025 Pyry R</small>
            </footer>
    )


function Page() {
    return (
        <>
            <Header />
            <MainContent />           
            <Footer/>
        </>
    )
}

root.render(
    <Page />
)
