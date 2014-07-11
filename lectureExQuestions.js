// week 1, day 4, dusk lecture

// somehow missed this DOM/console command:

monitorEvents(window)

// for all interactive javascript, need to wait for load, 
// need window.onload = function () {
// }

<script type="text/javascript">
    window.onload = function(){
      var el = document.getElementById("blue_div");
      el.style.backgroundColor = "blue";
    }
  </script>