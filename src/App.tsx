import React from 'react';
import s from './App.module.scss'
import {Comments} from './comments/Comments';

function App() {
    return (
        <div className={s.app}>
            <header>
                header
            </header>
            <section>
                <Comments/>
            </section>
            <footer>
                footer
            </footer>
        </div>
    );
}

export default App;
