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
        <input 
          list="color-options" 
          v-model="formData[header]"
          placeholder="Enter or select color"
          class="text-input"
        />
        <datalist id="color-options">
          <option v-for="color in colors" :key="color" :value="color">{{ color }}</option>
        </datalist>
      </div>
      <input 
        v-else
        :type="getInputType(header)" 
        v-model="formData[header]"
        :required="isRequiredField(header)"
        @input="inputChanged(header, $event.target.value)" 
        class="text-input"
      />
      <span v-if="isRequiredField(header) && !formData[header]" class="required-icon">!</span>
    </div>
    <button @click="submitForm" class="insert-btn">Create product</button>
    <div v-if="showInsertionComplete" class="insertion-complete">Product added to database</div>
    <div>
    <div v-if="showRequiredFieldMessage" class="required-field-message">Please fill in all required fields.</div>
  </div>
  </div>
</template>
  

<script>
import axios from 'axios';

export default {
  name: 'MongoDBForm',
  data() {
    return {
      headers: ['Product name:', 'Product price:', 'Memory:', 'Color:', 'Category:', 'Description:', 'Path to .png file:'],
      formData: {
      'Product name:': '',
      'Product price:': '',
      'Memory:': '0',
      'Color:': '0',
      'Category:': '',
      'Description:': '', 
      'Path to .png file:': '/img/products/',
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
      return ['Product name:', 'Product price:', 'Category:', 'Description:', 'Path to .png file:'].includes(header);
    },
    inputChanged(header, value) {
      this.formData[header] = value;
      if (this.isRequiredField(header) && value === '') {
        this.showRequiredFieldMessage = true;
      } else {
        this.showRequiredFieldMessage = false;
      }
    },
  submitForm() {
  if (!this.formData['Product name:'] || !this.formData['Product price:'] || !this.formData['Category:'] || !this.formData['Description:'] || !this.formData['Path to .png file:']) {
    this.showRequiredFieldMessage = true;
    return;
  }
  
  const productData = {
    name: this.formData['Product name:'],
    price: this.formData['Product price:'],
    memory: this.formData['Memory:'],
    color: this.formData['Color:'], 
    category: this.formData['Category:'],
    description: this.formData['Description:'], 
    image: this.formData['Path to .png file:'],
  };

  axios.post('http://localhost:3000/api/products', productData)
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
    min-height: 80vh;
    padding: 1rem;
  }

  
  .input-group {
    max-width: 500px; 
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
  padding: 10px 20px;
  border-radius: 15px;
  border: none;
  background-color: #12d453;
  color: white;
  cursor: pointer;
  margin-top: 20px; 
  transform: scale(1); 
  transition: transform 0.3s ease-in-out; 
}

.insert-btn:hover {
  transform: scale(1.1); 
}

  .color-input-group {
    display: flex;
    align-items: center;
    position: relative;
    width: 300px;
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
  position: absolute;
  color: red;
  font-weight: bold;
  top: 78%;
  margin-left: -114px;
}

.input-error input {
  border: 2px solid red;
}

.required-icon {
  position: absolute;
  color: red;
  font-weight: bold;
  margin-left: 5px;
  font-size: 23px;
  margin-top: 5px;
}

.input-wrapper {
  display: flex;
  align-items: center;
}
</style>