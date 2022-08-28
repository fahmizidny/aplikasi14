<template>
    <div class="modal fade" tabindex="-1" id="modal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Form Barang</h5>
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
                <form id="formcafe" autocomplete="off">
                    <input type="text" hidden value="" id="id" name="id">
                    <div class="modal-body">
                        <div class="row mb-5">
                            <div class="col-md-12">
                                <label for="exampleFormControlInput1" class="required form-label">Tanggal
                                    Setoran</label>
                                <input type="text" class="form-control" placeholder="Tanggal Setoran" id="tglsetor"
                                    name="tgl" style="width: 100%!important;" />
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-md-12">
                                <label for="exampleFormControlInput1" class="required form-label">Laba</label>
                                <input type="text" class="form-control" placeholder="Laba Harian" id="laba" name="laba"
                                    required />
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger btn-hover-rotate-end" data-bs-dismiss="modal"><i
                                class="fas fa-window-close"></i> Close</button>
                        <button type="submit" class="btn btn-primary btn-hover-rotate-start" id="bsavecafe"><i
                                class="fas fa-paper-plane"></i> Save changes</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>
