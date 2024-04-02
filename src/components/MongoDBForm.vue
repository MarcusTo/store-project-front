<template>
    <div class="container">
      <div v-for="(header, index) in headers" :key="index" class="input-group">
        <h3>{{ header }}</h3>
        <div v-if="header === 'Memory:'" class="memory-input-group">
          <input 
            list="memory-options" 
            v-model="formData[header]"
            placeholder="Enter or select memory size"
            class="text-input"
          />
          <datalist id="memory-options">
            <option v-for="memorySize in memoryOptions" :key="memorySize" :value="memorySize">{{ memorySize }} GB</option>
          </datalist>
        </div>
        <div v-else-if="header === 'Color:'" class="color-input-group">
          <select 
            v-model="formData[header]" 
            class="text-input"
          >
            <option disabled value="">Select color</option>
            <option v-for="color in colors" :key="color" :value="color">{{ color }}</option>
          </select>
          <button 
            v-if="formData[header]" 
            @click="removeColor(header)" 
            class="remove-color-btn"
          >Remove</button>
        </div>
        <input 
          v-else
          :type="getInputType(header)" 
          v-model="formData[header]"
          :required="isRequiredField(header)"
          @input="inputChanged(header, $event.target.value)" 
          class="text-input"
        />
      </div>
      <button @click="submitForm" class="insert-btn">Insert</button>
      <div v-if="showInsertionComplete" class="insertion-complete">Product added to database</div>
      <div v-if="showRequiredFieldMessage" class="required-field-message">Please fill in all required fields.</div>
    </div>
  </template>
  

  <script>
import axios from 'axios';

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
      memoryOptions: [64, 128, 256, 512, 1024],
      showInsertionComplete: false,
      showRequiredFieldMessage: false,
    };
  },
  methods: {
    getInputType(header) {
      if (header === 'Product price:') {
        return 'number';
      }
      return 'text';
    },
    isRequiredField(header) {
      return ['Product name:', 'Product price:', 'Category:', 'Path to .png file:'].includes(header);
    },
    inputChanged(header, value) {
      this.formData[header] = value;
      if (this.isRequiredField(header) && value === '') {
        this.showRequiredFieldMessage = true;
      } else {
        this.showRequiredFieldMessage = false;
      }
    },
    removeColor(header) {
    this.formData[header] = '';
    },
    submitForm() {
    if (!this.formData['Product name:'] || !this.formData['Product price:'] || !this.formData['Category:'] || !this.formData['Path to .png file:']) {
    this.showRequiredFieldMessage = true;
    return;
    }
      
      const productData = {
        name: this.formData['Product name:'],
        price: this.formData['Product price:'],
        memory: this.formData['Memory:'],
        color: this.formData['Color:'], 
        category: this.formData['Category:'],
        image: this.formData['Path to .png file:'],
      };
  
      axios.post('http://localhost:3000/', productData)
        .then(response => {
          this.showInsertionComplete = true;
          setTimeout(() => this.showInsertionComplete = false, 3000);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
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
    bottom: 50px; /* Adjusted to place a bit higher */
    right: 350px;
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

.insertion-complete {
  position: absolute;
  top: 20px;
  background-color: lightgreen;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid green;
}

.required-field-message {
  color: red;
  margin-top: 10px;
}

</style>