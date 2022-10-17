<template>
  <div class="header">
    <p>TO DO List</p>
  </div>
  <div>
    <RouterView />
  </div>
</template>

<style>
.header {
  border-bottom: 5px solid white;
  text-align: center;
}

.header p {
  font-size: 3em;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
