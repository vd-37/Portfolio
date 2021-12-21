import React from 'react'
import {Name} from './Name'
import {About} from "./About"
import { Projects1 } from './Projects1'
import { Projects2 } from './Projects2'
import { Contact } from './Contact'


export const Home = () => {
    return (
        <div>
           <Name />
           <About />
           <Projects1 />
           <Projects2 />
           <Contact />
        </div>
    )
}
