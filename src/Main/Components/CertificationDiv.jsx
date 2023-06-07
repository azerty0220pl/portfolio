import React from "react";
import Link from './Link.js'

class CertificationDiv extends React.Component {
    render() {
        return (
            <div className=''>
                <h3 className='cert-link'>
                    {this.props.children}
                    <Link link={this.props.certificationLink}>{this.props.certificationTitle}</Link>
                </h3>
                <p><Link link={this.props.project1Link}>{this.props.project1Title}</Link></p>
                <p><Link link={this.props.project2Link}>{this.props.project2Title}</Link></p>
                <p><Link link={this.props.project3Link}>{this.props.project3Title}</Link></p>
                <p><Link link={this.props.project4Link}>{this.props.project4Title}</Link></p>
                <p><Link link={this.props.project5Link}>{this.props.project5Title}</Link></p>
            </div>
        );
    }
}

export default CertificationDiv;