import React from 'react'
import '../styles/TextContent.scss'
import { NavLink } from 'react-router-dom';

const TextContent = ({title, subtitle}) => {
    return (
        <div className="text-content__container">
            <header>
                <h1 className="heading-1">{ title }</h1>
                <h2 className="heading-2">{ subtitle }</h2>
            </header>
            <div className="text-content__text-box">
                <p className="text-content__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit.
                    Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Enim blandit volutpat maecenas volutpat blandit. 
                    Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Sagittis purus sit amet volutpat consequat mauris.
                    Mauris nunc congue nisi vitae suscipit. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Adipiscing 
                    elit duis tristique sollicitudin nibh. Eget velit aliquet sagittis id consectetur purus. Nibh sit amet commodo nulla.
                    Pellentesque habitant morbi tristique senectus et netus et. Venenatis lectus magna fringilla urna porttitor.
                    Vitae aliquet nec ullamcorper sit amet risus nullam eget. Suspendisse faucibus interdum posuere lorem ipsum dolor
                    sit amet consectetur. Purus gravida quis blandit turpis cursus in hac habitasse platea.
                
               </p>
               <p className="text-content__text">
                        Neque gravida in fermentum et sollicitudin ac orci phasellus egestas.
                        Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet.
                        Nisi est sit amet facilisis magna etiam tempor. Pretium vulputate 
                        sapien nec sagittis aliquam malesuada bibendum. Sit amet volutpat consequat 
                        mauris nunc congue nisi vitae suscipit. Semper eget duis at tellus.
                        Lacus laoreet non curabitur gravida. Volutpat consequat mauris nunc congue.
                        Malesuada fames ac turpis egestas integer eget. Pretium nibh ipsum consequat 
                        nisl vel pretium lectus. Sagittis eu volutpat odio facilisis mauris sit. Tincidunt id aliquet risus
                        feugiat in. Donec pretium vulputate sapien nec. Sit amet mauris commodo quis. Auctor eu augue ut lectus 
                        arcu bibendum. Bibendum est ultricies integer quis auctor elit sed vulputate. Facilisis sed odio morbi quis 
                        commodo odio aenean sed adipiscing. Gravida in fermentum et sollicitudin ac orci. Facilisis leo vel fringilla 
                        est. Amet mattis vulputate enim nulla aliquet porttitor.
                    </p>
            </div>
            <div className="text-content__button-box">
                <NavLink to="/houses-list"><button className="btn">Zobacz wiecej</button></NavLink>
            </div>
        </div>
    )
}

export default TextContent
