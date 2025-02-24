import { Header} from "./components/sections/Header/Header.tsx";
import { MainVisual} from "./components/sections/MainVisual/MainVisual.tsx";
import { About} from "./components/sections/About/About.tsx";
import { Activities} from "./components/sections/Activities/Activities.tsx";
import { Achievements} from "./components/sections/Achievements/Achievements.tsx";
import { SNS} from "./components/sections/SNS/SNS.tsx";
import { ContactForm} from "./components/sections/ContactForm/ContactForm.tsx";
import { Footer} from "./components/sections/Footer/Footer.tsx";

function App() {
    return (
        <main className="min-h-screen">
            <Header />
            <MainVisual />
            <About />
            <Activities />
            <Achievements />
            <SNS />
            <ContactForm />
            <Footer />
        </main>
    )
}

export default App