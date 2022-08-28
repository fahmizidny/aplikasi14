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

.border-color {
    border: #0095E8 1px solid !important;
}
</style>

<template>
    <form autocomplete="off" id="formsewa">
        <input type="text" hidden id="statuss" name="status" value="sewabarang" />
        <div class="fv-row mb-5">
            <label class="form-label fs-6 fw-bolder text-dark">Kode Formulir</label>
            <input class="form-control border" type="text" id="kodes" name="kode"
                placeholder="Isi Otamatis Ketika Sudah Mengisi" readonly />
        </div>
        <div class="fv-row mb-5">
            <label class="form-label fs-6 fw-bolder text-dark">Nik</label>
            <input class="form-control border" type="text" id="niks" name="nik"
                placeholder="Ketik nik untuk mengecek sudah terdaftar dikantor desa" />
        </div>
        <div class="fv-row mb-5">
            <label class="form-label fs-6 fw-bolder text-dark">Nama
                Lengkap</label>
            <input class="form-control border" type="text" id="namas" name="nama" placeholder="Nama Lengkap" readonly />
        </div>
        <div class="fv-row mb-5">
            <label class="form-label fs-6 fw-bolder text-dark">Alamat</label>
            <input class="form-control border" type="text" id="alamats" name="alamat" readonly placeholder="Alamat" />
        </div>
        <div class="fv-row mb-5">
            <label class="form-label fs-6 fw-bolder text-dark">Barang</label>
            <select name="barang[]" id="barang" class="form-control border-color form-select" data-allow-clear="true"
                multiple="multiple">
            </select>
        </div>
        <div class="fv-row mb-5">
            <label class="form-label fs-6 fw-bolder text-dark">Keperluan</label>
            <input class="form-control border" type="text" id="keperluans" name="keperluan" placeholder="Keperluan" />
        </div>
        <div class="fv-row mb-5">
            <label class="form-label fs-6 fw-bolder text-dark">Tanggal Sewa Barang</label>
            <input class="form-control border" type="text" id="tglsewa" name="tglsewa"
                placeholder="Tanggal Sewa Barang" />
        </div>
        <div class="fv-row mb-5">
            <label class="form-label fs-6 fw-bolder text-dark">Tanggal Pengembalian</label>
            <input class="form-control border" type="text" id="tglkembali" name="tglkembali"
                placeholder="Tanggal Pengembalian" />
        </div>
        <div class="text-center">
            <button type="button" id="bsavesewa" class="btn btn-lg btn-info w-100 mb-5 btn-hover-end">
                <i class="bi bi-send fs-3"></i> Daftar Formulir
            </button>
            <button type="button" @click="exportToPDF" class="btn btn-lg btn-primary w-100 mb-5 btn-hover-end">
                <i class="bi bi-download fs-3"></i> Download Formulir
            </button>
        </div>
    </form>


    <!-- Formulir Sewa Barang -->
    <div id="pdf" ref="document" hidden>
        <div id="element-to-convert">
            <center>
                <h2>FORMULIR SEWA BARANG</h2>
                <h4>BUMDES ALASKANDANG KEC.BESUK PROBOLINGGO</h4>
            </center>
            <div style="padding: 30px; text-align: left;width: 100%;">
                <table class="tabel2">
                    <tr>
                        <td>Kode Formulir</td>
                        <td>:</td>
                        <td id="tkode">-</td>
                    </tr>
                    <tr>
                        <td>No.KTP</td>
                        <td>:</td>
                        <td id="tnik">-</td>
                    </tr>
                    <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td id="tnama">-</td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>:</td>
                        <td id="talamat">-</td>
                    </tr>
                    <tr>
                        <td>Kontak</td>
                        <td>:</td>
                        <td id="tkontak">-</td>
                    </tr>
                    <tr>
                        <td>Tanggal Sewa</td>
                        <td>:</td>
                        <td id="tsewa">-</td>
                    </tr>
                    <tr>
                        <td>Tanggal Pengembalian</td>
                        <td>:</td>
                        <td id="tkembali">-</td>
                    </tr>
                    <tr>
                        <td>Keperluan</td>
                        <td>:</td>
                        <td id="tperlu">-</td>
                    </tr>
                </table>
                <br>
                <br>
                <center>
                    <h3>JENIS ALAT YANG DISEWA</h3>
                </center>
                <table class="table1" style="width: 100%;">
                    <thead>
                        <tr align="center">
                            <th style="width: 5%;">No</th>
                            <th style="width: 55%;">Nama Barang</th>
                            <th style="width: 20%;">Harga Satuan</th>
                            <th style="width: 20%;">Jumlah Barang</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items" :key="item.no">
                            <td align="center">{{ item.no }}</td>
                            <td>{{ item.nama }}</td>
                            <td align="center">{{ item.harga }}</td>
                            <td align="center">{{ item.jumlah }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script>

$(function () {
    $('#niks').keyup(function (e) {
        $.post('http://localhost/backend/api/penduduk/vnik', { 'nik': $(this).val() }, function (res) {
            if (res.data.length > 0) {
                $('#namas').val(res.data[0].nama);
                $('#alamats').val(res.data[0].dusun + ' RT.' + res.data[0].rt + ' RW.' + res.data[0].rw + ' Desa.' + res.data[0].desa);
            }

        }, 'json')
    });

    $('#barang').select2({
        placeholder: 'Pilih Barang'
    });

    $('#tglsewa').datepicker({
        autoclose: true,
        format: 'dd/mm/yyyy'
    }).datepicker('setDate', new Date());

    $('#tglkembali').datepicker({
        autoclose: true,
        format: 'dd/mm/yyyy'
    }).datepicker('setDate', new Date());


    $('#bsavesewa').click(function (e) {
        e.preventDefault();

        var form = $('#formsewa');
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
                console.log(res)
                if (res.success = 1) {
                    $('#kodes').val(res.data.kode_formulir);
                    $('#bsavesewa').prop('disabled', true);
                    pesan('success', 'Berhasil Tersimpan');
                } else {
                    pesan('error', 'Failed');
                }

            }, 'json')
        }
    });

    $.get('http://localhost/backend/api/barang/vbarang', function (res) {
        $('#barang').html(res);
    });

})



import html2pdf from "html2pdf.js";
import axios from "axios";
export default {
    name: "pdf",
    data() {
        return {
            items: [],
        };
    },
    created() {
    },

    methods: {
        async exportToPDF() {
            this.getuser();
        },
        async getuser() {
            var kode = $('#kodes').val();
            try {
                const response = await axios.get("http://localhost/backend/api/formulir/sewa/" + kode);
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
                var keperluan = val[0].keperluan;
                keperluan = keperluan.toLowerCase().replace(/\b[a-z]/g, function (letter) {
                    return letter.toUpperCase();
                });
                $('#tkode').text(kode)
                $('#tperlu').text(keperluan)
                $('#tnama').text(nama)
                $('#talamat').text(alamat)
                $('#tnik').text(val[0].nik)
                $('#tkontak').text(val[0].telepon)
                $('#tsewa').text(moment(val[0].tanggal_sewa).format('DD/MM/YYYY'))
                $('#tkembali').text(moment(val[0].tanggal_pengembalian).format('DD/MM/YYYY'))
                this.getBarang();
            } catch (err) {
                console.log(err);
            }
        },

        async getBarang() {
            var kode = $('#kodes').val();
            try {
                const response = await axios.get("http://localhost/backend/api/formulir/databarang/" + kode);
                console.log(response);
                this.items = response.data;
                html2pdf(document.getElementById("element-to-convert"), {
                    margin: 1,
                    filename: "Formulir Sewa Barang.pdf",
                });
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>