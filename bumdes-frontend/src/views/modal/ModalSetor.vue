<template>
    <div class="modal fade" tabindex="-1" id="modalsetor">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Form Setoran Pinjaman</h5>
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
                <form id="formsetor" autocomplete="off">
                    <div class="modal-body">
                        <input type="text" hidden value="" id="ids" name="id">
                        <input type="text" hidden value="" id="niks" name="nik">
                        <div class="row mb-5">
                            <div class="col-md-12">
                                <label for="exampleFormControlInput1" class="required form-label">Jumlah
                                    Setoran</label>
                                <input type="text" class="form-control" placeholder="Jumlah Setoran" id="setoran"
                                    name="setoran" required />
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-md-12">
                                <label for="exampleFormControlInput1" class="required form-label">Tanggal
                                    Setoran</label>
                                <input type="text" class="form-control" placeholder="Tanggal Setoran" id="tglsetor"
                                    name="tglsetor" required />
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-md-12">
                                <label for="exampleFormControlInput1" class="required form-label">Status
                                    Pinjaman</label>
                                <select class="form-control" id="statuspinjaman" name="status" required>
                                    <option value="belum">Belum Melakukan Pembayaran</option>
                                    <option value="proses">Dalam Proses Pembayaran</option>
                                    <option value="selesai">Lunas</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger btn-hover-rotate-end" data-bs-dismiss="modal"><i
                                class="fas fa-window-close"></i> Close</button>
                        <button type="submit" class="btn btn-primary btn-hover-rotate-start" id="bsavestore"><i
                                class="fas fa-paper-plane"></i> Save Data</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


