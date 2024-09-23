function generateInvoice() {
    // Fetch input values
    document.getElementById('invoice-date').textContent = new Date().toLocaleDateString();
    
  function getOneDayBefore() {
      const today = new Date();
      const oneDayBefore = new Date(today);
      oneDayBefore.setDate(today.getDate() - 1);
      return oneDayBefore.toLocaleDateString();
    }
    document.getElementById("date-1").innerHTML=getOneDayBefore();
  
    const awb = document.getElementById('awb').value;
    const consignee = document.getElementById('consignee').value;
    const destination = document.getElementById('destination').value;
    const ds = document.getElementById('ds').value;
    const pcs = document.getElementById('pcs').value;
    const weight = document.getElementById('weight').value;
    const amount = parseFloat(document.getElementById('amount').value) || 0;
    const covidChargePercent = parseFloat(document.getElementById('covid-charge').value) || 0;
    const fuelChargePercent = parseFloat(document.getElementById('fuel-charge').value) || 0;
  
    // Calculate charges
    const covidCharge = (amount * covidChargePercent) / 100;
    const fuelCharge = (amount * fuelChargePercent) / 100;
    const grandTotal = amount + covidCharge + fuelCharge;
  
    // Add the new row to the table inside tbody
    const invoiceTableBody = document.querySelector('#invoiceTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${awb}</td>
      <td>${new Date().toLocaleDateString()}</td>
      <td>${destination}</td>
      <td>${ds}</td>
      <td>${pcs}</td>
      <td>${weight}</td>
      <td>₹${amount.toFixed(2)}</td>
      <td>₹${covidCharge.toFixed(2)}</td>
      <td>₹${fuelCharge.toFixed(2)}</td>
      <td>₹${grandTotal.toFixed(2)}</td>
    `;
    invoiceTableBody.appendChild(row);
  
    // Apply height to the newly added row
    
  
    // Hide form and show invoice
    document.querySelector('.invoice-form').classList.add('hidden');
    document.getElementById('invoicePage').classList.remove('hidden');
  }
  