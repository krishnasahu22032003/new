function showRecommendation() {
  const country = document.getElementById("countrySelect").value;
  const recommendationDiv = document.getElementById("recommendation");
  
  if (country === "japan") {
    recommendationDiv.innerHTML = `
      <h3>Recommended: Japan</h3>
      <img src="images/japan1.jpg" alt="Japan 1">
      <img src="images/japan2.jpg" alt="Japan 2">
      <p>Japan offers a perfect blend of modern cities, ancient temples, and stunning natural beauty.</p>
    `;
  } else if (country === "india") {
    recommendationDiv.innerHTML = `
      <h3>Recommended: India</h3>
      <img src="images/india1.jpg" alt="India 1">
      <img src="images/india2.jpg" alt="India 2">
      <p>India is known for its cultural diversity, vibrant festivals, and breathtaking landmarks.</p>
    `;
  } else {
    recommendationDiv.innerHTML = `<p>Please select a country to see recommendations.</p>`;
  }
}
