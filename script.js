document.addEventListener('DOMContentLoaded', function () {
  // Data untuk grafik pie
  const ctx = document.getElementById('oilPieChart').getContext('2d');
  const oilPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['USA', 'China', 'India', 'Russia', 'Japan'],
      datasets: [{
        label: 'Konsumsi Minyak (juta barel/hari)',
        data: [19.69, 14.01, 4.92, 3.69, 3.66],
        backgroundColor: [
          '#FF5733', // Merah
          '#33FF57', // Hijau
          '#3357FF', // Biru
          '#F3FF33', // Kuning
          '#FF33A8'  // Pink
        ],
        borderWidth: 1,
        borderColor: '#fff',
        hoverBorderColor: '#000'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '#333',
            font: {
              size: 14
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const value = context.raw;
              return `${context.label}: ${value} juta barel/hari`;
            }
          }
        }
      }
    }
  });

  // Kalkulator Konsumsi Minyak
  const form = document.getElementById('oilCalcForm');
  const distanceInput = document.getElementById('distance');
  const efficiencyInput = document.getElementById('efficiency');
  const resultElement = document.getElementById('result');

  // Fungsi untuk menghitung konsumsi minyak
  function calculateOilConsumption(event) {
    event.preventDefault(); // Mencegah form untuk reload halaman

    // Ambil nilai dari input
    const distance = parseFloat(distanceInput.value);
    const efficiency = parseFloat(efficiencyInput.value);

    // Validasi input
    if (isNaN(distance) || isNaN(efficiency) || distance <= 0 || efficiency <= 0) {
      resultElement.textContent = "Masukkan nilai yang valid!";
      return;
    }

    // Hitung konsumsi minyak
    const consumption = distance / efficiency;

    // Tampilkan hasil
    resultElement.textContent = `Konsumsi minyak untuk perjalanan ${distance} km adalah ${consumption.toFixed(2)} liter.`;
  }

  // Tambahkan event listener untuk menangani submit form
  form.addEventListener('submit', calculateOilConsumption);
});
