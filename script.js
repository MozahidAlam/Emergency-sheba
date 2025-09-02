// Heart increasing
document.querySelectorAll('.heart').forEach(function(heart) {
    heart.addEventListener('click', function() {
        const heartElement = document.querySelector('.heart-increasing'); 
        const heartNumber = parseInt(heartElement.innerText);
        heartElement.innerText = heartNumber + 1;
    });
});

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

        const historyItem = document.createElement('div');
        historyItem.classList.add('mb-2', 'p-2', 'border', 'rounded-md');
        historyItem.innerHTML = `<strong>${serviceName}</strong>: ${serviceNumber}`;
        callHistoryContainer.appendChild(historyItem);
    });
});

clearHistoryBtn.addEventListener('click', function(){
    callHistoryContainer.innerHTML = '';
});
