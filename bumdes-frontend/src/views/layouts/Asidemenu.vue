<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

var url = router.currentRoute.value;
var jabatan = sessionStorage.getItem('jabatan');
</script>

<template>
    <div id="kt_aside" class="aside" data-kt-drawer="true" data-kt-drawer-name="aside"
        data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_aside_mobile_toggle">
        <!--begin::Aside Toolbarl-->
        <div class="aside-toolbar flex-column-auto" id="kt_aside_toolbar">
            <!--begin::Aside user-->
            <!--begin::User-->
            <div class="aside-user d-flex align-items-sm-center justify-content-center py-5">
                <!--begin::Symbol-->
                <div class="symbol symbol-50px">
                    <img src="src/assets/media/avatars/blank.png" alt="" />
                </div>
                <!--end::Symbol-->
                <!--begin::Wrapper-->
                <div class="aside-user-info flex-row-fluid flex-wrap ms-5">
                    <!--begin::Section-->
                    <div class="d-flex">
                        <!--begin::Info-->
                        <div class="flex-grow-1 me-2">
                            <!--begin::Username-->
                            <a href="#" class="text-white text-hover-primary fs-6 fw-bold">
                                Administrator
                            </a>
                            <!--end::Username-->
                            <!--begin::Description-->
                            <span class="text-gray-600 fw-bold d-block fs-8 mb-1">BUMDes</span>
                            <!--end::Description-->
                            <!--begin::Label-->
                            <div class="d-flex align-items-center text-success fs-9">
                                <span class="bullet bullet-dot bg-success me-1"></span>online
                            </div>
                            <!--end::Label-->
                        </div>
                        <!--end::Info-->
                        <!--begin::User menu-->
                        <div class="me-n2">
                            <!--begin::Action-->
                            <a href="#" class="btn btn-icon btn-sm btn-active-color-primary mt-n2"
                                data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start"
                                data-kt-menu-overflow="true">
                                <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
                                <span class="svg-icon svg-icon-muted svg-icon-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path opacity="0.3"
                                            d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
                                            fill="black" />
                                        <path
                                            d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
                                            fill="black" />
                                    </svg>
                                </span>
                                <!--end::Svg Icon-->
                            </a>
                            <!--begin::Menu-->
                            <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
                                data-kt-menu="true">
                                <div class="menu-item px-5">
                                    <a href="javascript:logout()" @click="logout()" class="menu-link px-5">Sign Out</a>
                                </div>
                            </div>
                            <!--end::Menu-->
                            <!--end::Action-->
                        </div>
                        <!--end::User menu-->
                    </div>
                    <!--end::Section-->
                </div>
                <!--end::Wrapper-->
            </div>
            <!--end::User-->
            <!--begin::Aside search-->
            <div class="aside-search py-5">
            </div>
            <!--end::Aside search-->
            <!--end::Aside user-->
        </div>
        <!--end::Aside Toolbarl-->
        <!--begin::Aside menu-->


        <div class="aside-menu flex-column-fluid">
            <!--begin::Aside Menu-->
            <div class="hover-scroll-overlay-y px-2 my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-dependencies="{default: '#kt_aside_toolbar, #kt_aside_footer', lg: '#kt_header, #kt_aside_toolbar, #kt_aside_footer'}"
                data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="5px">
                <!--begin::Menu-->
                <div class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
                    id="#kt_aside_menu" data-kt-menu="true">
                    <div class="menu-item">
                        <div class="menu-content pb-2">
                            <span class="menu-section text-muted text-uppercase fs-8 ls-1">Dashboard</span>
                        </div>
                    </div>
                    <div class="menu-item">
                        <a class="menu-link" :class="{ active: url.name === 'dashboard' }" href="dashboard">
                            <span class="menu-icon">
                                <span class="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <rect x="2" y="2" width="9" height="9" rx="2" fill="black" />
                                        <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black" />
                                        <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black" />
                                        <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black" />
                                    </svg>
                                </span>
                            </span>
                            <span class="menu-title">Dashboard</span>
                        </a>
                    </div>
                    <div class="menu-item" :class="{ 'off': jabatan !== 'admin' }">
                        <div class="menu-content pt-8 pb-2">
                            <span class="menu-section text-muted text-uppercase fs-8 ls-1">Master Data</span>
                        </div>
                    </div>
                    <div data-kt-menu-trigger="click" class="menu-item menu-accordion"
                        :class="{ 'here show': url.name === 'admin' || url.name === 'penduduk' || url.name === 'barang', 'off': jabatan !== 'admin' }">
                        <span class="menu-link">
                            <span class="menu-icon">
                                <span class="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
                                            fill="black" />
                                        <rect opacity="0.3" x="8" y="3" width="8" height="8" rx="4" fill="black" />
                                    </svg>
                                </span>
                            </span>
                            <span class="menu-title">Master Data</span>
                            <span class="menu-arrow"></span>
                        </span>
                        <div class="menu-sub menu-sub-accordion menu-active-bg">
                            <div class="menu-item">
                                <a class="menu-link" href="admin" :class="{ active: url.name === 'admin' }">
                                    <span class="menu-bullet">
                                        <span class="bullet bullet-dot"></span>
                                    </span>
                                    <span class="menu-title">Admin</span>
                                </a>
                            </div>
                            <div class="menu-item">
                                <a class="menu-link" href="penduduk" :class="{ active: url.name === 'penduduk' }">
                                    <span class="menu-bullet">
                                        <span class="bullet bullet-dot"></span>
                                    </span>
                                    <span class="menu-title">Penduduk</span>
                                </a>
                            </div>
                            <div class="menu-item">
                                <a class="menu-link" href="barang" :class="{ active: url.name === 'barang' }">
                                    <span class="menu-bullet">
                                        <span class="bullet bullet-dot"></span>
                                    </span>
                                    <span class="menu-title">Barang</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-content pb-2">
                            <span class="menu-section text-muted text-uppercase fs-8 ls-1">Transaksi</span>
                        </div>
                    </div>
                    <div data-kt-menu-trigger="click" class="menu-item menu-accordion"
                        :class="{ 'here show': url.name === 'cafe' || url.name === 'pinjaman' || url.name === 'sewabarang' }">
                        <span class="menu-link">
                            <span class="menu-icon">
                                <span class="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <path opacity="0.3"
                                            d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                            fill="black"></path>
                                        <path
                                            d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                            fill="black"></path>
                                    </svg>
                                </span>
                            </span>
                            <span class="menu-title">Rekapan Bulanan</span>
                            <span class="menu-arrow"></span>
                        </span>
                        <div class="menu-sub menu-sub-accordion menu-active-bg">
                            <div class="menu-item">
                                <a class="menu-link" href="cafe" :class="{ active: url.name === 'cafe' }">
                                    <span class="menu-bullet">
                                        <span class="bullet bullet-dot"></span>
                                    </span>
                                    <span class="menu-title">Setoran Cafe</span>
                                </a>
                            </div>
                            <div class="menu-item">
                                <a class="menu-link" href="pinjaman" :class="{ active: url.name === 'pinjaman' }">
                                    <span class="menu-bullet">
                                        <span class="bullet bullet-dot"></span>
                                    </span>
                                    <span class="menu-title">Setoran Pinjaman Uang</span>
                                </a>
                            </div>
                            <div class="menu-item">
                                <a class="menu-link" href="sewabarang" :class="{ active: url.name === 'sewabarang' }">
                                    <span class="menu-bullet">
                                        <span class="bullet bullet-dot"></span>
                                    </span>
                                    <span class="menu-title">Setoran Sewa Barang</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end::Menu-->
            </div>
            <!--end::Aside Menu-->
        </div>

        <!--end::Aside menu-->

    </div>
</template>

<style>
.off {
    display: none;
}
</style>
<script>
function logout() {
    sessionStorage.setItem('id', '');
    sessionStorage.setItem('nama', '');
    sessionStorage.setItem('email', '');
    sessionStorage.setItem('username', '');
    sessionStorage.setItem('password', '');
    sessionStorage.setItem('jabatan', '');
    document.location = 'login';
}
</script>
