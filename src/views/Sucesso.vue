<script setup>

</script>
<template>
    <div class="thank-you-container">
      <div class="content">
        <h1>Pagamento Concluído!</h1>
        <p>Obrigado pela sua compra.</p>
        <div class="checkmark">✔</div>
        <p>valor da Compra:{{  }}</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .thank-you-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #fff; 
    font-family: 'Arial', sans-serif;
  }
  
  .content {
    text-align: center;
    padding: 20px;
    width: 80%;
    max-width: 350px;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    color: #333;
  }
  
  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
  }
  
  .checkmark {
    font-size: 3rem;
    color: #4CAF50; 
  }
  </style>
  