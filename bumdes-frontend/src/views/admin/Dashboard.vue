<script setup>
import Asidemenu from '@/views/layouts/Asidemenu.vue'
import Topmenu from '@/views/layouts/Topmenu.vue'

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
                                    <div class="col-xl-12">
                                        <!--begin::Advance Table Widget 1-->
                                        <div class="card card-flush">
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
                                                            <h2 class="mb-1">Statistik Pendapatan BUMDes Sumber Bumi
                                                            </h2>
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
                                            <!--begin::Body-->
                                            <div class="card-body">
                                                <div id="chart"></div>
                                            </div>
                                            <!--end::Body-->
                                        </div>
                                        <!--end::Advance Table Widget 1-->
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
</template>


<script>
$(function () {
    $.post('http://localhost/backend/api/chart', function (res) {
        var data = res.data;
        var title = [];
        var cafe = [];
        var pinjaman = [];
        var sewa = [];
        for (var k in data) {
            title.push(data[k].bulan);
            cafe.push(Number(data[k].cafe));
            pinjaman.push(Number(data[k].pinjaman));
            sewa.push(Number(data[k].sewa));
        }
        viewcahrt(title, cafe, pinjaman, sewa);
    }, 'json');
})
function viewcahrt(title, cafe, pinjaman, sewabarang) {
    var options = {
        series: [{
            name: "Pendapatan Cafe",
            data: cafe,
        }, {
            name: "Pinjaman Uang",
            data: pinjaman
        }, {
            name: "Sewa Barang",
            data: sewabarang
        }],
        chart: {
            height: 400,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#77B6EA', '#545454', "#F23D3D"],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: '.',
            align: 'left'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: title,
            title: {
                text: 'Month'
            }
        },
        yaxis: {
            title: {
                text: 'Total Pendapatan'
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return 'Rp.' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        },
        dataLabels: {
            enabled: true,
            textAnchor: 'middle',
            formatter(val, opts) {
                const name = opts.w.globals.labels[opts.seriesIndex]
                return 'Rp.' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            },
        },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    return chart;
}
</script>