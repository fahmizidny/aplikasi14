<script setup>
import Asidemenu from '@/views/layouts/Asidemenu.vue'
import Topmenu from '@/views/layouts/Topmenu.vue'
import ModalTolak from '../modal/ModalTolak.vue'
import ModalKonfirmasi from '../modal/ModalKonfirmasi.vue';
import ModalSetor from '../modal/ModalSetor.vue';
import ModalHistoriSetoran from '../modal/ModalHistoriSetoran.vue';

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
                                                            <h2 class="mb-1">Data Pinjaman</h2>
                                                            <div class="text-muted fw-bolder">
                                                                <h6 style="color: #009ef7;">BUMDes Sumber Bumi
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <!--end::Title-->
                                                    </div>
                                                    <!--end::Search-->
                                                </div>
                                            </div>
                                            <!--end::Card header-->

                                            <!--begin::Card body-->
                                            <div class="card-body">
                                                <div class="py-5">
                                                    <div class="rounded border p-10">
                                                        <ul
                                                            class="nav nav-tabs nav-line-tabs nav-line-tabs-2x mb-5 fs-6 nav-pills">
                                                            <li class="nav-item">
                                                                <a class="nav-link text-dark"
                                                                    :class="{ 'off': jabatan !== 'admin', 'active': jabatan === 'admin' }"
                                                                    data-bs-toggle="tab" href="#kt_tab_pane_4">Pengajuan
                                                                    Pinjaman</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link text-dark" data-bs-toggle="tab"
                                                                    :class="{ 'off': jabatan !== 'admin' }"
                                                                    href="#kt_tab_pane_5">Setoran Pinjaman</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link text-dark" data-bs-toggle="tab"
                                                                    :class="{ 'active': jabatan !== 'admin' }"
                                                                    href="#kt_tab_pane_6">Rekapan Pinjaman</a>
                                                            </li>
                                                        </ul>
                                                        <div class="tab-content" id="myTabContent">
                                                            <div class="tab-pane fade" id="kt_tab_pane_4"
                                                                :class="{ 'off': jabatan !== 'admin', 'show active': jabatan === 'admin' }"
                                                                role="tabpanel">
                                                                <div
                                                                    class="d-flex align-items-center position-relative my-1 mb-10">
                                                                    <span
                                                                        class="svg-icon svg-icon-1 position-absolute ms-6">
                                                                        <i class="bi bi-search fs-3"></i>
                                                                    </span>
                                                                    <input type="text"
                                                                        data-kt-docs-table-filter="searchpengajuan"
                                                                        class="form-control form-control-solid w-250px ps-15"
                                                                        placeholder="Search Data" />
                                                                </div>
                                                                <table id="tblpengajuan"
                                                                    class="table align-middle table-row-dashed fs-6 gy-5">
                                                                    <!--begin::Table head-->
                                                                    <thead>
                                                                        <!--begin::Table row-->
                                                                        <tr
                                                                            class="text-center text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                                                            <th>No</th>
                                                                            <th>Kode Formulir</th>
                                                                            <th>Nik</th>
                                                                            <th>Nama</th>
                                                                            <th>Tanggal Pengajuan</th>
                                                                            <th>Jatuh Tempo</th>
                                                                            <th>Jumlah Pinjaman</th>
                                                                            <th>Konfrimasi</th>
                                                                        </tr>
                                                                        <!--end::Table row-->
                                                                    </thead>
                                                                    <!--end::Table head-->
                                                                </table>
                                                                <!--end::Table-->
                                                            </div>
                                                            <div class="tab-pane fade" id="kt_tab_pane_5"
                                                                :class="{ 'off': jabatan !== 'admin' }" role="tabpanel">
                                                                <div
                                                                    class="d-flex align-items-center position-relative my-1 mb-10">
                                                                    <span
                                                                        class="svg-icon svg-icon-1 position-absolute ms-6">
                                                                        <i class="bi bi-search fs-3"></i>
                                                                    </span>
                                                                    <input type="text"
                                                                        data-kt-docs-table-filter="searchsetoran"
                                                                        class="form-control form-control-solid w-250px ps-15"
                                                                        placeholder="Search Data" />
                                                                </div>
                                                                <table id="tblsetoran"
                                                                    class="table align-middle table-row-dashed fs-6 gy-5">
                                                                    <!--begin::Table head-->
                                                                    <thead>
                                                                        <!--begin::Table row-->
                                                                        <tr
                                                                            class="text-center text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                                                            <th>No</th>
                                                                            <th>Kode Formulir</th>
                                                                            <th>Nik</th>
                                                                            <th>Nama</th>
                                                                            <th>Kontak</th>
                                                                            <th>Tanggal Pengajuan</th>
                                                                            <th>Jatuh Tempo</th>
                                                                            <th>Tanggal Pembayaran</th>
                                                                            <th>Sudah Bayar</th>
                                                                            <th>Sisa Pinjaman</th>
                                                                            <th>Jumlah Pinjaman</th>
                                                                            <th>Add setoran</th>
                                                                        </tr>
                                                                        <!--end::Table row-->
                                                                    </thead>
                                                                    <!--end::Table head-->
                                                                </table>
                                                                <!--end::Table-->
                                                            </div>
                                                            <div class="tab-pane fade"
                                                                :class="{ 'show active': jabatan !== 'admin' }"
                                                                id="kt_tab_pane_6" role="tabpanel">
                                                                <div class="row mb-5 py-10">
                                                                    <!--begin::Label-->
                                                                    <label
                                                                        class="col-lg-2 col-form-label required fw-bold fs-6">Tanggal
                                                                        Jatuh Tempo</label>
                                                                    <!--end::Label-->
                                                                    <!--begin::Col-->
                                                                    <div
                                                                        class="col-lg-8 row fv-row fv-plugins-icon-container">
                                                                        <div class="col-md-4">
                                                                            <select name="bulan" id="bulanp"
                                                                                class="form-control border">
                                                                                <option value="">Pilih Bulan</option>
                                                                                <option value="01">Januari</option>
                                                                                <option value="02">Februari</option>
                                                                                <option value="03">Maret</option>
                                                                                <option value="04">April</option>
                                                                                <option value="05">Mei</option>
                                                                                <option value="06">Juni</option>
                                                                                <option value="07">July</option>
                                                                                <option value="08">Agustus</option>
                                                                                <option value="09">September</option>
                                                                                <option value="10">Oktober</option>
                                                                                <option value="11">November</option>
                                                                                <option value="12">Desember</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="col-md-4">
                                                                            <select name="tahun" id="tahunp"
                                                                                class="form-control border">
                                                                            </select>
                                                                        </div>
                                                                        <div class="col-md-4">
                                                                            <button type="button"
                                                                                class="btn btn-primary btn-hover-rotate-end me-3"
                                                                                :class="{ 'off': jabatan !== 'admin' }"
                                                                                @click="sendBotPinjaman()">
                                                                                <!--begin::Svg Icon | path: icons/duotune/files/fil013.svg-->
                                                                                <span class="svg-icon svg-icon-2">
                                                                                    <i class="fas fa-paper-plane"></i>
                                                                                </span>
                                                                                <!--end::Svg Icon-->Send Bot Telegram
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <!--end::Col-->
                                                                </div>

                                                                <div class="d-flex align-items-center position-absolute"
                                                                    style="right: 60px;margin-bottom: 10px;">
                                                                    <span
                                                                        class="svg-icon svg-icon-1 position-absolute ms-6">
                                                                        <i class="bi bi-search fs-3"></i>
                                                                    </span>
                                                                    <input type="text"
                                                                        data-kt-docs-table-filter="searchrekapan"
                                                                        class="form-control border w-250px ps-15"
                                                                        placeholder="Search Data" />
                                                                </div>
                                                                <br>
                                                                <br>
                                                                <table id="tblrekapanpinjaman"
                                                                    class="table align-middle table-row-dashed fs-6 gy-5">
                                                                    <!--begin::Table head-->
                                                                    <thead>
                                                                        <!--begin::Table row-->
                                                                        <tr
                                                                            class="text-center text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                                                            <th>No</th>
                                                                            <th>Kode Formulir</th>
                                                                            <th>Nik</th>
                                                                            <th>Nama</th>
                                                                            <th>Kontak</th>
                                                                            <th>Tanggal Pengajuan</th>
                                                                            <th>Jatuh Tempo</th>
                                                                            <th>Jumlah Pinjaman</th>
                                                                        </tr>
                                                                        <!--end::Table row-->
                                                                    </thead>
                                                                    <!--end::Table head-->
                                                                </table>
                                                                <!--end::Table-->
                                                            </div>
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
        <ModalKonfirmasi />
        <ModalTolak />
        <ModalSetor />
        <ModalHistoriSetoran />
    </body>
</template>

<script>
var tblpengajuan, tblsetoran, tblrekapanpinjaman, tblhistori;
$(function () {

    $('#bulanp').select2();
    $('#tahunp').select2();
    looppinjaman();

    $('#jumlah').keyup(function () {
        $(this).val(formatRupiah($(this).val(), ''));
    });

    $('#setoran').keyup(function () {
        $(this).val(formatRupiah($(this).val(), ''));
    });
    if ($.fn.DataTable.isDataTable("#tblpengajuan")) {
        $("#tblpengajuan").DataTable().clear().draw();
        $("#tblpengajuan").dataTable().fnDestroy();
    }

    if ($.fn.DataTable.isDataTable("#tblsetoran")) {
        $("#tblsetoran").DataTable().clear().draw();
        $("#tblsetoran").dataTable().fnDestroy();
    }

    if ($.fn.DataTable.isDataTable("#tblrekapan")) {
        $("#tblrekapan").DataTable().clear().draw();
        $("#tblrekapan").dataTable().fnDestroy();
    }


    tblpengajuan = $('#tblpengajuan').DataTable({
        "ajax": {
            url: 'http://localhost/backend/api/pinjaman/pengajuan',
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

    document.querySelector('[data-kt-docs-table-filter="searchpengajuan"]').addEventListener("keyup", (function (t) {
        tblpengajuan.search(t.target.value).draw()
    }));

    tblsetoran = $('#tblsetoran').DataTable({
        "ajax": {
            url: 'http://localhost/backend/api/setoran',
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

    document.querySelector('[data-kt-docs-table-filter="searchsetoran"]').addEventListener("keyup", (function (t) {
        tblsetoran.search(t.target.value).draw()
    }));
    tblrekapanpinjaman = showTablePinjaman();

    $('#bulanp').change(function (e) {
        tblrekapanpinjaman = showTablePinjaman();
    })
    $('#tahunp').change(function (e) {
        tblrekapanpinjaman = showTablePinjaman();
    })
    document.querySelector('[data-kt-docs-table-filter="searchrekapan"]').addEventListener("keyup", (function (t) {
        tblrekapanpinjaman.search(t.target.value).draw()
    }));
    /** show data in table */

    /** Konfirmasi pengajuan */
    KonfirmasiPengajuan();
    /** Konfirmasi Pengajuan */

    /** Tolak Pengajuan */
    TolakPengajuan();
    /** Tolak Pengajuan */

    /** Tambah Setoran */
    tambahSetoran();
    /** Tambah Setoran */


    /** Histori Setoran */
    historiSetoran();
    /** Histori Setoran */

    /** Konfirmasi Pengajuan */
    $('#bsavekonfirmasi').click(function (e) {
        e.preventDefault();

        var form = $('#formkonfirmasi');
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
            $.post('http://localhost/backend/api/pinjaman/setuju', data, function (res) {
                Swal.close();
                if (res.success == 1) {
                    pesan('success', 'Berhasil Tersimpan');
                    $('#modalkonfirmasi').modal('hide');
                    tblpengajuan.ajax.reload(null, false);
                    tblsetoran.ajax.reload(null, false);
                    tblrekapan.ajax.reload(null, false);
                    $("#formkonfirmasi")[0].reset();
                } else {
                    pesan('error', 'Failed');
                }

            }, 'json')
        }
    });
    /** Konfirmasi Pengajuan */

    /** Tolak Pengajuan */
    $('#bsavetolak').click(function (e) {
        e.preventDefault();

        var form = $('#formtolak');
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
            $.post('http://localhost/backend/api/pinjaman/tolak', data, function (res) {
                Swal.close();
                if (res.success == 1) {
                    pesan('success', 'Berhasil Tersimpan');
                    $('#modaltolak').modal('hide');
                    tblpengajuan.ajax.reload(null, false);
                    tblsetoran.ajax.reload(null, false);
                    tblrekapan.ajax.reload(null, false);
                    $("#formtolak")[0].reset();
                } else {
                    pesan('error', 'Failed');
                }

            }, 'json')
        }
    });
    /** Tolak Pengajuan */

    /** Save Setoran */
    $('#bsavestore').click(function (e) {
        e.preventDefault();

        var form = $('#formsetor');
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
            $.post('http://localhost/backend/api/setoran/tambahsetoran', data, function (res) {
                Swal.close();
                if (res.success == 1) {
                    pesan('success', 'Berhasil Tersimpan');
                    $('#modalsetor').modal('hide');
                    tblsetoran.ajax.reload(null, false);
                    tblrekapan.ajax.reload(null, false);
                    $("#formsetor")[0].reset();
                } else {
                    pesan('error', 'Failed');
                }

            }, 'json')
        }
    });
    /** Save Setoran */


});

function TolakPengajuan() {
    $('#tblpengajuan tbody').on('click', '#tolak', function (e) {
        var kode = $(this).data('kode');
        Swal.fire({
            title: "konfimasi?",
            text: "Apakah anda mau nolak peminjaman ini?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, tolak!"
        }).then(function (result) {
            if (result.value) {
                $('#kodet').val(kode);
                $.get('http://localhost/backend/api/pinjaman/detail/' + kode, function (res) {
                    $('#jumlaht').val(formatRupiah(res.data[0].jumlah_pinjaman, ''))
                    $('#modaltolak').modal('show');
                }, 'json');

            }
        });
    });
}

function KonfirmasiPengajuan() {
    $('#tblpengajuan tbody').on('click', '#setuju', function (e) {
        var kode = $(this).data('kode');
        $('#kode').val(kode);
        $('#tanggal').datepicker({
            autoclose: true,
            format: 'dd/mm/yyyy'
        }).datepicker('setDate', new Date());
        $.get('http://localhost/backend/api/pinjaman/detail/' + kode, function (res) {
            $('#tanggal').datepicker('setDate', new Date(res.data[0].jangka_waktu));
            $('#jumlah').val(formatRupiah(res.data[0].jumlah_pinjaman, ''))
            $('#modalkonfirmasi').modal('show');
        }, 'json');
    });
}

/** Function menampilkan Data */

/** Tambah Setoran */
function tambahSetoran() {
    $('#tblsetoran tbody').on('click', '#setoran', function (e) {
        var id = $(this).data('id');
        var nik = $(this).data('nik');
        var status = $(this).data('status');
        $('#ids').val(id);
        $('#niks').val(nik);
        $('#statuspinjaman').val(status);
        $('#tglsetor').datepicker({
            autoclose: true,
            format: 'dd/mm/yyyy'
        }).datepicker('setDate', new Date());

        $('#modalsetor').modal('show');
    });
}
/** Tambah Setoran */

function historiSetoran() {
    $('#tblrekapanpinjaman tbody').on('click', '#show', function (e) {
        var kode = $(this).data('kode');
        tblhistori = showTable('tblhistori', 'http://localhost/backend/api/setoran/histori/' + kode);
        $('#modalhistori').modal('show');
    });
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

function looppinjaman() {
    var start = moment('2022').subtract(3, 'year');
    var end = moment().add(1, 'year');
    var tahun = "<option value=''>Pilih Tahun</option>";
    while (start.isBefore(end, 'year')) {
        // console.log(`Loop at ${start.format('YYYY')}`);
        tahun += "<option value='" + start.format('YYYY') + "'>" + start.format('YYYY') + "</option>";
        start.add(1, 'year');
    }
    $('#tahunp').html(tahun);
    $('#tahunp').val(moment().format('YYYY')).trigger('change')
    // $('#bulanp').val(moment().format('MM')).trigger('change')
}

function showTablePinjaman() {
    var tahun = $('#tahunp').val() + '-' + $('#bulanp').val();
    return $('#tblrekapanpinjaman').DataTable({
        "ajax": {
            url: "http://localhost/backend/api/setoran/rekapan/" + tahun,
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
        dom: 'Bfrtip',
        buttons: {
            buttons: [
                { extend: 'excel', className: 'btn btn-dark btn-hover-rotate-end' },
                { extend: 'pdf', className: 'btn btn-pdf btn-hover-rotate-start' }
            ]
        }
    });
}

function showTable(id, url) {
    return $('#' + id).DataTable({
        "ajax": {
            url: url,
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
        }
    });
}


function sendBotPinjaman() {
    var tahun = $('#tahunp').val();
    $.post('http://localhost/backend/api/senbotpinjaman', { 'tahun': tahun }, function (res) {
        if (res.success == 1) {
            pesan('success', 'Bot Telegram Terkirim');
        } else {
            pesan('error', 'Bot Telegram Failed');
        }
    }, 'json')
}
</script>