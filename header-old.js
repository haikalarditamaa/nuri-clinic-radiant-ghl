<!-- NURI — HEADER TRACKING
     Paste into: builder → Tracking Code → Header Tracking
     Marks the page as JS-enabled so the hero waits for its intro.
     If anything fails, the hero shows anyway after 3 seconds. -->
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Roboto:wght@300;400&display=swap">

<script>
  document.documentElement.classList.add('nx-js');
  setTimeout(function () { document.documentElement.classList.add('nx-ready'); }, 3000);
</script>
