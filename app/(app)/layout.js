import Header from "../components/Header"
export default function AppLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>

    )
}