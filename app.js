fetch('http://localhost:32046/api/customer')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Use the data to update the DOM
    document.getElementById('customer-details').innerHTML = `<p>Customer Id: ${data.Id}</p>
                                                            <p>FirstName: ${data.FirstName}</p>
                                                            <p>Age: ${data.Age}</p>
                                                            <p>Address: ${data.Address}</p>
                                                            <p>Reference: ${data.Reference}</p>
                                                            <p>Telephone: ${data.Telephone}</p>
                                                            <p>LastName: ${data.LastName}</p>`;
  })
  .catch(error => console.error(error));
