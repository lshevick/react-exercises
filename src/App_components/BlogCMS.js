import React from "react";

export function BlogCMS({ }) {
    
    return (<div className="blog-cms">

        <form className="cms-blog-form">
            <label htmlFor="blog-title"></label>
            <input id="blog-title" type="text" />

            <label htmlFor="blog-body"></label>
            <input id="blog-body" type="text" />

            <button type='submit'>Submit</button>
        </form>

        <ul>
            <li>
                <div>
                    <h2>Blog Post for CMS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ducimus deleniti adipisci atque molestiae voluptatibus cupiditate illum dicta, corporis odio repudiandae, reprehenderit autem maxime accusamus! Impedit, illum? Voluptatum, obcaecati unde?</p>
                </div>
                <button type="button">Edit</button>
            </li>
        </ul>

    </div>
    );
}
