Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymantStatus}</td>
        <td class="${order.Status === 'Declined' ? 'danger' : order.Status === 'Pending' ? 'warning' : 'primary'}">${order.Status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});