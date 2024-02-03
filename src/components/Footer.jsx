import React from "react";
import { footerText } from "@/constants";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__text">
                    <span>정상준</span>
                    <span>@ webs</span>
                </div>

                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="#">sign up</a>
                        </div>
                        <p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있어요.</p>
                    </div>

                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, index) => (
                                <li key={index}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div> {/* Closing tag for "footer__info" div */}

                <div className="footer__right">
                    @ 2024 정상준 <br />
                    이 사이트는 next를 이용해 제작했습니다.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
