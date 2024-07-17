document.addEventListener('DOMContentLoaded', function() {
    const paymentOptions = document.querySelectorAll('#paymentOptions a');
    const bankTransferDetails = document.getElementById('bankTransferDetails');
    const upiDetails = document.getElementById('upiDetails');
    const scanQrDetails = document.getElementById('scanQrDetails');
    const paymentGatewayDetails = document.getElementById('paymentGatewayDetails');
    const amountField = document.getElementById('amount');

    paymentOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();

            // Reset all details sections
            bankTransferDetails.classList.add('d-none');
            upiDetails.classList.add('d-none');
            scanQrDetails.classList.add('d-none');
            paymentGatewayDetails.classList.add('d-none');

            // Remove active class from all options
            paymentOptions.forEach(opt => opt.classList.remove('active'));
            // Add active class to the selected option
            this.classList.add('active');

            // Set amount to be paid
            amountField.value = "750";

            // Display the selected payment details
            const selectedOption = this.getAttribute('data-option');
            if (selectedOption === 'bankTransfer') {
                bankTransferDetails.classList.remove('d-none');
            } else if (selectedOption === 'upi') {
                upiDetails.classList.remove('d-none');
            } else if (selectedOption === 'scanQr') {
                scanQrDetails.classList.remove('d-none');
            } else if (selectedOption === 'paymentGateway') {
                paymentGatewayDetails.classList.remove('d-none');
            }
        });
    });
});
