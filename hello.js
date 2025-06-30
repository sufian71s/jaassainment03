<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Flower Bank App</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-6 font-sans">

  <div class="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md">
    <h1 class="text-2xl font-bold mb-4 text-center text-green-700">🌸 Flower Bank App</h1>

    <!-- Balance Display -->
    <div class="mb-4">
      <h2 class="text-xl font-semibold">বর্তমান ব্যালেন্স:</h2>
      <p id="balance" class="text-3xl text-green-600 font-bold">৳0</p>
    </div>

    <!-- Add Money -->
    <div class="mb-4">
      <h3 class="font-semibold mb-2">টাকা জমা দিন:</h3>
      <input id="addAmount" type="number" placeholder="পরিমাণ লিখুন" class="w-full p-2 border rounded mb-2" />
      <button onclick="addMoney()" class="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded">জমা দিন</button>
    </div>

    <!-- Withdraw Money -->
    <div class="mb-4">
      <h3 class="font-semibold mb-2">টাকা উত্তোলন করুন:</h3>
      <input id="withdrawAmount" type="number" placeholder="পরিমাণ লিখুন" class="w-full p-2 border rounded mb-2" />
      <button onclick="withdrawMoney()" class="w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded">উত্তোলন করুন</button>
    </div>

    <!-- Transaction History -->
    <div class="mb-2">
      <h3 class="font-semibold">লেনদেনের ইতিহাস:</h3>
      <ul id="history" class="max-h-48 overflow-y-auto mt-2 border p-2 rounded bg-gray-50 text-sm space-y-1">
        <li class="text-gray-400 italic">এখনো কোনো লেনদেন হয়নি</li>
      </ul>
    </div>
  </div>

  <script>
    let balance = 0;
    const balanceEl = document.getElementById("balance");
    const historyEl = document.getElementById("history");

    function updateBalance() {
      balanceEl.textContent = `৳${balance}`;
    }

    function addToHistory(type, amount) {
      const date = new Date().toLocaleString();
      const entry = document.createElement("li");
      entry.textContent = `[${date}] ${type} ৳${amount} | নতুন ব্যালেন্স: ৳${balance}`;
      historyEl.prepend(entry);

      // পুরাতন টেক্সট সরানো
      if (historyEl.children.length > 1 && historyEl.children[historyEl.children.length - 1].textContent.includes('এখনো কোনো')) {
        historyEl.removeChild(historyEl.children[historyEl.children.length - 1]);
      }
 

    function addMoney() {
      const amount = parseFloat(document.getElementById("addAmount").value);
      if (isNaN(amount) || amount <= 0) {
        alert("সঠিক পরিমাণে সংখ্যা লিখুন (0 এর বেশি)");
        return;
      }
      balance += amount;
      updateBalance();
      addToHistory("জমা", amount);
      document.getElementById("addAmount").value = "";
    }

    function withdrawMoney() {
      const amount = parseFloat(document.getElementById("withdrawAmount").value);
      if (isNaN(amount) || amount <= 0) {
        alert("সঠিক পরিমাণে সংখ্যা লিখুন (0 এর বেশি)");
        return;
      }
      if (amount > balance) {
        alert("পর্যাপ্ত ব্যালেন্স নেই!");
        return;
      }
      balance -= amount;
      updateBalance();
      addToHistory("উত্তোলন", amount);
      document.getElementById("withdrawAmount").value = "";
    }
  </script>
</body>
</html>
