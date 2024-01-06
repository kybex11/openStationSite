<template>
  <div class="even-odd-checker">
    <label for="numberInput">Введите число:</label>
    <input v-model="number" id="numberInput" type="number" @input="checkEvenOdd" />
    <p v-if="number !== null" :class="{ 'even': isEven, 'odd': !isEven }">
      The number {{ number }} is {{ isEven ? 'Число четное' : 'Число нечетное' }}.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: null,
      isEven: null,
    };
  },
  methods: {
    checkEvenOdd() {
      this.isEven = this.number % 2 === 0;
    },
  },
};
</script>

<style>
.even-odd-checker {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

label {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

input {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  transition: border-color 0.3s, box-shadow 0.3s;
}

/* Hover effect */
input:hover {
  border-color: #555;
}

/* Focus effect */
input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
}

/* Error effect */
input.invalid {
  border-color: #e74c3c;
  box-shadow: 0 0 5px rgba(231, 76, 60, 0.5);
}

p {
  font-size: 18px;
  color: #242424;
  padding: 10px;
  border-radius: 5px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.even {
  background-color: #aaffaa;
}

.odd {
  background-color: #ffaaaa;
}
</style>
