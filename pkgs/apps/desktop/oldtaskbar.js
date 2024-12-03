/*
	Taskbar Component for AzuOS Desktop
    Mostly generated by: ChatGPT to save time
	Written by: MTSyntho @ AzuSystem 2024
*/

// Create the taskbar
const taskbar = document.createElement('div');
taskbar.className = 'taskbar';

/*
    Quick Time Menu
*/

// Create the quick time menu
const quickTime = document.createElement('div');
quickTime.id = 'quicktime';
quickTime.className = 'quicktime';

// Create time object for quick time
const timeqt = document.createElement('h3');
timeqt.id = 'fulltime';
timeqt.textContent = '00:00';

// Create date object for quick time
const dateqt = document.createElement('p');
dateqt.id = 'date';
dateqt.className = 'taskDateText';
dateqt.textContent = 'January 1, 2000';

// Append header and paragraph to the date div
quickTime.appendChild(timeqt);
quickTime.appendChild(dateqt);

// Append the date div to the taskbar
taskbar.appendChild(quickTime);

/*
    Start Menu Button
*/

// Create the start menu button
const startButton = document.createElement('button');
startButton.className = 'toolbarStart';
startButton.onclick = 'openStartMenu()';

const startImg = document.createElement('img');
startImg.width = 30;
startImg.height = 30;
startImg.src = 'assets/logo.svg';
startButton.appendChild(startImg);
taskbar.appendChild(startButton);

/*
    Additional Taskbar Buttons
*/

// Create space for applications in taskbar 
const taskDiv = document.createElement('div');
taskDiv.className = 'toolbarTask';
taskDiv.id = 'tbtasks';
taskbar.appendChild(taskDiv);

// Tray Button
const trayButton = createButton('assets/icons/arrowup.svg', 'notImplemented()', 'trayButton');
taskbar.appendChild(trayButton);

// Wifi Button
const wifiButton = createButton('assets/icons/wifi.svg', 'wifiPanel()', 'wifi-Button', 20);
taskbar.appendChild(wifiButton);

// Config Button
const configButton = createButton('assets/icons/config.svg', 'notImplemented()', 'quickPanel-Button');
taskbar.appendChild(configButton);

// Quick Time Button
const quickTimeButton = document.createElement('button');
quickTimeButton.className = 'quickTime-Button';
quickTimeButton.onclick = 'openTaskDate()';

// Current Time
const time = document.createElement('p');
time.id = 'time';
time.textContent = '00:00';
quickTimeButton.appendChild(time);
taskbar.appendChild(quickTimeButton);

// Append the taskbar to the body or a specific container
document.getElementById('desktop').appendChild(taskbar);

// Function to create a button with an image
function createButton(imgSrc, onClick, imgClass, imgWidth = 30) {
    const button = document.createElement('button');
    button.className = imgClass; // Set the class name
    button.onclick = onClick;

    const img = document.createElement('img');
    img.width = imgWidth;
    img.src = imgSrc;

    button.appendChild(img);
    return button;
}