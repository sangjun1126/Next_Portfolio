import React from "react";

import { siteText } from "../constants";

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">
                    Site coding <em>나의 작업물</em>
                </h2>
                <div className="site__wrap">
                    {siteText.map((site, index) => (
                        <div className={`site__item s${index + 1}`} key={index}>
                            <span className="num">{index + 1}.</span>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <h3 className="title">
                                {site.title}
                            </h3>
                            <div className="btn">
                                <a href={site.code}>code</a>
                                <a href={site.view}>view</a>
                            </div>
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Site