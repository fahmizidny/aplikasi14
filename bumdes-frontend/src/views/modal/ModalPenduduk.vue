<template>
    <div class="modal fade" tabindex="-1" id="modal">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Form Penduduk</h5>
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
                <form id="formpenduduk" autocomplete="off">
                    <input type="text" hidden value="" id="idk" name="id">
                    <div class="modal-body">
                        <div class="row mb-5">
                            <div class="col-md-3">
                                <label for="exampleFormControlInput1" class="required form-label">Nik</label>
                                <input type="text" class="form-control" placeholder="Nik" id="nik" name="nik"
                                    required />
                            </div>
                            <div class="col-md-3">
                                <label for="exampleFormControlInput1" class="required form-label">Nama Lengkap</label>
                                <input type="text" class="form-control" placeholder="Nama Sesuai KTP" id="nama"
                                    name="nama" required />
                            </div>
                            <div class="col-md-3">
                                <label for="exampleFormControlInput1" class="required form-label">Jenis Kelamin</label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check form-check-custom form-check-solid">
                                            <input class="form-check-input" type="radio" value="L" id="L" name="gender"
                                                checked>
                                            <label class="form-check-label" for="flexRadioChecked">Laki-laki</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check form-check-custom form-check-solid">
                                            <input class="form-check-input" type="radio" value="P" id="P" name="gender">
                                            <label class="form-check-label" for="flexRadioChecked">Perempuan</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="exampleFormControlInput1" class="required form-label">Tanggal Lahir</label>
                                <input type="text" class="form-control" placeholder="Tanggal Lahir" id="tgl" name="tgl"
                                    required />
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-md-3">
                                <label for="exampleFormControlInput1" class="required form-label">Nama Dusun</label>
                                <input type="text" class="form-control" placeholder="Nama Dusun" id="dusun" name="dusun"
                                    required />
                            </div>
                            <div class="col-md-3">
                                <label for="exampleFormControlInput1" class="required form-label">RT / RW</label>
                                <div class="row">
                                    <div class="col-md-5">
                                        <input type="text" class="form-control" placeholder="RT" id="rt" name="rt"
                                            required />

                                    </div>
                                    <span class="col-md-1" style="text-align:center;padding-top:10px">/</span>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" placeholder="RW" id="rw" name="rw"
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="exampleFormControlInput1" class="required form-label">Desa</label>
                                <input type="text" class="form-control" placeholder="Desa" value="Alaskandang" readonly
                                    id="desa" name="desa" required />
                            </div>
                            <div class="col-md-3">
                                <label for="exampleFormControlInput1" class="required form-label">Agama</label>
                                <select name="agama" id="agama" class="form-control" required>
                                    <option value="islam">Islam</option>
                                    <option value="protestan">Protestan</option>
                                    <option value="katolik">Katolik</option>
                                    <option value="hindu">Hindu</option>
                                    <option value="buddha">Buddha</option>
                                    <option value="khonghucu">Khonghucu</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col-md-3">
                                <label for="exampleFormControlInput1" class="required form-label">Pekerjaan</label>
                                <input type="text" class="form-control" placeholder="Pekerjaan" id="pekerjaan"
                                    name="pekerjaan" required />
                            </div>
                            <div class="col-md-3">
                                <label for="exampleFormControlInput1" class="required form-label">Kontak Person</label>
                                <input type="text" class="form-control" placeholder="Kontak Person" id="kontak"
                                    name="kontak" required />
                            </div>
                            <div class="col-md-3">
                                <label for="exampleFormControlInput1" class="required form-label">Status
                                    Perkawinan</label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check form-check-custom form-check-solid">
                                            <input class="form-check-input" type="radio" value="kawin" id="k"
                                                name="status" checked>
                                            <label class="form-check-label" for="flexRadioChecked">Kawin</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check form-check-custom form-check-solid">
                                            <input class="form-check-input" type="radio" value="belum kawin" id="b"
                                                name="status">
                                            <label class="form-check-label" for="flexRadioChecked">Belum Kawin</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger btn-hover-rotate-end" data-bs-dismiss="modal"><i
                                class="fas fa-window-close"></i> Close</button>
                        <button type="submit" class="btn btn-primary btn-hover-rotate-start" id="bsavependuduk"><i
                                class="fas fa-paper-plane"></i> Save changes</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>
