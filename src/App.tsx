import './App.css';
import styled from 'styled-components';
import Header from './layout/header/Header';
import { Banner } from './layout/sections/banner/Banner';
import { About } from './layout/sections/about/About';
import { Services } from './layout/sections/services/Services';
import { Projects } from './layout/sections/projects/Projects';
import { Contacts } from './layout/sections/contacts/Contacts';

function App() {
    return (
        <StyledApp className="App" id="home">
            <Header />
            <Banner/>
            <About/>
            <Services/>
            <Projects/>
            <Contacts/>
        </StyledApp>
    );
}

const StyledApp = styled.div`
    min-height: 100vh;
    width: 100%;
    background-color: #181824;
`

export default App;