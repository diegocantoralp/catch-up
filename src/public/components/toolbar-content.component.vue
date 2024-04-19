<template>
  <div class="toolbar">
    <div class="toolbar-content">
      <pv-toolbar>
        <pv-toolbar-side-icon></pv-toolbar-side-icon>
        <pv-toolbar-title>ABOUT COUNTRIES</pv-toolbar-title>
      </pv-toolbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "toolbar-content"
}
</script>

<style scoped>
.toolbar {
  background-color: #f0f0f0;
  padding: 10px;
}

.toolbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Add additional CSS styling for the toolbar components if needed */
</style>
