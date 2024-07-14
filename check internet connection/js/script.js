const check = document.getElementById('check');
const refresh = document.getElementById('refresh');
const statusText = document.getElementById('statusText');
const IP = document.getElementById('IP');
const network = document.getElementById('network');

check.addEventListener('click', () => {
    statusText.innerHTML = 'Checking...';
    checkConnection();
});
refresh.addEventListener('click', () => {
    statusText.innerHTML = 'Checking...';
    checkConnection();
});

function checkConnection() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())  // parse response as JSON   
        .then(data => {
            statusText.innerHTML = 'Connection Status : <span id="statusText"> Connected</span>';
            IP.innerHTML = 'IP Address : <span id="IP">' + data.ip + '</span>';
            const connection = navigator.connection;
            network.innerHTML = 'Network Strength : <span id="network">' + (connection ? connection.downlink + ' Mbps' : 'Not Available') + '</span>';
        })
        .catch(error => {
            statusText.innerHTML = 'Connection Status : <span id="statusText"> Not Connected</span>';
            IP.innerHTML = 'IP Address : <span id="IP"></span>';
            network.innerHTML = 'Network Strength : <span id="network"></span>';
        });
}