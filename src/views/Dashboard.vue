<template>
<div>
  <Navbar></Navbar>
  <div class="w-full max-w-screen-xl mx-auto bg-gray-100">
    <div class="lg:flex">
      <Sidebar></Sidebar>
      <div id="content" class="min-h-screen w-full lg:px-6 overflow-visible lg:ml-56">
        <div class="lg:flex pt-24 h-auto">
          <div class="lg:w-4/6 mx-4 lg:mx-0 lg:mr-4">
            <div class="flex flex-col rounded-lg shadow-lg bg-white w-full py-5 px-6">
              <h1 class="text-2xl block leading-none text-gray-800">Welcome back, Nurul Arifin</h1>
              <span class="mt-2 text-gray-600 text-sm leading-tight">Flowers is an admin dashboard template that build with Tailwindcss and VueJs.</span>
            </div>
            <div class="flex flex-col lg:flex-row lg:justify-between -mx-2">
              <div class="flex flex-col items-center justify-center rounded-lg bg-white h-32 mt-4 shadow-lg w-full mx-2 hover:shadow-2xl">
                <div class="rounded-full bg-blue-200 p-2 text-blue-700">
                  <span>
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path class="heroicon-ui"
                        d="M9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2zm1-5a1 1 0 0 1 0-2 5 5 0 0 1 5 5v2a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3zm-2-4a1 1 0 0 1 0-2 3 3 0 0 0 0-6 1 1 0 0 1 0-2 5 5 0 0 1 0 10z" />
                      </svg>
                  </span>
                </div>
                <span class="text-4xl font-bold text-gray-800 leading-tight">12.5k</span>
                <span class="text-xs font-semibold text-gray-600">Total followers</span>
              </div>
              <div class="flex flex-col items-center justify-center rounded-lg bg-white h-32 mt-4 shadow-lg w-full mx-2 hover:shadow-2xl">
                <div class="rounded-full bg-orange-200 p-2 text-orange-500">
                  <span>
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path class="heroicon-ui"
                        d="M9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2zm1-5a1 1 0 0 1 0-2 5 5 0 0 1 5 5v2a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3zm-2-4a1 1 0 0 1 0-2 3 3 0 0 0 0-6 1 1 0 0 1 0-2 5 5 0 0 1 0 10z" />
                      </svg>
                  </span>
                </div>
                <span class="text-4xl font-bold text-gray-800 leading-tight">12.5k</span>
                <span class="text-xs font-semibold text-gray-600">Impressions</span>
              </div>
              <div class="flex flex-col items-center justify-center rounded-lg bg-white h-32 mt-4 shadow-lg w-full mx-2 hover:shadow-2xl">
                <div class="rounded-full bg-purple-200 p-2 text-purple-700">
                  <span>
                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path class="heroicon-ui"
                        d="M9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2zm1-5a1 1 0 0 1 0-2 5 5 0 0 1 5 5v2a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3zm-2-4a1 1 0 0 1 0-2 3 3 0 0 0 0-6 1 1 0 0 1 0-2 5 5 0 0 1 0 10z" />
                      </svg>
                  </span>
                </div>
                <span class="text-4xl font-bold text-gray-800 leading-tight">12.5k</span>
                <span class="text-xs font-semibold text-gray-600">Reach</span>
              </div>
            </div>
          </div>
          <div class="lg:w-2/6 mx-4 pt-4 lg:mx-0 lg:pt-0 h-full">
            <div class="flex flex-col bg-white rounded-lg shadow-lg p-6 w-full">
              <span class="text-base font-semibold text-gray-800 block pb-2 border-b leading-tight">User Activities</span>
              <div class="flex flex-row">
                <div href="#" class="inline-flex items-center pt-4 pb-1">
                  <img class="object-cover w-8 h-8 border-gray-600 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80&ixid=eyJhcHBfaWQiOjF9" alt="Your avatar" />
                  <div class="text-xs pl-4 leading-none text-left">
                    <span class="text-gray-900 font-bold">Nurul Arifin</span>
                    <span class="text-gray-800"> Just updated his profile picture</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-row">
                <div href="#" class="inline-flex items-center pt-4 pb-1">
                  <img class="object-cover w-8 h-8 border-gray-600 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&q=80&fm=jpgw=256&fit=crop&ixid=eyJhcHBfaWQiOjF9" alt="Your avatar" />
                  <div class="text-xs pl-4 leading-none text-left">
                    <span class="text-gray-900 font-bold">Indri Safitri</span>
                    <span class="text-gray-800"> Just commented on her status</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-row">
                <div href="#" class="inline-flex items-center pt-4 pb-1">
                  <img class="object-cover w-8 h-8 border-gray-600 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&w=256&fit=crop&ixid=eyJhcHBfaWQiOjF9" alt="Your avatar" />
                  <div class="text-xs pl-4 leading-none text-left">
                    <span class="text-gray-900 font-bold">Hasbi Hasidik</span>
                    <span class="text-gray-800"> Has started following you</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:flex h-auto -mx-2 pt-4">
          <div class="w-full mx-2 bg-white shadow-lg rounded p-6">
            <div id="chart">
              <VueApexCharts type="bar" height="200" :options="chartOptions" :series="series"></VueApexCharts>
            </div>
          </div>
          <!-- <div class="lg:w-1/2 mx-2 h-full bg-white shadow-lg rounded">

          </div> -->
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import Navbar from './../components/Navbar.vue'
import Sidebar from './../components/Sidebar.vue'
export default {
  name: "dashboard",
  components: {
    Sidebar,
    Navbar,
    VueApexCharts
  },
  data() {
    return {
      series: [{
          name: 'Posts',
          data: [50, 120, 51, 66, 122, 87, 82, 45, 79, 82]
        },
        {
          name: 'Views',
          data: [200, 212, 451, 247, 134, 667, 324, 313, 142, 52]
        }
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 200,
          stacked: true,
          toolbar: {
            show: false
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        xaxis: {
          type: 'datetime',
          categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
            '01/05/2011 GMT', '01/06/2011 GMT', '01/07/2011 GMT', '01/08/2011 GMT', '01/09/2011 GMT', '01/10/2011 GMT'
          ],
        },
        legend: {
          position: 'top',
        },
        fill: {
          opacity: 1
        },
        colors: ['#ADD2EB', '#479AD1'],
      },
    }
  }
};
</script>

<style src="./../assets/css/tailwind.css">
</style>
