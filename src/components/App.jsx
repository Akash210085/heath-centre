import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Dashboard from "./Dashboard";
function App()
{
    return(
        <div>
        <Header />
        <Dashboard/>
        <Form />
        <Footer />
        </div>
    )
}
export default App