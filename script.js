const uaData = {
  android: {
    chrome: [
      "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.6076.192 Mobile Safari/537.36",
      "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36"
    ],
    firefox: [
      "Mozilla/5.0 (Android 14; Mobile; rv:128.0) Gecko/128.0 Firefox/128.0"
    ]
  },
  ios: {
    safari: [
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1"
    ],
    chrome: [
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/123.0.6312.52 Mobile/15E148 Safari/604.1"
    ]
  },
  windows: {
    chrome: [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
    ],
    firefox: [
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0"
    ]
  }
};

function generateUA() {
  const os = document.getElementById("os").value;
  const browser = document.getElementById("browser").value;

  const list = uaData[os]?.[browser];

  if (list && list.length > 0) {
    const randomUA = list[Math.floor(Math.random() * list.length)];
    document.getElementById("output").innerText = randomUA;
  } else {
    document.getElementById("output").innerText = "এই Combination-এর জন্য কোনো User Agent পাওয়া যায়নি।";
  }
}