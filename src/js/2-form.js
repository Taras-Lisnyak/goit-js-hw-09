const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

// Використовуй метод делегування для відстеження змін у формі через подію input.Зберігай актуальні дані з полів email та message у formData та записуй цей об’єкт у локальне сховище.Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// При завантаженні сторінки перевір, чи є дані у локальному сховищі.Якщо так, використовуй їх для заповнення форми та об'єкта formData.Якщо ні, залиш поля форми порожніми.    
window.addEventListener('load', () => {
    const savedData = localStorage.getItem('feedback-form-state');    
    if (savedData) {
        const parsedData = JSON.parse(savedData);        
        formData.email = parsedData.email || '';
        formData.message = parsedData.message || '';
        form.email.value = formData.email;
        form.message.value = formData.message;
    }
});
// Перед відправленням форми переконайся, що обидва поля форми заповнені.Якщо будь - яке з полів(властивостей об’єкта formData) порожнє, показуй сповіщення з текстом «Fill please all fields». Якщо всі поля заповнені, виведи у консоль об’єкт formData з актуальними значеннями, очисти локальне сховище, об’єкт formData і поля форми.
form.addEventListener('submit', event => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.email.value = '';
    form.message.value = '';
});
