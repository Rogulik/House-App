import React from 'react'
import BgImage from './BgImage'
import GridImages from './GridImages'
import TextContent from './TextContent'
import '../styles/Main.scss'


const Main = () => {
    return (
        <main className="main__container">
            <TextContent title="Kilka slow o nas" subtitle="Czyli kim jestesmy i dokad zmierzamy" />
            <GridImages />
            <BgImage />
            <TextContent title="Nasza oferta" subtitle="Dowiedz sie co mozemy tobie zaoferowac" />
        </main>
    )
}

export default Main
