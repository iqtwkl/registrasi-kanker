require('./bootstrap');
window.Vue = require('vue');
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)

var kunjunganChart = new Vue({
  el: '#kunjungan-chart',
  components: {
    apexchart: VueApexCharts,
  },
  data: {
    
    series: [{
      name: 'pria',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'wanita',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chartOptions: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },  
  },   
});

var genderChart = new Vue({
  el: '#gender-chart',
  components: {
    apexchart: VueApexCharts,
  },
  data: {
    
    series: [44, 55],
    chartOptions: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Pria', 'Wanita'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },      
  },   
});

var reportPasien = new Vue({
  el: '#report-pasien',
  data: {
    countAll: 0,
    countNew: 0,
    error: null,
    url: '',
  },
  created: function(){
    this.url = $('#report-pasien').data('url');
    this.init();
  },  
  methods: {
    init:  function() {    
      this.loadData();
    },
    loadData: function() {      
      axios.get(this.url).then(response => {
        if(response.status == 200) {
          this.countAll = response.data.all;
          this.countNew = response.data.new;
        } else {
          this.error = response;
        }
      })
    },    
  }
});

var reportPemeriksaanFisik = new Vue({
  el: '#report-pemeriksaan-fisik',
  data: {
    countAll: 0,
    countNew: 0,
    error: null
  },
  created: function(){
    this.url = $('#report-pemeriksaan-fisik').data('url');
    this.init();
  },
  methods: {
    init:  function() {
      this.loadData();
    },
    loadData: function() {      
      axios.get(this.url).then(response => {
        if(response.status == 200) {
          this.countAll = response.data.all;
          this.countNew = response.data.new;
        } else {
          this.error = response;
        }
      })
    }, 
  }
});

var reportDiagnosis = new Vue({
  el: '#report-diagnosis',
  data: {
    countAll: 0,
    countNew: 0,
    error: null
  },
  created: function(){
    this.url = $('#report-diagnosis').data('url');
    this.init();
  },
  methods: {
    init:  function() {
      this.loadData();
    },
    loadData: function() {      
      axios.get(this.url).then(response => {
        if(response.status == 200) {
          this.countAll = response.data.all;
          this.countNew = response.data.new;
        } else {
          this.error = response;
        }
      })
    }, 
  }
});

var reportTerapi = new Vue({
  el: '#report-terapi',
  data: {
    countAll: 0,
    countNew: 0,
    error: null
  },
  created: function(){
    this.url = $('#report-terapi').data('url');
    this.init();
  },
  methods: {
    init:  function() {
      this.loadData();
    },
    loadData: function() {      
      axios.get(this.url).then(response => {
        if(response.status == 200) {
          this.countAll = response.data.all;
          this.countNew = response.data.new;
        } else {
          this.error = response;
        }
      })
    }, 
  }
});