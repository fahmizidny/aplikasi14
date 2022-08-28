<script setup>
import Asidemenu from '@/views/layouts/Asidemenu.vue'
import Topmenu from '@/views/layouts/Topmenu.vue'
import ModalAdmin from '../modal/ModalAdmin.vue';


</script>

<template>

    <body id="kt_body" class="header-tablet-and-mobile-fixed aside-enabled">
        <!--begin::Main-->
        <!--begin::Root-->
        <div class="d-flex flex-column flex-root">
            <!--begin::Page-->
            <div class="page d-flex flex-row flex-column-fluid">

                <!--begin::Aside-->
                <Asidemenu />
                <!--end::Aside-->

                <!--begin::Wrapper-->
                <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

                    <!--begin::Header-->
                    <Topmenu />
                    <!--end::Header-->


                    <!-- Content -->
                    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                        <!--begin::Post-->
                        <div class="post d-flex flex-column-fluid" id="kt_post">
                            <!--begin::Container-->
                            <div id="kt_content_container" class="container-xxl">
                                <div class="row">
                                    <div class="col-md-12">
                                        <!--begin::Card-->
                                        <div class="card card-flush">
                                            <!--begin::Card header-->
                                            <div class="card-header pt-8">
                                                <div class="card-title">
                                                    <!--begin::Search-->
                                                    <div class="d-flex align-items-center position-relative my-1">
                                                        <!--begin::Icon-->
                                                        <div class="symbol symbol-circle me-5">
                                                            <div
                                                                class="symbol-label bg-transparent text-primary border border-secondary border-dashed">
                                                                <!--begin::Svg Icon | path: icons/duotune/abstract/abs020.svg-->
                                                                <span class="svg-icon svg-icon-2x svg-icon-primary">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path opacity="0.3"
                                                                            d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z"
                                                                            fill="black" />
                                                                        <path
                                                                            d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z"
                                                                            fill="black" />
                                                                    </svg>
                                                                </span>
                                                                <!--end::Svg Icon-->
                                                            </div>
                                                        </div>
                                                        <!--end::Icon-->
                                                        <!--begin::Title-->
                                                        <div class="d-flex flex-column">
                                                            <h2 class="mb-1">Admin BUMDes</h2>
                                                            <div class="text-muted fw-bolder">
                                                                <h6 style="color: #009ef7;">BUMDes Sumber Bumi
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <!--end::Title-->
                                                    </div>
                                                    <!--end::Search-->
                                                </div>
                                                <!--begin::Card toolbar-->
                                                <div class="card-toolbar">
                                                    <!--begin::Toolbar-->
                                                    <div class="d-flex justify-content-end"
                                                        data-kt-filemanager-table-toolbar="base">

                                                        <!--begin::Export-->
                                                        <button type="button"
                                                            class="btn btn-primary btn-hover-rotate-end me-3"
                                                            @click="addadmin()">
                                                            <!--begin::Svg Icon | path: icons/duotune/files/fil013.svg-->
                                                            <span class="svg-icon svg-icon-2">
                                                                <i class="bi bi-plus-circle fs-3"></i>
                                                            </span>
                                                            <!--end::Svg Icon-->New Data
                                                        </button>
                                                        <!--end::Export-->
                                                    </div>
                                                    <!--end::Toolbar-->
                                                </div>
                                                <!--end::Card toolbar-->
                                            </div>
                                            <!--end::Card header-->

                                            <!--begin::Card body-->
                                            <div class="card-body">
                                                <br>
                                                <!--begin::Search-->
                                                <div class="d-flex align-items-center position-relative my-1">
                                                    <span class="svg-icon svg-icon-1 position-absolute ms-6">
                                                        <i class="bi bi-search fs-3"></i>
                                                    </span>
                                                    <input type="text" data-kt-docs-table-filter="searchadmin"
                                                        class="form-control form-control-solid w-250px ps-15"
                                                        placeholder="Search Data" />
                                                </div>
                                                <br>
                                                <!--end::Search-->
                                                <br>
                                                <table id="tbladmin"
                                                    class="table align-middle table-row-dashed fs-6 gy-5">
                                                    <!--begin::Table head-->
                                                    <thead>
                                                        <!--begin::Table row-->
                                                        <tr
                                                            class="text-center text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                                            <th>No</th>
                                                            <th>Nama</th>
                                                            <th>Email</th>
                                                            <th>Username</th>
                                                            <th>Jabatan</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                        <!--end::Table row-->
                                                    </thead>
                                                    <!--end::Table head-->
                                                </table>
                                                <!--end::Table-->
                                            </div>
                                            <!--end::Card body-->
                                        </div>
                                        <!--end::Card-->
                                    </div>
                                </div>


                            </div>
                            <!--end::Container-->
                        </div>
                        <!--end::Post-->
                    </div>
                    <!-- End Content -->


                </div>
                <!--end::Wrapper-->

            </div>
            <!--end::Page-->
        </div>
        <!--end::Root-->

    </body>
    <ModalAdmin />
</template>

<script>
var tbladmin, id;
$(function () {
    // if (sessionStorage.getItem('jabatan') == 'null') {
    //     document.location = 'login';
    // }
    /** show data in table */
    tbladmin = $('#tbladmin').DataTable({
        "ajax": {
            url: "http://localhost/backend/api/admin",
            type: "get",
        },
        destroy: true,
        responsive: true,
        "aLengthMenu": [
            [10, 25, 50, 500, -1],
            [10, 25, 50, 500, "All"]
        ],
        "iDisplayLength": 10,
        "language": {
            search: "",
            searchPlaceholder: "Search Data"
        },
    });
    document.querySelector('[data-kt-docs-table-filter="searchadmin"]').addEventListener("keyup", (function (t) {
        tbladmin.search(t.target.value).draw()
    }));

    /** show data in table */

    /** Edit Data */
    $('#tbladmin tbody').on('click', '#edit', function (e) {
        var id = $(this).data('id');
        Swal.fire({
            title: 'Please Wait!',
            icon: 'info',
            text: 'Loading.........',
            buttonsStyling: !1,
            confirmButtonText: "Selesai",
            customClass: {
                confirmButton: "btn btn-info"
            }
        });
        $.get('http://localhost/backend/api/admin/tampil/' + id, function (res) {
            swal.close();
            $('#id').val(id);
            $('#modal').modal('show');
            $('#nama').val(res.data[0].nama);
            $('#email').val(res.data[0].email);
            $('#username').val(res.data[0].username);
            $('#password').val(res.data[0].password);
            $('#jabatan').val(res.data[0].jabatan);
        }, 'json');
    });
    /** Edit Data */

    /** Hapus Data */
    $('#tbladmin tbody').on('click', '#hapus', function (e) {
        id = $(this).data('id');
        Swal.fire({
            title: "konfimasi?",
            text: "Apakah mau menghapus data ini!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!"
        }).then(function (result) {
            if (result.value) {
                $.get('http://localhost/backend/api/admin/hapus/' + id, function (res) {
                    if (res.success == 1) {
                        pesan('success', 'Data Terhapus');
                        tbladmin.ajax.reload(null, false);
                    } else {
                        pesan('error', 'Failed')
                    }
                }, 'json')
            }
        });
    });
    /** Hapus Data */

    /** Save & Ubah Data */
    $('#bsaveadmin').click(function (e) {
        e.preventDefault();

        var form = $('#formadmin');
        if (form[0].checkValidity() === false) {
            form.addClass('was-validated');
        } else {
            form.removeClass('was-validated');
            var data = form.serialize();
            Swal.fire({
                title: 'Please Wait!',
                icon: 'info',
                text: 'Loading.........',
                buttonsStyling: !1,
                confirmButtonText: "Selesai",
                customClass: {
                    confirmButton: "btn btn-info"
                }
            });
            $.post('http://localhost/backend/api/admin/add', data, function (res) {
                Swal.close();
                if (res.success == 1) {
                    pesan('success', 'Berhasil Tersimpan');
                    $('#modal').modal('hide');
                    tbladmin.ajax.reload(null, false);
                    $("#formadmin")[0].reset();
                } else {
                    pesan('error', 'Failed');
                }

            }, 'json')
        }
    });

})
function addadmin() {
    $('#formadmin')[0].reset();
    $('#modal').modal('show');
}
</script>