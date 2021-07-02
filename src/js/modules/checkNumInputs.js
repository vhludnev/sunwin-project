const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

   numInputs.forEach(item => {
       item.addEventListener('input', () => {
           item.value = item.value.replace(/\D/, ''); /* [replace(/\D/, '')] will replace Non-Number inputs with No-input-entry */
       });
   });
};

export default checkNumInputs;