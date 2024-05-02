<script setup>
import { ref } from "vue";


const days = ref({
    day: null,
    month: null,
    year: null
});

const emits = defineEmits(["formSubmitted"]);


const onSubmit = () => {
    
    const daysData = {
        day: days.value.day,
        month: days.value.month,
        year: days.value.year
    }

    emits("formSubmitted", daysData);

    days.value = {
        day: null,
        month: null,
        year: null
    }
}

</script>

<template>
    <form @submit.prevent="onSubmit" class="calculator-form">
          <div class="calculator-form-section">
            <label for="day">DAY</label>
            <input v-model="days.day" id="day" type="number" name="day" placeholder="DD" required>
          </div>
          <div class="calculator-form-section">
            <label for="month">MONTH</label>
            <input v-model="days.month" id="month" type="number" name="month" placeholder="MM" required>
          </div>
          <div class="calculator-form-section">
            <label for="year">YEAR</label>
            <input v-model="days.year" id="year" type="number" name="year" placeholder="YYYY" required>
          </div>
          <div class="calculator-form-submit">
            <button class="submit-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
            </button>
          </div>        
    </form>
</template>