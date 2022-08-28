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

<template>
    <form autocomplete="off" id="formsimpan">
        <input type="text" hidden id="statusp" name="status" value="pinjaman" />
        <div class="fv-row mb-5">
            <label class="form-label fs-6 fw-bolder text-dark">Kode Formulir</label>
            <input class="form-control border" type="text" id="kodep" name="kode"
                placeholder="Isi Otamatis Ketika Sudah Mengisi" readonly />
        </div>
        <div class="fv-row mb-5">
            <label class="form-label fs-6 fw-bolder text-dark">Nik</label>
            <input class="form-control border" type="text" id="nikp" name="nik"
                placeholder="Ketik nik untuk mengecek sudah terdaftar dikantor desa" />
        </div>
        <div class="fv-row mb-5">
            <label class="form-label fs-6 fw-bolder text-dark">Nama
                Lengkap</label>
            <input class="form-control border" type="text" id="namap" name="nama" placeholder="Nama Lengkap" readonly />
        </div>
        <div class="fv-row mb-5">
            <label class="form-label fs-6 fw-bolder text-dark">Alamat</label>
            <input class="form-control border" type="text" id="alamatp" name="alamat" readonly placeholder="Alamat" />
        </div>
        <div class="fv-row mb-5">
            <label class="form-label fs-6 fw-bolder text-dark">Jumlah
                Pinjaman</label>
            <input class="form-control border" type="text" id="jumlah" name="jumlah" placeholder="Jumlah Pinjaman" />
        </div>
        <div class="fv-row mb-5">
            <label class="form-label fs-6 fw-bolder text-dark">Keperluan
                Pinjaman</label>
            <input class="form-control border" type="text" id="keperluan" name="keperluan" placeholder="Keperluan" />
        </div>
        <div class="fv-row mb-5">
            <label class="form-label fs-6 fw-bolder text-dark">Jangka
                Waktu</label>
            <div class="row">
                <div class="col-md-6">
                    <input class="form-control border" type="number" id="lama" name="lama" placeholder="Cth : 1" />
                </div>
                <div class="col-md-6">
                    <select name="bulan" id="bulan" class="form-control border">
                        <option value="hari">Hari</option>
                        <option value="bulan">Bulan</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="text-center">
            <button type="button" id="bsavepinjaman" class="btn btn-lg btn-info w-100 mb-5 btn-hover-end">
                <i class="bi bi-send fs-3"></i> Daftar Formulir
            </button>
            <button type="button" @click="exportToPDFs" class="btn btn-lg btn-primary w-100 mb-5 btn-hover-end">
                <i class="bi bi-download fs-3"></i> Download Formulir
            </button>
        </div>
    </form>

    <!-- formulir simpan pinjam -->
    <div id="pdfs" ref="document" hidden>
        <div id="element-to-converts">
            <center>
                <h2>FORMULIR PENGAJUAN PINJAMAN</h2>
                <h4>BUMDES ALASKANDANG KEC.BESUK PROBOLINGGO</h4>
            </center>
            <div style="padding: 30px; text-align: left;width: 100%;">
                <p>Yang bertanda tangan dibawah ini :</p>
                <table class="tabel2">
                    <tr>
                        <td>Kode Formulir</td>
                        <td>:</td>
                        <td id="tkodes">-</td>
                    </tr>
                    <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td id="tnamas">-</td>
                    </tr>
                    <tr>
                        <td>Tempat / Tanggl Lahir</td>
                        <td>:</td>
                        <td id="ttgls">-</td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>:</td>
                        <td id="talamats">-</td>
                    </tr>
                    <tr>
                        <td>No.Telpon</td>
                        <td>:</td>
                        <td id="tkontaks">-</td>
                    </tr>
                    <tr>
                        <td>No.KTP</td>
                        <td>:</td>
                        <td id="tniks">-</td>
                    </tr>
                    <tr>
                        <td>Pekerjaan</td>
                        <td>:</td>
                        <td id="tkerjas">-</td>
                    </tr>
                </table>
                <br>
                <p>Dengan ini mengajukan permohonan pinjaman kepada Bumdes Alaskandang sebagai
                    berikut :</p>
                <table class="tabel2">
                    <tr>
                        <td>Nominal Permohonan</td>
                        <td>:</td>
                        <td id="tnominals">-</td>
                    </tr>
                    <tr>
                        <td>Jangka Waktu Sampai </td>
                        <td>:</td>
                        <td id="twaktus">-</td>
                    </tr>
                    <tr>
                        <td>Keperluan</td>
                        <td>:</td>
                        <td id="tperlus">-</td>
                    </tr>
                </table>
            </div>
        </div>

    </div>
</template>


<script>
$(function () {
    $('#jumlah').keyup(function () {
        $(this).val(formatRupiah($(this).val(), ''));
    });

    $('#nikp').keyup(function (e) {
        $.post('http://localhost/backend/api/penduduk/vnik', { 'nik': $(this).val() }, function (res) {
            if (res.data.length > 0) {
                $('#namap').val(res.data[0].nama);
                $('#alamatp').val(res.data[0].dusun + ' RT.' + res.data[0].rt + ' RW.' + res.data[0].rw + ' Desa.' + res.data[0].desa);
            }

        }, 'json')
    })

    $('#bsavepinjaman').click(function (e) {
        e.preventDefault();

        var form = $('#formsimpan');
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
            $.post('http://localhost/backend/api/formulir/add', data, function (res) {
                Swal.close();
                console.log(res.data)
                if (res.success == 1) {
                    $('#kodep').val(res.data.kode_formulir);
                    $('#bsavepinjaman').prop('disabled', true);
                    pesan('success', 'Berhasil Tersimpan');
                } else {
                    pesan('error', 'Failed');
                }

            }, 'json')
        }
    });
});


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



import html2pdf from "html2pdf.js";
import axios from "axios";
export default {
    name: "pdfs",
    methods: {
        async exportToPDFs() {
            this.getusers();
        },
        async getusers() {
            var kode = $('#kodep').val();
            try {
                const response = await axios.get("http://localhost/backend/api/formulir/pinjaman/" + kode);
                var val = response.data;
                var nama = val[0].nama;
                nama = nama.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                    return letter.toUpperCase();
                });
                var dusun = val[0].dusun;
                dusun = dusun.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                    return letter.toUpperCase();
                });
                var desa = val[0].desa;
                desa = desa.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                    return letter.toUpperCase();
                });
                var alamat = 'Ds.' + dusun + ' RT.' + val[0].rt + ' / RW.' + val[0].rw + ' Desa.' + desa;

                var pekerjaan = val[0].pekerjaan;
                pekerjaan = pekerjaan.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                    return letter.toUpperCase();
                });
                var keperluan = val[0].keperluan;
                keperluan = keperluan.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                    return letter.toUpperCase();
                });
                $('#tkodes').text(kode)
                $('#tnamas').text(nama)
                $('#ttgls').text('Probolinggo, ' + moment(val[0].tanggal_lahir).format('DD/MM/YYYY'))
                $('#talamats').text(alamat)
                $('#tniks').text(val[0].nik)
                $('#tkontaks').text(val[0].telepon)
                $('#tkerjas').text(pekerjaan)
                $('#tnominals').text('Rp.' + val[0].jumlah_pinjaman.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."))
                $('#tperlus').text(keperluan)
                $('#twaktus').text(moment(val[0].jangka_waktu).format('DD/MM/YYYY'))
                html2pdf(document.getElementById("element-to-converts"), {
                    margin: 1,
                    filename: "Formulir Pengajuan Pinjaman.pdf",
                });
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>