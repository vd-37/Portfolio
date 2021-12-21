import React from 'react'
import { GitHub as GitHubIcon } from "@material-ui/icons";
import {Link} from "react-router-dom"

export const ImageLoader = ({src, title, gitRoute, siteRoute}) => {
    return (
        <figure>
        <Link to={siteRoute}>
        <img  className="slick-images" src={src} alt=""/>
        </Link>
           <h6 className="text-center pt-4">{title} <Link to={gitRoute}><GitHubIcon className="git-link"/></Link> </h6>  
        </figure>
    )
}
