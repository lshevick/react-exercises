import { useState } from "react";

import './BlogReadingApp/BlogReadingApp.css'

const BlogReadingApp = () => {
    const [selection, setSelection] = useState('blogOne');

    return (
        <div className="blog-reading-app">
            <ul className="blog-list">
                <li><button type="button" onClick={() => setSelection('blogOne')}>blog one</button></li>
                <li><button type="button" onClick={() => setSelection('blogTwo')}>blog two</button></li>
                <li><button type="button" onClick={() => setSelection('blogThree')}>blog three</button></li>
            </ul>
            <div className="blog-display">

                {selection === 'blogOne' &&
                    <div className="blog-one">
                        <h2>Blog One</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                }
                {selection === 'blogTwo' &&
                    <div className="blog-two">
                        <h2>Blog Two</h2>
                        <p>Post-ironic air plant bicycle rights bespoke gluten-free waistcoat vexillologist. Lo-fi tilde adaptogen tofu. Disrupt keffiyeh retro cloud bread yes plz snackwave tumblr pabst aesthetic organic wayfarers pug jianbing taiyaki. Selfies hot chicken fanny pack, pitchfork authentic gochujang celiac. Blog wayfarers tousled readymade, ethical yr helvetica taiyaki typewriter chicharrones YOLO wolf.</p>
                    </div>
                }

                {selection === 'blogThree' &&
                    <div className="blog-three">
                        <h2>Blog Three</h2>
                        <p>Lorem crackalackin hizzle for sure amizzle, cool izzle elit. Black fizzle velizzle, i'm in the shizzle volutpizzle, suscipizzle nizzle, we gonna chung funky fresh, fo shizzle. Pellentesque stuff tortizzle. Pot eros. Crazy bizzle dolor sizzle fo shizzle tempizzle the bizzle. Gangster uhuh ... yih! nibh izzle turpizzle. Fo shizzle in yippiyo. Pellentesque mammasay mammasa mamma oo sa rhoncizzle bizzle. In hac break yo neck, yall platea for sure. Pot dapibizzle. Shizznit tellizzle tellivizzle, pretizzle mammasay mammasa mamma oo sa, mattizzle uhuh ... yih!, gangsta vitae, nunc. I saw beyonces tizzles and my pizzle went crizzle suscipizzle. Integer semper phat sizzle tellivizzle.</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default BlogReadingApp;