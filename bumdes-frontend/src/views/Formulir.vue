<script setup>
import FormulirSimpanPinjam from './formulir/FormulirSimpanPinjam.vue'
import FormulirSewaBarang from './formulir/FormulirSewaBarang.vue'
import InfoCafe from './formulir/InfoCafe.vue'
</script>

<template>

    <body id="kt_body" class="bg-body">
        <!--begin::Main-->
        <!--begin::Root-->
        <div class="d-flex flex-column flex-root">
            <!--begin::Authentication - Sign-in -->
            <div class="d-flex flex-column flex-lg-row flex-column-fluid">
                <!--begin::Aside-->
                <div class="d-flex flex-column flex-lg-row-auto w-xl-600px positon-xl-relative background">
                    <!--begin::Wrapper-->
                    <div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
                        <!--begin::Content-->
                        <div class="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20">
                            <!--begin::Logo-->
                            <a href="#" class="py-9 mb-5">
                                <img alt="Logo" src="src/assets/media/logos/logo.png" class="h-100px" />
                            </a>
                            <!--end::Logo-->
                            <!--begin::Title-->
                            <h1 class="fw-bolder fs-2qx pb-5 pb-md-10" style="color: #fff;">Pendaftaran Aplikasi BUMDes
                                Sumber Bumi
                            </h1>
                            <!--end::Title-->
                            <!--begin::Description-->
                            <p class="fw-bold fs-2" style="color: #fff;">Yuk Isi Formulir Untuk Melakukan <br />Pinjaman
                                Uang Atau Sewa Barang
                            </p>
                            <!--end::Description-->
                        </div>
                        <!--end::Content-->
                    </div>
                    <!--end::Wrapper-->
                </div>
                <!--end::Aside-->
                <!--begin::Body-->
                <div class="d-flex flex-column flex-lg-row-fluid py-10">
                    <!--begin::Content-->
                    <div class="d-flex flex-center flex-column flex-column-fluid">
                        <div class="p-10 p-lg-15 mx-auto" style="width: 100%!important;">
                            <div class="rounded border p-10">
                                <ul class="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6 nav-pills">
                                    <li class="nav-item">
                                        <a class="nav-link active text-primary" style="font-size: 16px;"
                                            data-bs-toggle="tab" href="#kt_tab_pane_4">Formulir
                                            Pinjaman Uang</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-primary" style="font-size: 16px;" data-bs-toggle="tab"
                                            href="#kt_tab_pane_5">Formulir
                                            Sewa Barang</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-primary" style="font-size: 16px;" data-bs-toggle="tab"
                                            href="#kt_tab_pane_6">
                                            Info Cafe</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="kt_tab_pane_4" role="tabpanel">
                                        <FormulirSimpanPinjam />
                                    </div>
                                    <div class="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
                                        <FormulirSewaBarang />
                                    </div>
                                    <div class="tab-pane fade" id="kt_tab_pane_6" role="tabpanel">
                                        <InfoCafe />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Body-->
            </div>
        </div>
        <!--end::Root-->
    </body>
    <!--end::Body-->
</template>

<style scoped>
.background {
    background-color: #0095E8;
    height: 1024px;
}

.border {
    border-style: solid;
    border-width: 1px;
    border-color: #0095E8 !important;
}
</style>


<script>

</script>