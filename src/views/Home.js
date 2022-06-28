import { Link } from 'react-router-dom';
import SideNav from '../components/SideNav';

const Home = () => {
    return ( 
        <>
       
        <div className="flex mt-[4.7rem] md:mt-0 overflow-hidden">

           <SideNav/>

            <div className="content">
                <div className="top-bar -mx-4 px-4 md:mx-0 md:px-0">
                    <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="">Application</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                    </nav>
                    <div className="intro-x relative mr-3 sm:mr-6">
                        <div className="search hidden sm:block">
                            <input type="text" className="search__input form-control border-transparent" placeholder="Search..."></input>
                            <i data-lucide="search" className="search__icon dark:text-slate-500"></i> 
                        </div>
                        <Link to="" className="notification sm:hidden" href=""> <i data-lucide="search" className="notification__icon dark:text-slate-500"></i> </Link>
                        <div className="search-result">
                            <div className="search-result__content">
                                <div className="search-result__content__title">Pages</div>
                                <div className="mb-5">
                                    <Link to="" className="flex items-center">
                                        <div className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-lucide="inbox"></i> </div>
                                        <div className="ml-3">Mail Settings</div>
                                    </Link>
                                    <Link to="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-lucide="users"></i> </div>
                                        <div className="ml-3">Users & Permissions</div>
                                    </Link>
                                    <Link to="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-lucide="credit-card"></i> </div>
                                        <div className="ml-3">Transactions Report</div>
                                    </Link>
                                </div>
                                <div className="search-result__content__title">Users</div>
                                <div className="mb-5">
                                    <Link to="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 image-fit">
                                            <img alt="Midone - HTML Admin Template" className="rounded-full" src={require('../assets/dist/images/profile-15.jpg')}></img>
                                        </div>
                                        <div className="ml-3">Angelina Jolie</div>
                                        <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">angelinajolie@left4code.com</div>
                                    </Link>
                                    <Link to="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 image-fit">
                                            <img alt="Midone - HTML Admin Template" className="rounded-full" src={require('../assets/dist/images/profile-10.jpg')}></img>
                                        </div>
                                        <div className="ml-3">Christian Bale</div>
                                        <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">christianbale@left4code.com</div>
                                    </Link>
                                    <Link to="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 image-fit">
                                            <img alt="Midone - HTML Admin Template" className="rounded-full" src={require('../assets/dist/images/profile-8.jpg')}></img>
                                        </div>
                                        <div className="ml-3">Tom Cruise</div>
                                        <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">tomcruise@left4code.com</div>
                                    </Link>
                                    <Link to="" className="flex items-center mt-2">
                                        <div className="w-8 h-8 image-fit">
                                            <img alt="Midone - HTML Admin Template" className="rounded-full" src={require('../assets/dist/images/profile-11.jpg')}></img>
                                        </div>
                                        <div className="ml-3">Russell Crowe</div>
                                        <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">russellcrowe@left4code.com</div>
                                    </Link>
                                </div>
                                <div className="search-result__content__title">Products</div>
                                <Link to="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src={require('../assets/dist/images/preview-13.jpg')}></img>
                                    </div>
                                    <div className="ml-3">Oppo Find X2 Pro</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Smartphone &amp; Tablet</div>
                                </Link>
                                <Link to="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src={require('../assets/dist/images/preview-11.jpg')}></img>
                                    </div>
                                    <div className="ml-3">Sony A7 III</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Photography</div>
                                </Link>
                                <Link to="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src={require('../assets/dist/images/preview-3.jpg')}></img>
                                    </div>
                                    <div className="ml-3">Nikon Z6</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Photography</div>
                                </Link>
                                <Link to="" className="flex items-center mt-2">
                                    <div className="w-8 h-8 image-fit">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src={require('../assets/dist/images/preview-7.jpg')}></img>
                                    </div>
                                    <div className="ml-3">Nikon Z6</div>
                                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">Photography</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="intro-x dropdown mr-auto sm:mr-6">
                        <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button" aria-expanded="false" data-tw-toggle="dropdown"> <i data-lucide="bell" className="notification__icon dark:text-slate-500"></i> </div>
                        <div className="notification-content pt-2 dropdown-menu">
                            <div className="notification-content__box dropdown-content">
                                <div className="notification-content__title">Notifications</div>
                                <div className="cursor-pointer relative flex items-center ">
                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src={require('../assets/dist/images/profile-15.jpg')}></img>
                                        <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                           <Link to="" className="font-medium truncate mr-5">Angelina Jolie</Link> 
                                            <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                        </div>
                                        <div className="w-full truncate text-slate-500 mt-0.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src={require('../assets/dist/images/profile-10.jpg')}></img>
                                        <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                           <Link to="" className="font-medium truncate mr-5">Christian Bale</Link> 
                                            <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">01:10 PM</div>
                                        </div>
                                        <div className="w-full truncate text-slate-500 mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src={require('../assets/dist/images/profile-8.jpg')}></img>
                                        <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                           <Link to="" className="font-medium truncate mr-5">Tom Cruise</Link> 
                                            <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">05:09 AM</div>
                                        </div>
                                        <div className="w-full truncate text-slate-500 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src={require('../assets/dist/images/profile-11.jpg')}></img>
                                        <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                           <Link to="" className="font-medium truncate mr-5">Russell Crowe</Link> 
                                            <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">06:05 AM</div>
                                        </div>
                                        <div className="w-full truncate text-slate-500 mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer relative flex items-center mt-5">
                                    <div className="w-12 h-12 flex-none image-fit mr-1">
                                        <img alt="Midone - HTML Admin Template" className="rounded-full" src={require('../assets/dist/images/profile-11.jpg')}></img>
                                        <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                                    </div>
                                    <div className="ml-2 overflow-hidden">
                                        <div className="flex items-center">
                                           <Link to="" className="font-medium truncate mr-5">Kate Winslet</Link> 
                                            <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">03:20 PM</div>
                                        </div>
                                        <div className="w-full truncate text-slate-500 mt-0.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="intro-x dropdown w-8 h-8">
                        <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in" role="button" aria-expanded="false" data-tw-toggle="dropdown">
                            <img alt="Midone - HTML Admin Template" src={require('../assets/dist/images/profile-3.jpg')}></img>
                        </div>
                        <div className="dropdown-menu w-56">
                            <ul className="dropdown-content bg-primary text-white">
                                <li className="p-2">
                                    <div className="font-medium">Angelina Jolie</div>
                                    <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">DevOps Engineer</div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider border-white/[0.08]"></hr>
                                </li>
                                <li>
                                    <Link to="" className="dropdown-item hover:bg-white/5"> <i data-lucide="user" className="w-4 h-4 mr-2"></i> Profile </Link>
                                </li>
                                <li>
                                    <Link to="" className="dropdown-item hover:bg-white/5"> <i data-lucide="edit" className="w-4 h-4 mr-2"></i> Add Account </Link>
                                </li>
                                <li>
                                    <Link to="" className="dropdown-item hover:bg-white/5"> <i data-lucide="lock" className="w-4 h-4 mr-2"></i> Reset Password </Link>
                                </li>
                                <li>
                                    <Link to="" className="dropdown-item hover:bg-white/5"> <i data-lucide="help-circle" className="w-4 h-4 mr-2"></i> Help </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider border-white/[0.08]"></hr>
                                </li>
                                <li>
                                    <Link to="" className="dropdown-item hover:bg-white/5"> <i data-lucide="toggle-right" className="w-4 h-4 mr-2"></i> Logout </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 2xl:col-span-9">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12 mt-8">
                                <div className="intro-y flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        General Report
                                    </h2>
                                    <Link to="" className="ml-auto flex items-center text-primary"> <i data-lucide="refresh-ccw" className="w-4 h-4 mr-3"></i> Reload Data </Link>
                                </div>
                                <div className="grid grid-cols-12 gap-6 mt-5">
                                    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div className="report-box zoom-in">
                                            <div className="box p-5">
                                                <div className="flex">
                                                    <i data-lucide="shopping-cart" className="report-box__icon text-primary"></i> 
                                                    <div className="ml-auto">
                                                        <div className="report-box__indicator bg-success tooltip cursor-pointer" title="33% Higher than last month"> 33% <i data-lucide="chevron-up" className="w-4 h-4 ml-0.5"></i> </div>
                                                    </div>
                                                </div>
                                                <div className="text-3xl font-medium leading-8 mt-6">4.710</div>
                                                <div className="text-base text-slate-500 mt-1">Item Sales</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div className="report-box zoom-in">
                                            <div className="box p-5">
                                                <div className="flex">
                                                    <i data-lucide="credit-card" className="report-box__icon text-pending"></i> 
                                                    <div className="ml-auto">
                                                        <div className="report-box__indicator bg-danger tooltip cursor-pointer" title="2% Lower than last month"> 2% <i data-lucide="chevron-down" className="w-4 h-4 ml-0.5"></i> </div>
                                                    </div>
                                                </div>
                                                <div className="text-3xl font-medium leading-8 mt-6">3.721</div>
                                                <div className="text-base text-slate-500 mt-1">New Orders</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div className="report-box zoom-in">
                                            <div className="box p-5">
                                                <div className="flex">
                                                    <i data-lucide="monitor" className="report-box__icon text-warning"></i> 
                                                    <div className="ml-auto">
                                                        <div className="report-box__indicator bg-success tooltip cursor-pointer" title="12% Higher than last month"> 12% <i data-lucide="chevron-up" className="w-4 h-4 ml-0.5"></i> </div>
                                                    </div>
                                                </div>
                                                <div className="text-3xl font-medium leading-8 mt-6">2.149</div>
                                                <div className="text-base text-slate-500 mt-1">Total Products</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <div className="report-box zoom-in">
                                            <div className="box p-5">
                                                <div className="flex">
                                                    <i data-lucide="user" className="report-box__icon text-success"></i> 
                                                    <div className="ml-auto">
                                                        <div className="report-box__indicator bg-success tooltip cursor-pointer" title="22% Higher than last month"> 22% <i data-lucide="chevron-up" className="w-4 h-4 ml-0.5"></i> </div>
                                                    </div>
                                                </div>
                                                <div className="text-3xl font-medium leading-8 mt-6">152.040</div>
                                                <div className="text-base text-slate-500 mt-1">Unique Visitor</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-6 mt-8">
                                <div className="intro-y block sm:flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Sales Report
                                    </h2>
                                    <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                                        <i data-lucide="calendar" className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"></i> 
                                        <input type="text" className="datepicker form-control sm:w-56 box pl-10"></input>
                                    </div>
                                </div>
                                <div className="intro-y box p-5 mt-12 sm:mt-5">
                                    <div className="flex flex-col md:flex-row md:items-center">
                                        <div className="flex">
                                            <div>
                                                <div className="text-primary dark:text-slate-300 text-lg xl:text-xl font-medium">$15,000</div>
                                                <div className="mt-0.5 text-slate-500">This Month</div>
                                            </div>
                                            <div className="w-px h-12 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"></div>
                                            <div>
                                                <div className="text-slate-500 text-lg xl:text-xl font-medium">$10,000</div>
                                                <div className="mt-0.5 text-slate-500">Last Month</div>
                                            </div>
                                        </div>
                                        <div className="dropdown md:ml-auto mt-5 md:mt-0">
                                            <button className="dropdown-toggle btn btn-outline-secondary font-normal" aria-expanded="false" data-tw-toggle="dropdown"> Filter by Category <i data-lucide="chevron-down" className="w-4 h-4 ml-2"></i> </button>
                                            <div className="dropdown-menu w-40">
                                                <ul className="dropdown-content overflow-y-auto h-32">
                                                    <li><Link to="" className="dropdown-item">PC & Laptop</Link></li>
                                                    <li><Link to="" className="dropdown-item">Smartphone</Link></li>
                                                    <li><Link to="" className="dropdown-item">Electronic</Link></li>
                                                    <li><Link to="" className="dropdown-item">Photography</Link></li>
                                                    <li><Link to="" className="dropdown-item">Sport</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="report-chart">
                                        <div className="h-[275px]">
                                            <canvas id="report-line-chart" className="mt-6 -mb-6"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
                                <div className="intro-y flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Weekly Top Seller
                                    </h2>
                                    <Link to="" className="ml-auto text-primary truncate">Show More</Link> 
                                </div>
                                <div className="intro-y box p-5 mt-5">
                                    <div className="mt-3">
                                        <div className="h-[213px]">
                                            <canvas id="report-pie-chart"></canvas>
                                        </div>
                                    </div>
                                    <div className="w-52 sm:w-auto mx-auto mt-8">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                            <span className="truncate">17 - 30 Years old</span> <span className="font-medium ml-auto">62%</span> 
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                                            <span className="truncate">31 - 50 Years old</span> <span className="font-medium ml-auto">33%</span> 
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                                            <span className="truncate">= 50 Years old</span> <span className="font-medium ml-auto">10%</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
                                <div className="intro-y flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Sales Report
                                    </h2>
                                    <Link to="" className="ml-auto text-primary truncate">Show More</Link> 
                                </div>
                                <div className="intro-y box p-5 mt-5">
                                    <div className="mt-3">
                                        <div className="h-[213px]">
                                            <canvas id="report-donut-chart"></canvas>
                                        </div>
                                    </div>
                                    <div className="w-52 sm:w-auto mx-auto mt-8">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                            <span className="truncate">17 - 30 Years old</span> <span className="font-medium ml-auto">62%</span> 
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                                            <span className="truncate">31 - 50 Years old</span> <span className="font-medium ml-auto">33%</span> 
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                                            <span className="truncate">= 50 Years old</span> <span className="font-medium ml-auto">10%</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-8 mt-6">
                                <div className="intro-y block sm:flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Official Store
                                    </h2>
                                    <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                                        <i data-lucide="map-pin" className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"></i> 
                                        <input type="text" className="form-control sm:w-56 box pl-10" placeholder="Filter by city"></input>
                                    </div>
                                </div>
                                <div className="intro-y box p-5 mt-12 sm:mt-5">
                                    <div>250 Official stores in 21 countries, click the marker to see location details.</div>
                                    <div className="report-maps mt-5 bg-slate-200 rounded-md" data-center="-6.2425342, 106.8626478" data-sources="/dist/json/location.json"></div>
                                </div>
                            </div>
                            <div className="col-span-12 xl:col-span-4 mt-6">
                                <div className="intro-y flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Weekly Best Sellers
                                    </h2>
                                </div>
                                <div className="mt-5">
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                                <img alt="Midone - HTML Admin Template" src={require('../assets/dist/images/profile-8.jpg')}></img>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Kevin Spacey</div>
                                                <div className="text-slate-500 text-xs mt-0.5">10 February 2021</div>
                                            </div>
                                            <div className="py-1 px-2 rounded-full text-xs bg-success text-white cursor-pointer font-medium">137 Sales</div>
                                        </div>
                                    </div>
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                                <img alt="Midone - HTML Admin Template" src={require('../assets/dist/images/profile-11.jpg')}></img>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Johnny Depp</div>
                                                <div className="text-slate-500 text-xs mt-0.5">2 July 2021</div>
                                            </div>
                                            <div className="py-1 px-2 rounded-full text-xs bg-success text-white cursor-pointer font-medium">137 Sales</div>
                                        </div>
                                    </div>
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                                <img alt="Midone - HTML Admin Template" src={require('../assets/dist/images/profile-7.jpg')}></img>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Denzel Washington</div>
                                                <div className="text-slate-500 text-xs mt-0.5">13 October 2021</div>
                                            </div>
                                            <div className="py-1 px-2 rounded-full text-xs bg-success text-white cursor-pointer font-medium">137 Sales</div>
                                        </div>
                                    </div>
                                    <div className="intro-y">
                                        <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                                <img alt="Midone - HTML Admin Template" src={require('../assets/dist/images/profile-9.jpg')}></img>
                                            </div>
                                            <div className="ml-4 mr-auto">
                                                <div className="font-medium">Tom Cruise</div>
                                                <div className="text-slate-500 text-xs mt-0.5">18 July 2021</div>
                                            </div>
                                            <div className="py-1 px-2 rounded-full text-xs bg-success text-white cursor-pointer font-medium">137 Sales</div>
                                        </div>
                                    </div>
                                    <Link to="" className="intro-y w-full block text-center rounded-md py-4 border border-dotted border-slate-400 dark:border-darkmode-300 text-slate-500">View More</Link> 
                                </div>
                            </div>
                            <div className="col-span-12 grid grid-cols-12 gap-6 mt-8">
                                <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                    <div className="box p-5 zoom-in">
                                        <div className="flex items-center">
                                            <div className="w-2/4 flex-none">
                                                <div className="text-lg font-medium truncate">Target Sales</div>
                                                <div className="text-slate-500 mt-1">300 Sales</div>
                                            </div>
                                            <div className="flex-none ml-auto relative">
                                                <div className="w-[90px] h-[90px]">
                                                    <canvas id="report-donut-chart-1"></canvas>
                                                </div>
                                                <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">20%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                    <div className="box p-5 zoom-in">
                                        <div className="flex">
                                            <div className="text-lg font-medium truncate mr-3">Social Media</div>
                                            <div className="py-1 px-2 flex items-center rounded-full text-xs bg-slate-100 dark:bg-darkmode-400 text-slate-500 cursor-pointer ml-auto truncate">320 Followers</div>
                                        </div>
                                        <div className="mt-1">
                                            <div className="h-[58px]">
                                                <canvas className="simple-line-chart-1 -ml-1"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                    <div className="box p-5 zoom-in">
                                        <div className="flex items-center">
                                            <div className="w-2/4 flex-none">
                                                <div className="text-lg font-medium truncate">New Products</div>
                                                <div className="text-slate-500 mt-1">1450 Products</div>
                                            </div>
                                            <div className="flex-none ml-auto relative">
                                                <div className="w-[90px] h-[90px]">
                                                    <canvas id="report-donut-chart-2"></canvas>
                                                </div>
                                                <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">45%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
                                    <div className="box p-5 zoom-in">
                                        <div className="flex">
                                            <div className="text-lg font-medium truncate mr-3">Posted Ads</div>
                                            <div className="py-1 px-2 flex items-center rounded-full text-xs bg-slate-100 dark:bg-darkmode-400 text-slate-500 cursor-pointer ml-auto truncate">180 Campaign</div>
                                        </div>
                                        <div className="mt-1">
                                            <div className="h-[58px]">
                                                <canvas className="simple-line-chart-1 -ml-1"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 mt-6">
                                <div className="intro-y block sm:flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate mr-5">
                                        Weekly Top Products
                                    </h2>
                                    <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                                        <button className="btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" className="hidden sm:block w-4 h-4 mr-2"></i> Export to Excel </button>
                                        <button className="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300"> <i data-lucide="file-text" className="hidden sm:block w-4 h-4 mr-2"></i> Export to PDF </button>
                                    </div>
                                </div>
                                <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                    <table className="table table-report sm:mt-2">
                                        <thead>
                                            <tr>
                                                <th className="whitespace-nowrap">IMAGES</th>
                                                <th className="whitespace-nowrap">PRODUCT NAME</th>
                                                <th className="text-center whitespace-nowrap">STOCK</th>
                                                <th className="text-center whitespace-nowrap">STATUS</th>
                                                <th className="text-center whitespace-nowrap">ACTIONS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="intro-x">
                                                <td className="w-40">
                                                    <div className="flex">
                                                        <div className="w-10 h-10 image-fit zoom-in">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src={require('../assets/dist/images/preview-3.jpg')} title="Uploaded at 10 February 2021"></img>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src={require('../assets/dist/images/preview-9.jpg')} title="Uploaded at 27 April 2021"></img>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src={require('../assets/dist/images/preview-4.jpg')} title="Uploaded at 15 March 2021"></img>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link to="" className="font-medium whitespace-nowrap">Oppo Find X2 Pro</Link> 
                                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Smartphone &amp; Tablet</div>
                                                </td>
                                                <td className="text-center">146</td>
                                                <td className="w-40">
                                                    <div className="flex items-center justify-center text-success"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active </div>
                                                </td>
                                                <td className="table-report__action w-56">
                                                    <div className="flex justify-center items-center">
                                                        <Link to="" className="flex items-center mr-3" href=""> <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit </Link>
                                                        <Link to="" className="flex items-center text-danger" href=""> <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="intro-x">
                                                <td className="w-40">
                                                    <div className="flex">
                                                        <div className="w-10 h-10 image-fit zoom-in">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src={require('../assets/dist/images/preview-9.jpg')} title="Uploaded at 2 July 2021"></img>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src={require('../assets/dist/images/preview-1.jpg')} title="Uploaded at 3 November 2021"></img>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src={require('../assets/dist/images/preview-14.jpg')} title="Uploaded at 10 June 2021"></img>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link to="" className="font-medium whitespace-nowrap">Dell XPS 13</Link> 
                                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">PC &amp; Laptop</div>
                                                </td>
                                                <td className="text-center">103</td>
                                                <td className="w-40">
                                                    <div className="flex items-center justify-center text-success"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active </div>
                                                </td>
                                                <td className="table-report__action w-56">
                                                    <div className="flex justify-center items-center">
                                                        <Link to="" className="flex items-center mr-3" href=""> <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit </Link>
                                                        <Link to="" className="flex items-center text-danger" href=""> <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="intro-x">
                                                <td className="w-40">
                                                    <div className="flex">
                                                        <div className="w-10 h-10 image-fit zoom-in">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src={require('../assets/dist/images/preview-14.jpg')} title="Uploaded at 13 October 2021"></img>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src={require('../assets/dist/images/preview-3.jpg')} title="Uploaded at 20 September 2021"></img>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src={require('../assets/dist/images/preview-3.jpg')} title="Uploaded at 20 January 2021"></img>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link to="" className="font-medium whitespace-nowrap">Nikon Z6</Link> 
                                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">Photography</div>
                                                </td>
                                                <td className="text-center">50</td>
                                                <td className="w-40">
                                                    <div className="flex items-center justify-center text-success"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Active </div>
                                                </td>
                                                <td className="table-report__action w-56">
                                                    <div className="flex justify-center items-center">
                                                        <Link to="" className="flex items-center mr-3" href=""> <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit </Link>
                                                        <Link to="" className="flex items-center text-danger" href=""> <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="intro-x">
                                                <td className="w-40">
                                                    <div className="flex">
                                                        <div className="w-10 h-10 image-fit zoom-in">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src={require('../assets/dist/images/preview-8.jpg')} title="Uploaded at 18 July 2021"></img>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src={require('../assets/dist/images/preview-8.jpg')} title="Uploaded at 26 April 2021"></img>
                                                        </div>
                                                        <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                            <img alt="Midone - HTML Admin Template" className="tooltip rounded-full" src={require('../assets/dist/images/preview-2.jpg')} title="Uploaded at 26 December 2021"></img>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link to="" className="font-medium whitespace-nowrap">Apple MacBook Pro 13</Link> 
                                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">PC &amp; Laptop</div>
                                                </td>
                                                <td className="text-center">50</td>
                                                <td className="w-40">
                                                    <div className="flex items-center justify-center text-danger"> <i data-lucide="check-square" className="w-4 h-4 mr-2"></i> Inactive </div>
                                                </td>
                                                <td className="table-report__action w-56">
                                                    <div className="flex justify-center items-center">
                                                        <Link to="" className="flex items-center mr-3" href=""> <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit </Link>
                                                        <Link to="" className="flex items-center text-danger" href=""> <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
                                    <nav className="w-full sm:w-auto sm:mr-auto">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <Link to="" className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-left"></i> </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link to="" className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-left"></i> </Link>
                                            </li>
                                            <li className="page-item"> <Link to="" className="page-link" href="#">...</Link> </li>
                                            <li className="page-item"> <Link to="" className="page-link" href="#">1</Link> </li>
                                            <li className="page-item active"> <Link to="" className="page-link" href="#">2</Link> </li>
                                            <li className="page-item"> <Link to="" className="page-link" href="#">3</Link> </li>
                                            <li className="page-item"> <Link to="" className="page-link" href="#">...</Link> </li>
                                            <li className="page-item">
                                                <Link to="" className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-right"></i> </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link to="" className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-right"></i> </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <select className="w-20 form-select box mt-3 sm:mt-0">
                                        <option>10</option>
                                        <option>25</option>
                                        <option>35</option>
                                        <option>50</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 2xl:col-span-3">
                        <div className="2xl:border-l -mb-10 pb-10">
                            <div className="2xl:pl-6 grid grid-cols-12 gap-x-6 2xl:gap-x-0 gap-y-6">
                                <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3 2xl:mt-8">
                                    <div className="intro-x flex items-center h-10">
                                        <h2 className="text-lg font-medium truncate mr-5">
                                            Transactions
                                        </h2>
                                    </div>
                                    <div className="mt-5">
                                        <div className="intro-x">
                                            <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                                <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                    <img alt="Midone - HTML Admin Template" src={require('../assets/dist/images/profile-8.jpg')}></img>
                                                </div>
                                                <div className="ml-4 mr-auto">
                                                    <div className="font-medium">Kevin Spacey</div>
                                                    <div className="text-slate-500 text-xs mt-0.5">10 February 2021</div>
                                                </div>
                                                <div className="text-success">+$47</div>
                                            </div>
                                        </div>
                                        <div className="intro-x">
                                            <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                                <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                    <img alt="Midone - HTML Admin Template" src={require('../assets/dist/images/profile-11.jpg')}></img>
                                                </div>
                                                <div className="ml-4 mr-auto">
                                                    <div className="font-medium">Johnny Depp</div>
                                                    <div className="text-slate-500 text-xs mt-0.5">2 July 2021</div>
                                                </div>
                                                <div className="text-success">+$50</div>
                                            </div>
                                        </div>
                                        <div className="intro-x">
                                            <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                                <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                    <img alt="Midone - HTML Admin Template" src={require('../assets/dist/images/profile-7.jpg')}></img>
                                                </div>
                                                <div className="ml-4 mr-auto">
                                                    <div className="font-medium">Denzel Washington</div>
                                                    <div className="text-slate-500 text-xs mt-0.5">13 October 2021</div>
                                                </div>
                                                <div className="text-success">+$86</div>
                                            </div>
                                        </div>
                                        <div className="intro-x">
                                            <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                                <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                    <img alt="Midone - HTML Admin Template" src={require('../assets/dist/images/profile-9.jpg')}></img>
                                                </div>
                                                <div className="ml-4 mr-auto">
                                                    <div className="font-medium">Tom Cruise</div>
                                                    <div className="text-slate-500 text-xs mt-0.5">18 July 2021</div>
                                                </div>
                                                <div className="text-danger">-$112</div>
                                            </div>
                                        </div>
                                        <div className="intro-x">
                                            <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                                <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                    <img alt="Midone - HTML Admin Template" src={require('../assets/dist/images/profile-11.jpg')}></img>
                                                </div>
                                                <div className="ml-4 mr-auto">
                                                    <div className="font-medium">Kate Winslet</div>
                                                    <div className="text-slate-500 text-xs mt-0.5">5 February 2022</div>
                                                </div>
                                                <div className="text-danger">-$50</div>
                                            </div>
                                        </div>
                                        <Link to="" className="intro-x w-full block text-center rounded-md py-3 border border-dotted border-slate-400 dark:border-darkmode-300 text-slate-500">View More</Link> 
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3">
                                    <div className="intro-x flex items-center h-10">
                                        <h2 className="text-lg font-medium truncate mr-5">
                                            Recent Activities
                                        </h2>
                                        <Link to="" className="ml-auto text-primary truncate">Show More</Link> 
                                    </div>
                                    <div className="mt-5 relative before:block before:absolute before:w-px before:h-[85%] before:bg-slate-200 before:dark:bg-darkmode-400 before:ml-5 before:mt-5">
                                        <div className="intro-x relative flex items-center mb-3">
                                            <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                                                <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                    <img alt="Midone - HTML Admin Template" src={require('../assets/dist/images/profile-8.jpg')}></img>
                                                </div>
                                            </div>
                                            <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                                <div className="flex items-center">
                                                    <div className="font-medium">Tom Cruise</div>
                                                    <div className="text-xs text-slate-500 ml-auto">07:00 PM</div>
                                                </div>
                                                <div className="text-slate-500 mt-1">Has joined the team</div>
                                            </div>
                                        </div>
                                        <div className="intro-x relative flex items-center mb-3">
                                            <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                                                <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                    <img alt="Midone - HTML Admin Template" src={require('../assets/dist/images/profile-8.jpg')}></img>
                                                </div>
                                            </div>
                                            <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                                <div className="flex items-center">
                                                    <div className="font-medium">Kevin Spacey</div>
                                                    <div className="text-xs text-slate-500 ml-auto">07:00 PM</div>
                                                </div>
                                                <div className="text-slate-500">
                                                    <div className="mt-1">Added 3 new photos</div>
                                                    <div className="flex mt-2">
                                                        <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Oppo Find X2 Pro">
                                                            <img alt="Midone - HTML Admin Template" className="rounded-md border border-white" src={require('../assets/dist/images/preview-3.jpg')}></img>
                                                        </div>
                                                        <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Dell XPS 13">
                                                            <img alt="Midone - HTML Admin Template" className="rounded-md border border-white" src={require('../assets/dist/images/preview-6.jpg')}></img>
                                                        </div>
                                                        <div className="tooltip w-8 h-8 image-fit mr-1 zoom-in" title="Nikon Z6">
                                                            <img alt="Midone - HTML Admin Template" className="rounded-md border border-white" src={require('../assets/dist/images/preview-3.jpg')}></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="intro-x text-slate-500 text-xs text-center my-4">12 November</div>
                                        <div className="intro-x relative flex items-center mb-3">
                                            <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                                                <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                    <img alt="Midone - HTML Admin Template" src={require('../assets/dist/images/profile-8.jpg')}></img>
                                                </div>
                                            </div>
                                            <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                                <div className="flex items-center">
                                                    <div className="font-medium">Sylvester Stallone</div>
                                                    <div className="text-xs text-slate-500 ml-auto">07:00 PM</div>
                                                </div>
                                                <div className="text-slate-500 mt-1">Has changed <Link to="" className="text-primary" href="">Sony Master Series A9G</Link> price and description</div>
                                            </div>
                                        </div>
                                        <div className="intro-x relative flex items-center mb-3">
                                            <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                                                <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                    <img alt="Midone - HTML Admin Template" src={require('../assets/dist/images/profile-4.jpg')}></img>
                                                </div>
                                            </div>
                                            <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                                                <div className="flex items-center">
                                                    <div className="font-medium">Tom Cruise</div>
                                                    <div className="text-xs text-slate-500 ml-auto">07:00 PM</div>
                                                </div>
                                                <div className="text-slate-500 mt-1">Has changed <Link to="" className="text-primary" href="">Samsung Galaxy S20 Ultra</Link> description</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 2xl:col-start-auto 2xl:row-start-auto mt-3">
                                    <div className="intro-x flex items-center h-10">
                                        <h2 className="text-lg font-medium truncate mr-auto">
                                            Important Notes
                                        </h2>
                                        <button data-carousel="important-notes" data-target="prev" className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"> <i data-lucide="chevron-left" className="w-4 h-4"></i> </button>
                                        <button data-carousel="important-notes" data-target="next" className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"> <i data-lucide="chevron-right" className="w-4 h-4"></i> </button>
                                    </div>
                                    <div className="mt-5 intro-x">
                                        <div className="box zoom-in">
                                            <div className="tiny-slider" id="important-notes">
                                                <div className="p-5">
                                                    <div className="text-base font-medium truncate">Lorem Ipsum is simply dummy text</div>
                                                    <div className="text-slate-400 mt-1">20 Hours ago</div>
                                                    <div className="text-slate-500 text-justify mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                                    <div className="font-medium flex mt-5">
                                                        <button type="button" className="btn btn-secondary py-1 px-2">View Notes</button>
                                                        <button type="button" className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                                    </div>
                                                </div>
                                                <div className="p-5">
                                                    <div className="text-base font-medium truncate">Lorem Ipsum is simply dummy text</div>
                                                    <div className="text-slate-400 mt-1">20 Hours ago</div>
                                                    <div className="text-slate-500 text-justify mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                                    <div className="font-medium flex mt-5">
                                                        <button type="button" className="btn btn-secondary py-1 px-2">View Notes</button>
                                                        <button type="button" className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                                    </div>
                                                </div>
                                                <div className="p-5">
                                                    <div className="text-base font-medium truncate">Lorem Ipsum is simply dummy text</div>
                                                    <div className="text-slate-400 mt-1">20 Hours ago</div>
                                                    <div className="text-slate-500 text-justify mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                                                    <div className="font-medium flex mt-5">
                                                        <button type="button" className="btn btn-secondary py-1 px-2">View Notes</button>
                                                        <button type="button" className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto">Dismiss</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 xl:col-start-1 xl:row-start-2 2xl:col-start-auto 2xl:row-start-auto mt-3">
                                    <div className="intro-x flex items-center h-10">
                                        <h2 className="text-lg font-medium truncate mr-5">
                                            Schedules
                                        </h2>
                                        <Link to="" className="ml-auto text-primary truncate flex items-center"> <i data-lucide="plus" className="w-4 h-4 mr-1"></i> Add New Schedules </Link>
                                    </div>
                                    <div className="mt-5">
                                        <div className="intro-x box">
                                            <div className="p-5">
                                                <div className="flex">
                                                    <i data-lucide="chevron-left" className="w-5 h-5 text-slate-500"></i> 
                                                    <div className="font-medium text-base mx-auto">April</div>
                                                    <i data-lucide="chevron-right" className="w-5 h-5 text-slate-500"></i> 
                                                </div>
                                                <div className="grid grid-cols-7 gap-4 mt-5 text-center">
                                                    <div className="font-medium">Su</div>
                                                    <div className="font-medium">Mo</div>
                                                    <div className="font-medium">Tu</div>
                                                    <div className="font-medium">We</div>
                                                    <div className="font-medium">Th</div>
                                                    <div className="font-medium">Fr</div>
                                                    <div className="font-medium">Sa</div>
                                                    <div className="py-0.5 rounded relative text-slate-500">29</div>
                                                    <div className="py-0.5 rounded relative text-slate-500">30</div>
                                                    <div className="py-0.5 rounded relative text-slate-500">31</div>
                                                    <div className="py-0.5 rounded relative">1</div>
                                                    <div className="py-0.5 rounded relative">2</div>
                                                    <div className="py-0.5 rounded relative">3</div>
                                                    <div className="py-0.5 rounded relative">4</div>
                                                    <div className="py-0.5 rounded relative">5</div>
                                                    <div className="py-0.5 bg-success/20 dark:bg-success/30 rounded relative">6</div>
                                                    <div className="py-0.5 rounded relative">7</div>
                                                    <div className="py-0.5 bg-primary text-white rounded relative">8</div>
                                                    <div className="py-0.5 rounded relative">9</div>
                                                    <div className="py-0.5 rounded relative">10</div>
                                                    <div className="py-0.5 rounded relative">11</div>
                                                    <div className="py-0.5 rounded relative">12</div>
                                                    <div className="py-0.5 rounded relative">13</div>
                                                    <div className="py-0.5 rounded relative">14</div>
                                                    <div className="py-0.5 rounded relative">15</div>
                                                    <div className="py-0.5 rounded relative">16</div>
                                                    <div className="py-0.5 rounded relative">17</div>
                                                    <div className="py-0.5 rounded relative">18</div>
                                                    <div className="py-0.5 rounded relative">19</div>
                                                    <div className="py-0.5 rounded relative">20</div>
                                                    <div className="py-0.5 rounded relative">21</div>
                                                    <div className="py-0.5 rounded relative">22</div>
                                                    <div className="py-0.5 bg-pending/20 dark:bg-pending/30 rounded relative">23</div>
                                                    <div className="py-0.5 rounded relative">24</div>
                                                    <div className="py-0.5 rounded relative">25</div>
                                                    <div className="py-0.5 rounded relative">26</div>
                                                    <div className="py-0.5 bg-primary/10 dark:bg-primary/50 rounded relative">27</div>
                                                    <div className="py-0.5 rounded relative">28</div>
                                                    <div className="py-0.5 rounded relative">29</div>
                                                    <div className="py-0.5 rounded relative">30</div>
                                                    <div className="py-0.5 rounded relative text-slate-500">1</div>
                                                    <div className="py-0.5 rounded relative text-slate-500">2</div>
                                                    <div className="py-0.5 rounded relative text-slate-500">3</div>
                                                    <div className="py-0.5 rounded relative text-slate-500">4</div>
                                                    <div className="py-0.5 rounded relative text-slate-500">5</div>
                                                    <div className="py-0.5 rounded relative text-slate-500">6</div>
                                                    <div className="py-0.5 rounded relative text-slate-500">7</div>
                                                    <div className="py-0.5 rounded relative text-slate-500">8</div>
                                                    <div className="py-0.5 rounded relative text-slate-500">9</div>
                                                </div>
                                            </div>
                                            <div className="border-t border-slate-200/60 p-5">
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                                                    <span className="truncate">UI/UX Workshop</span> <span className="font-medium xl:ml-auto">23th</span> 
                                                </div>
                                                <div className="flex items-center mt-4">
                                                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                                    <span className="truncate">VueJs Frontend Development</span> <span className="font-medium xl:ml-auto">10th</span> 
                                                </div>
                                                <div className="flex items-center mt-4">
                                                    <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                                                    <span className="truncate">Laravel Rest API</span> <span className="font-medium xl:ml-auto">31th</span> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-url="side-menu-dark-dashboard-overview-1.html" className="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10">
            <div className="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
            <div className="dark-mode-switcher__toggle border"></div>
        </div>
        </>
     );
}
 
export default Home;