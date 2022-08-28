<script setup>
import Asidemenu from '@/views/layouts/Asidemenu.vue'
import Topmenu from '@/views/layouts/Topmenu.vue'
import ModalCafe from '../modal/ModalCafe.vue';

var jabatan = sessionStorage.getItem('jabatan');
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
                                                            <h2 class="mb-1">Setoran Cafe Harian</h2>
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
                                                            :class="{ 'off': jabatan !== 'admin' }" @click="addcafe()">
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
                                                <div class="rounded p-10">
                                                    <ul
                                                        class="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6 nav-pills">
                                                        <li class="nav-item">
                                                            <a class="nav-link text-dark"
                                                                :class="{ 'off': jabatan !== 'admin', 'active': jabatan === 'admin' }"
                                                                data-bs-toggle="tab" href="#kt_tab_pane_4">Setoran
                                                                Cafe</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link text-dark"
                                                                :class="{ 'active': jabatan !== 'admin' }"
                                                                data-bs-toggle="tab" href="#kt_tab_pane_5">Rekapan
                                                                Setoran</a>
                                                        </li>
                                                    </ul>
                                                    <div class="tab-content" id="myTabContent">
                                                        <div class="tab-pane fade"
                                                            :class="{ 'off': jabatan !== 'admin', 'show active': jabatan === 'admin' }"
                                                            id="kt_tab_pane_4" role="tabpanel">
                                                            <!--begin::Search-->
                                                            <div
                                                                class="d-flex align-items-center position-relative my-1 mb-10">
                                                                <span
                                                                    class="svg-icon svg-icon-1 position-absolute ms-6">
                                                                    <i class="bi bi-search fs-3"></i>
                                                                </span>
                                                                <input type="text"
                                                                    data-kt-docs-table-filter="searchcafe"
                                                                    class="form-control form-control-solid w-250px ps-15"
                                                                    placeholder="Search Data" />
                                                            </div>
                                                            <table id="tblcafe"
                                                                class="table align-middle table-row-dashed fs-6 gy-5">
                                                                <!--begin::Table head-->
                                                                <thead>
                                                                    <!--begin::Table row-->
                                                                    <tr
                                                                        class="text-center text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                                                        <th>No</th>
                                                                        <th>Tanggal Setoran</th>
                                                                        <th>Laba Harian</th>
                                                                        <th>Actions</th>
                                                                    </tr>
                                                                    <!--end::Table row-->
                                                                </thead>
                                                                <!--end::Table head-->
                                                            </table>
                                                            <!--end::Table-->
                                                        </div>
                                                        <div class="tab-pane fade"
                                                            :class="{ 'show active': jabatan !== 'admin' }"
                                                            id="kt_tab_pane_5" role="tabpanel">
                                                            <div class="card card-flush mb-10 rounded border">
                                                                <div class="card-body">
                                                                    <div class="row mb-10">
                                                                        <div class="col-md-3">
                                                                            <label for="exampleFormControlInput1"
                                                                                class="required form-label">Tahun
                                                                                Report</label>
                                                                            <select name="tahun" id="tahuncafe"
                                                                                class="form-control border">
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <button type="button"
                                                                        class="btn btn-primary btn-hover-rotate-end me-3"
                                                                        :class="{ 'off': jabatan !== 'admin' }"
                                                                        @click="sendBot()">
                                                                        <!--begin::Svg Icon | path: icons/duotune/files/fil013.svg-->
                                                                        <span class="svg-icon svg-icon-2">
                                                                            <i class="fas fa-paper-plane"></i>
                                                                        </span>
                                                                        <!--end::Svg Icon-->Send Bot Telegram
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div class="rounded border" style="padding: 10px;">
                                                                <div class="d-flex align-items-center position-absolute"
                                                                    style="right: 80px;margin-top: 0px;">
                                                                    <span
                                                                        class="svg-icon svg-icon-1 position-absolute ms-6">
                                                                        <i class="bi bi-search fs-3"></i>
                                                                    </span>
                                                                    <input type="text"
                                                                        data-kt-docs-table-filter="searchrekapancafe"
                                                                        class="form-control border w-250px ps-15"
                                                                        placeholder="Search Data" />
                                                                </div>
                                                                <br>
                                                                <table id="tblrekapancafe"
                                                                    class="table align-middle table-row-dashed fs-6 gy-5">
                                                                    <!--begin::Table head-->
                                                                    <thead>
                                                                        <!--begin::Table row-->
                                                                        <tr
                                                                            class="text-center text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                                                            <th>No</th>
                                                                            <th>Bulan</th>
                                                                            <th>Laba</th>
                                                                        </tr>
                                                                        <!--end::Table row-->
                                                                    </thead>
                                                                    <!--end::Table head-->
                                                                </table>
                                                            </div>
                                                            <!--end::Table-->
                                                        </div>
                                                    </div>
                                                </div>

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
    <ModalCafe />
</template>

<script>
var tblcafe, tblrekapancafe;
$(function () {
    $('#tahuncafe').select2();
    loopcafe();

    $('#tglsetor').datepicker({
        autoclose: true,
        format: 'dd/mm/yyyy'
    }).datepicker('setDate', new Date());

    $('#laba').keyup(function () {
        $(this).val(formatRupiah($(this).val(), ''));
    });



    /** show data in table */
    tblcafe = showTable('tblcafe', 'http://localhost/backend/api/cafe');

    tblrekapancafe = showTableRekapan();;

    document.querySelector('[data-kt-docs-table-filter="searchcafe"]').addEventListener("keyup", (function (t) {
        tblcafe.search(t.target.value).draw()
    }));
    document.querySelector('[data-kt-docs-table-filter="searchrekapancafe"]').addEventListener("keyup", (function (t) {
        tblrekapancafe.search(t.target.value).draw()
    }));
    /** show data in table */

    /** Edit Data */
    $('#tblcafe tbody').on('click', '#edit', function (e) {
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
        $.get('http://localhost/backend/api/cafe/tampil/' + id, function (res) {
            swal.close();
            $("#formcafe")[0].reset();
            $('#id').val(id);
            $('#modal').modal('show');
            $('#tglsetor').datepicker('setDate', new Date(res.data[0].tanggal_setor));
            $('#laba').val(formatRupiah(res.data[0].setoran_laba.toString(), ''));
        }, 'json');
    });
    /** Edit Data */

    /** Hapus Data */
    $('#tblcafe tbody').on('click', '#hapus', function (e) {
        var id = $(this).data('id');
        Swal.fire({
            title: "konfimasi?",
            text: "Apakah mau menghapus data ini!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!"
        }).then(function (result) {
            if (result.value) {
                $.get('http://localhost/backend/api/cafe/hapus/' + id, function (res) {
                    if (res.success == 1) {
                        pesan('success', 'Data Terhapus');
                        tblcafe.ajax.reload(null, false);
                    } else {
                        pesan('error', 'Failed')
                    }
                }, 'json')
            }
        });
    });
    /** Hapus Data */

    /** Save & Ubah Data */
    $('#bsavecafe').click(function (e) {
        e.preventDefault();

        var form = $('#formcafe');
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
            $.post('http://localhost/backend/api/cafe/tambah', data, function (res) {
                Swal.close();
                if (res.success == 1) {
                    $("#formcafe")[0].reset();
                    pesan('success', 'Berhasil Tersimpan');
                    $('#modal').modal('hide');
                    tblcafe.ajax.reload(null, false);
                } else {
                    pesan('error', 'Failed');
                }
            }, 'json')
        }
    });

})
function addcafe() {
    $('#formcafe')[0].reset();
    $('#modal').modal('show');
}


function loopcafe() {
    var start = moment('2022').subtract(3, 'year');
    var end = moment().add(1, 'year');
    var tahun = "<option value=''>Pilih Tahun</option>";
    while (start.isBefore(end, 'year')) {
        // console.log(`Loop at ${start.format('YYYY')}`);
        tahun += "<option value='" + start.format('YYYY') + "'>" + start.format('YYYY') + "</option>";
        start.add(1, 'year');
    }
    $('#tahuncafe').html(tahun);
    $('#tahuncafe').val(moment().format('YYYY')).trigger('change')
}

function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
        var separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? '' + rupiah : '');
}


/** Function menampilkan Data */
function showTable(id, link) {
    return $('#' + id).DataTable({
        "ajax": {
            url: link,
            type: "get",
        },
        destroy: true,
        responsive: true,
        "aLengthMenu": [
            [12, 25, 50, 500, -1],
            [12, 25, 50, 500, "All"]
        ],
        "iDisplayLength": 12,
        "language": {
            search: "",
            searchPlaceholder: "Search Data"
        },
    });
}

function showTableRekapan() {
    var tahun = $('#tahuncafe').val();
    return $('#tblrekapancafe').DataTable({
        "ajax": {
            url: "http://localhost/backend/api/cafe/rekapan/" + tahun,
            type: "get",
        },
        destroy: true,
        responsive: true,
        "aLengthMenu": [
            [12, 25, 50, 500, -1],
            [12, 25, 50, 500, "All"]
        ],
        "iDisplayLength": 12,
        "language": {
            search: "",
            searchPlaceholder: "Search Data"
        },
        dom: 'Bfrtip',
        searching: false,
        buttons: {
            buttons: [
                { extend: 'excel', className: 'btn btn-dark btn-hover-rotate-end' },
                { extend: 'pdf', className: 'btn btn-pdf btn-hover-rotate-start' }
            ]
        }
    });
}


function sendBot() {
    var tahun = $('#tahuncafe').val();
    $.post('http://localhost/backend/api/senbotcafe', { 'tahun': tahun }, function (res) {
        if (res.success) {
            pesan('success', 'Bot Telegram Terkirim');
        } else {
            pesan('error', 'Bot Telegram Failed');
        }
    }, 'json')
}
</script>


