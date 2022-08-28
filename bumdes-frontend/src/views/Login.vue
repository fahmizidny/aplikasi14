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
                            <h1 class="fw-bolder fs-2qx pb-5 pb-md-10" style="color: #fff;">Aplikasi BUMDes Sumber Bumi
                            </h1>
                            <!--end::Title-->
                            <!--begin::Description-->
                            <p class="fw-bold fs-2" style="color: #fff;">Yuk Monitoring Pengajuan <br />Pinjaman
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
                        <div class="w-lg-700px p-10 p-lg-15 mx-auto">
                            <form class="form w-100 rounded border p-10" id="form">
                                <div class="text-center mb-10">
                                    <img alt="Logo" src="src/assets/media/logos/logo.png" class="h-100px mb-10" />
                                    <h1 class="text-dark mb-3">Sign In to Aplikasi BUMDes</h1>
                                    <div class="text-gray-400 fw-bold fs-4">Aplikasi
                                        <a href="#" class="link-primary fw-bolder">BUMDes Sumber Bumi</a>
                                    </div>
                                </div>
                                <div class="fv-row mb-10">
                                    <label class="form-label fs-6 fw-bolder text-dark">Username</label>
                                    <input class="form-control form-control-solid border" type="text" name="username"
                                        placeholder="Username" autocomplete="off" required />
                                </div>
                                <div class="fv-row mb-10">
                                    <div class="d-flex flex-stack mb-2">
                                        <label class="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                                    </div>
                                    <input class="form-control form-control-solid border" type="password"
                                        name="password" placeholder="Password" autocomplete="off" required />
                                </div>
                                <!--begin::Actions-->
                                <div class="text-center">
                                    <!--begin::Submit button-->
                                    <button type="submit" id="blogin" class="btn btn-lg btn-primary w-100 mb-5">
                                        <span class="indicator-label">Login</span>
                                    </button>
                                </div>
                                <!--end::Actions-->
                            </form>
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
$(function () {
    $('#blogin').click(function (e) {
        e.preventDefault();
        var form = $('#form');
        if (form[0].checkValidity() === false) {
            form.addClass('was-validated');
        } else {
            form.removeClass('was-validated');
            var data = form.serialize();
            // console.log(data);
            Swal.fire({
                title: 'Please Wait!',
                icon: 'info',
                text: 'Loading.........',
                buttonsStyling: !1,
                confirmButtonText: "Selesai",
                customClass: {
                    confirmButton: "btn btn-warning"
                }
            });
            $.post('http://localhost/backend/api/admin/validasi', data, function (res) {
                Swal.close();
                if (res.success == 1) {
                    pesan('success', "Berhasil Login");
                    sessionStorage.setItem('id', res.data[0].id_admin);
                    sessionStorage.setItem('nama', res.data[0].nama);
                    sessionStorage.setItem('email', res.data[0].email);
                    sessionStorage.setItem('username', res.data[0].username);
                    sessionStorage.setItem('password', res.data[0].password);
                    sessionStorage.setItem('jabatan', res.data[0].jabatan);
                    if (res.data[0].jabatan == 'admin') {
                        document.location = 'dashboard';
                    } else {
                        document.location = 'cafe';
                    }

                } else {
                    pesan('error', "Username & Password Tidak Cocok");
                }
            }, 'json')
        }
    });
});
</script>