import React from "react";
import Link from './Link.js'

class CertificationDiv extends React.Component {
    render () {
        return (
            <div className=''>
                <h3 className='text-center my-4'><Link link={this.props.certificationLink}>{this.props.certificationTitle}</Link></h3>
                <p className='text-center'><Link link={this.props.project1Link} className='text-center'>{this.props.project1Title}</Link></p>
                <p className='text-center'><Link link={this.props.project2Link} className='text-center'>{this.props.project2Title}</Link></p>
                <p className='text-center'><Link link={this.props.project3Link} className='text-center'>{this.props.project3Title}</Link></p>
                <p className='text-center'><Link link={this.props.project4Link} className='text-center'>{this.props.project4Title}</Link></p>
                <p className='text-center'><Link link={this.props.project5Link} className='text-center'>{this.props.project5Title}</Link></p>
            </div>
        );
    }
}

export default CertificationDiv;