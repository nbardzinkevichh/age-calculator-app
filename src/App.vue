<script setup>
import { ref } from "vue";
import { Temporal } from "@js-temporal/polyfill";

import DateForm from './components/DateForm.vue';
import CalculatedAge from './components/CalculatedAge.vue';
import Attribution from './components/Attribution.vue';



const age = ref({
    day: null,
    month: null,
    year: null
});

const calculatedAge = ref({
    days: null,
    months: null,
    years: null
})


const formSubmitted = (daysData) => {
    age.value = {
        day: daysData.day,
        month: daysData.month,
        year: daysData.year
    }

    calculateAge();
}

const calculateAge = () => {
    console.log(1);
    const today = {
        day: Temporal.Now.plainDateISO().day,
        month: Temporal.Now.plainDateISO().month,
        year: Temporal.Now.plainDateISO().year
    }

    calculatedAge.value = {
        days: Math.max(age.value.day, today.day) - Math.min(age.value.day, today.day),
        months: Math.max(age.value.month, today.month) - Math.min(age.value.month, today.month),
        years: Math.max(age.value.year, today.year) - Math.min(age.value.year, today.year)
    }

    console.log(calculatedAge.value);
}


</script>

<template>
    <div class="container">
        <div class="calculator">
            <DateForm @formSubmitted="formSubmitted"/>
            <CalculatedAge 
            :days="calculatedAge.days"
            :months="calculatedAge.months"
            :years="calculatedAge.years"
            /> 
        </div>
        <Attribution />
    </div>
</template>

