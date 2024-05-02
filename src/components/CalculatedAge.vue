<script setup>
defineProps(["days", "months", "years"]);

</script>

<template>
    <div class="results">
          <span>
            <span class="results-years">{{ years }}</span> years
          </span>
          <span>
            <span class="results-months">{{ months }}</span> months
          </span>
          <span>
            <span class="results-days">{{ days }}</span> days
          </span>
    </div>
</template>