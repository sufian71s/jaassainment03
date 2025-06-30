let balance = 0;
    let history = [];

    function updateBalanceDisplay() {
      document.getElementById('balance').innerText = `৳${balance}`;
    }

    function show(section) {
      document.getElementById('add-section').classList.add('show');
      document.getElementById('withdraw-section').classList.add('show');
      document.getElementById('history-section').classList.add('hidden');

      document.getElementById(`${section}-section`).classList.remove('hidden');
    }

    function addMoney() {
      const amountInput = document.getElementById('add-amount');
      const error = document.getElementById('add-error');
      const amount = parseFloat(amountInput.value);

      if (isNaN(amount) || amount <= 0) {
        error.textContent = "";
        return;
      }

      balance += amount;
      updateBalanceDisplay();
      logTransaction("Add", amount);
      amountInput.value = "";
      error.textContent = "";
    }

    function withdrawMoney() {
      const amountInput = document.getElementById('withdraw-amount');
      const error = document.getElementById('withdraw-error');
      const amount = parseFloat(amountInput.value);

      if (isNaN(amount) || amount <= 0) {
        error.textContent = "";
        return;
      }

      if (amount > balance) {
        error.textContent = "balance is not founds!";
        return;
      }

      balance -= amount;
      updateBalanceDisplay();
      logTransaction("withdraw", amount);
      amountInput.value = "";
      error.textContent = "";
    }

    function logTransaction(type, amount) {
      const now = new Date();

      const entry = `${time} | ${type} | ৳${amount} | Balance: ৳${balance}`;
      history.unshift(entry);
      updateHistoryDisplay();
    }

    function updateHistoryDisplay() {
      const historyList = document.getElementById('history-list');
      historyList.innerHTML = "";
      history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
      });
    }
    function logTransaction(type, amount) {
      const now = new Date();
      const time = now.toLocaleString();
      const entry = `${time} | ${type} | ৳${amount} | Balance: ৳${balance}`;
      history.unshift(entry);
      updateHistoryDisplay();
    }

    function updateHistoryDisplay() {
      const historyList = document.getElementById('history-list');
      historyList.innerHTML = "";
      history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
      });
    }