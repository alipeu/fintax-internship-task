<template>
  <div class="table">
    <h1>Cats of Instagram</h1>
    <div class="container">
      <table id="cat-table" class="display compact cell-border" style="width:100%"></table>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import 'datatables.net';
  import 'datatables.net-dt';

  export default {
    mounted: function() {
      var catData = [
        ["Poe", "poe.meows", "12600", "USA"],
        ["Mei", "mei.meows", "30600", "USA"],
        ["Pisco", "pisco_cat", "472000", "USA"],
        ["Maple", "maple.cat", "641000", "USA"],
        ["Manchester", "cat_manchester", "69900", "Russia"],
        ["Puff", "thatlittlepuff", "61400", "-"],
        ["Nala", "zuzu_and_nala", "129000", "China"],
        ["Pooky", "littlemunchiepooky", "723000", "USA"],
        ["Hosico", "hosico_cat", "1800000", "Russia"],
        ["Felix", "felixthebengal", "57000", "Norway"],
        ["Apollo", "apollon_114", "137000", "Japan"],
        ["Seymour", "heyseymour", "47400", "USA"],
        ["Thesey", "thesey_cat", "121000", "Spain"],
        ["Lily", "ginapaul", "46900", "South Korea"],
        ["Hiro", "superhirocat", "358000", "USA"]
      ]
      $(document).ready(function() {
        $('#cat-table').DataTable( {
          data: catData,
          columns: [
              { title: "Name" },
              { title: "Username" },
              { title: "Followers (Roughly)" },
              { title: "Based on" }
          ],
          'lengthMenu': [[3, 5, 10, -1], [3, 5, 10, "All"]], // to show 3, 5, 10, and all entries
          'searching': false
        } );
      } );
    } 
  }
</script>