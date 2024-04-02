<template>
    <div class="container">
      <div v-for="(header, index) in headers" :key="index" class="input-group">
        <h3>{{ header }}</h3>
        <div v-if="header === 'Color:'" class="color-input-group">
          <select 
            v-model="formData[header]" 
            class="text-input"
            @change="colorChanged(header, $event.target.value)"
          >
            <option disabled value="" :selected="formData[header] === ''">-</option>
            <option v-for="color in colors" :key="color" :value="color">{{ color }}</option>
          </select>
          <button v-if="formData[header]" @click="formData[header] = ''" class="remove-color-btn">Remove</button>
        </div>
        <input 
          v-else-if="header === 'Path to .png file:'"
          type="file" 
          @change="onFileChange" 
          accept=".png"
          class="text-input"
        />
        <input 
          v-else
          :type="getInputType(header)" 
          v-model="formData[header]"
          @input="validateInput(header, $event.target.value)" 
          class="text-input"
        />
      </div>
      <button class="insert-btn">Insert</button>
    </div>
  </template>
  

<script>
export default {
  name: 'MongoDBForm',
  data() {
    return {
      headers: ['Product name:', 'Product price:', 'Memory:', 'Color:', 'Category:', 'Path to .png file:'],
      formData: {
        'Product name:': '',
        'Product price:': '',
        'Memory:': '',
        'Color:': '',
        'Category:': '',
        'Path to .png file:': '',
      },
      colors: ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White'],
    };
  },
  methods: {
    getInputType(header) {
      if (header === 'Product price:' || header === 'Memory:') {
        return 'number';
      }
      return 'text';
    },
    validateInput(header, value) {
      if (header === 'Product price:' || header === 'Memory:') {
        this.formData[header] = value.replace(/[^0-9]/g, '');
      }
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.formData['Path to .png file:'] = file ? file.name : '';
    },
    colorChanged(header, value) {
      this.formData[header] = value;
    },
  },
};
</script>
  
<style scoped>

.text-input option[value=""][disabled] {
  color: grey;
}

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
  }
  
  .input-group {
    margin: 10px;
  }
  
  h3 {
    margin: 0;
    padding-bottom: 5px;
  }
  
  .text-input, select.text-input {
    width: 300px;
    padding: 10px;
    margin: 5px 0;
    border-radius: 15px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  
  .insert-btn {
    position: absolute;
    bottom: 20px; /* Adjusted to place a bit higher */
    right: 20px;
    padding: 10px 20px;
    border-radius: 15px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }

  .color-input-group {
  display: flex;
  align-items: center;
  position: relative;
  width: 300px;
}

.remove-color-btn {
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  color: #333;
  cursor: pointer;
}
s
.remove-color-btn:hover {
  background-color: #e6e6e6;
}

</style>