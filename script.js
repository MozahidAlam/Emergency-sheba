// Heart increasing
document.querySelectorAll('.heart').forEach(function(heart) {
    heart.addEventListener('click', function() {
        const heartElement = document.querySelector('.heart-increasing'); 
        const heartNumber = parseInt(heartElement.innerText);
        heartElement.innerText = heartNumber + 1;
    });
});
// Call
const coinElement = document.querySelector('.coin-increasing');
const callHistoryContainer = document.querySelector('.call-history-entries');
const clearHistoryBtn = document.querySelector('.call-history-clear');

document.querySelectorAll('.call-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
        const card = btn.closest('.service-card');
        const serviceName = card.querySelector('h2').innerText;
        const serviceNumber = card.querySelector('p.text-xl').innerText;
        let coins = parseInt(coinElement.innerText);

        if(coins < 20){
            alert('You do not have enough coins to make this call!');
            return;
        }

        coins -= 20;
        coinElement.innerText = coins;

        alert(`Calling ${serviceName}: ${serviceNumber}`);

        // Current time
        const now = new Date();
        const timeString = now.toLocaleTimeString(); // hh:mm:ss AM/PM

        // History entry
        const historyItem = document.createElement('div');
        historyItem.classList.add('mb-2', 'p-2', 'border', 'rounded-md');
        historyItem.innerHTML = `<strong>${serviceName}</strong>: ${serviceNumber} <span class="text-sm text-gray-500">(${timeString})</span>`;
        callHistoryContainer.appendChild(historyItem);
    });
});

clearHistoryBtn.addEventListener('click', function(){
    callHistoryContainer.innerHTML = '';
});

// copy count

const copyCountElement = document.querySelector('.copy-count');

document.querySelectorAll('.service-card button').forEach(function(btn){
    if(btn.innerText.includes('📋')) {
        btn.addEventListener('click', function(){
            const card = btn.closest('.service-card');
            const hotlineNumber = card.querySelector('p.text-xl').innerText;

            navigator.clipboard.writeText(hotlineNumber).then(function(){
                alert(`Number ${hotlineNumber} copied to clipboard!`);

                let currentCount = parseInt(copyCountElement.innerText);
                copyCountElement.innerText = currentCount + 1;
            });
        });
    }
});




