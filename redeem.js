// filepath: /c:/Users/marek/Desktop/react projekty/portfolio/portfolio/public/redeem.js
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function submitCode() {
    const codeInput = document.getElementById('code-input').value;
    if (codeInput) {
        window.location.search = `?code=${codeInput}`;
    }
}

const code = getQueryParam('code');
const correctCode = process.env.REACT_APP_CORRECT_CODE;
if (code) {
    const message = code === correctCode ? 'Congratulations' : 'Wrong Code';
    document.getElementById('code').textContent = message;
} else {
    document.getElementById('code-form').style.display = 'block';
}