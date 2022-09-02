import css from './index.module.css'
import AboutImg from "../../image/unsplash_LRXYS0tSyGc.svg"
import Demato from "../../image/dermato.png"
import Stylist from "../../image/stylist.png"
import Surgeon from "../../image/surgeon.png"
import Bottom1 from "../../image/Bottom BG.png"
import Bottom2 from "../../image/Footer BG 1.png"
import Bottom3 from "../../image/Footer BG 2.png"
import Main1 from '../../image/Animation1.svg'
import Main2 from '../../image/Animation2.svg'
import Main3 from '../../image/Animation3.svg'
import playButton from '../../image/Play_button.svg'
import Up from '../../image/muiten.svg'	
import iconMenu from '../../image/7124209_menu_icon.svg'
import frame1  from '../../image/Frame 1.svg'
import contactImg from '../../image/Contact Animations.svg'
function Home_1() {
    return ( <div className={css.container}>
        <div className={css.backgroundheader}>
            <div className={css.site__header}>
                
                <div className={css.main__logo}>
                    <div className={css.mainlogo_child}>
                        <div className={css.ellipseBG}></div>
                        <div className={css.ellipse1}></div>
                        <div className={css.ellipse2}></div>
                        <div className={css.rectangleBlue}></div>
                    </div>
                    <div className={css.beautiText}>Beautice</div>
                </div>
                <div className={css.mainItem}>
                    <div className={css.mainMenu}>
                        <div className={`${css.menuText} ${css.menuTextPlus}`}>
                            <div className={css.homeText}>Home</div>
                            <div className={css.homeIcon}>+</div>
                        </div>
                        <div className={css.menuText}>About</div>
                        <div className={css.menuText}>Service</div>
                        <div className={css.menuText}>Gallery</div>
                        <div className={css.menuText}>Blog</div>
                    </div>
                    <button className={css.contactButton}>Contact</button>
                </div>

                <img src={iconMenu} className={css.iconMenu} />
            </div>
            
            <div className={css.mainSlider}>
                <div className={css.frame1}>                
                    <div className={css.textFrame}>
                        <p className={css.textClinic}>
                            Clinic & beauty
                            consultant
                        </p>
                        <p className={css.textLong}>
                            It is a long established fact that a reader will be<br />
                            by the readable content of a page.
                        </p>

                        <button className={css.MoreDetail}>
                            More Details
                        </button>
                    </div>

                    <div className={css.imgFrame}>
                        <img src={frame1} className={css.imgFrame1} />
                    </div>
                </div>
                <div className={css.listButton}>
                    <button className={css.rectangleleft}></button>
                    <button className={css.rectangleMid}></button>
                    <button className={css.rectangleRight}></button>
                </div>  
            </div>
        </div>
        

        <div className={css.backgroundBudder}>
            <div className={css.CoreSev}>
                <div className={css.tittle}>
                    <p className={css.titleMain}>Main Services</p>
                    <p className={css.titlelern}>Learn services to focus<br /> on your beauty</p>
                    <p className={css.titlePorta}>Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient<br /> amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                </div>
                <div className={css.allCore}>
                    <div className={css.core}>
                        <img src={Main1} className={css.Main1}/>
                        <p className={css.textMain}>Beauty consultation</p>
                        <p className={css.textLongMain}>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                    </div>
                    <div className={css.core}>
                        <img src={Main2} className={css.Main1}/>
                        <p className={css.textMain}>Skin treatments</p>
                        <p className={css.textLongMain}>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                    </div>
                    <div className={css.core}>
                        <img src={Main3} className={css.Main1}/>
                        <p className={css.textMain}>Beauty product</p>
                        <p className={css.textLongMain}>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                    </div>
                </div>
            </div>
     
            <div className={css.aboutUs}>
                    <div className={css.aboutTitle}>
                        <p className={css.aboutText1}>About Us</p>
                        <p className={css.aboutText2}>We are the best beauty clinic</p>
                        <p className={css.aboutText3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
                        </p>
                        <p className={css.aboutText4}>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>
                        <div className={css.buttonUs}>
                            <button className={css.buttonMore}>Learn More</button>
                            <div className={css.playAbout}>
                                <img src={playButton} className={css.playButton}/>
                                <p className={css.playButtonText}>Watch Video</p>
                            </div>
                        </div>
                    </div>
                    <img src={AboutImg} className={css.aboutImg} />
            </div>

            <div className={css.ProfestionalTeams}>
                <div className={css.ProfestionalTitle}>
                    <p className={css.ProfestionalText1}>Professional Teams</p>
                    <p className={css.ProfestionalText2}>The Professional expert</p>
                    <p className={css.ProfestionalText3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                </div>      
            </div>
        </div>
        
        <div className={css.contactBubber}>
            <div className={css.infomation}>
                        <div className={css.boxLeft}>
                            <img className={css.boxLeftImg} src={Surgeon}/>                
                            <p className={css.boxLeftText1}>Surgeon</p>
                            <p className={css.boxLeftText2}>Briyan Nevalli</p>
                            <p className={css.boxLeftText3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                            <div className={css.boxSocial}>
                                <div className={css.twitter}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.4302 7.40791C22.446 7.62998 22.446 7.8521 22.446 8.07417C22.446 14.8476 17.2906 22.6522 7.86802 22.6522C4.96509 22.6522 2.26841 21.8114 0 20.3521C0.412451 20.3997 0.808984 20.4155 1.2373 20.4155C3.63257 20.4155 5.83755 19.6065 7.59834 18.2265C5.3458 18.1789 3.45811 16.7036 2.80771 14.6731C3.125 14.7207 3.44224 14.7524 3.77539 14.7524C4.2354 14.7524 4.69546 14.689 5.12373 14.578C2.77603 14.1021 1.01519 12.0399 1.01519 9.54941V9.48599C1.69727 9.8667 2.49048 10.1046 3.33115 10.1363C1.95107 9.21626 1.04692 7.64585 1.04692 5.86919C1.04692 4.91743 1.30068 4.04497 1.74487 3.28354C4.26709 6.39268 8.05835 8.4231 12.3096 8.64521C12.2303 8.2645 12.1827 7.86797 12.1827 7.47139C12.1827 4.64775 14.4669 2.34766 17.3064 2.34766C18.7816 2.34766 20.1141 2.96631 21.05 3.96567C22.208 3.7436 23.3184 3.31528 24.302 2.72837C23.9212 3.91812 23.1122 4.91748 22.0494 5.55195C23.0805 5.44097 24.0799 5.15537 24.9999 4.75884C24.3021 5.77402 23.4295 6.67817 22.4302 7.40791V7.40791Z" fill="#091156"/>
                                    </svg>
                                </div>
                                <div className={css.facebook}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.3174 14.0625L19.0117 9.53809H14.6704V6.60205C14.6704 5.36426 15.2769 4.15771 17.2212 4.15771H19.1948V0.305664C19.1948 0.305664 17.4038 0 15.6914 0C12.1162 0 9.7793 2.16699 9.7793 6.08984V9.53809H5.80518V14.0625H9.7793V25H14.6704V14.0625H18.3174Z" fill="#091156"/>
                                    </svg>
                                </div>
                                <div className={css.Instagram}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5049 6.88477C9.39941 6.88477 6.89453 9.38965 6.89453 12.4951C6.89453 15.6006 9.39941 18.1055 12.5049 18.1055C15.6104 18.1055 18.1152 15.6006 18.1152 12.4951C18.1152 9.38965 15.6104 6.88477 12.5049 6.88477ZM12.5049 16.1426C10.498 16.1426 8.85742 14.5068 8.85742 12.4951C8.85742 10.4834 10.4932 8.84766 12.5049 8.84766C14.5166 8.84766 16.1523 10.4834 16.1523 12.4951C16.1523 14.5068 14.5117 16.1426 12.5049 16.1426V16.1426ZM19.6533 6.65527C19.6533 7.38281 19.0674 7.96387 18.3447 7.96387C17.6172 7.96387 17.0361 7.37793 17.0361 6.65527C17.0361 5.93262 17.6221 5.34668 18.3447 5.34668C19.0674 5.34668 19.6533 5.93262 19.6533 6.65527ZM23.3691 7.9834C23.2861 6.23047 22.8857 4.67773 21.6016 3.39844C20.3223 2.11914 18.7695 1.71875 17.0166 1.63086C15.21 1.52832 9.79492 1.52832 7.98828 1.63086C6.24023 1.71387 4.6875 2.11426 3.40332 3.39355C2.11914 4.67285 1.72363 6.22559 1.63574 7.97852C1.5332 9.78516 1.5332 15.2002 1.63574 17.0068C1.71875 18.7598 2.11914 20.3125 3.40332 21.5918C4.6875 22.8711 6.23535 23.2715 7.98828 23.3594C9.79492 23.4619 15.21 23.4619 17.0166 23.3594C18.7695 23.2764 20.3223 22.876 21.6016 21.5918C22.8809 20.3125 23.2813 18.7598 23.3691 17.0068C23.4717 15.2002 23.4717 9.79004 23.3691 7.9834V7.9834ZM21.0352 18.9453C20.6543 19.9023 19.917 20.6396 18.9551 21.0254C17.5146 21.5967 14.0967 21.4648 12.5049 21.4648C10.9131 21.4648 7.49023 21.5918 6.05469 21.0254C5.09766 20.6445 4.36035 19.9072 3.97461 18.9453C3.40332 17.5049 3.53516 14.0869 3.53516 12.4951C3.53516 10.9033 3.4082 7.48047 3.97461 6.04492C4.35547 5.08789 5.09277 4.35059 6.05469 3.96484C7.49512 3.39355 10.9131 3.52539 12.5049 3.52539C14.0967 3.52539 17.5195 3.39844 18.9551 3.96484C19.9121 4.3457 20.6494 5.08301 21.0352 6.04492C21.6064 7.48535 21.4746 10.9033 21.4746 12.4951C21.4746 14.0869 21.6064 17.5098 21.0352 18.9453Z" fill="#091156"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={css.boxMid}>
                        <img className={css.boxMidImg} src={Demato}/>  
                            <p className={css.boxMidText1}>Dermatologist</p>
                            <p className={css.boxMidText2}>Bella sebastian</p>
                            <p className={css.boxMidText3}>Lorem ipsum dolor sit amet,</p>
                            <p className={css.boxMidText3}> consectetur adipiscing elit ut </p>
                            <p className={css.boxMidText4}>aliquam, purus sit</p>
                            <div className={css.boxSocial}>
                                <div className={css.twitter}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.4302 7.40791C22.446 7.62998 22.446 7.8521 22.446 8.07417C22.446 14.8476 17.2906 22.6522 7.86802 22.6522C4.96509 22.6522 2.26841 21.8114 0 20.3521C0.412451 20.3997 0.808984 20.4155 1.2373 20.4155C3.63257 20.4155 5.83755 19.6065 7.59834 18.2265C5.3458 18.1789 3.45811 16.7036 2.80771 14.6731C3.125 14.7207 3.44224 14.7524 3.77539 14.7524C4.2354 14.7524 4.69546 14.689 5.12373 14.578C2.77603 14.1021 1.01519 12.0399 1.01519 9.54941V9.48599C1.69727 9.8667 2.49048 10.1046 3.33115 10.1363C1.95107 9.21626 1.04692 7.64585 1.04692 5.86919C1.04692 4.91743 1.30068 4.04497 1.74487 3.28354C4.26709 6.39268 8.05835 8.4231 12.3096 8.64521C12.2303 8.2645 12.1827 7.86797 12.1827 7.47139C12.1827 4.64775 14.4669 2.34766 17.3064 2.34766C18.7816 2.34766 20.1141 2.96631 21.05 3.96567C22.208 3.7436 23.3184 3.31528 24.302 2.72837C23.9212 3.91812 23.1122 4.91748 22.0494 5.55195C23.0805 5.44097 24.0799 5.15537 24.9999 4.75884C24.3021 5.77402 23.4295 6.67817 22.4302 7.40791V7.40791Z" fill="#091156"/>
                                    </svg>
                                </div>
                                <div className={css.facebook}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.3174 14.0625L19.0117 9.53809H14.6704V6.60205C14.6704 5.36426 15.2769 4.15771 17.2212 4.15771H19.1948V0.305664C19.1948 0.305664 17.4038 0 15.6914 0C12.1162 0 9.7793 2.16699 9.7793 6.08984V9.53809H5.80518V14.0625H9.7793V25H14.6704V14.0625H18.3174Z" fill="#091156"/>
                                    </svg>
                                </div>
                                <div className={css.Instagram}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5049 6.88477C9.39941 6.88477 6.89453 9.38965 6.89453 12.4951C6.89453 15.6006 9.39941 18.1055 12.5049 18.1055C15.6104 18.1055 18.1152 15.6006 18.1152 12.4951C18.1152 9.38965 15.6104 6.88477 12.5049 6.88477ZM12.5049 16.1426C10.498 16.1426 8.85742 14.5068 8.85742 12.4951C8.85742 10.4834 10.4932 8.84766 12.5049 8.84766C14.5166 8.84766 16.1523 10.4834 16.1523 12.4951C16.1523 14.5068 14.5117 16.1426 12.5049 16.1426V16.1426ZM19.6533 6.65527C19.6533 7.38281 19.0674 7.96387 18.3447 7.96387C17.6172 7.96387 17.0361 7.37793 17.0361 6.65527C17.0361 5.93262 17.6221 5.34668 18.3447 5.34668C19.0674 5.34668 19.6533 5.93262 19.6533 6.65527ZM23.3691 7.9834C23.2861 6.23047 22.8857 4.67773 21.6016 3.39844C20.3223 2.11914 18.7695 1.71875 17.0166 1.63086C15.21 1.52832 9.79492 1.52832 7.98828 1.63086C6.24023 1.71387 4.6875 2.11426 3.40332 3.39355C2.11914 4.67285 1.72363 6.22559 1.63574 7.97852C1.5332 9.78516 1.5332 15.2002 1.63574 17.0068C1.71875 18.7598 2.11914 20.3125 3.40332 21.5918C4.6875 22.8711 6.23535 23.2715 7.98828 23.3594C9.79492 23.4619 15.21 23.4619 17.0166 23.3594C18.7695 23.2764 20.3223 22.876 21.6016 21.5918C22.8809 20.3125 23.2813 18.7598 23.3691 17.0068C23.4717 15.2002 23.4717 9.79004 23.3691 7.9834V7.9834ZM21.0352 18.9453C20.6543 19.9023 19.917 20.6396 18.9551 21.0254C17.5146 21.5967 14.0967 21.4648 12.5049 21.4648C10.9131 21.4648 7.49023 21.5918 6.05469 21.0254C5.09766 20.6445 4.36035 19.9072 3.97461 18.9453C3.40332 17.5049 3.53516 14.0869 3.53516 12.4951C3.53516 10.9033 3.4082 7.48047 3.97461 6.04492C4.35547 5.08789 5.09277 4.35059 6.05469 3.96484C7.49512 3.39355 10.9131 3.52539 12.5049 3.52539C14.0967 3.52539 17.5195 3.39844 18.9551 3.96484C19.9121 4.3457 20.6494 5.08301 21.0352 6.04492C21.6064 7.48535 21.4746 10.9033 21.4746 12.4951C21.4746 14.0869 21.6064 17.5098 21.0352 18.9453Z" fill="#091156"/>
                                    </svg>
                                </div>
                            </div>
                            <div className={css.boxMidBackground}></div>
                        </div>
                        <div className={css.boxRight}>
                        <img className={css.boxLeftImg} src={Stylist}/>  
                            <p className={css.boxRightText1}>Stylist expert</p>
                            <p className={css.boxRightText2}>Lilly Adams</p>
                            <p className={css.boxRightText3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                            <div className={css.boxSocial}>
                                <div className={css.twitter}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.4302 7.40791C22.446 7.62998 22.446 7.8521 22.446 8.07417C22.446 14.8476 17.2906 22.6522 7.86802 22.6522C4.96509 22.6522 2.26841 21.8114 0 20.3521C0.412451 20.3997 0.808984 20.4155 1.2373 20.4155C3.63257 20.4155 5.83755 19.6065 7.59834 18.2265C5.3458 18.1789 3.45811 16.7036 2.80771 14.6731C3.125 14.7207 3.44224 14.7524 3.77539 14.7524C4.2354 14.7524 4.69546 14.689 5.12373 14.578C2.77603 14.1021 1.01519 12.0399 1.01519 9.54941V9.48599C1.69727 9.8667 2.49048 10.1046 3.33115 10.1363C1.95107 9.21626 1.04692 7.64585 1.04692 5.86919C1.04692 4.91743 1.30068 4.04497 1.74487 3.28354C4.26709 6.39268 8.05835 8.4231 12.3096 8.64521C12.2303 8.2645 12.1827 7.86797 12.1827 7.47139C12.1827 4.64775 14.4669 2.34766 17.3064 2.34766C18.7816 2.34766 20.1141 2.96631 21.05 3.96567C22.208 3.7436 23.3184 3.31528 24.302 2.72837C23.9212 3.91812 23.1122 4.91748 22.0494 5.55195C23.0805 5.44097 24.0799 5.15537 24.9999 4.75884C24.3021 5.77402 23.4295 6.67817 22.4302 7.40791V7.40791Z" fill="#091156"/>
                                    </svg>
                                </div>
                                <div className={css.facebook}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.3174 14.0625L19.0117 9.53809H14.6704V6.60205C14.6704 5.36426 15.2769 4.15771 17.2212 4.15771H19.1948V0.305664C19.1948 0.305664 17.4038 0 15.6914 0C12.1162 0 9.7793 2.16699 9.7793 6.08984V9.53809H5.80518V14.0625H9.7793V25H14.6704V14.0625H18.3174Z" fill="#091156"/>
                                    </svg>
                                </div>
                                <div className={css.Instagram}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5049 6.88477C9.39941 6.88477 6.89453 9.38965 6.89453 12.4951C6.89453 15.6006 9.39941 18.1055 12.5049 18.1055C15.6104 18.1055 18.1152 15.6006 18.1152 12.4951C18.1152 9.38965 15.6104 6.88477 12.5049 6.88477ZM12.5049 16.1426C10.498 16.1426 8.85742 14.5068 8.85742 12.4951C8.85742 10.4834 10.4932 8.84766 12.5049 8.84766C14.5166 8.84766 16.1523 10.4834 16.1523 12.4951C16.1523 14.5068 14.5117 16.1426 12.5049 16.1426V16.1426ZM19.6533 6.65527C19.6533 7.38281 19.0674 7.96387 18.3447 7.96387C17.6172 7.96387 17.0361 7.37793 17.0361 6.65527C17.0361 5.93262 17.6221 5.34668 18.3447 5.34668C19.0674 5.34668 19.6533 5.93262 19.6533 6.65527ZM23.3691 7.9834C23.2861 6.23047 22.8857 4.67773 21.6016 3.39844C20.3223 2.11914 18.7695 1.71875 17.0166 1.63086C15.21 1.52832 9.79492 1.52832 7.98828 1.63086C6.24023 1.71387 4.6875 2.11426 3.40332 3.39355C2.11914 4.67285 1.72363 6.22559 1.63574 7.97852C1.5332 9.78516 1.5332 15.2002 1.63574 17.0068C1.71875 18.7598 2.11914 20.3125 3.40332 21.5918C4.6875 22.8711 6.23535 23.2715 7.98828 23.3594C9.79492 23.4619 15.21 23.4619 17.0166 23.3594C18.7695 23.2764 20.3223 22.876 21.6016 21.5918C22.8809 20.3125 23.2813 18.7598 23.3691 17.0068C23.4717 15.2002 23.4717 9.79004 23.3691 7.9834V7.9834ZM21.0352 18.9453C20.6543 19.9023 19.917 20.6396 18.9551 21.0254C17.5146 21.5967 14.0967 21.4648 12.5049 21.4648C10.9131 21.4648 7.49023 21.5918 6.05469 21.0254C5.09766 20.6445 4.36035 19.9072 3.97461 18.9453C3.40332 17.5049 3.53516 14.0869 3.53516 12.4951C3.53516 10.9033 3.4082 7.48047 3.97461 6.04492C4.35547 5.08789 5.09277 4.35059 6.05469 3.96484C7.49512 3.39355 10.9131 3.52539 12.5049 3.52539C14.0967 3.52539 17.5195 3.39844 18.9551 3.96484C19.9121 4.3457 20.6494 5.08301 21.0352 6.04492C21.6064 7.48535 21.4746 10.9033 21.4746 12.4951C21.4746 14.0869 21.6064 17.5098 21.0352 18.9453Z" fill="#091156"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
            </div>
            <div className={css.contactUs}>
                <div className={css.contact}>
                    <div className={css.contactLefft}>
                        <div className={css.contactImg}>
                            <img src={contactImg} className={css.contactImage} />
                        </div>
                        <div className={css.contactImgBox}></div>
                    </div>
                    <div className={css.contactRight}>
                        <div className={css.contactTitle}>
                            <p className={css.contactText1}>Contact Us</p>
                            <p className={css.contactText2}>Send your inquiry to</p>
                            <p className={css.contactText3}>our expert team</p>
                            <p className={css.contactText4}>Lorem ipsum dolor sit amet nulla turapis tellus.</p>
                        </div>
                        <div className={css.contactForm}>
                            <div className={css.fullname}>
                                <input placeholder='First Name' className={css.firstName} />
                                <input placeholder='Last Name' className={css.lastName} />
                            </div>
                            <input placeholder='Email address' className={css.contactEmail} />
                            <input placeholder='Subject message' className={css.contactMess} />
                            <input placeholder='Your inquiry here' className={css.contactCmt} />
                        </div>
                        <button className={css.sendContact}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer */}

        
        
        <div className={css.backgroundFooter2}>
            <div className={css.backgroundFooter}>
                <div className={css.footer}>
                    <div className={css.footerUp}>
                            <div className={css.footerUp1}>
                                <div className={css.footerLogo}>
                                    <div className={css.main__logo}>
                                        <div className={css.ellipseBG}></div>
                                        <div className={css.ellipses1}></div>
                                        <div className={css.ellipse2}></div>
                                        <div className={css.rectangleWhile}></div>
                                    </div>
                                    <div className={css.beautiTextF}>Beautice</div>
                                </div>
                                <p className={css.footerTextTheme}><span className={css.fontTheme}>Beautice</span> is a Beauty Clinic WordPress Theme.</p>
                                <p className={css.footerAddress}>Baker Steet 101, NY, United States.</p>
                                <span className={css.footerInfomation}>
                                    <span className={css.footerNumber}>+521 569 8966.</span>
                                    <span className={css.footerEmail}>mail@company.com.</span>
                                </span>
                            </div>
                            <div className={css.footerUp2}>
                            <p className={css.footerPage}>Pages</p>
                                <div className={css.footerPageItem}>
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.0625 9.76705V3.23343C4.0625 2.78102 4.60949 2.55446 4.92939 2.87436L8.1962 6.14117C8.3945 6.33947 8.3945 6.66102 8.1962 6.85932L4.92939 10.1261C4.60949 10.446 4.0625 10.2195 4.0625 9.76705Z" fill="#D7DBFF"/>
                                    </svg>
                                    <span>Home</span>
                                </div>
                                <div className={css.footerPageItem}>
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.0625 9.76705V3.23343C4.0625 2.78102 4.60949 2.55446 4.92939 2.87436L8.1962 6.14117C8.3945 6.33947 8.3945 6.66102 8.1962 6.85932L4.92939 10.1261C4.60949 10.446 4.0625 10.2195 4.0625 9.76705Z" fill="#D7DBFF"/>
                                    </svg>
                                    <span>About</span>
                                </div>
                                <div className={css.footerPageItem}>
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.0625 9.76705V3.23343C4.0625 2.78102 4.60949 2.55446 4.92939 2.87436L8.1962 6.14117C8.3945 6.33947 8.3945 6.66102 8.1962 6.85932L4.92939 10.1261C4.60949 10.446 4.0625 10.2195 4.0625 9.76705Z" fill="#D7DBFF"/>
                                    </svg>
                                    <span>Services</span>
                                </div>
                                <div className={css.footerPageItem}>
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.0625 9.76705V3.23343C4.0625 2.78102 4.60949 2.55446 4.92939 2.87436L8.1962 6.14117C8.3945 6.33947 8.3945 6.66102 8.1962 6.85932L4.92939 10.1261C4.60949 10.446 4.0625 10.2195 4.0625 9.76705Z" fill="#D7DBFF"/>
                                    </svg>
                                    <span>Gallery</span>
                                </div>
                                <div className={css.footerPageItem}>
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.0625 9.76705V3.23343C4.0625 2.78102 4.60949 2.55446 4.92939 2.87436L8.1962 6.14117C8.3945 6.33947 8.3945 6.66102 8.1962 6.85932L4.92939 10.1261C4.60949 10.446 4.0625 10.2195 4.0625 9.76705Z" fill="#D7DBFF"/>
                                    </svg>
                                    <span>Team</span>
                                </div>
                            </div>
                            <div className={css.footerUp3}>
                                <p className={css.footerInfo}>Informations</p>
                                <div className={css.footerInfoItem}>
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.0625 9.76705V3.23343C4.0625 2.78102 4.60949 2.55446 4.92939 2.87436L8.1962 6.14117C8.3945 6.33947 8.3945 6.66102 8.1962 6.85932L4.92939 10.1261C4.60949 10.446 4.0625 10.2195 4.0625 9.76705Z" fill="#D7DBFF"/>
                                    </svg>
                                    <span>Terms & conditions</span>
                                </div>
                                <div className={css.footerInfoItem}>
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.0625 9.76705V3.23343C4.0625 2.78102 4.60949 2.55446 4.92939 2.87436L8.1962 6.14117C8.3945 6.33947 8.3945 6.66102 8.1962 6.85932L4.92939 10.1261C4.60949 10.446 4.0625 10.2195 4.0625 9.76705Z" fill="#D7DBFF"/>
                                    </svg>
                                    <span>Privacy policy</span>
                                </div>
                                <div className={css.footerInfoItem}>
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.0625 9.76705V3.23343C4.0625 2.78102 4.60949 2.55446 4.92939 2.87436L8.1962 6.14117C8.3945 6.33947 8.3945 6.66102 8.1962 6.85932L4.92939 10.1261C4.60949 10.446 4.0625 10.2195 4.0625 9.76705Z" fill="#D7DBFF"/>
                                    </svg>
                                    <span>Blog</span>
                                </div>
                                <div className={css.footerInfoItem}>
                                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.0625 9.76705V3.23343C4.0625 2.78102 4.60949 2.55446 4.92939 2.87436L8.1962 6.14117C8.3945 6.33947 8.3945 6.66102 8.1962 6.85932L4.92939 10.1261C4.60949 10.446 4.0625 10.2195 4.0625 9.76705Z" fill="#D7DBFF"/>
                                    </svg>
                                    <span>Contact</span>
                                </div>
                            </div>
                    </div>
                    <div className={css.divUp}>
                            <img src={Up} className={css.imgUp}/>
                    </div>
                    <div className={css.footerDown}>
                            <div className={css.footerDownLeft}>
                                <div className={css.footerDownLeftIcon}>
                                    <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_98_208)">
                <path d="M18.3174 15.6593L19.0117 10.6212H14.6704V7.35173C14.6704 5.97339 15.2769 4.62984 17.2212 4.62984H19.1948V0.340373C19.1948 0.340373 17.4038 0 15.6914 0C12.1162 0 9.7793 2.41306 9.7793 6.78136V10.6212H5.80518V15.6593H9.7793V27.8388H14.6704V15.6593H18.3174Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_98_208">
                <rect width="25" height="27.8388" fill="white"/>
                </clipPath>
                </defs>
                                    </svg>
                                </div>
                                <div className={css.footerDownLeftIcon}>
                                    <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.4302 8.24912C22.446 8.49641 22.446 8.74375 22.446 8.99103C22.446 16.5336 17.2906 25.2244 7.86802 25.2244C4.96509 25.2244 2.26841 24.2882 0 22.6632C0.412451 22.7161 0.808984 22.7338 1.2373 22.7338C3.63257 22.7338 5.83755 21.8329 7.59834 20.2962C5.3458 20.2431 3.45811 18.6004 2.80771 16.3393C3.125 16.3923 3.44224 16.4276 3.77539 16.4276C4.2354 16.4276 4.69546 16.357 5.12373 16.2334C2.77603 15.7034 1.01519 13.4071 1.01519 10.6338V10.5632C1.69727 10.9871 2.49048 11.2521 3.33115 11.2874C1.95107 10.2628 1.04692 8.51408 1.04692 6.53567C1.04692 5.47584 1.30068 4.50431 1.74487 3.65642C4.26709 7.1186 8.05835 9.37958 12.3096 9.62692C12.2303 9.20298 12.1827 8.76142 12.1827 8.3198C12.1827 5.17554 14.4669 2.61426 17.3064 2.61426C18.7816 2.61426 20.1141 3.30316 21.05 4.41601C22.208 4.16872 23.3184 3.69176 24.302 3.0382C23.9212 4.36305 23.1122 5.47589 22.0494 6.18241C23.0805 6.05882 24.0799 5.7408 24.9999 5.29924C24.302 6.4297 23.4295 7.43652 22.4302 8.24912Z" fill="white"/>
                                    </svg>
                                </div>
                                <div className={css.footerDownLeftIcon}>
                                    <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.45898 24.3589H1.92383V8.09604H6.45898V24.3589ZM4.18896 5.87763C2.73877 5.87763 1.5625 4.54007 1.5625 2.9252C1.5625 2.14952 1.83922 1.4056 2.33177 0.857115C2.82433 0.308626 3.49238 0.000488281 4.18896 0.000488281C4.88555 0.000488281 5.5536 0.308626 6.04616 0.857115C6.53871 1.4056 6.81543 2.14952 6.81543 2.9252C6.81543 4.54007 5.63867 5.87763 4.18896 5.87763ZM23.4326 24.3589H18.9072V16.4423C18.9072 14.5555 18.873 12.1359 16.5493 12.1359C14.1914 12.1359 13.8301 14.1858 13.8301 16.3063V24.3589H9.29981V8.09604H13.6494V10.3144H13.7129C14.3184 9.03669 15.7974 7.68825 18.0039 7.68825C22.5938 7.68825 23.4375 11.0539 23.4375 15.4255V24.3589H23.4326Z" fill="white"/>
                                    </svg>
                                </div>
                                <div className={css.footerDownLeftIcon}>
                                    <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.8566 7.54354C23.5839 6.4005 22.7807 5.50028 21.7609 5.19478C19.9124 4.63965 12.5 4.63965 12.5 4.63965C12.5 4.63965 5.08767 4.63965 3.2391 5.19478C2.21927 5.50033 1.41606 6.4005 1.14344 7.54354C0.648132 9.61536 0.648132 13.938 0.648132 13.938C0.648132 13.938 0.648132 18.2607 1.14344 20.3325C1.41606 21.4755 2.21927 22.3382 3.2391 22.6437C5.08767 23.1989 12.5 23.1989 12.5 23.1989C12.5 23.1989 19.9123 23.1989 21.7609 22.6437C22.7807 22.3382 23.5839 21.4755 23.8566 20.3325C24.3519 18.2607 24.3519 13.938 24.3519 13.938C24.3519 13.938 24.3519 9.61536 23.8566 7.54354ZM10.0757 17.8627V10.0134L16.271 13.9381L10.0757 17.8627Z" fill="white"/>
                                    </svg>
                                </div>
                                <div className={css.footerDownLeftIcon}>
                                    <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5049 7.66661C9.39941 7.66661 6.89453 10.4559 6.89453 13.914C6.89453 17.3721 9.39941 20.1615 12.5049 20.1615C15.6104 20.1615 18.1152 17.3721 18.1152 13.914C18.1152 10.4559 15.6104 7.66661 12.5049 7.66661ZM12.5049 17.9757C10.498 17.9757 8.85742 16.1542 8.85742 13.914C8.85742 11.6739 10.4932 9.85239 12.5049 9.85239C14.5166 9.85239 16.1523 11.6739 16.1523 13.914C16.1523 16.1542 14.5117 17.9757 12.5049 17.9757ZM19.6533 7.41106C19.6533 8.22121 19.0674 8.86825 18.3447 8.86825C17.6172 8.86825 17.0361 8.21577 17.0361 7.41106C17.0361 6.60634 17.6221 5.95387 18.3447 5.95387C19.0674 5.95387 19.6533 6.60634 19.6533 7.41106ZM23.3691 8.89C23.2861 6.93802 22.8857 5.20896 21.6016 3.7844C20.3223 2.35983 18.7695 1.91398 17.0166 1.81611C15.21 1.70192 9.79492 1.70192 7.98828 1.81611C6.24023 1.90854 4.6875 2.3544 3.40332 3.77896C2.11914 5.20353 1.72363 6.93258 1.63574 8.88456C1.5332 10.8963 1.5332 16.9263 1.63574 18.9381C1.71875 20.8901 2.11914 22.6191 3.40332 24.0437C4.6875 25.4682 6.23535 25.9141 7.98828 26.012C9.79492 26.1261 15.21 26.1261 17.0166 26.012C18.7695 25.9195 20.3223 25.4737 21.6016 24.0437C22.8809 22.6191 23.2812 20.8901 23.3691 18.9381C23.4717 16.9263 23.4717 10.9018 23.3691 8.89ZM21.0352 21.0967C20.6543 22.1624 19.917 22.9834 18.9551 23.4129C17.5146 24.0491 14.0967 23.9023 12.5049 23.9023C10.9131 23.9023 7.49023 24.0437 6.05469 23.4129C5.09766 22.9888 4.36035 22.1678 3.97461 21.0967C3.40332 19.4927 3.53516 15.6866 3.53516 13.914C3.53516 12.1415 3.4082 8.32996 3.97461 6.7314C4.35547 5.66569 5.09277 4.84467 6.05469 4.41512C7.49512 3.77896 10.9131 3.92577 12.5049 3.92577C14.0967 3.92577 17.5195 3.7844 18.9551 4.41512C19.9121 4.83923 20.6494 5.66026 21.0352 6.7314C21.6064 8.33539 21.4746 12.1415 21.4746 13.914C21.4746 15.6866 21.6064 19.4981 21.0352 21.0967Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <div className={css.footerDownRight}>
                                <p className={css.footerDownRightText}>© AltDesain Studio 2021 - All right reserved.</p>
                            </div>
                    </div>      
                </div>           
            </div>  
        </div> 
    </div> );
}

export default Home_1;