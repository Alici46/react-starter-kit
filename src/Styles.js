import logo from './logo.svg';
import styles from './App.module.css';
import Test from './Test.js';
import { Title } from './Components';
import Bootstrap from './Bootstrap';
import Tailwind from './Tailwind';
import "./tailwind.css"


function Styles() {
    return (
        <div className = { styles.App } >
            <Title>{process.env.NODE_ENV}</Title>
            <Title theme="dark">{process.env.NODE_ENV}</Title>
            <p className="env">
                <span>Test</span>
            </p>
            <img src="/logo512.png" className="App-logo" alt="logo" />
            <Test />
            <Bootstrap />
            <Tailwind />

        </div >
    )
    
}

export default Styles;