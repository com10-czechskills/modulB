import React from "react";
import './Banner.css';
import Link from 'next/link';

export default function Banner({ headingText, path }) {
    const pathSegments = path.split('/').filter(segment => segment);

    return (
        <section className="banner" id="banner">
            <div className="container">
                <span className='paths'>
                    <Link href="/">Domů</Link>
                    {pathSegments.map((segment, index) => {
                        const href = '/' + pathSegments.slice(0, index + 1).join('/');
                        return (
                            <React.Fragment key={index}>
                                {' / '}
                                <Link href={href}>{segment}</Link>
                            </React.Fragment>
                        );
                    })}
                </span>
                <h2>{headingText}</h2>
            </div>
        </section>
    );
}