<template>
    <div class="modal fade" tabindex="-1" id="modalsewa">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Form Sewa Barang</h5>
                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-icon-primary" data-bs-dismiss="modal">
                        <span class="svg-icon svg-icon-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                    transform="rotate(-45 6 17.3137)" fill="black" />
                                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                                    fill="black" />
                            </svg>
                        </span>
                    </div>
                    <!--end::Close-->
                </div>
                <form id="formsewa" autocomplete="off">
                    <div class="modal-body">
                        <div class="row mb-5">
                            <div class="col-md-12">
                                <label for="exampleFormControlInput1" class="required form-label">Kode Formulir</label>
                                <select class="form-control" id="formulir" name="kode" required style="width: 100%;">

                                </select>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-md-12">
                                <label for="exampleFormControlInput1" class="required form-label">Bayar
                                    DP</label>
                                <input type="text" class="form-control" placeholder="Bayar DP" id="dp" name="dp"
                                    required />
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-md-12">
                                <div class="d-flex align-items-center position-relative my-1 mb-10">
                                    <span class="svg-icon svg-icon-1 position-absolute ms-6">
                                        <i class="bi bi-search fs-3"></i>
                                    </span>
                                    <input type="text" data-kt-docs-table-filter="searchbarang"
                                        class="form-control form-control-solid w-250px ps-15"
                                        placeholder="Search Data" />
                                </div>
                                <table id="tblbarang" class="table align-middle table-row-dashed fs-6 gy-5">
                                    <!--begin::Table head-->
                                    <thead>
                                        <!--begin::Table row-->
                                        <tr class="text-center text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                            <th>No</th>
                                            <th>Nama Barang</th>
                                            <th>Harga</th>
                                            <th>Stok</th>
                                            <th>Jumlah Sewa</th>
                                            <th>Total Biaya</th>
                                            <th>Status Sewa</th>
                                            <th>Konfirmasi</th>
                                        </tr>
                                        <!--end::Table row-->
                                    </thead>
                                    <!--end::Table head-->
                                </table>
                                <!--end::Table-->
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger btn-hover-rotate-end" data-bs-dismiss="modal"><i
                                class="fas fa-window-close"></i> Close</button>
                        <button type="submit" class="btn btn-primary btn-hover-rotate-start" id="bsavedp"><i
                                class="fas fa-paper-plane"></i> Save DP</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>


<script>

</script>
