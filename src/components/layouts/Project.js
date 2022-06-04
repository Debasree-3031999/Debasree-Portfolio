import React from 'react'


const Project = ({id, name, url, skills, net}) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <div className='saya'>
                <a href={url} style={{textDecoration:'none'}}><div className='buttonGit'>GitHub </div></a>
                <a href={net} style={{textDecoration:'none'}}><div className='buttonDep'>Deploy</div></a>
                </div>
            <a href={url} title={url} className="project-name" rel="noopener noreferrer" target="_blank" ><h4>{name}</h4></a>
            { skills && <h5>{skills.map(skill => skill)}</h5> }
        </div>
    )
}

export default Project
