<template>
    <div class="items"> 
      <table>
      <tr>
          <th rowspan=2>Ship</th>
          <th rowspan=2>Port</th>
          <th colspan=2>Arrival</th>
          <th colspan=2>Departure</th>
      </tr>
      <tr>
          <th>Date</th>
          <th>Time left</th>
          <th>Date</th>
          <th>Time left</th>
      </tr>
      <tr v-for="item in items" :key="item.id">
          <td>{{ item.ship }}</td>
          <td>{{ item.port }}</td>
          <td>{{ item.arrival.date }}</td>
          <td>{{ item.arrival.time_left }}</td>
          <td>{{ item.departure.date }}</td>
          <td>{{ item.departure.time_left }}</td>
      </tr>	
      </table>
    </div>
  </template>
  
  <script>
    import config from './../config.js'

    export default {
        data() {
            return {}
        },
        props: {
            items: Array
        },
        computed: {
            tableRowHeight() {
                return config.tableRowHeight + "px"
            },
            tableBordersWidth() {
                return config.tableBordersWidth + "px"
            }
        }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    tr {
        height: v-bind('tableRowHeight');
    }
    td, th {
        text-align: center;
        border-width: v-bind('tableBordersWidth');
        border-style: solid;
        border-color: #dddddd;
    }
  </style>