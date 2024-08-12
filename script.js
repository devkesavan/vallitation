// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';

  var forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation(); 
      }

      form.classList.add('was-validated');

      // Display error messages for each invalid input
      var inputs = form.querySelectorAll('.form-control');
      Array.prototype.slice.call(inputs).forEach(function (input) {
        if (!input.checkValidity()) {
          input.classList.add('is-invalid');
          var error = input.nextElementSibling;
          if (error && error.classList.contains('invalid-feedback')) {
            error.style.display = 'block';
          }
        } else {
          input.classList.remove('is-invalid');
          var error = input.nextElementSibling;
          if (error && error.classList.contains('invalid-feedback')) {
            error.style.display = 'none';
          }
        }
      });
    }, false);

    // Convert lowercase letters to uppercase and prevent numbers in input fields
    var uppercaseInputs = form.querySelectorAll('.uppercase-input');
    Array.prototype.slice.call(uppercaseInputs).forEach(function (input) {
      input.addEventListener('input', function () {
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.toUpperCase().replace(/[^A-Z]/g, '');
        this.setSelectionRange(start, end);
      });
    });

    // Prevent input of numbers in input fields
    var noNumbersInputs = form.querySelectorAll('.no-numbers-input');
    Array.prototype.slice.call(noNumbersInputs).forEach(function (input) {
      input.addEventListener('input', function () {
        this.value = this.value.replace(/[0-9]/g, '');
      });
    });
  });
})();


//   for date
const dobInput = document.getElementById('dob');
const dobError = document.getElementById('dobError');
const ageDisplay = document.getElementById('ageDisplay');

dobInput.addEventListener('input', function(event) {
  const dateOfBirth = new Date(this.value);

  // Validate if the entered date falls within the allowed range
  const minDate = new Date('1993-01-01');
  const maxDate = new Date('1999-01-01');

  if (dateOfBirth >= minDate && dateOfBirth <= maxDate) {
      // Date falls within the allowed range
      dobError.textContent = ''; // Clear any previous error messages

      // Calculate age
      const today = new Date();
      let years = today.getFullYear() - dateOfBirth.getFullYear();
      let months = today.getMonth() - dateOfBirth.getMonth();
      let days = today.getDate() - dateOfBirth.getDate();

      if (months < 0 || (months === 0 && today.getDate() < dateOfBirth.getDate())) {
          years--;
          months += 12;
      }

      if (days < 0) {
          months--;
          days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }

      // Display age
      const ageString = years + ' years, ' + months + ' months, ' + days + ' days';
      ageDisplay.textContent = 'Your age is: ' + ageString;
  } else {
      // Date falls outside the allowed range
      dobError.textContent = 'Please select a date between 1993 and 1999.'; // Display error message
      ageDisplay.textContent = ''; // Clear age display
  }
});


//   radio button
(function() {
  'use strict';

  var form = document.getElementById('form');
  var genderRadios = form.querySelectorAll('input[name="gender"]');
  var errorSpan = document.getElementById('genderError');

  form.addEventListener('submit', function(event) {
    var valid = false;

    for (var i = 0; i < genderRadios.length; i++) {
      if (genderRadios[i].checked) {
        valid = true;
        break;
      }
    }

    if (!valid) {
      event.preventDefault();
      errorSpan.innerText = 'Please select a gender.';
    } else {
      errorSpan.innerText = '';
    }
  });

})();
//   email validation
(function() {
  'use strict';

  var form = document.getElementById('form');
  var emailInput = form.querySelector('#email');
  var errorSpan = document.getElementById('emailError');

  form.addEventListener('submit', function(event) {
    var email = emailInput.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      event.preventDefault();
      errorSpan.innerText = 'Please enter a valid email address.';
    } else {
      errorSpan.innerText = '';
    }
  });

})();
//   phone validation
(function() {
  'use strict';

  var form = document.getElementById('form');
  var phoneInput = form.querySelector('#phone');
  var errorSpan = document.getElementById('phoneError');

  form.addEventListener('submit', function(event) {
    var phoneNumber = phoneInput.value.trim();
    var phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phoneNumber)) {
      event.preventDefault();
      errorSpan.innerText = 'Please enter a valid 10-digit phone number.';
      errorSpan.style.display = 'block'; // Display the error message
    } else {
      errorSpan.innerText = '';
      errorSpan.style.display = 'none'; // Hide the error message
    }
  });

  // Optional: Prevent typing alphabets and special characters
  phoneInput.addEventListener('input', function(event) {
    var inputValue = phoneInput.value.trim();
    var numericValue = inputValue.replace(/[^\d]/g, ''); // Remove non-numeric characters

    if (numericValue.length > 10) {
      numericValue = numericValue.slice(0, 10); // Trim to 10 digits
    }

    phoneInput.value = numericValue;

    // Update the error message based on the input
    if (!/^\d{10}$/.test(numericValue)) {
      errorSpan.innerText = 'Please enter a valid 10-digit phone number.';
      errorSpan.style.display = 'block'; // Display the error message
    } else {
      errorSpan.innerText = '';
      errorSpan.style.display = 'none'; // Hide the error message
    }
  });

})();

//   dropdown
(function() {
  'use strict';

  var form = document.getElementById('form');
  var educationSelect = form.querySelector('#education');
  var errorSpan = document.getElementById('educationError');

  form.addEventListener('submit', function(event) {
    var selectedValue = educationSelect.value;

    if (selectedValue === '') {
      event.preventDefault();
      errorSpan.innerText = 'Please select your education level.';
    } else {
      errorSpan.innerText = '';
    }
  });

})();
// language check box validation
(function() {
  'use strict';

  var form = document.getElementById('form');
  var checkboxes = form.querySelectorAll('input[type="checkbox"][name="languages"]');
  var errorSpan = document.getElementById('languagesError');

  form.addEventListener('submit', function(event) {
    var checkedCount = 0;

    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    if (checkedCount < 2) {
      event.preventDefault();
      errorSpan.innerText = 'Please select at least two languages.';
    } else {
      errorSpan.innerText = '';
    }
  });

})();


//   upload file
const pdfFileInput = document.getElementById('pdf-file');
const pdfFileError = document.getElementById('pdf-file-error');

pdfFileInput.addEventListener('change', function(event) {
  const file = this.files[0];

  // Check if no file is selected
  if (!file) {
      pdfFileError.textContent = 'Please select a PDF file.';
      return;
  }

  // Check if the selected file is not a PDF
  if (!file.type.startsWith('application/pdf')) {
      pdfFileError.textContent = 'Please select a PDF file.';
      return;
  }

  pdfFileError.textContent = ''; // Clear previous error message
});

// Optional: Reset error message when the file input changes
pdfFileInput.addEventListener('change', function() {
  pdfFileError.textContent = ''; // Clear error message
});



//upload image
(function() {
  'use strict';

  var form = document.getElementById('form');
  var imageInput = form.querySelector('#image');
  var errorSpan = document.getElementById('imageError');
  var imagePreview = document.getElementById('image-preview');

  // Function to display image preview with 100px width
  function displayImagePreview(file) {
      var reader = new FileReader();
      reader.onload = function(e) {
          var img = document.createElement('img');
          img.src = e.target.result;
          img.classList.add('img-thumbnail');
          img.style.width = '100px'; // Set image width
          imagePreview.innerHTML = '';
          imagePreview.appendChild(img);
      };
      reader.readAsDataURL(file);
  }

  // Event listener for file input change
  imageInput.addEventListener('change', function() {
      var imageFile = imageInput.files[0];

      if (!imageFile) {
          errorSpan.innerText = 'Please select an image file.';
          errorSpan.style.display = 'block'; // Display the error message
          imagePreview.innerHTML = ''; // Clear image preview
      } else {
          var validExtensions = ['jpg', 'jpeg'];
          var extension = imageFile.name.split('.').pop().toLowerCase();

          if (validExtensions.indexOf(extension) === -1) {
              errorSpan.innerText = 'Please select a valid image file (jpg, jpeg).';
              errorSpan.style.display = 'block'; // Display the error message
              imagePreview.innerHTML = ''; // Clear image preview
          } else {
              errorSpan.innerText = '';
              errorSpan.style.display = 'none'; // Hide the error message
              displayImagePreview(imageFile); // Display image preview
          }
      }
  });

  // Event listener for form submission
  form.addEventListener('submit', function(event) {
      var imageFile = imageInput.files[0];

      if (!imageFile) {
          event.preventDefault();
          errorSpan.innerText = 'Please select an image file.';
          errorSpan.style.display = 'block'; // Display the error message
          imagePreview.innerHTML = ''; // Clear image preview
      } else {
          var validExtensions = ['jpg', 'jpeg'];
          var extension = imageFile.name.split('.').pop().toLowerCase();

          if (validExtensions.indexOf(extension) === -1) {
              event.preventDefault();
              errorSpan.innerText = 'Please select a valid image file (jpg, jpeg).';
              errorSpan.style.display = 'block'; // Display the error message
              imagePreview.innerHTML = ''; // Clear image preview
          } else {
              errorSpan.innerText = '';
              errorSpan.style.display = 'none'; // Hide the error message
              displayImagePreview(imageFile); // Display image preview
          }
      }
  });

})();  
// agree check box validation
(function() {
  'use strict';

  var form = document.getElementById('form');

  form.addEventListener('submit', function(event) {
    var termsCheckbox = document.getElementById('terms');

    if (!termsCheckbox.checked) {
      event.preventDefault();
      event.stopPropagation();
      termsCheckbox.nextElementSibling.style.display = 'block'; // Show error message
    } else {
      termsCheckbox.nextElementSibling.style.display = 'block'; // Hide error message
    }

    form.classList.add('was-validated');
  });

  // Optional: Hide error message when checkbox is clicked
  var termsCheckbox = document.getElementById('terms');
  termsCheckbox.addEventListener('change', function() {
    this.nextElementSibling.style.display = 'block'; // Hide error message
  });
})();