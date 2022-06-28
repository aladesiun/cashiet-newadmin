const SideNav = () => {
    return ( 
        <nav className="side-nav">
        <a href="" className="intro-x flex items-center pl-5 pt-4 mt-3">
            <img alt="Midone - HTML Admin Template" className="w-6" src={require('../assets/dist/images/logo.svg')}></img>
            <span className="hidden xl:block text-white text-lg ml-3"> Tinker </span> 
        </a>
        <div className="side-nav__devider my-6"></div>
        <ul>
            <li>
                <a href="javascript:;.html" className="side-menu side-menu--active">
                    <div className="side-menu__icon"> <i data-lucide="home"></i> </div>
                    <div className="side-menu__title">
                        Dashboard 
                        <div className="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul className="side-menu__sub-open">
                    <li>
                        <a href="side-menu-light-dashboard-overview-1.html" className="side-menu side-menu--active">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Overview 1 </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-dashboard-overview-2.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Overview 2 </div>
                        </a>
                    </li>
                    <li>
                        <a href="index.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Overview 3 </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-dashboard-overview-4.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Overview 4 </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="javascript:;" className="side-menu">
                    <div className="side-menu__icon"> <i data-lucide="box"></i> </div>
                    <div className="side-menu__title">
                        Menu Layout 
                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-dashboard-overview-1.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Side Menu </div>
                        </a>
                    </li>
                    <li>
                        <a href="simple-menu-light-dashboard-overview-1.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Simple Menu </div>
                        </a>
                    </li>
                    <li>
                        <a href="top-menu-light-dashboard-overview-1.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Top Menu </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="javascript:;" className="side-menu">
                    <div className="side-menu__icon"> <i data-lucide="shopping-bag"></i> </div>
                    <div className="side-menu__title">
                        E-Commerce 
                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-categories.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Categories </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-add-product.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Add Product </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title">
                                Products 
                                <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-product-list.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Product List</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-product-grid.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Product Grid</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title">
                                Transactions 
                                <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-transaction-list.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Transaction List</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-transaction-detail.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Transaction Detail</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title">
                                Sellers 
                                <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-seller-list.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Seller List</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-seller-detail.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Seller Detail</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="side-menu-light-reviews.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Reviews </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="side-menu-light-inbox.html" className="side-menu">
                    <div className="side-menu__icon"> <i data-lucide="inbox"></i> </div>
                    <div className="side-menu__title"> Inbox </div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-file-manager.html" className="side-menu">
                    <div className="side-menu__icon"> <i data-lucide="hard-drive"></i> </div>
                    <div className="side-menu__title"> File Manager </div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-point-of-sale.html" className="side-menu">
                    <div className="side-menu__icon"> <i data-lucide="credit-card"></i> </div>
                    <div className="side-menu__title"> Point of Sale </div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-chat.html" className="side-menu">
                    <div className="side-menu__icon"> <i data-lucide="message-square"></i> </div>
                    <div className="side-menu__title"> Chat </div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-post.html" className="side-menu">
                    <div className="side-menu__icon"> <i data-lucide="file-text"></i> </div>
                    <div className="side-menu__title"> Post </div>
                </a>
            </li>
            <li>
                <a href="side-menu-light-calendar.html" className="side-menu">
                    <div className="side-menu__icon"> <i data-lucide="calendar"></i> </div>
                    <div className="side-menu__title"> Calendar </div>
                </a>
            </li>
            <li className="side-nav__devider my-6"></li>
            <li>
                <a href="javascript:;" className="side-menu">
                    <div className="side-menu__icon"> <i data-lucide="edit"></i> </div>
                    <div className="side-menu__title">
                        Crud 
                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-crud-data-list.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Data List </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-crud-form.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Form </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="javascript:;" className="side-menu">
                    <div className="side-menu__icon"> <i data-lucide="users"></i> </div>
                    <div className="side-menu__title">
                        Users 
                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-users-layout-1.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Layout 1 </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-users-layout-2.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Layout 2 </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-users-layout-3.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Layout 3 </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="javascript:;" className="side-menu">
                    <div className="side-menu__icon"> <i data-lucide="trello"></i> </div>
                    <div className="side-menu__title">
                        Profile 
                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-profile-overview-1.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Overview 1 </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-profile-overview-2.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Overview 2 </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-profile-overview-3.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Overview 3 </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="javascript:;" className="side-menu">
                    <div className="side-menu__icon"> <i data-lucide="layout"></i> </div>
                    <div className="side-menu__title">
                        Pages 
                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title">
                                Wizards 
                                <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-wizard-layout-1.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wizard-layout-2.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Layout 2</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wizard-layout-3.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Layout 3</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title">
                                Blog 
                                <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-blog-layout-1.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-blog-layout-2.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Layout 2</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-blog-layout-3.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Layout 3</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title">
                                Pricing 
                                <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-pricing-layout-1.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-pricing-layout-2.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Layout 2</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title">
                                Invoice 
                                <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-invoice-layout-1.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-invoice-layout-2.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Layout 2</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title">
                                FAQ 
                                <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-faq-layout-1.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Layout 1</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-faq-layout-2.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Layout 2</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-faq-layout-3.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Layout 3</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="login-light-login.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Login </div>
                        </a>
                    </li>
                    <li>
                        <a href="login-light-register.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Register </div>
                        </a>
                    </li>
                    <li>
                        <a href="main-light-error-page.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Error Page </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-update-profile.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Update profile </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-change-password.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Change Password </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li className="side-nav__devider my-6"></li>
            <li>
                <a href="javascript:;" className="side-menu">
                    <div className="side-menu__icon"> <i data-lucide="inbox"></i> </div>
                    <div className="side-menu__title">
                        Components 
                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title">
                                Table 
                                <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-regular-table.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Regular Table</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-tabulator.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Tabulator</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title">
                                Overlay 
                                <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-modal.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Modal</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-slide-over.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Slide Over</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-notification.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Notification</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="side-menu-light-Tab.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Tab </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-accordion.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Accordion </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-button.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Button </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-alert.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Alert </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-progress-bar.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Progress Bar </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-tooltip.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Tooltip </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-dropdown.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Dropdown </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-typography.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Typography </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-icon.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Icon </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-loading-icon.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Loading Icon </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="javascript:;" className="side-menu">
                    <div className="side-menu__icon"> <i data-lucide="sidebar"></i> </div>
                    <div className="side-menu__title">
                        Forms 
                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-regular-form.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Regular Form </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-datepicker.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Datepicker </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-tom-select.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Tom Select </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-file-upload.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> File Upload </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title">
                                Wysiwyg Editor 
                                <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                            </div>
                        </a>
                        <ul className="">
                            <li>
                                <a href="side-menu-light-wysiwyg-editor-classic.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Classic</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wysiwyg-editor-inline.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Inline</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wysiwyg-editor-balloon.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Balloon</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wysiwyg-editor-balloon-block.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Balloon Block</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wysiwyg-editor-document.html" className="side-menu">
                                    <div className="side-menu__icon"> <i data-lucide="zap"></i> </div>
                                    <div className="side-menu__title">Document</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="side-menu-light-validation.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Validation </div>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="javascript:;" className="side-menu">
                    <div className="side-menu__icon"> <i data-lucide="hard-drive"></i> </div>
                    <div className="side-menu__title">
                        Widgets 
                        <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                    </div>
                </a>
                <ul className="">
                    <li>
                        <a href="side-menu-light-chart.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Chart </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-slider.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Slider </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-image-zoom.html" className="side-menu">
                            <div className="side-menu__icon"> <i data-lucide="activity"></i> </div>
                            <div className="side-menu__title"> Image Zoom </div>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
     );
}
 
export default SideNav;